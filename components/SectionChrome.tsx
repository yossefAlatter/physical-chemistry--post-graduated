"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { t } from "@/lib/i18n";
import type { TocItem } from "@/lib/toc";

/**
 * The reading chrome for a section page: a top reading-progress bar, a sticky
 * "On this page" rail on wide screens, comfort controls (text size, back to
 * top), and a slide-up contents sheet on phones and tablets.
 *
 * The section body is passed in as children; this component supplies the
 * landmarks around it. Design notes:
 *
 *  - The progress bar answers "how much is left", which is the question every
 *    reader asks on a long section. It is fixed to the very top of the
 *    viewport so it stays visible under the sticky app header.
 *  - The rail lists only landmarks that actually exist (`buildToc` derives
 *    them from the blocks), tracked with a scroll handler so the item you are
 *    reading is always the highlighted one.
 *  - Text size is persisted, so a reader who sizes the page up keeps it.
 */
export function SectionChrome({
  toc,
  sections,
  currentId,
  children,
}: {
  toc: TocItem[];
  sections: { id: string; label: string; tone?: string; href: string }[];
  currentId: string;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(toc[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [sheet, setSheet] = useState(false);
  // A larger text size is a habit, not a view: read it once on first render.
  // It can differ between the server HTML and the first client render, so the
  // one element it touches is flagged to skip the hydration warning.
  const [scale, setScale] = useState(() => {
    try {
      const saved = Number(localStorage.getItem("reading-scale"));
      return saved === 1.0625 || saved === 1.125 ? saved : 1;
    } catch {
      return 1;
    }
  });
  const ids = toc.map((t) => t.id);

  useEffect(() => {
    let raf = 0;
    let ticking = false;
    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
      setScrolled(window.scrollY > 480);

      const probe = window.scrollY + 140;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= probe) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(measure);
      }
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [ids.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist text size; a larger size is a preference, so it outlives the tab.
  const changeScale = (dir: 1 | -1) => {
    setScale((s) => {
      const sizes = [1, 1.0625, 1.125];
      const i = sizes.indexOf(s);
      const next = sizes[Math.min(Math.max(i + dir, 0), sizes.length - 1)];
      try {
        localStorage.setItem("reading-scale", String(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const backToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const currentIndex = Math.max(
    0,
    sections.findIndex((s) => s.id === currentId),
  );

  const sectionList = (
    <ol className="space-y-0.5">
      {sections.map((s) => (
        <li key={s.id}>
          <Link
            href={s.href}
            data-tone={s.tone}
            onClick={() => setSheet(false)}
            aria-current={s.id === currentId ? "true" : undefined}
            className={[
              "flex items-center gap-2 rounded-md px-2 py-1.5 text-[0.84rem] leading-snug transition-colors",
              s.id === currentId
                ? "bg-[color:var(--tone-soft)] font-semibold text-ink"
                : "text-ink-soft hover:bg-tint hover:text-ink",
            ].join(" ")}
          >
            {s.tone && (
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--tone)]"
              />
            )}
            <span className="min-w-0">{s.label}</span>
          </Link>
        </li>
      ))}
    </ol>
  );

  const tocList = toc.length > 0 && (
    <ol className="space-y-0.5">
      {toc.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={() => setSheet(false)}
            className={[
              "flex items-center justify-between gap-1.5 rounded-md px-2 py-1 text-[0.82rem] leading-snug transition-colors",
              active === item.id
                ? "bg-tint font-medium text-ink"
                : "text-ink-soft hover:bg-tint hover:text-ink",
            ].join(" ")}
          >
            <span className="min-w-0">{item.label}</span>
            {active === item.id && (
              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-[color:var(--tone)]"
              />
            )}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      {/* reading progress bar, fixed above the app header */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      >
        <div
          className="h-full bg-[color:var(--tone)] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:items-start xl:gap-8">
        <div
          className="min-w-0"
          style={{ "--reading-scale": scale } as React.CSSProperties}
          suppressHydrationWarning
        >
          {children}
        </div>

        {/* desktop rail */}
        <aside
          aria-label={DICT.inThisLesson}
          className="no-print sticky top-6 ms-6 hidden max-h-[calc(100vh-3rem)] overflow-y-auto pt-1 xl:block"
        >
          <div className="border-s-2 border-rule ps-3 pb-1">
            <p className="eyebrow">{DICT.onThisPage}</p>
            {tocList || <p className="mt-1 text-[0.82rem] text-faint">—</p>}
          </div>
          <div className="mt-5 border-s-2 border-rule ps-3 pb-1">
            <p className="eyebrow">{DICT.inThisLesson}</p>
            <div className="mt-1.5">{sectionList}</div>
          </div>
        </aside>
      </div>

      {/* floating comfort controls: text size + back to top */}
      <div className="no-print fixed end-4 bottom-4 z-40 flex flex-col items-end gap-2">
        <div className="flex overflow-hidden rounded-lg border border-rule bg-surface shadow-md dark:shadow-black/40">
          <button
            type="button"
            onClick={() => changeScale(-1)}
            aria-label={DICT.decreaseText}
            className="flex min-h-11 min-w-11 items-center justify-center border-e border-rule text-[0.85rem] font-semibold text-ink-soft transition-colors hover:bg-tint hover:text-ink disabled:opacity-35"
            disabled={scale === 1}
          >
            A−
          </button>
          <button
            type="button"
            onClick={() => changeScale(1)}
            aria-label={DICT.increaseText}
            className="flex min-h-11 min-w-11 items-center justify-center text-[0.95rem] font-semibold text-ink-soft transition-colors hover:bg-tint hover:text-ink disabled:opacity-35"
            disabled={scale === 1.125}
          >
            A+
          </button>
        </div>

        {scrolled && (
          <button
            type="button"
            onClick={backToTop}
            aria-label={DICT.backToTop}
            className="flex min-h-11 items-center gap-1.5 rounded-lg border border-rule bg-surface px-3 text-[0.84rem] font-semibold text-ink-soft shadow-md transition-colors hover:text-ink dark:shadow-black/40"
          >
            ↑ <span className="hidden sm:inline">{DICT.backToTop}</span>
          </button>
        )}
      </div>

      {/* mobile: sticky "Contents" button under the app header */}
      <div className="no-print sticky bottom-3 z-30 mt-6 flex justify-center xl:hidden">
        <button
          type="button"
          onClick={() => setSheet(true)}
          aria-haspopup="dialog"
          aria-expanded={sheet}
          className="flex min-h-11 items-center gap-2 rounded-full border border-rule bg-surface px-4 text-[0.86rem] font-semibold text-ink shadow-md transition-colors hover:border-accent"
        >
          ☰ <span>{DICT.contentsButton}</span>
        </button>
      </div>

      {/* mobile / tablet: slide-up contents sheet */}
      {sheet && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={DICT.contentsAria}
          className="no-print fixed inset-0 z-[60] xl:hidden"
        >
          <button
            type="button"
            aria-label={DICT.contentsAria}
            className="absolute inset-0 h-full w-full bg-ink/55 backdrop-blur-[2px]"
            onClick={() => setSheet(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[78vh] overflow-y-auto rounded-t-2xl border-t border-rule bg-surface p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-2xl">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-rule" aria-hidden="true" />
            <div className="mb-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <section>
                <p className="eyebrow">{DICT.onThisPage}</p>
                <div className="mt-2">{tocList}</div>
              </section>
              <section>
                <p className="eyebrow">{DICT.inThisLesson}</p>
                <div className="mt-2">{sectionList}</div>
              </section>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-rule pt-3">
              <p className="text-[0.78rem] font-semibold uppercase tracking-wider text-faint">
                {fill(DICT.sectionOf, {
                  i: currentIndex + 1,
                  n: sections.length,
                })}
              </p>
              <button
                type="button"
                onClick={() => setSheet(false)}
                className="rounded-lg border border-rule px-3 py-2 text-[0.84rem] font-semibold text-ink-soft transition-colors hover:bg-tint"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Reading-chrome labels, resolved once at import; t() is pure English.
const DICT = { ...t() };

function fill(s: string, vars: Record<string, string | number>): string {
  return s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}