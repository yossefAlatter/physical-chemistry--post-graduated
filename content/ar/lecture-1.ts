import type { Lecture } from "../types";

/**
 * Arabic translation of Lecture 1.
 *
 * Mirrors content/lecture-1.ts: same slug, same eleven section ids in the same
 * order, same tones and minutes. Sections and questions appear here only once
 * translated - anything missing keeps its English text via the per-section
 * merge in content/ar/index.ts, so a partial translation can never drop
 * material from the Arabic site.
 */
export const lecture1Ar: Partial<Lecture> = {
  label: "",
  title: "",
  summary: "",
  minutes: 0,
  sections: [],
  mcq: [],
};
