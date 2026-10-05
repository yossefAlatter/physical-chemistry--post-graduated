"""
Regenerate the 16 advanced figures in the site's colour palette.

The figure *drawing* code lives in the sibling project
(``../electricial-chemistry/echem_guide/figures.py``) because it is the same
code that produces the printed guide. Duplicating 1200 lines here would mean
two versions of every diagram drifting apart, so instead this script imports
that module, swaps its palette dictionary ``S`` and its matplotlib defaults
for the site's palette, and writes the PNGs straight into
``public/figures``.

Run it with the sibling project's virtualenv, which has matplotlib:

    ../electricial-chemistry/.venv/bin/python tools/advanced_figures.py

Re-run ``tools/check_figures.py`` afterwards; layout is unchanged, so it
should still pass, but the check is cheap.
"""

from __future__ import annotations

import importlib.util
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
FIGURES_OUT = ROOT / "public" / "figures"
SOURCE = ROOT.parent / "electricial-chemistry" / "echem_guide" / "figures.py"

# Same keys as the sibling module's S dict, expressed in the site's hues.
# Values are the light-theme tokens from app/globals.css: text tones that pass
# 4.5:1 on white, plus the tints used behind panels and for solution fills.
SITE_PALETTE = {
    "ink": "#10192B",
    "soft": "#3D4C63",
    "accent": "#0B6E99",      # azure
    "cath": "#0B6E99",        # cathode blue -> azure, so it matches the site
    "anod": "#BE123C",        # anode red -> rose
    "ohm": "#7C3AED",         # violet
    "conc": "#0F766E",        # concentration teal
    "act": "#C2410C",         # activation coral
    "good": "#0F7B5A",        # emerald
    "warn": "#9C4708",        # amber
    "bad": "#C0392B",
    "grid": "#D5DFEA",
    "metal": "#5B6879",
    "sol": "#E4F2FA",         # azure tint
    "surface": "#C3CCD6",
}

AXES = {
    "font.family": "DejaVu Sans",
    "font.size": 8.6,
    "mathtext.fontset": "stix",
    "axes.edgecolor": "#64748B",
    "axes.linewidth": 0.8,
    "axes.labelsize": 8.8,
    "axes.titlesize": 9.2,
    "xtick.labelsize": 7.8,
    "ytick.labelsize": 7.8,
    "legend.fontsize": 7.6,
    "legend.frameon": True,
    "legend.framealpha": 0.94,
    "figure.facecolor": "white",
    "savefig.facecolor": "white",
}


def load():
    if not SOURCE.exists():
        sys.exit(
            f"cannot find {SOURCE}\n"
            "The advanced figures are drawn by the sibling project; this script "
            "only recolours them."
        )
    spec = importlib.util.spec_from_file_location("_echem_figures", SOURCE)
    if spec is None or spec.loader is None:
        sys.exit(f"could not load {SOURCE}")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main() -> None:
    mod = load()
    mod.S.clear()
    mod.S.update(SITE_PALETTE)
    mod.matplotlib.rcParams.update(AXES)

    print(f"palette swapped to the site hues; drawing {len(mod.FIGURES)} figures")
    mod.generate_all(str(FIGURES_OUT))


if __name__ == "__main__":
    main()