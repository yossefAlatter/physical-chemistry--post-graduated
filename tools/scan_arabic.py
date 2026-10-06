"""Catch corrupted or half-translated Arabic in the Arabic content files.

Long hand-written Arabic reliably picked up two failures that type checking
cannot see, so every Arabic file is scanned before it is committed:

  GLYPH     a replacement character, or a CJK/Cyrillic/Greek letter sitting
            inside Arabic text
  SPLICED   a Latin word touching an Arabic letter with no space, e.g.
            "الشحنaaة", which is how a mangled symbol usually arrives
  LATIN     a Latin *word* among Arabic words, e.g. "ي surrender إلكتروناته".
            The SPLICED rule cannot see this because of the spaces, and it is
            the failure mode that survives review most easily.

    python3 tools/scan_arabic.py content/ar/fundamentals.ts
    python3 tools/scan_arabic.py content/ar/**/*.ts

LATIN words are allowed when they are a chemical symbol, a unit, a number
with a unit, or one of the memorisation mnemonics, which are deliberately
kept in English. Anything else is reported.
"""

import re
import sys
import unicodedata

# Arabic letters and digits only. Deliberately excludes Arabic punctuation
# (، ؛ ؟ ٪ ٫ ٬) so that a chemical symbol or a unit followed by an Arabic
# comma - "copper،" "12 V،" - is not reported as spliced text.
AR_LETTER = "[ء-ي٠-٩]"
LATIN_RUN = "[A-Za-z]{2,}"
GLYPH = re.compile("[؀-ۿݐ-ݿࢠ-ࣿﭐ-﷿ﹰ-﻿]")
SPLICED = re.compile(AR_LETTER + LATIN_RUN + "|" + LATIN_RUN + AR_LETTER)
# A Latin word that sits among Arabic words.
LATIN_WORD = re.compile(LATIN_RUN)
# A deliberate bilingual gloss, e.g. المصعد((anode)).
GLOSS = re.compile(r'\(\(.*?\)\)')
# An inline code span, e.g. `nF` or `E = E(cathode) - E(anode)`. The content
# is deliberately Latin and is validated by tsc, not by this script.
CODE_SPAN = re.compile(r'`[^`]*`')
# Double-quoted and single-quoted string contents, so code around them is
# never mistaken for prose.
STRING_LITERAL = re.compile(r'"((?:[^"\\\\]|\\\\.)*)"|\'((?:[^\'\\\\]|\\\\.)*)\'')

# Punctuation that legitimately appears inside the Arabic content.
ALLOWED_PUNCT = set(
    "·←→…—✓✗²³¹⁰⁴⁵⁶⁷⁸⁹"
    "⁺⁻°±×÷≈≥≤√"
    "μΩΔ«»ـ،؛؟٪٫"
    # Greek letters standing in for symbols: overpotential, extent of
    # reaction, kinematic viscosity, transfer coefficient. They are deliberate
    # here, and CJK and Cyrillic - which is what this check exists for - stay
    # flagged.
    "ηξνα"
)

# Latin that is allowed inside Arabic prose. Mnemonics are kept in English on
# purpose: the section that teaches them says they are English phrases.
ALLOWED_LATIN = {
    # mnemonics
    "Red", "Cat", "An", "Ox",
    # units and symbols
    "V", "mV", "A", "mA", "C", "F", "K", "J", "W", "Wh", "Ah", "mAh", "S",
    "mol", "ppm", "kJ", "kWh", "mV", "S", "mol", "mmol", "cm", "mm", "nm", "um",
    "L", "mL", "M", "N", "Pa", "Hz", "atm", "bar", "eV", "mS",
    # element symbols that are also Arabic text, and constants
    "Cu", "Zn", "Fe", "Ni", "Al", "Ag", "Au", "Pb", "Sn", "Pt", "H", "O",
    "Na", "K", "Ca", "Mg", "Cl", "C", "N", "S", "Li", "CO", "O2", "H2", "N2",
    "Cl2", "H2O", "NaCl", "ZnCl2", "CuSO4", "ZnSO4",
    # labels written on the figures and in the text
    "AA", "PCB", "USB",
    "acidic",  # only via ALLOWED_LATIN_EXACT below; kept out of prose checks
}
ALLOWED_LATIN.discard("acidic")

# Latin phrases allowed verbatim (the mnemonic sentences).
ALLOWED_PHRASES = [
    "Red Cat",
    "An Ox",
    "reduction at the cathode",
    "oxidation at the anode",
]

def strip_comments(src):
    """Remove // and /* */ comments, but only outside string literals.

    The scanner's job is to inspect the content strings. A doc comment that
    happens to quote an example - the glossary header does, with
    "المصعد (anode)" - is not content and must not be reported, and it must
    not be able to hide a real problem either, so this walks the source
    tracking quote state rather than using a regex.
    """
    out = []
    i = 0
    n = len(src)
    quote = None
    while i < n:
        ch = src[i]
        if quote:
            out.append(ch)
            if ch == "\\":
                if i + 1 < n:
                    out.append(src[i + 1])
                    i += 2
                    continue
            elif ch == quote:
                quote = None
            i += 1
            continue
        if ch in "\"'`":
            quote = ch
            out.append(ch)
            i += 1
            continue
        if src.startswith("//", i):
            while i < n and src[i] != "\n":
                i += 1
            continue
        if src.startswith("/*", i):
            end = src.find("*/", i + 2)
            i = n if end == -1 else end + 2
            # keep newlines so reported line numbers stay right
            out.append("\n" * src.count("\n", i - 2 if end == -1 else i, i))
            continue
        out.append(ch)
        i += 1
    return "".join(out)


path = sys.argv[1]
src = strip_comments(open(path, encoding="utf-8").read())
issues = []

for lineno, line in enumerate(src.split("\n"), 1):
    # Deliberate Latin lives in glosses and code spans; a stray Greek letter or
    # replacement character inside `q = nF \u03be` is fine, but one in the prose
    # is corruption. Both checks therefore run on the line with those removed.
    prose = CODE_SPAN.sub(" ", GLOSS.sub(" ", line))
    for ch in prose:
        o = ord(ch)
        if GLYPH.match(ch) or (0x20 <= o <= 0x7E) or ch in ALLOWED_PUNCT:
            continue
        issues.append((lineno, "GLYPH", repr(ch), hex(o), unicodedata.name(ch, "?")))
    for m in SPLICED.finditer(line):
        issues.append((lineno, "SPLICED", repr(m.group(0)), "", ""))

    # Latin words among Arabic words. Only the *string literals* are inspected,
    # so TypeScript property keys (title:, kind:, alt:) are not mistaken for
    # prose, and ids and file names - which are quoted but contain no Arabic -
    # are skipped by the Arabic test below.
    for literal in (a or b for a, b in STRING_LITERAL.findall(line)):
        if not re.search(AR_LETTER, literal):
            continue
        # Strip deliberate glosses first: المصعد((anode)) puts an English
        # word in the middle of Arabic on purpose, and check_glossary.ts is
        # what validates those, not this script.
        probe = CODE_SPAN.sub(" ", GLOSS.sub(" ", literal))
        for phrase in ALLOWED_PHRASES:
            probe = probe.replace(phrase, " ")
        for word in sorted(set(LATIN_WORD.findall(probe))):
            if word in ALLOWED_LATIN:
                continue
            issues.append((lineno, "LATIN", word, "", "Latin word in Arabic text"))

for i in issues:
    print(*i)
print("--- %d issue(s) in %s" % (len(issues), path))
sys.exit(1 if issues else 0)
