import fs from "node:fs";
import path from "node:path";
import { getRegistry, homeHref, lectureHref, quizHref, sectionHref } from "@/content/registry";
import { localePath, locales } from "@/lib/i18n";

/**
 * The list of URLs the service worker precaches, so the whole site can be
 * read offline after one online visit.
 *
 * It is computed from the content registry rather than scraped out of the
 * build directory: every page on this site is derived from the subject tree,
 * so the registry already knows all of them. That keeps this a static route
 * with no filesystem dependency on the .next layout, which is what lets it
 * survive deployment unchanged.
 *
 * Hashed build assets (/_next/static/...) are listed too. Their filenames
 * change on every build, so the route reads the build that is actually being
 * served rather than baking a list at build time; the service worker then has
 * the JS, CSS and self-hosted fonts in the precache instead of collecting them
 * only as the reader happens to visit pages.
 *
 * Dynamic for that reason. The worker fetches this during install, so it
 * costs one request and stays correct across deploys.
 */
export const dynamic = "force-dynamic";

/** Shell files that are not derived from the content tree. */
const STATIC_URLS = [
  "/favicon.ico",
  "/icon.svg",
  "/apple-icon.png",
  "/manifest.webmanifest",
  "/ar/manifest.webmanifest",
];

function publicAssets(): string[] {
  const dir = path.join(process.cwd(), "public");
  const out: string[] = [];
  for (const sub of ["figures", "icons"]) {
    try {
      for (const f of fs.readdirSync(path.join(dir, sub))) {
        out.push(`/${sub}/${f}`);
      }
    } catch {
      // A missing directory is not fatal; the pages still work, they just
      // fetch that image online instead of from the cache.
    }
  }
  return out;
}

/**
 * Every hashed asset in the running build: JS chunks, CSS and the fonts
 * next/font self-hosts. Without these a freshly installed site renders
 * unstyled and unscripted until each asset is fetched once.
 */
function buildAssets(): string[] {
  const out: string[] = [];
  const walk = (dir: string, prefix: string) => {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const child = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(child, prefix + "/" + e.name);
      } else if (/\.(?:js|css|woff2?|ttf|map)$/.test(e.name)) {
        // Source maps are never needed offline.
        if (e.name.endsWith(".map")) continue;
        out.push(prefix + "/" + e.name);
      }
    }
  };
  walk(path.join(process.cwd(), ".next", "static"), "/_next/static");
  return out;
}

export function GET() {
  const urls = new Set<string>([...STATIC_URLS, ...publicAssets(), ...buildAssets()]);

  for (const locale of locales) {
    const reg = getRegistry(locale);
    urls.add(homeHref(locale));
    urls.add(localePath(locale, "/offline"));
    for (const lecture of reg.allLectures) {
      urls.add(lectureHref(locale, lecture));
      urls.add(quizHref(locale, lecture));
      for (const section of lecture.sections) {
        urls.add(sectionHref(locale, lecture, section));
      }
    }
  }

  return Response.json(
    {
      urls: [...urls].sort(),
    },
    { headers: { "Cache-Control": "public, max-age=0, must-revalidate" } },
  );
}
