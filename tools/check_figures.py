"""Checks on the site's figures.

Two things this catches, both of which are invisible in the source:

  1. a label sitting on top of another label, or hanging off the edge of the
     canvas - matplotlib gives no warning, the PNG just looks wrong;
  2. content referencing an illustration that was never drawn, which shows up
     on the site as a broken image.

Run from the site root:

    ../electricial-chemistry/.venv/bin/python tools/check_figures.py
"""

from __future__ import annotations

import os
import re
import sys

import matplotlib

matplotlib.use("Agg")
import matplotlib.text  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))

import figures as F  # noqa: E402

CONTENT = os.path.join(ROOT, "content")
FIGDIR = os.path.join(ROOT, "public", "figures")

problems: list[str] = []
notes: list[str] = []


def _overlap(a, b) -> float:
    x = max(0.0, min(a.x1, b.x1) - max(a.x0, b.x0))
    y = max(0.0, min(a.y1, b.y1) - max(a.y0, b.y0))
    inter = x * y
    if inter <= 0:
        return 0.0
    smaller = min((a.x1 - a.x0) * (a.y1 - a.y0), (b.x1 - b.x0) * (b.y1 - b.y0))
    return inter / smaller if smaller > 0 else 0.0


def check_layout(name: str, fig) -> None:
    fig.canvas.draw()
    r = fig.canvas.get_renderer()
    fw, fh = fig.canvas.get_width_height()
    items = []
    for ax in fig.axes:
        for t in ax.texts:
            if not t.get_text().strip():
                continue
            bb = t.get_window_extent(r)
            if bb.width < 1 or bb.height < 1:
                continue
            items.append((bb, t.get_text().replace("\n", " ")[:38]))
    sup = getattr(fig, "_suptitle", None)
    for t in fig.texts:
        # matplotlib also exposes suptitle through fig.texts; skip it here
        if t is sup or not t.get_text().strip():
            continue
        bb = t.get_window_extent(r)
        items.append((bb, f"[figure] {t.get_text().replace(chr(10), ' ')[:34]}"))
    if getattr(fig, "_suptitle", None) is not None and fig._suptitle.get_text():
        items.append((fig._suptitle.get_window_extent(r),
                      f"[suptitle] {fig._suptitle.get_text()[:30]}"))

    for i in range(len(items)):
        for j in range(i + 1, len(items)):
            f = _overlap(items[i][0], items[j][0])
            if f > 0.30:
                problems.append(
                    f"{name}: OVERLAP {f:.0%}  [{items[i][1]}] x [{items[j][1]}]"
                )

    for bb, txt in items:
        over = max(-bb.x0, -bb.y0, bb.x1 - fw, bb.y1 - fh)
        if over > 2:
            problems.append(f"{name}: OUTSIDE {over:5.1f}px  [{txt}]")

    notes.append(f"{name}: {len(items)} labels, canvas {fw}x{fh}px")


def check_references() -> None:
    """Every src in the content must exist on disk."""
    referenced: dict[str, str] = {}
    for entry in sorted(os.listdir(CONTENT)):
        if not entry.endswith(".ts"):
            continue
        body = open(os.path.join(CONTENT, entry), encoding="utf-8").read()
        for m in re.finditer(r'src:\s*"([^"]+)"', body):
            referenced.setdefault(m.group(1), entry)
        # also catch figures named in alt text or captions
        for m in re.finditer(r'"src":\s*"([^"]+)"', body):
            referenced.setdefault(m.group(1), entry)

    for src, entry in sorted(referenced.items()):
        if not os.path.exists(os.path.join(FIGDIR, src)):
            problems.append(
                f"content/{entry}: references missing figure {src!r}"
            )

    on_disk = {f for f in os.listdir(FIGDIR) if f.endswith(".png")}
    for src in sorted(referenced):
        if src.endswith(".png") and src not in on_disk:
            problems.append(f"missing on disk: {src}")

    unused = sorted(on_disk - set(referenced))
    if unused:
        notes.append(f"figures on disk not referenced by content: {unused}")
    notes.append(f"{len(referenced)} figures referenced by content")


def main() -> int:
    for name, fn in F.FIGURES:
        check_layout(name, fn())
    check_references()

    print("\n".join(notes))
    if problems:
        print("\n".join(f"  FAIL {p}" for p in problems))
        print(f"\n{len(problems)} problem(s)")
        return 1
    print("\nall figure checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())