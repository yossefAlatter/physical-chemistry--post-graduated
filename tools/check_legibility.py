"""Check that figure labels are actually readable on a phone.

``tools/check_figures.py`` proves a figure is well formed: the PNG exists, the
canvas is big enough, nothing is clipped. It says nothing about whether a
human can read it, and that turned out to matter: the first set of primer
diagrams had perfectly valid labels at 8.5-10.5 pt on 1400 px canvases, which
landed at 5 css px once a phone scaled the image down to 360 px wide.

This script closes that gap. It re-runs every figure with the text helper
wrapped, records the font size of every label, then computes the size the
label actually reaches in a browser:

    css_px = points * dpi / 72 * (viewport_px / image_px)

Run from the site root:

    ../electricial-chemistry/.venv/bin/python tools/check_legibility.py

Exit status is non-zero if any label falls below PHONE_MIN on a 360 px phone.
Use ``--viewport`` to check a wider screen, and ``--quiet`` for a summary only.
"""

from __future__ import annotations

import argparse
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from PIL import Image  # noqa: E402

import figures  # noqa: E402

PHONE = 360        # css px, a narrow phone: the worst case that matters
PHONE_MIN = 12.0   # css px; below this text stops being readable
DESKTOP = 880      # css px, the site's content column
RECOMMENDED = 14.0


def measure(viewport: float) -> list[tuple]:
    """Render every figure and report its size, text size and overflow."""
    recorded: list[float] = []
    rows: list[tuple] = []
    original_T = figures.T

    def spy_T(ax, x, y, s, size=figures.SZ_BODY, *args, **kwargs):
        recorded.append(float(size))
        return original_T(ax, x, y, s, size, *args, **kwargs)

    figures.T = spy_T
    try:
        for name, fn in figures.FIGURES:
            recorded.clear()
            path = figures.render(name, fn)
            sizes = list(recorded) or [figures.SZ_BODY]
            with Image.open(path) as im:
                w, h = im.size
            eff = min(sizes) * (figures.DPI / 72) * (viewport / w)
            rows.append((name, w, h, min(sizes), eff, len(sizes),
                         w - figures.CANVAS_W))
    finally:
        figures.T = original_T
    return rows


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--viewport", type=float, default=PHONE,
                    help="viewport width in css px (default 360)")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    rows = measure(args.viewport)

    print(f"figure labels at a {args.viewport:.0f} px viewport "
          f"(floor {PHONE_MIN:.0f} css px)\n")
    print(f"{'figure':26s} {'img px':>10s} {'min pt':>7s} "
          f"{'css px':>7s} {'labels':>7s} {'over':>6s}")
    print("-" * 70)
    for name, w, h, pt, eff, count, over in rows:
        flag = "FAIL" if eff < PHONE_MIN - 0.05 else (
            "thin" if eff < RECOMMENDED else "ok")
        if over > 0:
            flag += " OVER"
        print(f"{name:26s} {w:>10d} {pt:>7.1f} {eff:>7.1f} "
              f"{count:>7d} {over:>6d}  {flag}")

    total = sum(r[5] for r in rows)
    print("-" * 70)
    print(f"{len(rows)} figures, {total} labels checked")

    failures = [r for r in rows if r[4] < PHONE_MIN - 0.05]
    over = [r for r in rows if r[6] > 0]
    bad = False

    if failures:
        bad = True
        print(f"\n{len(failures)} figure(s) below the floor:")
        for name, w, h, pt, eff, _, _ in failures:
            print(f"  {name}: {pt:.1f} pt renders as {eff:.1f} css px")
        print("\nraise the font size, or narrow the canvas: "
              "css_px = pt * dpi/72 * (viewport / image_px)")

    if over:
        bad = True
        print(f"\n{len(over)} figure(s) wider than the "
              f"{figures.CANVAS_W} px legibility budget:")
        for name, w, h, pt, eff, _, o in over:
            print(f"  {name}: {w} px, {o} px over - shorten or wrap the "
                  "widest labels, or move detail into another figure")

    thin = [r for r in rows if r[4] < RECOMMENDED]
    if thin and not bad and not args.quiet:
        print(f"\nnote: {len(thin)} figure(s) under {RECOMMENDED:.0f} css px "
              "but above the floor - readable, though small:")
        for name, w, h, pt, eff, _, _ in thin:
            print(f"  {name}: {eff:.1f} css px")
    return 1 if bad else 0


if __name__ == "__main__":
    raise SystemExit(main())