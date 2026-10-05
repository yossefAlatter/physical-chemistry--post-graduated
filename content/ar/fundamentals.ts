import type { Lecture } from "../types";

/**
 * Arabic translation of the Fundamentals lecture.
 *
 * Structure (slug, section ids, tone, minutes, figures, formulas) mirrors the
 * English original exactly; only the reader-facing text differs. Built from
 * content/fundamentals.ts and the question bank in fundamentals.mcq.ts.
 */
export const fundamentalsAr: Lecture = {
  slug: "fundamentals",
  label: "",
  title: "",
  summary: "",
  order: 0,
  minutes: 0,
  sections: [],
  mcq: [],
};
