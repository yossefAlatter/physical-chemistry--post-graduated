"""Figures for the Physical Chemistry site.

Writes PNGs into ``public/figures/``. The ``fund_*`` set covers the
Fundamentals primer - absolute basics up to laboratory practice - and is
written for the web: a phone shows a figure about 360 px wide, so every
label has to survive being scaled down to that.

Run from the site root:

    ../electricial-chemistry/.venv/bin/python tools/figures.py

Legibility rule (this is the whole reason this file exists)
------------------------------------------------------------
A label is only useful if it can be read on a phone. The rendered size is

    css_px = points * dpi / 72 * (viewport_px / image_px)

With ``DPI = 200`` and a 1000 px canvas (``CANVAS_W``):

    css_px = points * (200/72) * (360/1000)  ~=  points

so the font sizes below read directly as the phone size they become. The
floor is 12 pt, which is the smallest text worth showing at all; below that
it is decoration pretending to be an explanation. Every fundamentals figure
here is exactly 1000 px wide for that reason - see ``_save``.

The first version of these figures failed this: 8.5-10.5 pt labels on
canvases that ``bbox_inches="tight"`` had quietly stretched to 1400 px, which
put the text at about 5 css px on a phone. ``tools/check_legibility.py``
reproduces the arithmetic and fails the build if it happens again.

Layout rules, learned the hard way on the printed guide:
  * a schematic panel (axes off) never shares a figure with a plotting panel;
  * every label carries a semi-opaque white background so it stays readable
    where it crosses a line;
  * nothing is stacked side by side that a phone would have to shrink to read;
  * text is wrapped to a known character count - matplotlib does not wrap,
    and an unwrapped line runs off the canvas and gets clipped.
"""

from __future__ import annotations

import os
import textwrap

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from PIL import Image  # noqa: E402
from matplotlib.patches import Circle, FancyBboxPatch, Rectangle  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "figures")

# Light-theme tone tokens from app/globals.css, so a diagram and the section
# it illustrates share a hue. tools/advanced_figures.py does the same for the
# 16 imported advanced diagrams.
S = {
    "ink": "#10192B", "soft": "#3D4C63", "faint": "#5B6879",
    "accent": "#0B6E99", "azure": "#0B6E99",
    "cath": "#0B6E99", "anod": "#BE123C",
    "indigo": "#4338CA", "violet": "#7C3AED", "rose": "#BE123C",
    "coral": "#C2410C", "amber": "#9C4708", "emerald": "#0F7B5A",
    "teal": "#0F766E", "slate": "#475569",
    "good": "#0F7B5A", "warn": "#9C4708", "bad": "#C0392B",
    "grid": "#D5DFEA", "metal": "#5B6879",
}

# Tints for panel backgrounds.
TINT = {
    "azure": "#E4F2FA", "indigo": "#ECEDFE", "violet": "#F2ECFE",
    "rose": "#FDE9EE", "coral": "#FDEEE5", "amber": "#FDF3E0",
    "emerald": "#E3F5EE", "teal": "#E0F4F2", "slate": "#EEF1F6",
}

matplotlib.rcParams.update({
    "font.family": "DejaVu Sans",
    "mathtext.fontset": "stix",
    "axes.edgecolor": "#5B6879",
    "axes.linewidth": 0.9,
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
})

DPI = 200
CANVAS_W = 1000          # px; with DPI=200 a point becomes ~1 css px on a phone
CW = CANVAS_W / DPI      # inches
FARADAY = 96485.0

# Font floor. Anything smaller than this is unreadable once the figure is
# scaled into a phone-width column. See the module docstring.
SZ_TITLE = 20
SZ_HEAD = 18
SZ_BODY = 15
SZ_SMALL = 14
SZ_FLOOR = 13

# Characters that fit on one line of a 1000 px canvas at a given size, for a
# label spanning roughly the full canvas width. DejaVu Sans averages about
# half an em per character, so this is conservative on purpose.
WRAP = {SZ_TITLE: 28, SZ_HEAD: 32, SZ_BODY: 37, SZ_SMALL: 40, SZ_FLOOR: 43}


def wrap(text: str, size: int = SZ_BODY) -> str:
    return "\n".join(textwrap.wrap(text, WRAP.get(size, 46)))


# ---------------------------------------------------------------- helpers ---

def _fig(height, w_ratio=1.0):
    """A figure exactly CANVAS_W px wide (w_ratio is a multiple) and h tall."""
    return plt.figure(figsize=(CW * w_ratio, height))


def panel(fig, rect, title=None, tone=None):
    """An axes with the axes turned off: a pure schematic in 0..100 space."""
    ax = fig.add_axes(rect)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.set_xticks([])
    ax.set_yticks([])
    for sp in ax.spines.values():
        sp.set_visible(False)
    if tone:
        ax.set_facecolor(TINT[tone])
    if title:
        T(ax, 50, 97, title, size=SZ_HEAD, weight="bold",
          color=S[tone] if tone else S["ink"], va="top")
    return ax


def plotax(fig, rect, title=None, xlabel=None, ylabel=None):
    """A normal axes for a real plot. Never share a figure with a panel()."""
    ax = fig.add_axes(rect)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    ax.grid(True, color=S["grid"], lw=0.8, alpha=0.95, zorder=0)
    ax.set_axisbelow(True)
    ax.tick_params(labelsize=SZ_FLOOR)
    if xlabel:
        ax.set_xlabel(xlabel, fontsize=SZ_BODY)
    if ylabel:
        ax.set_ylabel(ylabel, fontsize=SZ_BODY)
    if title:
        ax.set_title(title, fontsize=SZ_HEAD, fontweight="bold", pad=9)
    return ax


def T(ax, x, y, s, size=SZ_BODY, color=None, ha="center", va="center",
      weight="normal", style="normal", rot=0, z=6, bbox=True, alpha=0.92):
    """Text. The default white box keeps a label readable over a line."""
    kw = dict(bbox=dict(boxstyle="round,pad=0.20", fc="white", ec="none",
                        alpha=alpha)) if bbox else {}
    assert size >= SZ_FLOOR, f"label below the legibility floor: {size}pt {s!r}"
    return ax.text(x, y, s, color=color or S["ink"], fontsize=size, ha=ha,
                   va=va, fontweight=weight, fontstyle=style, rotation=rot,
                   zorder=z, linespacing=1.35, **kw)


def box(ax, x, y, w, h, fc="white", ec=None, lw=1.6, z=2, r=1.2):
    ax.add_patch(FancyBboxPatch(
        (x, y), w, h, boxstyle=f"round,pad=0.35,rounding_size={r}",
        fc=fc, ec=ec or S["accent"], lw=lw, zorder=z))


def chip(ax, x, y, w, h, text, fc, tc="white", size=SZ_BODY, weight="bold",
         ec=None, z=3):
    """A filled label with centred text."""
    box(ax, x, y, w, h, fc=fc, ec=ec or fc, z=z)
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center",
            fontsize=size, color=tc, fontweight=weight, zorder=z + 1,
            linespacing=1.3)


def arrow(ax, p0, p1, color=None, lw=2.2, style="-|>", ls="-", ms=13, z=4,
          rad=0.0, alpha=1.0):
    cp = dict(arrowstyle=style, color=color or S["ink"], lw=lw,
              mutation_scale=ms, shrinkA=0, shrinkB=0, alpha=alpha,
              linestyle=ls, zorder=z)
    if rad:
        cp["connectionstyle"] = f"arc3,rad={rad}"
    ax.annotate("", xy=p1, xytext=p0, arrowprops=cp, zorder=z)


def dot(ax, x, y, r=0.9, fc=None, z=6, alpha=1.0):
    ax.add_patch(Circle((x, y), r, fc=fc or S["anod"], ec="white", lw=0.9,
                        zorder=z, alpha=alpha))


def beaker(ax, x, y, w, h, fill, label=None):
    """A vessel drawn as an open-topped box with liquid inside."""
    ax.add_patch(Rectangle((x, y), w, h * 0.62, fc=fill, ec="none", zorder=1,
                           alpha=0.9))
    ax.plot([x, x + w], [y + h * 0.62] * 2, color=S["metal"], lw=1.4,
            zorder=3, alpha=0.8)
    ax.plot([x, x], [y, y + h], color=S["metal"], lw=1.8, zorder=3)
    ax.plot([x + w, x + w], [y, y + h], color=S["metal"], lw=1.8, zorder=3)
    ax.plot([x, x + w], [y, y], color=S["metal"], lw=1.8, zorder=3)
    if label:
        T(ax, x + w / 2, y + h + 4, label, size=SZ_BODY, weight="bold")


def wire(ax, x0, y0, x1, y1, color=None, lw=2.4):
    ax.plot([x0, x1], [y0, y1], color=color or S["ink"], lw=lw, zorder=3,
            solid_capstyle="round")


def caption(fig, text, y=0.010, gap=0.014):
    """Draw a wrapped note along the bottom; return the panel bottom to use.

    Returns the lowest usable ``add_axes`` bottom, so callers size their panel
    from the caption instead of guessing. Every figure did collide with its own
    caption before this existed: the note was drawn last, straight through
    whatever sat at the bottom of the panel. Fixing that by nudging coordinates
    is not a fix, so the caption now reserves its own band.
    """
    wrapped = wrap(text, SZ_SMALL)
    lines = wrapped.count("\n") + 1
    need_in = lines * SZ_SMALL * 1.5 / 72
    h = need_in / fig.get_figheight()
    ax = fig.add_axes([0.03, y, 0.94, h])
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_xticks([])
    ax.set_yticks([])
    for sp in ax.spines.values():
        sp.set_visible(False)
    # via T(), not ax.text, so the legibility checker measures the caption too
    T(ax, 0.5, 0.5, wrapped, size=SZ_SMALL, color=S["soft"], bbox=False)
    return y + h + gap


def _save(fig, name):
    """Write the PNG at exactly ``CANVAS_W`` px wide, with nothing clipped.

    The canvas width is what makes the on-phone text size predictable, and the
    text size is the whole point of this module - see the docstring. So the
    width is pinned here rather than left to whatever the artists happen to
    occupy.

    ``bbox_inches="tight"`` crops to the content, which guarantees nothing gets
    clipped; the result is then padded back out with white to ``CANVAS_W``. A
    figure whose content is genuinely too wide keeps its full width instead of
    being scaled down, and ``tools/check_legibility.py`` then fails it, because
    a wider canvas means smaller text on a phone. Overflow is therefore a
    build failure rather than a silently unreadable diagram.
    """
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, name)
    tmp = path + ".tmp.png"
    fig.savefig(tmp, dpi=DPI, bbox_inches="tight", pad_inches=0.04)
    plt.close(fig)
    with Image.open(tmp) as raw:
        im = raw.convert("RGB")
        natural_w, natural_h = im.size
        if natural_w <= CANVAS_W:
            canvas = Image.new("RGB", (CANVAS_W, natural_h), "white")
            canvas.paste(im, ((CANVAS_W - natural_w) // 2, 0))
        else:
            canvas = im
        canvas.save(path)
    os.remove(tmp)
    return path


# ------------------------------------------------------- 1. two families ---

def fig_two_worlds():
    """Galvanic against electrolytic: the same four names, opposite signs.

    Stacked rather than side by side: at 1000 px there is room for one readable
    column of labels, and a phone sees this figure narrow.
    """
    fig = _fig(8.4)
    specs = [
        dict(tone="emerald", title="Galvanic  (voltaic)",
             sub="the cell does the work",
             a_sign="−", c_sign="+",
             drive="Chemical energy", through="electrons flow here",
             payoff="battery · corrosion · fuel cell"),
        dict(tone="coral", title="Electrolytic",
             sub="you do the work",
             a_sign="+", c_sign="−",
             drive="Power supply", through="the supply pushes electrons",
             payoff="plating · refining · charging"),
    ]
    bottom = caption(fig, "Anode always means oxidation. Cathode always "
                          "means reduction. Only the signs swap between the "
                          "two families.")
    top = 0.975
    gap = 0.035
    height = (top - bottom - gap) / 2
    for i, sp in enumerate(specs):
        ax = panel(fig, [0.04, top - (i + 1) * height - i * gap, 0.92, height],
                   title=sp["title"], tone=sp["tone"])
        T(ax, 50, 84, sp["sub"], size=SZ_SMALL, color=S["soft"], style="italic")
        ax.add_patch(FancyBboxPatch(
            (3, 3), 94, 73, boxstyle="round,pad=0.5,rounding_size=2",
            fc="white", ec=S[sp["tone"]], lw=1.6, zorder=1))

        # electrodes and the wire between them
        chip(ax, 8, 48, 26, 13, "anode", S["anod"])
        chip(ax, 66, 48, 26, 13, "cathode", S["cath"])
        wire(ax, 21, 64, 50, 64)
        wire(ax, 50, 64, 79, 64)
        ax.add_patch(Circle((50, 64), 5.8, fc="white", ec=S[sp["tone"]],
                            lw=2.0, zorder=5))
        T(ax, 50, 64, "e⁻", size=SZ_BODY, weight="bold",
          color=S[sp["tone"]], bbox=False, z=6)
        T(ax, 50, 72, sp["drive"], size=SZ_BODY, weight="bold")

        # the sign trap, which is where most beginners go wrong
        T(ax, 21, 36, f'anode\n{sp["a_sign"]}  oxidation', size=SZ_BODY,
          color=S["anod"], weight="bold")
        T(ax, 79, 36, f'cathode\n{sp["c_sign"]}  reduction', size=SZ_BODY,
          color=S["cath"], weight="bold")
        T(ax, 21, 23, "loses e⁻", size=SZ_SMALL, color=S["soft"])
        T(ax, 79, 23, "gains e⁻", size=SZ_SMALL, color=S["soft"])
        T(ax, 50, 14, sp["through"], size=SZ_SMALL, color=S["soft"])
        T(ax, 50, 7, sp["payoff"], size=SZ_SMALL, color=S["faint"],
          style="italic")

    return fig


# ------------------------------------------------------------ 2. roadmap ---

def fig_roadmap():
    """What the primer covers, and where it hands over to Lesson 1."""
    fig = _fig(6.8)
    ax = panel(fig, [0.04, 0.05, 0.92, 0.90])
    T(ax, 50, 97, "Your route through this primer", size=SZ_TITLE,
      weight="bold", va="top")

    steps = [
        ("1", "What electrochemistry is", "azure"),
        ("2", "Anatomy of a cell", "teal"),
        ("3", "Charge, current, resistance", "indigo"),
        ("4", "Faraday's two laws", "violet"),
        ("5", "Energy and power", "amber"),
        ("6", "A real laboratory cell", "emerald"),
        ("7", "Units and glossary", "slate"),
    ]
    y = 88
    for i, (num, text, tone) in enumerate(steps):
        ax.add_patch(Circle((9, y), 4.2, fc=S[tone], ec="white", lw=1.6,
                            zorder=4))
        T(ax, 9, y, num, size=SZ_BODY, color="white", weight="bold",
          bbox=False, z=5)
        T(ax, 18, y, text, size=SZ_HEAD, ha="left", weight="bold")
        if i < len(steps) - 1:
            ax.plot([9, 9], [y - 9.2, y - 4.6], color=S["grid"], lw=2.4,
                    zorder=2)
        y -= 10.4

    # handover to the lesson
    ax.add_patch(FancyBboxPatch(
        (3, 2), 94, 14, boxstyle="round,pad=0.5,rounding_size=2",
        fc=TINT["emerald"], ec=S["emerald"], lw=1.8, zorder=1))
    T(ax, 50, 12, "then Lesson 1: electrochemistry", size=SZ_HEAD,
      weight="bold", color=S["emerald"])
    T(ax, 50, 5.5, "eleven short sections", size=SZ_SMALL, color=S["soft"])
    return fig


# ---------------------------------------------------- 3. cell anatomy ---

def fig_cell_anatomy():
    """The Zn/Cu cell: where the electrons go, and where the ions go."""
    fig = _fig(7.6)
    bottom = caption(fig, "Electrons go round the outside wire. Ions go "
                          "through the bridge, to keep each side electrically "
                          "neutral.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "A zinc–copper cell", size=SZ_TITLE, weight="bold", va="top")

    # two half-cells
    beaker(ax, 5, 30, 32, 32, TINT["rose"])
    beaker(ax, 63, 30, 32, 32, TINT["azure"])
    T(ax, 21, 67, "zinc half-cell", size=SZ_BODY, weight="bold")
    T(ax, 79, 67, "copper half-cell", size=SZ_BODY, weight="bold")

    # electrodes dipping into the solution
    ax.add_patch(Rectangle((14, 30), 5, 28, fc=S["metal"], ec="white", lw=1.2,
                           zorder=4))
    ax.add_patch(Rectangle((76, 30), 5, 28, fc="#B87333", ec="white", lw=1.2,
                           zorder=4))
    T(ax, 16.5, 63, "Zn", size=SZ_BODY, weight="bold", color=S["anod"],
      bbox=False)
    T(ax, 78.5, 63, "Cu", size=SZ_BODY, weight="bold", color=S["cath"],
      bbox=False)
    T(ax, 30, 40, "Zn²⁺", size=SZ_BODY, color=S["soft"])
    T(ax, 68, 40, "Cu²⁺", size=SZ_BODY, color=S["soft"])

    # external circuit with a meter
    wire(ax, 16.5, 58, 16.5, 80)
    wire(ax, 78.5, 58, 78.5, 80)
    wire(ax, 16.5, 80, 38, 87)
    wire(ax, 78.5, 80, 57, 87)
    ax.add_patch(Rectangle((38, 82), 19, 10, fc="white", ec=S["amber"],
                           lw=2.0, zorder=5, joinstyle="round"))
    T(ax, 47.5, 87, "voltmeter", size=SZ_SMALL, weight="bold", color=S["amber"])
    T(ax, 47.5, 74, "e⁻ flow  →", size=SZ_BODY, weight="bold", color=S["cath"])

    # the salt bridge: ions, not electrons
    ax.add_patch(FancyBboxPatch(
        (38, 26), 24, 8, boxstyle="round,pad=0.3,rounding_size=1.2",
        fc="white", ec=S["teal"], lw=1.6, zorder=5))
    T(ax, 50, 30, "salt bridge", size=SZ_SMALL, weight="bold", color=S["teal"])
    arrow(ax, (46, 34), (33, 34), color=S["teal"], lw=2.0)
    arrow(ax, (54, 34), (67, 34), color=S["teal"], lw=2.0)
    T(ax, 24, 34, "anions", size=SZ_FLOOR, color=S["teal"])
    T(ax, 76, 34, "cations", size=SZ_FLOOR, color=S["teal"])

    # half-reactions, one per side, kept short
    T(ax, 21, 16, "Zn → Zn²⁺ + 2e⁻\noxidation", size=SZ_BODY, color=S["anod"],
      weight="bold")
    T(ax, 79, 16, "Cu²⁺ + 2e⁻ → Cu\nreduction", size=SZ_BODY, color=S["cath"],
      weight="bold")

    return fig


# --------------------------------------------- 4. cell notation (new) ---

def fig_cell_notation():
    """The shorthand every lab report has to be able to read and write.

    Written as a vertical ladder rather than the usual one-line string: the
    whole point is what each bar means, and at phone width one line of seven
    terms is too small to read while one term per row is not.
    """
    fig = _fig(8.0)
    bottom = caption(fig, "Read left to right: oxidation side, bridge, "
                          "reduction side. The anode always goes on the left. "
                          "Add concentrations when they are not standard.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "Cell notation, term by term", size=SZ_TITLE,
      weight="bold", va="top")

    # One term per row with its meaning directly underneath. A two-column
    # layout was tried first and abandoned: at 1000 px there is barely 1.5 in
    # for an explanation column, and every phrasing that fitted was too terse
    # to be worth the space.
    rows = [
        ("text", "Zn (s)", "zinc metal — the anode", S["anod"]),
        ("bar", "|", "phase boundary", S["soft"]),
        ("text", "Zn²⁺ (aq)", "zinc ions in solution", S["soft"]),
        ("bar", "||", "salt bridge", S["teal"]),
        ("text", "Cu²⁺ (aq)", "copper ions in solution", S["soft"]),
        ("bar", "|", "phase boundary", S["soft"]),
        ("text", "Cu (s)", "copper metal — the cathode", S["cath"]),
    ]
    y = 86
    for i, (kind, text, meaning, colour) in enumerate(rows):
        if kind == "bar":
            # draw the bar tall, exactly as the notation itself does
            if text == "||":
                ax.plot([46.5, 46.5], [y - 2.4, y + 2.4], color=colour,
                        lw=3.4, zorder=4)
                ax.plot([53.5, 53.5], [y - 2.4, y + 2.4], color=colour,
                        lw=3.4, zorder=4)
            else:
                ax.plot([50, 50], [y - 2.4, y + 2.4], color=colour, lw=3.4,
                        zorder=4)
        else:
            T(ax, 50, y, text, size=SZ_HEAD + 2, weight="bold", color=colour,
              bbox=False)
        T(ax, 50, y - 5.8, meaning, size=SZ_FLOOR, color=S["soft"],
          style="italic")
        if i < len(rows) - 1:
            ax.plot([17, 83], [y - 9.2, y - 9.2], color=S["grid"], lw=1.0,
                    zorder=1)
        y -= 11.2

    return fig


# ----------------------------------------- 5. potential scale (new) ---

def fig_potential_scale():
    """Why E°cell is a subtraction: everything is quoted against the SHE.

    Drawn as a ranked list rather than a true spatial scale. Twelve couples
    spaced in proportion to their potentials put the SHE label and the Pb one
    about 2.4 units apart on a 100-unit axis, which cannot be labelled at any
    legible size - the ranking is the teaching point, and the list keeps it.
    """
    fig = _fig(7.2)
    bottom = caption(fig, "E°cell = E°cathode − E°anode. For the Zn/Cu cell "
                          "that is 0.34 − (−0.76) = +1.10 V, so it runs "
                          "forwards on its own.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "Standard reduction potentials", size=SZ_TITLE,
      weight="bold", va="top")

    # E° in volts against the SHE; standard textbook values at 25 °C.
    couples = [
        ("F₂ / F⁻", 2.87, False),
        ("O₂ / H₂O", 1.23, False),
        ("Cu²⁺ / Cu", 0.34, False),
        ("2H⁺ / H₂", 0.00, True),
        ("Fe²⁺ / Fe", -0.44, False),
        ("Zn²⁺ / Zn", -0.76, False),
        ("Mg²⁺ / Mg", -2.37, False),
    ]
    y = 84
    ax.plot([13, 13], [26, 85], color=S["grid"], lw=2.2, zorder=1)
    arrow(ax, (13, 85), (13, 90), color=S["grid"], lw=2.2, style="-|>")
    T(ax, 9, 58, "more oxidising", size=SZ_FLOOR, color=S["soft"], rot=90)
    for text, v, is_she in couples:
        if is_she:
            ax.add_patch(FancyBboxPatch(
                (10, y - 3.6), 86, 7.2,
                boxstyle="round,pad=0.2,rounding_size=1.0",
                fc="none", ec=S["amber"], lw=1.6, zorder=3))
        T(ax, 17, y, text, size=SZ_BODY, ha="left",
          weight="bold" if is_she else "normal",
          color=S["amber"] if is_she else S["ink"])
        T(ax, 94, y, f"{v:+.2f}", size=SZ_BODY, ha="right", weight="bold",
          color=S["amber"] if is_she else S["soft"])
        y -= 8.6

    # why there is a reference at all
    ax.add_patch(FancyBboxPatch(
        (4, 3), 92, 20, boxstyle="round,pad=0.4,rounding_size=1.5",
        fc=TINT["amber"], ec=S["amber"], lw=1.5, zorder=1))
    T(ax, 50, 13, wrap("One electrode on its own cannot be measured, so the "
                       "SHE is given zero by convention and everything above "
                       "is quoted against it.", SZ_SMALL),
      size=SZ_SMALL, color=S["amber"], weight="bold")

    return fig


# -------------------------------------------------- 6. charge carriers ---

def fig_charge_carriers():
    """In a wire the charge is electrons; in a solution it is ions."""
    fig = _fig(6.2)
    bottom = caption(fig, "A metal electrode is not carried by ions, and the "
                          "electrolyte is not carried by electrons. Each path "
                          "needs its own carrier.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "Two conductors, two carriers", size=SZ_TITLE,
      weight="bold", va="top")

    # metal: electrons
    ax.add_patch(FancyBboxPatch(
        (5, 52), 90, 30, boxstyle="round,pad=0.4,rounding_size=2",
        fc=TINT["amber"], ec=S["amber"], lw=1.8, zorder=1))
    T(ax, 50, 76, "in the metal wire", size=SZ_HEAD, weight="bold",
      color=S["amber"])
    arrow(ax, (10, 65), (90, 65), color=S["amber"], lw=2.2)
    T(ax, 50, 65, "free electrons drift", size=SZ_BODY, z=7)
    T(ax, 50, 57, "carrier: e⁻", size=SZ_BODY, weight="bold",
      color=S["amber"])

    # solution: ions
    ax.add_patch(FancyBboxPatch(
        (5, 12), 90, 30, boxstyle="round,pad=0.4,rounding_size=2",
        fc=TINT["teal"], ec=S["teal"], lw=1.8, zorder=1))
    T(ax, 50, 36, "in the solution", size=SZ_HEAD, weight="bold",
      color=S["teal"])
    arrow(ax, (10, 25), (90, 25), color=S["teal"], lw=2.2)
    T(ax, 50, 25, "ions drift", size=SZ_BODY, z=7)
    T(ax, 50, 17, "carrier: cations and anions", size=SZ_BODY, weight="bold",
      color=S["teal"])

    return fig


# ------------------------------------------------------------ 7. Faraday ---

def fig_faraday():
    """Faraday's first law: deposited mass follows charge, not time."""
    fig = _fig(6.4)
    bottom = caption(fig, "Double the charge and you double the metal. "
                          "m = (M / F) · Q, with F = 96 485 C mol⁻¹; copper "
                          "needs about 1 518 C per gram.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom],
               title="Faraday's first law:  m ∝ Q", tone="azure")
    T(ax, 50, 83, "one cell, three currents, all run for one hour",
      size=SZ_BODY, color=S["soft"], style="italic")

    rows = [("1 A", 1.19), ("2 A", 2.37), ("4 A", 4.74)]
    y = 60
    for lab, mass in rows:
        T(ax, 13, y, lab, size=SZ_HEAD, weight="bold", ha="right")
        ax.add_patch(FancyBboxPatch(
            (18, y - 4.5), 48, 9,
            boxstyle="round,pad=0,rounding_size=0.8",
            fc=TINT["azure"], ec="none", zorder=2))
        ax.add_patch(Rectangle((18, y - 4.5), 48 * mass / 4.74, 9,
                               fc=S["accent"], ec="none", zorder=3))
        T(ax, 93, y, f"{mass:.2f} g", size=SZ_HEAD, weight="bold",
          color=S["accent"], ha="right")
        y -= 14
    T(ax, 18, 13, "copper deposited in 1 hour", size=SZ_BODY, color=S["soft"],
      ha="left")

    return fig


# ------------------------------------------------------ 8. energy/power ---

def fig_energy_power():
    """Energy is what a battery stores; power is how fast it gives it up."""
    fig = _fig(6.6)
    bottom = caption(fig, "Power is the rate: P = V × I in watts. That same "
                          "10 Wh pack emptied in 5 hours would deliver only "
                          "2 W.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom], title="Energy stored")
    T(ax, 50, 83, "capacity × voltage", size=SZ_BODY, color=S["soft"],
      style="italic")

    chip(ax, 16, 60, 68, 13, "4 V", S["accent"])
    T(ax, 50, 54, "×", size=SZ_HEAD, color=S["soft"], bbox=False)
    chip(ax, 16, 39, 68, 13, "2.5 Ah", S["violet"])
    T(ax, 50, 33, "=", size=SZ_HEAD, color=S["soft"], bbox=False)
    chip(ax, 10, 18, 80, 15, "10 Wh", S["emerald"])

    ax.add_patch(FancyBboxPatch(
        (10, 4), 80, 10, boxstyle="round,pad=0.4,rounding_size=1.5",
        fc=TINT["slate"], ec=S["slate"], lw=1.4, zorder=1))
    T(ax, 50, 9, "= 36 kJ  =  3.6 × 10⁴ J", size=SZ_BODY, color=S["slate"],
      weight="bold")

    return fig


# --------------------------------------------------- 9. laboratory cell ---

def fig_lab_setup():
    """The three-electrode cell, with the colours the leads actually use."""
    fig = _fig(7.8)
    bottom = caption(fig, "The reference electrode carries no current, so the "
                          "potential it reports cannot shift as the cell draws "
                          "current. That is the whole reason for three.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "A three-electrode cell", size=SZ_TITLE, weight="bold",
      va="top")

    beaker(ax, 18, 36, 64, 38, TINT["azure"])
    T(ax, 50, 78, "electrolyte + analyte", size=SZ_SMALL, color=S["soft"])

    # working, counter and reference electrodes
    ax.add_patch(Rectangle((29, 36), 4, 24, fc=S["metal"], ec="white", lw=1.2,
                           zorder=5))
    ax.add_patch(Rectangle((67, 36), 3, 32, fc="#B87333", ec="white", lw=1.2,
                           zorder=5))
    ax.add_patch(FancyBboxPatch((46, 36), 8, 18,
                                boxstyle="round,pad=0.3,rounding_size=0.8",
                                fc="white", ec=S["slate"], lw=1.6, zorder=5))
    T(ax, 50, 45, "KCl", size=SZ_FLOOR, color=S["slate"], weight="bold")

    # leads, in the colours the cables use
    for x, colour, name, tc in (
        (31, "#C0392B", "working", "white"),
        (50, "#F1F5F9", "reference", S["ink"]),
        (68.5, "#1D4ED8", "counter", "white"),
    ):
        ax.plot([x, x, x], [60, 82, 82], color=colour, lw=3.6, zorder=4,
                solid_capstyle="round")
        ax.add_patch(Rectangle((x - 7, 82), 14, 9, fc=colour, ec="white",
                               lw=1.2, zorder=5))
        ax.text(x, 86.5, name, ha="center", va="center", fontsize=SZ_SMALL,
                fontweight="bold", color=tc, zorder=6)

    # a legend rather than captions hung off each electrode, which collided
    legend = [
        ("#C0392B", "working", "E is set here"),
        ("#F1F5F9", "reference", "never carries current"),
        ("#1D4ED8", "counter", "closes the circuit"),
    ]
    y = 24
    for colour, name, meaning in legend:
        ax.add_patch(FancyBboxPatch(
            (7, y - 2.6), 6, 5.2,
            boxstyle="round,pad=0.2,rounding_size=0.6",
            fc=colour, ec=S["metal"] if colour == "#F1F5F9" else colour,
            lw=1.2, zorder=4))
        T(ax, 16, y, f"{name} — {meaning}", size=SZ_FLOOR, ha="left")
        y -= 7.4

    return fig


# ------------------------------------------------ 10. oxidation numbers ---

def fig_oxidation_states():
    """The bookkeeping test that tells you which electrode is which."""
    fig = _fig(5.8)
    bottom = caption(fig, "Zinc loses electrons at the anode. Copper gains them "
                          "at the cathode. Nothing else needs to be known to "
                          "place them.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "Finding the anode", size=SZ_TITLE, weight="bold", va="top")
    T(ax, 50, 78, wrap("A rising oxidation number means oxidation, so that "
                       "species belongs at the anode.", SZ_BODY),
      size=SZ_BODY, color=S["soft"], style="italic")

    cases = [
        ("Zn → Zn²⁺", "0  →  +2", "up", "oxidation", S["anod"]),
        ("Cu²⁺ → Cu", "+2  →  0", "down", "reduction", S["cath"]),
    ]
    y = 54
    for text, nums, direction, name, colour in cases:
        chip(ax, 5, y - 8, 28, 16, text, "white", tc=S["ink"], ec=colour,
             size=SZ_BODY)
        T(ax, 50, y, nums, size=SZ_HEAD, weight="bold", color=colour)
        arrow(ax, (64, y), (72, y), color=colour, lw=2.4)
        T(ax, 85, y + 3.4, direction, size=SZ_BODY, weight="bold", color=colour)
        T(ax, 85, y - 4.4, name, size=SZ_FLOOR, color=S["soft"])
        y -= 26

    ax.add_patch(FancyBboxPatch(
        (3, 4), 94, 15, boxstyle="round,pad=0.4,rounding_size=1.5",
        fc=TINT["amber"], ec=S["amber"], lw=1.5, zorder=1))
    T(ax, 50, 14, "Number up = electrons lost", size=SZ_BODY, color=S["amber"],
      weight="bold")
    T(ax, 50, 7.5, "Number down = electrons gained", size=SZ_BODY,
      color=S["amber"], weight="bold")

    return fig


# ------------------------------------------------------ 11. the mnemonic ---

def fig_mnemonic():
    """The three phrases that stop the most common beginner mistakes."""
    fig = _fig(7.0)
    bottom = caption(fig, "Anode is never the plus sign, and cathode is never "
                          "the minus sign. A galvanometer reads conventional "
                          "current, which runs the other way from the "
                          "electrons.")
    ax = panel(fig, [0.04, bottom, 0.92, 0.975 - bottom])
    T(ax, 50, 97, "Three phrases that help", size=SZ_TITLE, weight="bold",
      va="top")

    rows = [
        ("Red Cat", "reduction happens at the Cathode", S["cath"]),
        ("An Ox", "oxidation happens at the Anode", S["anod"]),
        ("Anode → Cathode", "electrons travel that way", S["indigo"]),
    ]
    y = 78
    for head, meaning, colour in rows:
        ax.add_patch(FancyBboxPatch(
            (3, y - 11), 94, 22, boxstyle="round,pad=0.4,rounding_size=1.5",
            fc="white", ec=colour, lw=1.7, zorder=1))
        T(ax, 50, y + 5, head, size=SZ_HEAD + 1, weight="bold", color=colour)
        T(ax, 50, y - 5, meaning, size=SZ_BODY)
        y -= 26

    return fig


# ------------------------------------------------------------------- run ---

FIGURES = [
    ("fund_two_worlds", fig_two_worlds),
    ("fund_roadmap", fig_roadmap),
    ("fund_cell_anatomy", fig_cell_anatomy),
    ("fund_cell_notation", fig_cell_notation),
    ("fund_potential_scale", fig_potential_scale),
    ("fund_charge_carriers", fig_charge_carriers),
    ("fund_faraday", fig_faraday),
    ("fund_energy_power", fig_energy_power),
    ("fund_lab_setup", fig_lab_setup),
    ("fund_oxidation_states", fig_oxidation_states),
    ("fund_mnemonic", fig_mnemonic),
]


def render(name, fn):
    """Draw one figure and write it out. Returns the saved path.

    The figure functions themselves return the ``Figure`` rather than the path,
    because ``tools/check_figures.py`` inspects the live canvas for overlapping
    labels, and a closed figure cannot be measured.
    """
    return _save(fn(), f"{name}.png")


def main():
    print(f"writing {len(FIGURES)} fundamentals figures to {OUT}")
    for name, fn in FIGURES:
        render(name, fn)
        print(f"  wrote {name}.png")


if __name__ == "__main__":
    main()
