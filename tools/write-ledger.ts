// Writes tools/translation_ledger.txt: the list of content still served in
// English under /ar. tools/check_site.py reads that file, and
// --strict-translation turns any entry into a build failure.
//
// Kept as a file rather than an inline npm one-liner so the quoting stays
// readable and the output format is defined in one place.
//
//   npm run ledger

import fs from "node:fs";
import path from "node:path";
import { untranslated } from "../content/ar";

const out = path.join(process.cwd(), "tools", "translation_ledger.txt");

const header = [
  "# Content still served in English under /ar.",
  "# Regenerate with: npm run ledger",
  "# Read by tools/check_site.py; --strict-translation turns these into failures.",
];

fs.writeFileSync(out, [...header, ...untranslated].join("\n") + "\n", "utf8");

const sections = untranslated.filter((x) => !x.includes("#")).length;
const questions = untranslated.length - sections;
console.log(
  `${untranslated.length} pending: ${sections} sections, ${questions} questions`,
);
