// Content model for the electrochemistry lecture site.
//
// Everything the site displays is hard-coded in `content/`. There is no
// database and no fetch at runtime. Adding a lecture means adding one file
// and one line to content/index.ts - see ADDING_A_LECTURE.md.

/** A run of body text. `text` may contain **bold**, *italic*, `code`. */
export interface Paragraph {
  kind: "para";
  text: string;
}

/** Display maths, written in LaTeX and rendered with KaTeX. */
export interface Formula {
  kind: "formula";
  tex: string;
  /** Optional plain-English reading, e.g. "Levich equation, current density". */
  caption?: string;
}

/** An illustration from public/figures, drawn by the PDF figure script. */
export interface Figure {
  kind: "figure";
  /** File name inside public/figures, e.g. "cell_anatomy.png". */
  src: string;
  caption: string;
  /** Required: describe the image for screen readers. */
  alt: string;
}

/** A data table. `widths` is optional; columns are sized automatically. */
export interface Table {
  kind: "table";
  head: string[];
  rows: string[][];
  /** Optional relative column weights, e.g. [2, 1, 1]. */
  widths?: number[];
}

/** A highlighted box. */
export interface Callout {
  kind: "callout";
  variant: "key" | "warn" | "term";
  title: string;
  body: string;
}

/** A bulleted or numbered list. */
export interface ListBlock {
  kind: "list";
  items: string[];
  ordered?: boolean;
}

/** A short worked calculation, rendered as numbered steps. */
export interface Worked {
  kind: "worked";
  title: string;
  given: string;
  steps: string[];
  result: string;
}

export type Block =
  | Paragraph
  | Formula
  | Figure
  | Table
  | Callout
  | ListBlock
  | Worked;

/** One topic within a lecture. The anchor used by the sidebar and by MCQs. */
export interface Section {
  id: string;
  title: string;
  /** One-line summary shown on section cards and in the sidebar. */
  summary: string;
  blocks: Block[];
  /** Bullet points worth memorising; also used by the quiz review screen. */
  keyPoints?: string[];
}

/** A single multiple-choice question. */
export interface Mcq {
  id: string;
  /** Section id this question belongs to; powers per-topic filtering. */
  topicId: string;
  question: string;
  /** Exactly four options for the standard quiz. */
  options: string[];
  /** Index of the correct option. */
  answer: number;
  explanation: string;
}

/** Constants and other numbers the site shows in a "reference" panel. */
export interface Constant {
  symbol: string;
  name: string;
  value: string;
}

export interface Lecture {
  slug: string;
  /** Sidebar label, e.g. "Lecture 1". */
  label: string;
  title: string;
  summary: string;
  /** Sidebar / card ordering. Lowest first. */
  order: number;
  /** Approximate reading time in minutes, shown as a badge. */
  minutes: number;
  sections: Section[];
  mcq: Mcq[];
  constants?: Constant[];
}

/** A group of lectures in the sidebar, e.g. "Fundamentals". */
export interface Course {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
}