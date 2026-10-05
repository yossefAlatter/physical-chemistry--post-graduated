"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  alternateLocalePath,
  getSubjects,
  homeHref,
  lectureHref,
  quizHref,
  sectionHref,
} from "@/content/registry";
import ThemeToggle from "@/components/ThemeToggle";
import { fill, localeName, locales, t, type Locale } from "@/lib/i18n";

/**
 * App shell: a permanent sidebar from `lg` up, and a slide-in drawer with a
 * hamburger below it. The drawer closes on navigation and on Escape, and it
 * traps the page behind an overlay so a stray tap cannot scroll it.
 *
 * The sidebar is generated from the subject registry for `locale`, so a new
 * subject, course, lecture or section appears here without edits here - and
 * the same code serves both languages, reading the tree and the links that
 * belong to the language currently being viewed.
 *
 * Side placement follows the text direction: the drawer hangs off the inline
 * start edge, which is the left in English and the right in Arabic. The
 * `rtl:` variants below flip both the anchor and the off-screen offset.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const d = t(locale);

  // Escape closes the drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    // stop the page behind the drawer from scrolling
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="min-h-full">
      {/* ---------- mobile top bar ---------- */}
      <header className="no-print sticky top-0 z-40 border-b border-rule bg-surface/90 backdrop-blur-lg lg:hidden">
        <div className="flex items-center gap-2 px-3 py-2.5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={d.navOpen}
            aria-expanded={open}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rule text-ink transition-colors active:bg-tint"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M3 5.5h14M3 10h14M3 14.5h14"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <Link href={homeHref(locale)} className="min-w-0 flex-1">
            <span className="block truncate font-serif text-[1.05rem] font-semibold text-ink">
              {d.siteTitle}
            </span>
            <span className="block truncate text-[0.66rem] font-bold uppercase tracking-[0.16em] text-accent">
              {d.siteTagline}
            </span>
          </Link>
          <LangSwitch locale={locale} />
          <ThemeToggle locale={locale} />
        </div>
      </header>

      {/* ---------- drawer backdrop ---------- */}
      {open && (
        <button
          type="button"
          aria-label={d.navClose}
          onClick={() => setOpen(false)}
          className="no-print fixed inset-0 z-40 bg-ink/55 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* ---------- sidebar ---------- */}
      <nav
        aria-label={d.navCourseNavigation}
        className={[
          "no-print fixed inset-y-0 start-0 z-50 w-[17rem] max-w-[85vw]",
          "overflow-y-auto overscroll-contain border-e border-rule bg-surface",
          "transition-transform duration-200 ease-out",
          "lg:translate-x-0",
          open ? "translate-x-0 shadow-2xl" : "-translate-x-full rtl:translate-x-full",
        ].join(" ")}
      >
        <SidebarBody locale={locale} onNavigate={() => setOpen(false)} />
      </nav>

      {/* ---------- page ---------- */}
      <div className="lg:ps-[17rem]">
        <main
          id="main"
          className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

/**
 * Switch to the same page in the other language. There is no Arabic page for
 * a URL that has not been written yet, so the link always points at the
 * matching path rather than at a locale index.
 */
function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other = locales.find((l) => l !== locale) ?? "en";
  const href = alternateLocalePath(locale, pathname);
  const label = fill(t(locale).switchTo, { name: localeName[other] });

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      aria-label={t(locale).switchLanguage}
      title={label}
      className={[
        "flex h-9 min-w-9 items-center justify-center rounded-lg border border-rule px-2",
        "text-[0.8rem] font-semibold text-ink-soft",
        "transition-colors hover:border-accent hover:text-accent",
      ].join(" ")}
    >
      {localeName[other]}
    </Link>
  );
}

function SidebarBody({
  locale,
  onNavigate,
}: {
  locale: Locale;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const subjects = getSubjects(locale);
  const d = t(locale);

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-start justify-between gap-2 border-b border-rule bg-surface-2 px-5 py-4">
        <Link href={homeHref(locale)} onClick={onNavigate} className="min-w-0">
          <span className="text-shine block font-serif text-lg leading-tight font-semibold">
            {d.siteTitle}
          </span>
          <span className="mt-0.5 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
            {d.siteTagline}
          </span>
        </Link>
        <div className="flex shrink-0 items-center gap-1.5">
          <LangSwitch locale={locale} />
          <ThemeToggle locale={locale} />
          <button
            type="button"
            onClick={onNavigate}
            aria-label={d.navClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-rule text-ink-soft lg:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 px-3 py-4">
        {subjects.map((subject) => (
          <div key={subject.slug} className="mb-6">
            {subjects.length > 1 && (
              <h2 className="px-2 pb-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-faint">
                {subject.title}
              </h2>
            )}

            {subject.courses.map((course) => (
              <div key={course.id} className="mb-4 last:mb-0">
                <h3 className="px-2 pb-1.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-faint">
                  {course.title}
                </h3>
                <ul className="space-y-0.5">
                  {course.lectures.map((lecture) => {
                    const lectureBase = lectureHref(locale, lecture);
                    const onLecture =
                      pathname === lectureBase ||
                      pathname.startsWith(`${lectureBase}/`);
                    return (
                      <li key={lecture.slug}>
                        <Link
                          href={lectureBase}
                          onClick={onNavigate}
                          aria-current={pathname === lectureBase ? "page" : undefined}
                          className={[
                            "flex items-baseline justify-between gap-2 rounded-lg px-2.5 py-2.5",
                            "text-[0.94rem] leading-snug transition-colors",
                            onLecture
                              ? "bg-accent-light font-semibold text-accent-dark"
                              : "text-ink-soft hover:bg-tint hover:text-ink",
                          ].join(" ")}
                        >
                          <span className="min-w-0">{lecture.label}</span>
                          <span
                            className={[
                              "shrink-0 text-[0.68rem] font-semibold tabular-nums",
                              onLecture ? "text-accent" : "text-faint",
                            ].join(" ")}
                          >
                            {lecture.sections.length}
                          </span>
                        </Link>

                        {onLecture && (
                          <ul className="mb-1 ms-2.5 mt-0.5 space-y-0.5 border-s border-rule ps-2">
                            {lecture.sections.map((s) => (
                              <SubLink
                                key={s.id}
                                href={sectionHref(locale, lecture, s)}
                                label={s.title}
                                tone={s.tone}
                                active={pathname === sectionHref(locale, lecture, s)}
                                onNavigate={onNavigate}
                              />
                            ))}
                            <SubLink
                              href={quizHref(locale, lecture)}
                              label={d.navAllQuestions}
                              tone={undefined}
                              active={pathname === quizHref(locale, lecture)}
                              onNavigate={onNavigate}
                            />
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div className="rounded-lg border border-rule bg-surface-2 px-3 py-3 text-[0.8rem] leading-relaxed text-ink-soft">
          <p className="font-semibold text-ink">{d.navHowBuiltTitle}</p>
          <p className="mt-1">{d.navHowBuiltBody}</p>
        </div>
      </div>

      <div className="border-t border-rule px-5 py-4 text-[0.75rem] text-faint">
        <p className="font-semibold text-ink-soft">Yossef Hafez Alatter</p>
        <p>{d.navSecondAuthor}</p>
      </div>
    </div>
  );
}

function SubLink({
  href,
  label,
  tone,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  tone?: string;
  active?: boolean;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        data-tone={tone}
        aria-current={active ? "page" : undefined}
        className={[
          "flex min-h-9 items-center gap-2 rounded-md px-2 text-[0.85rem] leading-snug transition-colors",
          active
            ? "bg-[color:var(--tone-soft)] font-semibold text-ink"
            : "text-ink-soft hover:bg-[color:var(--tone-soft)] hover:text-ink",
        ].join(" ")}
      >
        {tone && (
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 rounded-full bg-[color:var(--tone)]"
          />
        )}
        <span className="min-w-0">{label}</span>
      </Link>
    </li>
  );
}
