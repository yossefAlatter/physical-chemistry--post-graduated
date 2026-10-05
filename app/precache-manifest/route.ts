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
 * Hashed build assets (/_next/static/...) are deliberately not listed. Their
 * filenames change on every build, so they are cached at runtime instead -
 * see the fetch handler in public/sw.js.
 */
export const dynamic = "force-static";

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

export function GET() {
  const urls = new Set<string>([...STATIC_URLS, ...publicAssets()]);

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
