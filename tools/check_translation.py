#!/usr/bin/env python
"""Check an Arabic content file against its English original.

Translation is only safe if the structure survives it. A translated question
bank that renumbers an answer, drops a question, or invents a topicId would
quietly teach the wrong thing, so those are hard failures here rather than
things to notice later in the browser.

Compared per question:
  id, topicId, quick flag, answer index, and the number of options

Also reports how much Arabic is actually present, so a file that is mostly
still English cannot pass as translated.

    python tools/check_translation.py content/ar/fundamentals.mcq.ts content/fundamentals.mcq.ts
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(path):
    with open(os.path.join(ROOT, path), encoding="utf-8") as fh:
        return fh.read()


def entries(body):
    """Every { id: ..., ... } object in the file, in order."""
    out = []
    for m in re.finditer(r'\{\s*\n\s*"?id"?\s*:\s*"([^"]+)"', body):
        start = m.start()
        depth = 0
        for i in range(start, len(body)):
            if body[i] == "{":
                depth += 1
            elif body[i] == "}":
                depth -= 1
                if depth == 0:
                    out.append((m.group(1), body[start : i + 1]))
                    break
    return out


def field(chunk, name):
    m = re.search(r'"%s":\s*(".*?"|\[[^\]]*\]|true|false|null)' % name, chunk, re.S)
    if not m:
        return None
    return m.group(1)


def options(chunk):
    m = re.search(r'"options":\s*\[(.*?)\]', chunk, re.S)
    if not m:
        return None
    return len(re.findall(r'^\s*"', m.group(1), re.M))


def arabic_ratio(text):
    letters = [c for c in text if c.isalpha()]
    if not letters:
        return 0.0
    ar = sum(1 for c in letters if 0x0600 <= ord(c) <= 0x06FF)
    return ar / len(letters)


def main(argv):
    if len(argv) != 3:
        print(__doc__)
        return 2
    ar_path, en_path = argv[1], argv[2]

    ar_entries = entries(read(ar_path))
    en_entries = entries(read(en_path))
    problems = []

    ar_ids = [i for i, _ in ar_entries]
    en_ids = [i for i, _ in en_entries]

    if not en_entries:
        problems.append("no questions parsed out of %s - checker is broken" % en_path)
    if not ar_entries:
        problems.append("no questions parsed out of %s - checker is broken" % ar_path)

    if ar_ids != en_ids:
        missing = [i for i in en_ids if i not in ar_ids]
        extra = [i for i in ar_ids if i not in en_ids]
        if missing:
            problems.append("missing questions: %s" % ", ".join(missing))
        if extra:
            problems.append("unexpected questions: %s" % ", ".join(extra))
        if not missing and not extra:
            problems.append("question order differs from the English original")

    en_by_id = dict(en_entries)
    for qid, chunk in ar_entries:
        if qid not in en_by_id:
            continue
        src = en_by_id[qid]
        for name in ("topicId", "quick"):
            a, b = field(chunk, name), field(src, name)
            if a is not None and b is not None and a != b:
                problems.append("%s: %s is %s, English has %s" % (qid, name, a, b))
        a, b = field(chunk, "answer"), field(src, "answer")
        if a != b:
            problems.append("%s: answer is %s, English has %s" % (qid, a, b))
        ao, bo = options(chunk), options(src)
        if ao != bo:
            problems.append("%s: %s options, English has %s" % (qid, ao, bo))
        if ao is not None and field(chunk, "answer"):
            try:
                idx = int(field(chunk, "answer"))
                if not 0 <= idx < ao:
                    problems.append("%s: answer index %d out of range" % (qid, idx))
            except ValueError:
                pass

    ratio = arabic_ratio(read(ar_path))
    print("%s: %d entries, %.0f%% Arabic letters" % (ar_path, len(ar_entries), ratio * 100))
    if ratio < 0.5:
        problems.append("only %.0f%% Arabic letters - looks untranslated" % (ratio * 100))

    for p in problems:
        print("  PROBLEM: %s" % p)
    print("translation check %s" % ("FAILED" if problems else "passed"))
    return 1 if problems else 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
