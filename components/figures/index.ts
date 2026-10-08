/**
 * The figure registry.
 *
 * Content refers to a figure by the file name it used to have, e.g.
 * `fund_two_worlds.png`. If a name is registered here the page draws the SVG
 * component instead of loading the PNG; if it is not, the PNG is used. That
 * means figures can be converted one at a time, and nothing breaks in the
 * meantime, which is the only sane way to replace twenty-six diagrams.
 *
 * The PNGs stay in public/figures until their entry is removed from here, at
 * which point they are dead weight in the precache and can be deleted.
 */

import type { ComponentType } from "react";
import { PnJunction } from "./pn-junction";

/** Every registered figure draws itself; none takes props. */
export type FigureComponent = ComponentType;

export const FIGURES: Record<string, FigureComponent> = {
  "pn_junction.png": PnJunction,
};

/** The SVG component for a figure file name, or null to fall back to the PNG. */
export function figureFor(src: string): FigureComponent | null {
  return FIGURES[src] ?? null;
}
