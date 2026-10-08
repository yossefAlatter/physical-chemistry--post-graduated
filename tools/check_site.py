"""Checks the rendered site.

Complements `check_figures.py`: that one guards the PNGs, this one guards the
HTML that references them. It boots nothing - point it at a running server.

    next start -p 4320 &
    ../electricial-chemistry/.venv/bin/python tools/check_site.py
    ../electricial-chemistry/.venv/bin/python tools/check_site.py --base https://site.vercel.app

Checks:
  * every route generated from the content registry answers 200
  * an unknown lesson and an unknown section answer 404
  * each section page links to exactly the right previous/next neighbours
  * each section page carries a quick check of the expected size
  * every image referenced by any page resolves
  * each page declares the right lang and dir on <html>
  * no Arabic text leaks into <main>

Plus, once:
  * the PWA assets exist and the precache manifest resolves
"""

from __future__ import annotations

import argparse
import json
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

# prefix, locale code, the quick-check heading, the section-nav aria-label
LOCALES = [
    ("", "en", "Quick check", "Section navigation"),
]


def get(path: str, method: str = "GET") -> tuple[int, str]:
    req = urllib.request.Request(
        BASE + path, headers={"User-Agent": "check"}, method=method
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:  # noqa: BLE001
        problems.append(f"{path}: request failed ({e})")
        return 0, ""


def registry() -> list[tuple[str, list[str]]]:
    """(lesson slug, [section ids]) read straight from the TS sources."""
    out = []
    content_dir = os.path.join(ROOT, "content")
    for fn in sorted(os.listdir(content_dir)):
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
    """{lesson slug: {topicId: number of questions}}"""
    out = {}
    for fn in sorted(os.listdir(os.path.join(ROOT, "content"))):
        if not fn.endswith(".mcq.ts"):
            continue
        body = open(os.path.join(ROOT, "content", fn), encoding="utf-8").read()
        slug = re.search(r'export const (\w+): Mcq', body)
        if not slug:
            continue
        per: dict[str, int] = {}
        for topic in re.findall(r'topicId:\s*"([^"]+)"', body):
            per[topic] = per.get(topic, 0) + 1
        out[fn[: -len(".mcq.ts")]] = per
    return out


def check_locale(prefix: str, locale: str, qc_label: str, nav_label: str) -> None:
    """Every content-derived rule, run once per language tree."""
    reg = registry()
    counts = qcounts()

    # 1. registry integrity: every topicId must match a real section
    for slug, per in counts.items():
        sections = dict(reg).get(slug)
        if sections is None:
            problems.append(f"{slug}.mcq.ts: no matching lesson file")
            continue
        for t in per:
            if t not in sections:
                problems.append(f"{slug}.mcq.ts: topicId {t!r} has no section")

    # 2. routes answer
    for slug, sections in reg:
        for path, label in [
            (f"{prefix}/lessons/{slug}", "contents"),
            (f"{prefix}/lessons/{slug}/quiz", "quiz"),
        ]:
            code, _ = get(path)
            if code != 200:
                problems.append(f"{path} ({label}): HTTP {code}, expected 200")
        for s in sections:
            code, _ = get(f"{prefix}/lessons/{slug}/{s}")
            if code != 200:
                problems.append(f"{prefix}/lessons/{slug}/{s}: HTTP {code}")
        notes.append(
            f"{prefix or '/'}: {slug}: {len(sections)} sections + contents + quiz"
        )

    for bad in (
        f"{prefix}/lessons/nope",
        f"{prefix}/lessons/lesson-1/nope",
        f"{prefix}/nope",
    ):
        code, _ = get(bad)
        if code != 404:
            problems.append(f"{bad}: HTTP {code}, expected 404")

    # 3. neighbours, quick checks, document direction and title
    total_sections = total_quick = 0
    for slug, sections in reg:
        n = len(sections)
        for i, s in enumerate(sections):
            total_sections += 1
            path = f"{prefix}/lessons/{slug}/{s}"
            code, html = get(path)
            if code != 200:
                continue

            html_tag = re.search(r"<html[^>]*>", html)
            if not html_tag:
                problems.append(f"{path}: no <html> tag")
            else:
                tag = html_tag.group(0)
                want_dir = "ltr"
                if f'lang="{locale}"' not in tag:
                    problems.append(f"{path}: <html> is not lang={locale!r}")
                if f'dir="{want_dir}"' not in tag:
                    problems.append(f"{path}: <html> is not dir={want_dir!r}")

            prev_want = (
                f"{prefix}/lessons/{slug}/{sections[i - 1]}" if i else None
            )
            next_want = (
                f"{prefix}/lessons/{slug}/{sections[i + 1]}"
                if i < n - 1
                else None
            )
            nav = re.search(
                r'<nav aria-label="%s".*?</nav>' % re.escape(nav_label), html, re.S)
            if not nav:
                problems.append(f"{path}: no section navigation")
                continue
            hrefs = set(re.findall(r'href="([^"]*lessons/[^"]*)"', nav.group(0)))
            for want in (prev_want, next_want):
                if want and want not in hrefs:
                    problems.append(f"{path}: navigation missing {want}")
            if len(hrefs) != 2:
                problems.append(
                    f"{path}: navigation has {len(hrefs)} links, expected 2"
                )

            want_q = min(3, counts.get(slug, {}).get(s, 0))
            if want_q:
                if len(re.findall(r'aria-pressed="false"', html)) < 4:
                    problems.append(f"{path}: quick check rendered no options")
                if qc_label not in html:
                    problems.append(f"{path}: no quick check block")
                total_quick += want_q

            if "<title>" not in html or "·" not in html.split("<title>")[1]:
                problems.append(f"{path}: missing or malformed <title>")

            # Inline markup must never reach the reader literally. This is a
            # real bug that shipped once: keyPoints, quiz questions, options
            # and explanations were rendered as plain strings, so a gloss or a
            # **bold** marker showed up as raw "((anode))" on the page. Only
            # the visible markup is checked - the same markers inside the
            # inlined RSC payload in <script> are expected and harmless.
            visible = re.sub(r"<script.*?</script>", "", html, flags=re.S)
            visible = re.sub(r"<style.*?</style>", "", visible, flags=re.S)
            # KaTeX renders LaTeX, not the content's inline markup, so an
            # asterisk inside \text{...} is a literal asterisk there.
            visible = re.sub(r'<div[^>]*role="math".*?</div>', "", visible, flags=re.S)
            for marker, label in [(r"\(\(", "gloss"), (r"\*\*[^*]+\*\*", "bold")]:
                if re.search(marker, visible):
                    problems.append(
                        f"{path}: unrendered {label} markup in visible output"
                    )

            # No Arabic may leak into the content.
            main = re.search(r"<main.*?</main>", html, re.S)
            if not main:
                problems.append(f"{path}: no <main> element")
            elif re.search(r"[\u0600-\u06FF]", main.group(0)):
                problems.append(f"{path}: Arabic text inside <main>")

    notes.append(f"{locale}: {total_sections} section pages checked")
    notes.append(f"{locale}: {total_quick} inline quick-check questions expected")

    # 4. every referenced image resolves
    seen: set[str] = set()
    for slug, sections in reg:
        paths = (
            [f"{prefix}/", f"{prefix}/lessons/{slug}"]
            + [f"{prefix}/lessons/{slug}/{s}" for s in sections]
        )
        for p in paths:
            _, html = get(p)
            for src in re.findall(r'<img[^>]+src="/([^"]+)"', html):
                if src in seen:
                    continue
                seen.add(src)
                code, _ = get(f"/{src}")
                if code != 200:
                    problems.append(f"image {src}: HTTP {code}")
    notes.append(f"{locale}: {len(seen)} distinct images resolved")


def check_pwa() -> None:
    # service worker, manifests, offline pages, precache manifest
    for path, kind in [
        ("/sw.js", "javascript"),
        ("/manifest.webmanifest", "json"),
        ("/offline", "html"),
        ("/precache-manifest", "json"),
    ]:
        code, body = get(path)
        if code != 200:
            problems.append(f"pwa {path}: HTTP {code}, expected 200")
            continue
        if kind == "javascript":
            if "addEventListener" not in body:
                problems.append("pwa /sw.js: does not look like a service worker")
            rev = re.search(r'const REVISION = "([^"]+)"', body)
            if not rev:
                problems.append("pwa /sw.js: no REVISION constant")
            elif rev.group(1) in ("", "dev", "v1"):
                problems.append(
                    f"pwa /sw.js: REVISION is {rev.group(1)!r}, so the worker "
                    "never changes and a deploy keeps the old precache"
                )
            else:
                notes.append(f"pwa: sw.js REVISION {rev.group(1)}")
        if kind == "json" and path.endswith("precache-manifest"):
            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                problems.append("pwa /precache-manifest: not valid JSON")
                continue
            urls = data.get("urls") or []
            notes.append(f"pwa: precache manifest lists {len(urls)} URLs")
            if not urls:
                problems.append("pwa /precache-manifest: empty list")
                return
            # A 404 in the list just burns install time, and a page or hashed
            # asset missing from it means the reader is offline before they
            # have ever visited that route. So check the list covers the whole
            # content tree, and that every entry resolves.
            for slug, sections in registry():
                for want in (
                    f"/lessons/{slug}",
                    f"/lessons/{slug}/quiz",
                    *[f"/lessons/{slug}/{x}" for x in sections],
                ):
                    if want not in urls:
                        problems.append(f"pwa precache: missing {want}")
            hashed = [u for u in urls if u.startswith("/_next/static/")]
            if len(hashed) < 5:
                problems.append(
                    f"pwa precache: only {len(hashed)} hashed build assets, "
                    "a fresh install would not be styled or interactive"
                )
            notes.append(f"pwa: {len(hashed)} hashed build assets precached")

            bad = []
            for u in urls:
                code, _ = get(u, method="HEAD")
                if code != 200:
                    bad.append(f"{u} (HTTP {code})")
            notes.append(f"pwa: {len(urls) - len(bad)}/{len(urls)} precache URLs resolve")
            for b in bad[:10]:
                problems.append(f"pwa precache URL {b}")


def main() -> int:
    global BASE
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", default=BASE)
    args = ap.parse_args()
    BASE = args.base.rstrip("/")
    notes.append(f"checking {BASE}")

    for prefix, locale, qc_label, nav_label in LOCALES:
        check_locale(prefix, locale, qc_label, nav_label)
    check_pwa()

    print("\n".join(notes))
    if problems:
        print("\n".join(f"  FAIL {p}" for p in problems))
        print(f"\n{len(problems)} problem(s)")
        return 1
    print("\nall site checks passed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
