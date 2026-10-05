"""Figures for the Physical Chemistry site.

Writes PNGs into ``public/figures/``. The ``fund_*`` set covers the
Fundamentals primer - absolute basics up to laboratory practice - and is
written for the web: wide layouts and type large enough to read at 360 px.

Run from the site root:

    ../electricial-chemistry/.venv/bin/python tools/figures.py

Layout rules, learned the hard way on the printed guide:
  * a schematic panel (axes off) never shares a figure with a plotting panel;
  * every label carries a semi-opaque white background so it stays readable
    where it crosses a line;
  * leave a margin around each panel so annotations cannot touch the frame.
"""

from __future__ import annotations

import os

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402
from matplotlib.patches import Circle, FancyBboxPatch, Rectangle  # noqa: E402

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "public", "figures")

# Mirrors the light-theme tone tokens in app/globals.css, so a figure and the
# section it illustrates share a hue. tools/advanced_figures.py does the same
# for the 16 imported advanced diagrams.
S = {
    "ink": "#10192B", "soft": "#3D4C63", "accent": "#0B6E99",
    "cath": "#0B6E99", "anod": "#BE123C", "pos": "#C2410C", "neg": "#4338CA",
    "good": "#0F7B5A", "warn": "#9C4708", "bad": "#C0392B",
    "grid": "#D5DFEA", "metal": "#5B6879", "sol": "#E4F2FA",
    "surface": "#C3CCD6", "lilac": "#F2ECFE", "gold": "#9C4708",
}

matplotlib.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 10.5,
    "mathtext.fontset": "stix",
    "axes.edgecolor": "#64748B",
    "axes.linewidth": 0.9,
    "axes.labelsize": 11,
    "axes.titlesize": 12.5,
    "xtick.labelsize": 9.5,
    "ytick.labelsize": 9.5,
    "legend.fontsize": 9.5,
    "legend.frameon": True,
    "legend.framealpha": 0.94,
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
})

DPI = 150
F = 9.6          # default figure width, inches
FARADAY = 96485.0


# ---------------------------------------------------------------- helpers ---

def _clean(ax, grid="y"):
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)
    if grid:
        ax.grid(True, color=S["grid"], lw=0.7, alpha=0.9, zorder=0)
        ax.set_axisbelow(True)


def _off(ax):
    ax.set_xticks([])
    ax.set_yticks([])
    for sp in ax.spines.values():
        sp.set_visible(False)


def arrow(ax, p0, p1, color=None, lw=2.0, style="-|>", ls="-", ms=11,
          z=4, rad=0.0, alpha=1.0):
    cp = dict(arrowstyle=style, color=color or S["ink"], lw=lw,
              mutation_scale=ms, shrinkA=0, shrinkB=0, alpha=alpha,
              linestyle=ls, zorder=z)
    if rad:
        cp["connectionstyle"] = f"arc3,rad={rad}"
    ax.annotate("", xy=p1, xytext=p0, arrowprops=cp, zorder=z)


def lbl(ax, x, y, s, color=None, size=10.5, ha="center", va="center",
        weight="normal", style="normal", rot=0, z=6, bbox=True, alpha=0.9,
        ls_=1.4):
    kw = dict(bbox=dict(boxstyle="round,pad=0.22", fc="white", ec="none",
                        alpha=alpha)) if bbox else {}
    return ax.text(x, y, s, color=color or S["ink"], fontsize=size, ha=ha,
                   va=va, fontweight=weight, fontstyle=style, rotation=rot,
                   zorder=z, linespacing=ls_, **kw)


def box(ax, x, y, w, h, text, fc="#EAF4FA", ec=None, tc=None, size=11,
        weight="bold", lw=1.4, z=2, r=0.8, ls_=1.45):
    ax.add_patch(FancyBboxPatch(
        (x, y), w, h, boxstyle=f"round,pad=0.3,rounding_size={r}",
        fc=fc, ec=ec or S["accent"], lw=lw, zorder=z))
    ax.text(x + w / 2, y + h / 2, text, ha="center", va="center", fontsize=size,
            color=tc or S["ink"], fontweight=weight, zorder=z + 1,
            linespacing=ls_)


def dot(ax, x, y, r=0.85, fc=None, sym="", tc="white", size=8, z=6):
    ax.add_patch(Circle((x, y), r, fc=fc or S["anod"], ec="white", lw=0.8,
                        zorder=z))
    if sym:
        ax.text(x, y, sym, ha="center", va="center", fontsize=size,
                color=tc, fontweight="bold", zorder=z + 1)


def _save(fig, name):
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, name)
    fig.savefig(path, dpi=DPI, bbox_inches="tight", pad_inches=0.09)
    plt.close(fig)
    return path


# ------------------------------------------------------- 1. two families ---

def fig_two_worlds():
    fig, axes = plt.subplots(1, 2, figsize=(F, 4.5))
    fig.subplots_adjust(left=0.02, right=0.98, top=0.82, bottom=0.04,
                        wspace=0.16)

    specs = [
        dict(title="Galvanic (voltaic)", sub="the cell does the work",
             a_sign="-", a_label="anode  \u2013  oxidation",
             c_sign="+", c_label="cathode  +  reduction",
             drive="Chemical energy", lamp="bulb lit", use="use the electrons",
             examples="corrosion · fuel cells · Zn/Cu cell",
             sub2="the cell does the work",
             fc="#E7F6EE", ec=S["good"]),
        dict(title="Electrolytic", sub="you do the work",
             a_sign="+", a_label="anode  +  oxidation",
             c_sign="–", c_label="cathode  –  reduction",
             drive="Power supply", lamp="forced uphill", use="drive the reaction",
             examples="plating · refining · battery charging",
             sub2="you do the work",
             fc="#FDEEEA", ec=S["anod"]),
    ]

    for ax, sp in zip(axes, specs):
        _off(ax)
        ax.set_xlim(0, 100)
        ax.set_ylim(0, 100)

        ax.add_patch(FancyBboxPatch(
            (2, 4), 96, 88,
            boxstyle="round,pad=0.6,rounding_size=2",
            fc=sp["fc"], ec=sp["ec"], lw=1.5, zorder=1))
        lbl(ax, 50, 86, sp["title"], size=14, weight="bold", color=sp["ec"])
        lbl(ax, 50, 76, f'{sp["sub2"]}\n{sp["examples"]}', size=9.4,
            style="italic", color=S["soft"])

        # electrodes
        box(ax, 8, 34, 20, 13, "anode", fc="white", ec=S["anod"], tc=S["anod"])
        box(ax, 72, 34, 20, 13, "cathode", fc="white", ec=S["cath"],
            tc=S["cath"])
        lbl(ax, 18, 26, sp["a_label"], size=9, color=S["anod"], weight="bold")
        lbl(ax, 82, 26, sp["c_label"], size=9, color=S["cath"], weight="bold")

        # wire over the top
        arrow(ax, (18, 48), (50, 60), color=S["ink"], lw=2.4)
        arrow(ax, (50, 60), (82, 48), color=S["ink"], lw=2.4)
        ax.add_patch(Circle((50, 60), 5.2, fc="white", ec=S["gold"], lw=2.0,
                            zorder=3))
        lbl(ax, 50, 60, "e\u207b", size=11, weight="bold", color=S["gold"],
            bbox=False, z=4)
        lbl(ax, 50, 69.5, sp["drive"], size=9.5, weight="bold")

        # electron direction along the wire
        if sp is specs[0]:
            for t in (0.30, 0.46, 0.62, 0.78):
                x = 18 + (82 - 18) * t
                y = 48 + 12 * (4 * t * (1 - t))
                dot(ax, x, y, r=1.0, fc=S["cath"], size=0)
            lbl(ax, 50, 54, "electrons flow \u2192", size=8.5, color=S["cath"])
        else:
            lbl(ax, 50, 54, "supply pushes electrons \u2192", size=8.5,
                color=S["anod"])

        lbl(ax, 18, 17, "loses e\u207b", size=8.5, color=S["soft"])
        lbl(ax, 82, 17, "gains e\u207b", size=8.5, color=S["soft"])
        lbl(ax, 50, 9.5, sp["use"], size=9.5, weight="bold", color=S["ink"])

    fig.suptitle("Two families of cell, one set of names",
                 fontsize=14.5, fontweight="bold", y=0.98)
    fig.text(0.5, 0.005,
             "Anode always means oxidation. Cathode always means reduction. "
             "Only the sign changes.",
             ha="center", fontsize=10, color=S["ink"], fontweight="bold")

    return fig


# ------------------------------------------------------------ 2. roadmap ---

def fig_roadmap():
    fig, ax = plt.subplots(figsize=(12, 4.0))
    _off(ax)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)

    stages = [
        ("Start here", "Fundamentals", S["good"],
         ["charge & current", "Faraday's law", "energy vs power",
          "the lab cell"]),
        ("Lecture 1", "The cell itself", S["accent"],
         ["cell anatomy", "double layer", "mass transport"]),
        ("Measuring", "Potential", S["cath"],
         ["polarisation curves", "overpotentials", "Nernst"]),
        ("Rates", "Kinetics", S["gold"],
         ["Butler\u2013Volmer", "Tafel analysis", "HER"]),
        ("In service", "Applications", S["bad"],
         ["corrosion", "electrolysis", "batteries"]),
    ]

    n = len(stages)
    w, gap = 16.5, 4.2
    x0 = (100 - (n * w + (n - 1) * gap)) / 2

    for i, (num, title, colour, items) in enumerate(stages):
        x = x0 + i * (w + gap)
        box(ax, x, 46, w, 40, "", fc="white", ec=colour, lw=1.8)
        ax.add_patch(FancyBboxPatch(
            (x, 74), w, 12, boxstyle="round,pad=0.3,rounding_size=0.8",
            fc=colour, ec=colour, lw=0, zorder=3))
        ax.text(x + w / 2, 80, num, ha="center", va="center", fontsize=10.5,
                color="white", fontweight="bold", zorder=4)
        ax.text(x + w / 2, 63, title, ha="center", va="center", fontsize=11.5,
                color=S["ink"], fontweight="bold", zorder=4, linespacing=1.3)
        for j, it in enumerate(items):
            ax.text(x + w / 2, 55 - j * 6.4, f"\u2022 {it}", ha="center",
                    va="center", fontsize=8.6, color=S["soft"], zorder=4)

        if i < n - 1:
            arrow(ax, (x + w + 0.6, 66), (x + w + gap - 0.6, 66),
                  color=S["metal"], lw=2.2, ms=12)

    lbl(ax, 50, 88, "From zero to research level: the order this subject is "
                    "built in", size=13.5, weight="bold", bbox=False)
    ax.text(50, 26, "Each arrow is a step you can take in an afternoon. "
                    "Nothing above is needed for anything below it.",
            ha="center", va="center", fontsize=10, color=S["soft"],
            style="italic")
    ax.text(50, 14, "You are here", ha="center", va="center", fontsize=10,
            color=S["good"], fontweight="bold")
    arrow(ax, (x0 + w / 2, 20), (x0 + w / 2, 43), color=S["good"], lw=2.0)

    return fig


# ---------------------------------------------------- 3. cell anatomy ---

def fig_cell_anatomy():
    fig, ax = plt.subplots(figsize=(F, 5.4))
    _off(ax)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)

    # beaker
    ax.add_patch(Rectangle((9, 24), 82, 30, fc="white", ec="none", zorder=1))
    ax.add_patch(Rectangle((9, 24), 82, 22, fc=S["sol"], ec="none", zorder=2))
    ax.plot([9, 9, 91, 91], [24, 56, 56, 24], color=S["surface"], lw=2.6,
            zorder=5, solid_capstyle="round")
    ax.plot([9, 91], [46, 46], color=S["accent"], lw=1.4, zorder=4,
            alpha=0.75)

    # electrodes
    ax.add_patch(Rectangle((23, 46), 7, 30, fc=S["metal"], ec=S["soft"],
                           lw=1.2, zorder=6))
    ax.add_patch(Rectangle((70, 46), 7, 30, fc="#B87333", ec=S["soft"],
                           lw=1.2, zorder=6))
    lbl(ax, 26.5, 80, "Zn", size=12, weight="bold")
    lbl(ax, 73.5, 80, "Cu", size=12, weight="bold")

    # wire and lamp
    ax.plot([26.5, 26.5, 73.5, 73.5], [76, 90, 90, 76], color=S["ink"],
            lw=2.4, zorder=6)
    ax.add_patch(Circle((50, 90), 6.0, fc="white", ec=S["gold"], lw=2.2,
                        zorder=7))
    for a in range(0, 360, 45):
        r = np.deg2rad(a)
        ax.plot([50 + 6.6 * np.cos(r), 50 + 8.6 * np.cos(r)],
                [90 + 6.6 * np.sin(r), 90 + 8.6 * np.sin(r)],
                color=S["gold"], lw=1.2, zorder=6)

    # electrons on the wire
    for x in (33, 39, 61, 67):
        dot(ax, x, 90, r=1.15, fc=S["cath"], size=0, z=8)
    arrow(ax, (44, 95.5), (56, 95.5), color=S["cath"], lw=2.0, ms=11)
    lbl(ax, 50, 95.5, "  electrons \u2192", size=9.5, color=S["cath"],
        weight="bold")

    # ion movement inside the two solutions
    for y in (30, 36, 42):
        dot(ax, 33, y, r=1.0, fc=S["anod"], sym="+", size=7)
        dot(ax, 67, y, r=1.0, fc=S["soft"], sym="\u2212", size=7)
    arrow(ax, (36, 40.5), (30, 40.5), color=S["anod"], lw=1.7, ms=9)
    arrow(ax, (64, 30.5), (70, 30.5), color=S["soft"], lw=1.7, ms=9)
    lbl(ax, 43, 44, "Zn\u00b2\u207a leaves,\nCu\u00b2\u207a arrives", size=8.4,
        color=S["soft"])

    # salt bridge
    ax.plot([45, 45, 55, 55], [24, 8, 8, 24], color=S["surface"], lw=5.0,
            zorder=5, solid_capstyle="round")
    ax.plot([45, 45, 55, 55], [24, 8, 8, 24], color="white", lw=2.4,
            zorder=6, solid_capstyle="round")
    for x, sym in ((48.5, "\u2212"), (51.5, "+")):
        dot(ax, x, 14, r=0.9, fc=S["soft"], sym=sym, size=7, z=8)
    arrow(ax, (47, 19), (44.5, 13), color=S["soft"], lw=1.5, ms=9)
    arrow(ax, (53, 13), (55.5, 19), color=S["soft"], lw=1.5, ms=9)
    lbl(ax, 50, 4, "salt bridge carries ions", size=9, color=S["soft"],
        weight="bold")

    # labels
    lbl(ax, 26.5, 62, "ANODE\noxidation\nnegative", size=9.5, color=S["anod"],
        weight="bold")
    lbl(ax, 73.5, 62, "CATHODE\nreduction\npositive", size=9.5, color=S["cath"],
        weight="bold")
    lbl(ax, 50, 51.5, "electrolyte: ions carry the charge inside", size=9,
        color=S["accent"], weight="bold")

    ax.text(26.5, 20.5, "Zn \u2192 Zn\u00b2\u207a + 2e\u207b", ha="center",
            fontsize=9.5, color=S["anod"], zorder=9)
    ax.text(73.5, 20.5, "Cu\u00b2\u207a + 2e\u207b \u2192 Cu", ha="center",
            fontsize=9.5, color=S["cath"], zorder=9)

    return fig


# -------------------------------------------------- 4. charge carriers ---

def fig_charge_carriers():
    fig, ax = plt.subplots(figsize=(F, 4.2))
    _off(ax)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)

    ax.add_patch(Rectangle((6, 72), 88, 9, fc=S["metal"], ec=S["soft"], lw=1.2,
                           zorder=3))
    lbl(ax, 19, 76.5, "metal wire", size=9.5, color="white", weight="bold",
        bbox=False)
    for x in (42, 52, 62, 72, 82, 90):
        dot(ax, x, 76.5, r=1.3, fc=S["cath"], sym="\u2212", size=7.5, z=5)
    arrow(ax, (20, 85.5), (46, 85.5), color=S["cath"], lw=2.2, ms=12)
    lbl(ax, 56, 85.5, "electrons only", size=10.5, color=S["cath"],
        weight="bold", ha="left")

    ax.add_patch(Rectangle((14, 10), 72, 46, fc=S["sol"], ec="none", zorder=1))
    ax.plot([14, 14, 86, 86], [10, 58, 58, 10], color=S["surface"], lw=2.6,
            zorder=4, solid_capstyle="round")

    for y in (20, 30, 40, 50):
        dot(ax, 34, y, r=1.35, fc=S["anod"], sym="+", size=7.5, z=5)
    for y in (24, 34, 44):
        dot(ax, 66, y, r=1.35, fc=S["soft"], sym="\u2212", size=7.5, z=5)

    arrow(ax, (44, 46), (30, 46), color=S["anod"], lw=2.0, ms=11)
    arrow(ax, (56, 24), (70, 24), color=S["soft"], lw=2.0, ms=11)
    lbl(ax, 50, 52, "cations drift to the cathode", size=9.5, color=S["anod"],
        weight="bold")
    lbl(ax, 50, 15, "anions drift to the anode", size=9.5, color=S["soft"],
        weight="bold")
    lbl(ax, 50, 34, "electrolyte", size=11, color=S["accent"], weight="bold")

    ax.text(50, 65, "Electrons carry the charge through the metal. Ions carry "
                    "it through the solution. Neither can do the other's job.",
            ha="center", va="center", fontsize=10, color=S["ink"],
            fontweight="bold", zorder=9)
    ax.text(50, 4, "1 A = 1 C per second   \u2022   I = dQ/dt   \u2022   "
                   "Q = I\u00b7t",
            ha="center", va="center", fontsize=10, color=S["soft"],
            style="italic", zorder=9)

    return fig


# ------------------------------------------------------------ 5. Faraday ---

def fig_faraday():
    fig, ax = plt.subplots(figsize=(6.4, 4.6))
    _clean(ax)
    Q = np.linspace(0, 6000, 200)
    metals = [
        ("Ag\u207a  (n = 1)", 107.868, 1, S["gold"]),
        ("Au\u00b3\u207a  (n = 3)", 196.967, 3, S["bad"]),
        ("Cu\u00b2\u207a  (n = 2)", 63.546, 2, S["cath"]),
    ]
    for name, M, n, c in metals:
        slope = M / (n * FARADAY)
        ax.plot(Q, slope * Q, color=c, lw=2.4, label=f"{name}")
        ax.annotate(f"{slope * 6000:.2f} g", xy=(6000, slope * 6000),
                    xytext=(6, 0), textcoords="offset points",
                    va="center", fontsize=9.5, color=c, fontweight="bold")

    ax.set_xlim(0, 6900)
    ax.set_ylim(0, 7.4)
    ax.set_xlabel("charge passed,  Q  (C)")
    ax.set_ylabel("mass deposited,  m  (g)")
    ax.set_title("Mass deposited against charge, 100% efficiency",
                 pad=10)
    ax.legend(loc="upper left", framealpha=0.95)
    ax.text(0.985, 0.05,
            "slope = M / nF\nindependent of current",
            transform=ax.transAxes, ha="right", va="bottom", fontsize=9.5,
            color=S["soft"], style="italic",
            bbox=dict(boxstyle="round,pad=0.3", fc="white", ec="none",
                      alpha=0.9))
    fig.tight_layout()
    return fig


# ----------------------------------------------------- 6. energy/power ---

def fig_energy_power():
    fig, axes = plt.subplots(1, 2, figsize=(F, 3.9))
    fig.subplots_adjust(left=0.08, right=0.98, top=0.86, bottom=0.17,
                        wspace=0.34)

    ax = axes[0]
    _clean(ax)
    x = np.linspace(0, 70, 400)
    v = 12.75 - 0.40 * (x / 45) ** 1.6
    drop = np.clip((x - 60) / 10, 0, None) ** 1.7
    v = np.where(x > 60, v - 2.6 * drop, v)
    ax.fill_between(x, 0, v, color=S["accent"], alpha=0.13)
    ax.plot(x, v, color=S["accent"], lw=2.4)
    ax.axvline(60, color=S["bad"], lw=1.4, ls="--")
    ax.set_xlim(0, 72)
    ax.set_ylim(0, 14.5)
    ax.set_xlabel("capacity delivered  (Ah)")
    ax.set_ylabel("terminal voltage  (V)")
    ax.set_title("Energy = area under the curve", fontsize=11.5, pad=8)
    lbl(ax, 58, 13.4, "12 V, 60 Ah  \u2192  720 Wh", size=9.5, weight="bold")
    lbl(ax, 60.6, 5.2, "end of life", size=8.6, color=S["bad"], ha="left")

    ax = axes[1]
    _clean(ax, grid="y")
    names = ["Lead-acid", "NiMH", "Li-ion"]
    vals = [30, 100, 160]
    cols = [S["metal"], S["soft"], S["good"]]
    bars = ax.bar(names, vals, color=cols, width=0.6, zorder=3)
    for b, val in zip(bars, vals):
        ax.text(b.get_x() + b.get_width() / 2, val + 5, f"{val}",
                ha="center", fontsize=10.5, fontweight="bold",
                color=S["ink"])
    ax.set_ylim(0, 195)
    ax.set_ylabel("specific energy  (Wh kg\u207b\u00b9)")
    ax.set_title("Why chemistry sets the range", fontsize=11.5, pad=8)

    fig.suptitle("Energy, power and what the label means", fontsize=13.5,
                 fontweight="bold", y=0.99)
    return fig


# ----------------------------------------------------- 7. three-electrode ---

def fig_lab_setup():
    fig, ax = plt.subplots(figsize=(F, 4.8))
    _off(ax)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)

    # cell
    ax.add_patch(Rectangle((7, 18), 44, 44, fc=S["sol"], ec="none", zorder=1))
    ax.plot([7, 7, 51, 51], [18, 64, 64, 18], color=S["surface"], lw=2.6,
            zorder=6, solid_capstyle="round")

    # WE
    ax.add_patch(Rectangle((13, 34), 4.5, 30, fc=S["metal"], ec=S["soft"],
                           lw=1.1, zorder=7))
    lbl(ax, 15.2, 68, "WE", size=11, weight="bold")
    # RE
    ax.add_patch(Rectangle((26, 20), 4.0, 44, fc="white", ec=S["cath"],
                           lw=1.4, zorder=7))
    ax.add_patch(Rectangle((25.2, 14), 5.6, 7, fc="#FEF3C7", ec=S["gold"],
                           lw=1.2, zorder=7))
    lbl(ax, 28, 68, "RE", size=11, weight="bold")
    # CE
    ax.add_patch(Rectangle((41, 30), 4.0, 34, fc="#E5E7EB", ec=S["soft"],
                           lw=1.1, zorder=7))
    lbl(ax, 43, 68, "CE", size=11, weight="bold")

    lbl(ax, 22, 22.5, "electrolyte", size=8.6, color=S["accent"], weight="bold")

    # potentiostat
    box(ax, 64, 30, 30, 34, "", fc="white", ec=S["ink"], lw=1.8)
    ax.text(79, 55, "potentiostat", ha="center", va="center", fontsize=10.5,
            fontweight="bold", color=S["ink"], zorder=4)
    ax.text(79, 44, "holds WE at a\npotential you choose", ha="center",
            va="center", fontsize=8.6, color=S["soft"], zorder=4,
            linespacing=1.4)
    ax.text(79, 35.5, "measures the current", ha="center", va="center",
            fontsize=8.6, color=S["soft"], zorder=4)

    leads = [
        ((15.2, 68), (15.2, 86), (79, 86), (79, 64), S["ink"], "control"),
        ((28, 68), (28, 79), (92, 79), (92, 47), S["cath"], "measure"),
        ((43, 68), (43, 72), (66, 72), (66, 47), S["soft"], "carry current"),
    ]
    for p0, p1, p2, p3, c, _ in leads:
        ax.plot([p0[0], p1[0], p2[0], p3[0]], [p0[1], p1[1], p2[1], p3[1]],
                color=c, lw=2.0, zorder=5, solid_capstyle="round")

    lbl(ax, 50, 97, "three electrodes, one measurement", size=13,
        weight="bold", bbox=False)
    lbl(ax, 21, 80, "control", size=8.4, color=S["ink"], ha="center")
    lbl(ax, 35, 74, "measure", size=8.4, color=S["cath"], ha="center")
    lbl(ax, 58, 67.5, "carry current", size=8.4, color=S["soft"], ha="left")

    rows = [("WE", "working \u2014 the electrode you study", S["ink"]),
            ("RE", "reference \u2014 fixed known potential", S["cath"]),
            ("CE", "counter \u2014 completes the circuit", S["soft"])]
    for i, (code, text, c) in enumerate(rows):
        y = 15.5 - i * 5.0
        ax.text(9, y, code, fontsize=9.5, fontweight="bold", color=c,
                ha="left", va="center", zorder=7)
        ax.text(19, y, text, fontsize=9.5, color=S["soft"], ha="left",
                va="center", zorder=7)
    ax.text(9, 1.5, "The reference carries almost no current \u2014 that is "
                    "what keeps its potential trustworthy.",
            fontsize=9.2, color=S["ink"], style="italic", ha="left",
            va="center", zorder=7)

    return fig


# ------------------------------------------------ 8. oxidation numbers ---

def fig_oxidation_states():
    fig, ax = plt.subplots(figsize=(F, 4.0))
    _off(ax)
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)

    rows = [
        dict(species="Zn", prod="Zn\u00b2\u207a", n0="0", n1="+2",
             verb="loses", n_e="2", e_dir="out through the wire",
             kind="OXIDATION", elabel="ANODE", col=S["anod"], y=62),
        dict(species="Cu\u00b2\u207a", prod="Cu", n0="+2", n1="0",
             verb="gains", n_e="2", e_dir="in through the wire",
             kind="REDUCTION", elabel="CATHODE", col=S["cath"], y=26),
    ]

    for r in rows:
        y = r["y"]
        box(ax, 5, y - 7, 20, 14, r["species"], fc="white", ec=r["col"], tc=r["col"])
        lbl(ax, 13.5, y + 10, f"oxidation number {r['n0']}", size=8.4,
            color=S["soft"])
        arrow(ax, (26, y), (41, y), color=r["col"], lw=2.4, ms=13)
        lbl(ax, 33.5, y + 5.5, f"{r['verb']} {r['n_e']} e\u207b", size=9.2,
            color=r["col"], weight="bold")
        lbl(ax, 33.5, y - 5.5, r["e_dir"], size=8, color=S["soft"])
        box(ax, 42, y - 7, 20, 14, r["prod"], fc="white", ec=r["col"],
            tc=r["col"])
        lbl(ax, 52, y + 10, f"oxidation number {r['n1']}", size=8.4,
            color=S["soft"])
        box(ax, 66, y - 7, 29, 14, "", fc=r["col"], ec=r["col"])
        ax.text(80.5, y + 2.2, r["kind"], ha="center", va="center",
                fontsize=10.5, color="white", fontweight="bold", zorder=4)
        ax.text(80.5, y - 3.4, r["elabel"], ha="center", va="center",
                fontsize=11, color="white", fontweight="bold", zorder=4)

    lbl(ax, 50, 94, "How to decide which electrode is which", size=13.5,
        weight="bold", bbox=False)
    ax.text(50, 88, "Write the half-equation, then look at the oxidation "
                    "number: it goes up for oxidation, down for reduction.",
            ha="center", va="center", fontsize=9.6, color=S["soft"],
            style="italic")
    ax.text(50, 9, "This test works in galvanic and electrolytic cells alike, "
                   "which is why the names never need memorising.",
            ha="center", va="center", fontsize=9.8, color=S["ink"],
            fontweight="bold")

    return fig


# ------------------------------------------------------------------- run ---

FIGURES = [
    ("fund_two_worlds.png", fig_two_worlds),
    ("fund_roadmap.png", fig_roadmap),
    ("fund_cell_anatomy.png", fig_cell_anatomy),
    ("fund_charge_carriers.png", fig_charge_carriers),
    ("fund_faraday.png", fig_faraday),
    ("fund_energy_power.png", fig_energy_power),
    ("fund_lab_setup.png", fig_lab_setup),
    ("fund_oxidation_states.png", fig_oxidation_states),
]


def save_all():
    os.makedirs(OUT, exist_ok=True)
    paths = []
    for name, fn in FIGURES:
        fig = fn()
        p = os.path.join(OUT, name)
        fig.savefig(p, dpi=DPI, bbox_inches="tight", pad_inches=0.09)
        plt.close(fig)
        paths.append(p)
    return paths


if __name__ == "__main__":
    for p in save_all():
        print("wrote", os.path.relpath(p, os.getcwd()))