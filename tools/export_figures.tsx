// Renders the SVG figures to standalone .svg files, so they can be opened,
// screenshotted or rasterised outside the site.
//
// The figures read their colours from CSS custom properties, which the page
// supplies. A standalone file has no page, so this injects a <style> that
// defines the same variables in their light values. Dark mode needs the dark
// values, which the media query at the bottom supplies too.
//
//   npx --yes tsx tools/export_figures.tsx /tmp/figs
//
// Only registered figures are exported; the rest are still PNGs on disk.

import { renderToStaticMarkup } from "react-dom/server";
import fs from "node:fs";
import path from "node:path";
import { FIGURES } from "../components/figures";
import type { Locale } from "../lib/i18n";

const outDir = process.argv[2] ?? "/tmp/figs";
fs.mkdirSync(outDir, { recursive: true });

/** The custom properties the figures use, with the site's light values. */
const VARS = `
  :root {
    --c-page: #fbfcfe;
    --c-surface: #ffffff;
    --c-ink: #10192b;
    --c-ink-soft: #3d4c63;
    --c-ink-faint: #5c6d85;
    --rule: #d8e0ec;
    --tone: #3b82f6;
    --tone-azure: #3b82f6;      --tone-azure-soft: #eef4ff;
    --tone-emerald: #059669;    --tone-emerald-soft: #e6f7ef;
    --tone-rose: #e11d48;       --tone-rose-soft: #ffe9ee;
    --tone-violet: #7c3aed;     --tone-violet-soft: #f3eeff;
    --tone-amber: #d97706;      --tone-amber-soft: #fff6e5;
    --font-sans: "IBM Plex Sans Arabic", "Inter", system-ui, sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --c-page: #0b1220;
      --c-surface: #111a2b;
      --c-ink: #e9eff8;
      --c-ink-soft: #b3c2d6;
      --c-ink-faint: #8fa2ba;
      --rule: #26344b;
    }
  }
`;

for (const locale of ["en", "ar"] as Locale[]) {
  for (const [name, Component] of Object.entries(FIGURES)) {
    const markup = renderToStaticMarkup(<Component locale={locale} />);
    // Give the root svg a background so a transparent export is not unreadable.
    const withStyle = markup.replace(
      /<svg /,
      `<svg xmlns="http://www.w3.org/2000/svg" `,
    ).replace(/(<svg[^>]*>)/, `$1<style>${VARS}</style><rect width="100%" height="100%" fill="var(--c-page)"/>`);

    const stem = name.replace(/\.png$/, "");
    const file = path.join(outDir, `${stem}.${locale}.svg`);
    fs.writeFileSync(file, withStyle, "utf8");
    console.log(`${file}  ${(withStyle.length / 1024).toFixed(1)} kB`);
  }
}
