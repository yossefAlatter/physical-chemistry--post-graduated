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
import type { Block, Mcq, Section } from "../content/types";

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

/**
 * The translatable text of one question. A question is its own unit, so its
 * gloss scope is the question rather than the whole bank: the same term is
 * legitimately glossed again in the next question.
 */
function questionStrings(q: Mcq): Array<{ where: string; text: string }> {
  const out: Array<{ where: string; text: string }> = [
    { where: "question", text: q.question },
    { where: "explanation", text: q.explanation },
  ];
  q.options.forEach((o, j) => out.push({ where: `options[${j}]`, text: o }));
  return out;
}

/**
 * The ways a written Arabic phrase can be the same term as a glossary key.
 *
 * Arabic writes clitics and the definite article straight onto the word, so
 * the glossary key "تفاعل نصفي" turns up in the prose as "التفاعل النصفي"
 * (definite), "بالتفاعل النصفي" (definite plus a preposition) or
 * "وتفاعل نصفي" (conjunction). Comparing the bare letters means the content
 * does not have to be written around the table's spelling.
 *
 * Only the ends of the phrase are touched: a clitic or ال can only ever be
 * attached to the first or the last word of a term.
 */
function candidates(words: string[]): string[] {
  const clitic = (w: string) => (/^[وفبكل]/.test(w) ? w.slice(1) : w);
  const definite = (w: string) => (/^ال/.test(w) ? w.slice(2) : w);
  const first = words[0];
  const last = words.at(-1)!;
  const out = new Set<string>();
  const firsts = [first, clitic(first), definite(first), definite(clitic(first))];
  const lasts = [last, clitic(last), definite(last), definite(clitic(last))];
  if (words.length === 1) {
    // a one-word term has only one end to strip
    for (const f of firsts) out.add(f);
    return [...out];
  }
  const middle = words.slice(1, -1);
  for (const f of firsts) {
    for (const l of lasts) out.add([f, ...middle, l].join(" "));
  }
  return [...out];
}

const GLOSS = /\(\(([^)]+)\)\)/g;

const strict = process.argv.includes("--strict");
let problems = 0;
let repeats = 0;
let glosses = 0;

/**
 * Check one scope's worth of strings. A scope is the unit in which a gloss
 * happens once: a section, a lecture summary, or a single question.
 */
function checkScope(scope: string, items: Array<{ where: string; text: string }>) {
  // Glosses seen in this scope, keyed by the English term.
  const seen = new Map<string, string>();

  for (const { where, text } of items) {
    for (const match of text.matchAll(GLOSS)) {
      glosses++;
      const term = match[1].trim();
      const before = text.slice(0, match.index ?? 0);

      if (SELF_ENGLISH.has(term)) {
        console.log(
          `FAIL ${scope} ${where}: ((${term})) is already Latin in the text`,
        );
        problems++;
        continue;
      }

      // Find the Arabic term: the longest run of words immediately before the
      // gloss that is a glossary key. Longest-first, so "الخلية الجلفانية"
      // wins over "الجلفانية" and a one-word key still matches after a
      // clause like "والفرق بينهما هو مصدر الطاقة".
      // Arabic letters plus the diacritics that sit inside a word: without the
      // shadda range "الكمّي" tokenises as "الكم" + "ي" and never matches.
      const tokens = before.match(/[\u0621-\u064A\u0670\u064B-\u065F\u2010-]+/g) ?? [];
      let arabic: string | undefined;
      for (let n = Math.min(6, tokens.length); n >= 1 && !arabic; n--) {
        for (const cand of candidates(tokens.slice(-n))) {
          if (cand in GLOSSARY) {
            arabic = cand;
            break;
          }
        }
      }
      const expected = arabic ? GLOSSARY[arabic] : undefined;

      if (!expected) {
        if (arabic) {
          console.log(
            `FAIL ${scope} ${where}: "${arabic}" is not in the glossary ` +
              `but is glossed as ((${term})))`,
          );
        } else {
          console.log(
            `FAIL ${scope} ${where}: ((${term})) has no Arabic term before it`,
          );
        }
        problems++;
        continue;
      }

      if (expected !== term) {
        console.log(
          `FAIL ${scope} ${where}: "${arabic}" should be glossed ` +
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
          `REPEAT ${scope} ${where}: ((${term})) already glossed at ${seen.get(term)}`,
        );
        repeats++;
      } else {
        seen.set(term, where);
      }
    }
  }
}

for (const [slug, partial] of Object.entries(arLectures)) {
  for (const section of (partial.sections ?? []) as Section[]) {
    checkScope(`${slug}/${section.id}`, strings(section));
  }

  // The lecture summary is standalone prose on the lecture page.
  if (partial.summary) {
    checkScope(`${slug} summary`, [{ where: "summary", text: partial.summary }]);
  }

  // A question is checked on its own, because that is how a reader meets it:
  // the same term may legitimately be glossed again in the next question.
  for (const q of (partial.mcq ?? []) as Mcq[]) {
    checkScope(`${slug}/quiz ${q.id}`, questionStrings(q));
  }
}

console.log(
  `\n${glosses} gloss(es) checked, ${problems} problem(s), ${repeats} repeat(s)` +
    (strict && repeats ? " [strict: repeats counted as failures]" : ""),
);
process.exit(problems || (strict && repeats) ? 1 : 0);
