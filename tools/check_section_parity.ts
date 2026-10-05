// Structural parity between an Arabic section and its English original.
//
// Translation must never change structure: the same id (because MCQ topicIds
// and the URL point at it), the same accent tone, the same blocks in the same
// order, the same figure files, the same table shape, the same callout
// variants and the same number of list items and key points. Formula TeX is
// compared too - a mangled LaTeX expression still type checks and still
// renders as something, just wrong.
//
//   npx --yes tsx tools/check_section_parity.ts content/fundamentals what-is-it
//   npx --yes tsx tools/check_section_parity.ts content/lecture-1 nernst
//
// or check everything that has been translated so far:
//
//   npx --yes tsx tools/check_section_parity.ts

import { arLectures } from "../content/ar";
import { fundamentals as enFundamentals } from "../content/fundamentals";
import { lecture1 as enLecture1 } from "../content/lecture-1";
import type { Block, Section } from "../content/types";

const english: Record<string, Section[]> = {
  fundamentals: enFundamentals.sections,
  "lecture-1": enLecture1.sections,
};

/** Collect everything structural about a section, ignoring the prose. */
function shape(s: Section) {
  const out: Record<string, unknown> = {
    id: s.id,
    tone: s.tone,
    minutes: s.minutes ?? null,
    keyPoints: s.keyPoints?.length ?? 0,
    blocks: s.blocks.length,
  };
  const detail = s.blocks.map((b: Block) => {
    switch (b.kind) {
      case "figure":
        return `figure:${b.src}`;
      case "formula":
        return `formula:${b.tex}`;
      case "callout":
        return `callout:${b.variant}`;
      case "table":
        return `table:${b.head.length}x${b.rows.length}:${b.rows
          .map((r) => r.length)
          .join(",")}:${JSON.stringify(b.widths ?? null)}`;
      case "list":
        return `list:${b.items.length}:${b.ordered ? "ordered" : "bulleted"}`;
      case "worked":
        return `worked:${b.steps.length}`;
      default:
        return b.kind;
    }
  });
  out.detail = detail;
  return out;
}

function compare(en: Section, ar: Section): string[] {
  const bad: string[] = [];
  const a = shape(en);
  const b = shape(ar);
  for (const key of Object.keys(a)) {
    const x = JSON.stringify(a[key]);
    const y = JSON.stringify(b[key]);
    if (x !== y) {
      if (key === "detail") {
        const xs = a.detail as string[];
        const ys = b.detail as string[];
        for (let i = 0; i < Math.max(xs.length, ys.length); i++) {
          if (xs[i] !== ys[i]) {
            bad.push(`block ${i}: expected ${xs[i] ?? "(none)"}, got ${ys[i] ?? "(none)"}`);
          }
        }
      } else {
        bad.push(`${key}: expected ${x}, got ${y}`);
      }
    }
  }
  return bad;
}

const [, , fileArg, idArg] = process.argv;

const targets: [string, string][] = [];
if (fileArg && idArg) {
  const slug = fileArg.includes("lecture-1") ? "lecture-1" : "fundamentals";
  targets.push([slug, idArg]);
} else {
  for (const [slug, partial] of Object.entries(arLectures)) {
    for (const s of partial.sections ?? []) targets.push([slug, s.id]);
  }
}

if (targets.length === 0) {
  console.log("no translated sections yet");
  process.exit(0);
}

let failures = 0;
for (const [slug, id] of targets) {
  const en = english[slug]?.find((s) => s.id === id);
  const ar = arLectures[slug]?.sections?.find((s) => s.id === id);
  if (!en) {
    console.log(`FAIL ${slug}/${id}: no English section with that id`);
    failures++;
    continue;
  }
  if (!ar) {
    console.log(`FAIL ${slug}/${id}: not present in the Arabic tree`);
    failures++;
    continue;
  }
  const bad = compare(en, ar);
  if (bad.length) {
    console.log(`FAIL ${slug}/${id}`);
    for (const b of bad) console.log(`   ${b}`);
    failures++;
  } else {
    const n = ar.blocks.length;
    const figs = ar.blocks.filter((b) => b.kind === "figure").length;
    console.log(`ok   ${slug}/${id}  (${n} blocks, ${figs} figures)`);
  }
}

console.log(
  failures ? `\n${failures} section(s) differ` : `\nall ${targets.length} section(s) match`,
);
process.exit(failures ? 1 : 0);
