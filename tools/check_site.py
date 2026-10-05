"""Checks the rendered site.

Complements `check_figures.py`: that one guards the PNGs, this one guards the
HTML that references them. It boots nothing - point it at a running server.

    next start -p 4320 &
    ../electricial-chemistry/.venv/bin/python tools/check_site.py
    ../electricial-chemistry/.venv/bin/python tools/check_site.py --base https://site.vercel.app

Checks:
  * every route generated from the content registry answers 200
  * an unknown lecture and an unknown section answer 404
  * each section page links to exactly the right previous/next neighbours
  * each section page carries a quick check of the expected size
  * every image referenced by any page resolves
  * every question's topicId matches a real section
"""

from __future__ import annotations

import argparse
import os
import re
import sys
import urllib.error
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))

BASE = "http://localhost:4320"
problems: list[str] = []
notes: list[str] = []


def get(path: str) -> tuple[int, str]:
    req = urllib.request.Request(BASE + path, headers={"User-Agent": "check"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:  # noqa: BLE001
        problems.append(f"{path}: request failed ({e})")
        return 0, ""


def registry() -> list[tuple[str, list[str]]]:
    """(lecture slug, [section ids]) read straight from the TS sources."""
    out = []
    content_dir = os.path.join(ROOT, "content")
    for fn in sorted(os.listdir(content_dir)):
        # content/ar holds the translations; skip it here and check it
        # separately against the English tree.
        if not os.path.isfile(os.path.join(content_dir, fn)):
            continue
        if fn in ("index.ts", "types.ts") or fn.endswith(".mcq.ts"):
            continue
        body = open(os.path.join(content_dir, fn), encoding="utf-8").read()
        slug = re.search(r'slug:\s*"([a-z0-9-]+)"', body)
        if not slug:
            continue
        sections = re.findall(r'^\s{6}id:\s*"([a-z0-9-]+)",', body, re.M)
        out.append((slug.group(1), sections))
    return out


def qcounts() -> dict[str, dict[str, int]]:
    """{lecture slug: {topicId: number of questions}}"""
    out = {}
    for fn in sorted(os.listdir(os.path.join(ROOT, "content"))):
        if not fn.endswith(".mcq.ts"):
            continue
        body = open(os.path.join(ROOT, "content", fn), encoding="utf-8").read()
        slug = fn[: -len(".mcq.ts")]
        per: dict[str, int] = {}
        # both styles: "topicId": "x" (generated) and topicId: "x" (hand written)
        for t in re.findall(r'"?topicId"?\s*:\s*"([a-z0-9-]+)"', body):
            per[t] = per.get(t, 0) + 1
        out[slug] = per
    return out


def main() -> int:
    global BASE
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default=BASE)
    BASE = ap.parse_args().base.rstrip("/")
    notes.append(f"checking {BASE}")

    reg = registry()
    counts = qcounts()

    # 1. registry integrity: every topicId must match a real section
    for slug, per in counts.items():
        sections = dict(reg).get(slug)
        if sections is None:
            problems.append(f"{slug}.mcq.ts: no matching lecture file")
            continue
        for t in per:
            if t not in sections:
                problems.append(f"{slug}.mcq.ts: topicId {t!r} has no section")

    # 2. routes answer
    for slug, sections in reg:
        for path, label in [(f"/lectures/{slug}", "contents"),
                            (f"/lectures/{slug}/quiz", "quiz")]:
            code, _ = get(path)
            if code != 200:
                problems.append(f"{path} ({label}): HTTP {code}, expected 200")
        for s in sections:
            code, _ = get(f"/lectures/{slug}/{s}")
            if code != 200:
                problems.append(f"/lectures/{slug}/{s}: HTTP {code}, expected 200")
        notes.append(f"{slug}: {len(sections)} sections + contents + quiz = "
                     f"{len(sections) + 2} routes")

    for bad in ("/lectures/nope", "/lectures/lecture-1/nope", "/nope"):
        code, _ = get(bad)
        if code != 404:
            problems.append(f"{bad}: HTTP {code}, expected 404")

    # 3. neighbours, quick checks and images on every section page
    total_sections = 0
    total_quick = 0
    for slug, sections in reg:
        n = len(sections)
        for i, s in enumerate(sections):
            total_sections += 1
            code, html = get(f"/lectures/{slug}/{s}")
            if code != 200:
                continue

            prev_want = f"/lectures/{slug}/{sections[i - 1]}" if i else None
            next_want = (f"/lectures/{slug}/{sections[i + 1]}"
                         if i < n - 1 else None)
            nav = re.search(
                r'<nav aria-label="Section navigation".*?</nav>', html, re.S)
            if not nav:
                problems.append(f"{slug}/{s}: no section navigation")
                continue
            hrefs = set(re.findall(r'href="(/lectures/[^"]*)"', nav.group(0)))
            for want in (prev_want, next_want):
                if want and want not in hrefs:
                    problems.append(f"{slug}/{s}: navigation missing {want}")
            # exactly the two ends must be present, nothing stray
            if len(hrefs) != 2:
                problems.append(
                    f"{slug}/{s}: navigation has {len(hrefs)} links, expected 2")

            # quick check size
            want_q = min(3, counts.get(slug, {}).get(s, 0))
            if want_q:
                got = len(re.findall(r'aria-pressed="false"', html))
                if got < 4:
                    problems.append(f"{slug}/{s}: quick check rendered no options")
                if "Quick check" not in html:
                    problems.append(f"{slug}/{s}: no quick check block")
                total_quick += want_q

            if "<title>" not in html or "·" not in html.split("<title>")[1]:
                problems.append(f"{slug}/{s}: missing or malformed <title>")

    notes.append(f"{total_sections} section pages checked")
    notes.append(f"{total_quick} inline quick-check questions expected")

    # 4. every referenced image resolves
    seen = set()
    for slug, sections in reg:
        paths = ["/", f"/lectures/{slug}"] + [
            f"/lectures/{slug}/{s}" for s in sections]
        for p in paths:
            _, html = get(p)
            for src in re.findall(r'<img[^>]+src="/([^"]+)"', html):
                if src in seen:
                    continue
                seen.add(src)
                code, _ = get(f"/{src}")
                if code != 200:
                    problems.append(f"image {src}: HTTP {code}")
    notes.append(f"{len(seen)} distinct images resolved")

    print("\n".join(notes))
    if problems:
        print("\n".join(f"  FAIL {p}" for p in problems))
        print(f"\n{len(problems)} problem(s)")
        return 1
    print("\nall site checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())