"""Measure the real rendered width of every label in the SVG figures.

The wrapping helper in components/figures/kit.tsx splits long labels on a
character budget, which is an approximation: Arabic glyphs are wider and its
words longer, and a translation can outgrow the English it came from. This
script renders each exported SVG in a real browser and asks the browser where
the text actually landed, so an overflow is measured rather than guessed.

    python3 tools/check_figure_fit.py            # export to a temp dir, then measure
    python3 tools/check_figure_fit.py /tmp/figs  # measure an existing export

One headless browser launch measures every figure at once, which is far
faster than one launch per file. Exits non-zero on any overflow.

Needs chromium (snap install chromium).
"""

from __future__ import annotations

import glob
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile

MEASURE_JS = """
const out = [];
for (const fig of document.querySelectorAll('[data-fig]')) {
  const svg = fig.querySelector('svg');
  const vb = svg.viewBox.baseVal;
  const bad = [];
  for (const t of svg.querySelectorAll('text')) {
    const b = t.getBBox();
    const label = t.textContent.trim().replace(/\\s+/g, ' ').slice(0, 46);
    if (b.x < -0.5 || b.x + b.width > vb.width + 0.5) {
      bad.push(label + '  [x ' + Math.round(b.x) + '..' +
               Math.round(b.x + b.width) + ' of ' + vb.width + ']');
    }
    if (b.y < -0.5 || b.y + b.height > vb.height + 0.5) {
      bad.push('below the frame: ' + label);
    }
  }
  out.push({ name: fig.dataset.fig, w: vb.width, h: vb.height, bad: bad });
}
document.getElementById('results').textContent = JSON.stringify(out);
"""


def main() -> int:
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # A snap-packaged chromium cannot read /tmp, so anything it has to open
    # lives under $HOME.
    home = os.path.expanduser("~")

    with tempfile.TemporaryDirectory(dir=home) as staging:
        if len(sys.argv) > 1:
            figdir = sys.argv[1]
            cleanup = None
        else:
            # no directory given: export the registered figures ourselves, so
            # that `npm run check:figures` works with no setup
            figdir = staging
            cleanup = figdir
            print("exporting the registered figures for both locales...")
            subprocess.run(
                ["npx", "--yes", "tsx", os.path.join(repo, "tools", "export_figures.tsx"), figdir],
                cwd=repo, check=True,
            )

        files = sorted(glob.glob(os.path.join(figdir, "*.svg")))
        if not files:
            print(f"no .svg files in {figdir}; run tools/export_figures.tsx first")
            return 2

        browser = (
            shutil.which("chromium")
            or shutil.which("chromium-browser")
            or shutil.which("google-chrome")
        )
        if not browser:
            print("no chromium found; skipping the measurement (install chromium to enable)")
            return 0

        figs = []
        for f in files:
            svg = open(f, encoding="utf-8").read()
            # the exporter already injects xmlns and a <style>; keep both
            figs.append(f'<div data-fig="{os.path.basename(f)}">{svg}</div>')

        html = (
            '<!doctype html><meta charset="utf-8">'
            "<style>body{margin:0}div{position:absolute;left:-99999px;top:0}</style>"
            + "".join(figs)
            + '<pre id="results"></pre>'
            + f"<script>{MEASURE_JS}</script>"
        )

        with tempfile.TemporaryDirectory(dir=home) as td:
            page = os.path.join(td, "fit.html")
            with open(page, "w", encoding="utf-8") as fh:
                fh.write(html)
            dom = subprocess.run(
                [
                    browser, "--headless=new", "--no-sandbox", "--disable-gpu",
                    f"--user-data-dir={td}/profile", "--virtual-time-budget=5000",
                    "--dump-dom", f"file://{page}",
                ],
                capture_output=True, text=True, timeout=180,
            ).stdout

        m = re.search(r'<pre id="results">(.*?)</pre>', dom, re.S)
        if not m or not m.group(1).strip():
            print("could not measure: the browser produced no results")
            return 1

        results = json.loads(m.group(1))
        failures = 0
        for r in results:
            if r["bad"]:
                failures += 1
                print(f"  FAIL {r['name']}  ({r['w']}x{r['h']})")
                for b in r["bad"]:
                    print(f"      {b}")
            else:
                print(f"  ok   {r['name']}  ({r['w']}x{r['h']})")

        print(f"\n{len(results) - failures}/{len(results)} figures fit their frame")
        return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
