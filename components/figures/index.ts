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
import type { Locale } from "@/lib/i18n";
import { FundTwoWorlds } from "./fund-two-worlds";
import { FundOxidationStates } from "./fund-oxidation-states";

/** Every registered figure takes the locale so it can label itself. */
export type FigureComponent = ComponentType<{ locale: Locale }>;

export const FIGURES: Record<string, FigureComponent> = {
  "fund_two_worlds.png": FundTwoWorlds,
  "fund_oxidation_states.png": FundOxidationStates,
};

/** The SVG component for a figure file name, or null to fall back to the PNG. */
export function figureFor(src: string): FigureComponent | null {
  return FIGURES[src] ?? null;
}
