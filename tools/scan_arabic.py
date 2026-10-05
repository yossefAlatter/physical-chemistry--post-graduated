import re
import sys
import unicodedata

# Arabic letters and digits only. Deliberately excludes Arabic punctuation
# (، ؛ ؟ ٪ ٫ ٬) so that a chemical symbol or a unit followed by an Arabic
# comma - "copper،" "12 V،" - is not reported as spliced text.
AR_LETTER = "[\u0621-\u064A\u0660-\u0669]"
LATIN_RUN = "[A-Za-z]{2,}"
GLYPH = re.compile("[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]")
SPLICED = re.compile(AR_LETTER + LATIN_RUN + "|" + LATIN_RUN + AR_LETTER)
# Punctuation that legitimately appears inside the Arabic content.
ALLOWED_PUNCT = set(
    "\u00b7\u2190\u2192\u2026\u2014\u2713\u2717\u00b2\u00b3\u00b9"
    "\u207a\u207b\u00b0\u00b1\u00d7\u00f7\u2248\u2265\u2264\u221a"
    "\u03bc\u03a9\u0394\u00ab\u00bb\u0640\u060c\u061b\u061f\u066a\u066b"
)

path = sys.argv[1]
src = open(path, encoding="utf-8").read()
issues = []

for lineno, line in enumerate(src.split("\n"), 1):
    for ch in line:
        o = ord(ch)
        if GLYPH.match(ch) or (0x20 <= o <= 0x7E) or ch in ALLOWED_PUNCT:
            continue
        issues.append((lineno, "GLYPH", repr(ch), hex(o), unicodedata.name(ch, "?")))
    for m in SPLICED.finditer(line):
        issues.append((lineno, "SPLICED", repr(m.group(0)), "", ""))

for i in issues:
    print(*i)
print("--- %d issue(s) in %s" % (len(issues), path))
sys.exit(1 if issues else 0)
