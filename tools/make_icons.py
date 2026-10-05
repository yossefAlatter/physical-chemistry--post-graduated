"""Rasterise the app icon to the formats some browsers still insist on.

``app/icon.svg`` covers every current browser. Two things do not read SVG:

  * ``favicon.ico``, still requested by older desktop browsers and by some
    bookmark managers;
  * ``apple-icon.png``, which is what iOS puts on the home screen and in
    Safari's tab bar.

Both are drawn here from the same geometry as the SVG so they cannot drift
apart. Pillow's drawing primitives are a poor match for bezier curves, so the
wire is approximated with ``arc`` - at icon sizes the difference is invisible.

Run from the site root:

    ../electricial-chemistry/.venv/bin/python tools/make_icons.py
"""

from __future__ import annotations

import os

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")

BG = (11, 110, 153)          # #0B6E99, the azure tone from app/globals.css
BG_DARK = (10, 74, 107)      # #0A4A6B
FG = (255, 255, 255)
RADIUS = 7                   # in 32-unit design units, matching icon.svg


def draw(size: int) -> Image.Image:
    """Render the icon at ``size`` px square, from the 32-unit design grid."""
    s = size / 32
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # tile
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=RADIUS * s,
                        fill=BG)
    # a light-to-dark wash, echoing the SVG's overlay gradient
    for y in range(size):
        t = y / max(1, size - 1)
        d.line([(0, y), (size, y)],
               fill=(int(BG[0] + (BG_DARK[0] - BG[0]) * t),
                     int(BG[1] + (BG_DARK[1] - BG[1]) * t),
                     int(BG[2] + (BG_DARK[2] - BG[2]) * t),
                     70), width=1)

    px = lambda u: u * s                      # noqa: E731  design units -> px
    lw = lambda w: max(1, round(w * s))       # noqa: E731

    # the wire arcing between the two electrodes
    box = [px(10), px(6.5), px(22), px(19.5)]
    d.arc(box, start=180, end=360, fill=FG, width=lw(2.6))

    # electrode bars, and the electrolyte they stand in
    for x in (10, 22):
        d.line([(px(x), px(13.5)), (px(x), px(23))], fill=FG, width=lw(3))
    d.line([(px(6.5), px(25.5)), (px(25.5), px(25.5))], fill=FG, width=lw(2.4))

    return img


def main() -> None:
    icon = draw(256)
    ico = os.path.join(APP, "favicon.ico")
    icon.save(ico, sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128),
                          (256, 256)])
    print(f"wrote {ico} (16-256 px)")

    apple = os.path.join(APP, "apple-icon.png")
    draw(180).save(apple)
    print(f"wrote {apple} (180 px)")

    # install icons referenced by app/manifest.ts
    pub = os.path.join(ROOT, "public", "icons")
    os.makedirs(pub, exist_ok=True)
    for n in (192, 512):
        out = os.path.join(pub, f"icon-{n}.png")
        draw(n).save(out)
        print(f"wrote {out} ({n} px)")


if __name__ == "__main__":
    main()