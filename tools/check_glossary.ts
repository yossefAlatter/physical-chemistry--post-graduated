// Checks the bilingual glosses in the Arabic content.
//
// Three failure modes, all of which have actually happened while translating:
//
//   unknown   the content glosses a term that is not in content/ar/glossary.ts,
//             so the English name is whatever the translator happened to type
//   wrong     the gloss is in the glossary, but does not match the spelling
//             used in the English tree, so the reader meets two different
//             English names for one term
//   repeat    the same term is glossed twice inside the running prose of one
//             section, which is the texture that makes machine-translated
//             technical prose tiring to read. Figure alt text and captions
//             are exempt: each is a standalone text that a reader meets on
//             its own, so restating the English there is correct, not
//             repetitive.
//
//   npx --yes tsx tools/check_glossary.ts          # everything translated so far
//   npx --yes tsx tools/check_glossary.ts --strict # repeats are failures too

import { GLOSSARY, SELF_ENGLISH } from "../content/ar/glossary";
import { arLectures } from "../content/ar";
import type { Block, Section } from "../content/types";

/** Collect the translatable text of a section, one labelled string per piece. */
function strings(s: Section): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [];
  const push = (where: string, text: string | undefined) => {
    if (text) out.push({ where, text });
  };
  if (s.title) out.push({ where: "title", text: s.title });
  if (s.summary) out.push({ where: "summary", text: s.summary });
  (s.keyPoints ?? []).forEach((k, i) => out.push({ where: `keyPoints[${i}]`, text: k }));

  const walk = (blocks: Block[], path: string) => {
    blocks.forEach((b, i) => {
      const at = `${path}[${i}]`;
      switch (b.kind) {
        case "para":
          push(`${at}.text`, b.text);
          break;
        case "list":
          b.items.forEach((it, j) => push(`${at}.items[${j}]`, it));
          break;
        case "callout":
          push(`${at}.title`, b.title);
          push(`${at}.body`, b.body);
          break;
        case "figure":
          push(`${at}.caption`, b.caption);
          push(`${at}.alt`, b.alt);
          break;
        case "table":
          b.head.forEach((h, j) => push(`${at}.head[${j}]`, h));
          b.rows.forEach((r, j) => r.forEach((c, k) => push(`${at}.rows[${j}][${k}]`, c)));
          break;
        case "worked":
          push(`${at}.title`, b.title);
          push(`${at}.given`, b.given);
          push(`${at}.result`, b.result);
          b.steps.forEach((s2, j) => push(`${at}.steps[${j}]`, s2));
          break;
        case "formula":
          push(`${at}.caption`, b.caption);
          break;
      }
    });
  };
  walk(s.blocks, "blocks");
  return out;
}

const GLOSS = /\(\(([^)]+)\)\)/g;

const strict = process.argv.includes("--strict");
let problems = 0;
let repeats = 0;
let glosses = 0;

for (const [slug, partial] of Object.entries(arLectures)) {
  for (const section of (partial.sections ?? []) as Section[]) {
    // Glosses seen in this section, keyed by the English term.
    const seen = new Map<string, string>();

    for (const { where, text } of strings(section)) {
      for (const match of text.matchAll(GLOSS)) {
        glosses++;
        const term = match[1].trim();
        const before = text.slice(0, match.index ?? 0);

        if (SELF_ENGLISH.has(term)) {
          console.log(
            `FAIL ${slug}/${section.id} ${where}: ((${term})) is already Latin in the text`,
          );
          problems++;
          continue;
        }

        // Find the Arabic term: the longest run of words immediately before the
        // gloss that is a glossary key. Longest-first, so "الخلية الجلفانية"
        // wins over "الجلفانية" and a one-word key still matches after a
        // clause like "والفرق بينهما هو مصدر الطاقة".
        const tokens = before.match(/[ء-ي][ء-ي\u2010-]*/g) ?? [];
        let arabic: string | undefined;
        // Arabic writes conjunctions and prepositions straight onto the word
        // (والمهبط is literally "and-the-cathode"), so also try the candidate
        // with a leading clitic removed.
        const strip = (w: string) => (/^[وفبكل]ال/.test(w) ? w.slice(1) : w);
        for (let n = Math.min(6, tokens.length); n >= 1; n--) {
          const words = tokens.slice(-n);
          for (const cand of [words.join(" "), [...words.slice(0, -1), strip(words.at(-1)!)].join(" ")]) {
            if (cand in GLOSSARY) {
              arabic = cand;
              break;
            }
          }
          if (arabic) break;
        }
        const expected = arabic ? GLOSSARY[arabic] : undefined;

        if (!expected) {
          if (arabic) {
            console.log(
              `FAIL ${slug}/${section.id} ${where}: "${arabic}" is not in the glossary ` +
                `but is glossed as ((${term})))`,
            );
          } else {
            console.log(
              `FAIL ${slug}/${section.id} ${where}: ((${term})) has no Arabic term before it`,
            );
          }
          problems++;
          continue;
        }

        if (expected !== term) {
          console.log(
            `FAIL ${slug}/${section.id} ${where}: "${arabic}" should be glossed ` +
              `((${expected})) not ((${term})))`,
          );
          problems++;
          continue;
        }

        // Standalone texts do not participate in repeat counting.
        const standalone = where.endsWith(".alt") || where.endsWith(".caption");
        if (standalone) continue;

        if (seen.has(term)) {
          console.log(
            `REPEAT ${slug}/${section.id} ${where}: ((${term})) already glossed at ${seen.get(term)}`,
          );
          repeats++;
        } else {
          seen.set(term, where);
        }
      }
    }
  }
}

console.log(
  `\n${glosses} gloss(es) checked, ${problems} problem(s), ${repeats} repeat(s)` +
    (strict && repeats ? " [strict: repeats counted as failures]" : ""),
);
process.exit(problems || (strict && repeats) ? 1 : 0);
