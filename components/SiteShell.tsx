"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { courses } from "@/content";

/**
 * App shell: a permanent sidebar from `lg` up, and a slide-in drawer with a
 * hamburger below it. The drawer closes on navigation and on Escape, and it
 * traps the page behind an overlay so a stray tap cannot scroll it.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Every link in the sidebar closes the drawer through onNavigate, so the
  // route change itself needs no effect.

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
      <header className="no-print sticky top-0 z-40 border-b border-rule bg-white/95 backdrop-blur lg:hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            className="-ml-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-rule text-ink active:bg-tint"
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
          <Link href="/" className="min-w-0">
            <span className="block truncate font-serif text-[1.05rem] font-semibold text-ink">
              Electrochemistry
            </span>
            <span className="block truncate text-[0.7rem] font-semibold uppercase tracking-widest text-accent">
              Lectures
            </span>
          </Link>
        </div>
      </header>

      {/* ---------- drawer backdrop ---------- */}
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="no-print fixed inset-0 z-40 bg-ink/45 backdrop-blur-[2px] lg:hidden"
        />
      )}

      {/* ---------- sidebar ---------- */}
      <nav
        aria-label="Course navigation"
        className={[
          "no-print fixed inset-y-0 left-0 z-50 w-[17rem] max-w-[85vw]",
          "overflow-y-auto overscroll-contain border-r border-rule bg-white",
          "transition-transform duration-200 ease-out",
          "lg:translate-x-0",
          open ? "translate-x-0 shadow-2xl" : "-translate-x-full",
        ].join(" ")}
      >
        <SidebarBody onNavigate={() => setOpen(false)} />
      </nav>

      {/* ---------- page ---------- */}
      <div className="lg:pl-[17rem]">
        <main id="main" className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarBody({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-start justify-between gap-2 border-b border-rule px-5 py-4">
        <Link href="/" onClick={onNavigate} className="min-w-0">
          <span className="block font-serif text-lg leading-tight font-semibold text-ink">
            Electrochemistry
          </span>
          <span className="mt-0.5 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-accent">
            Lecture notes &amp; MCQs
          </span>
        </Link>
        <button
          type="button"
          onClick={onNavigate}
          aria-label="Close navigation"
          className="-mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rule text-ink-soft lg:hidden"
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

      <div className="flex-1 px-3 py-4">
        {courses.map((course) => (
          <div key={course.id} className="mb-6">
            <h2 className="px-2 pb-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-faint">
              {course.title}
            </h2>
            <ul className="space-y-0.5">
              {course.lectures.map((lecture) => {
                const onLecture = pathname === `/lectures/${lecture.slug}`;
                return (
                  <li key={lecture.slug}>
                    <Link
                      href={`/lectures/${lecture.slug}`}
                      onClick={onNavigate}
                      aria-current={onLecture ? "page" : undefined}
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
                        {lecture.mcq.length} Q
                      </span>
                    </Link>
                    {onLecture && (
                      <ul className="mb-1 ml-2.5 mt-0.5 space-y-0.5 border-l border-rule pl-2">
                        <SubLink
                          href={`/lectures/${lecture.slug}/quiz`}
                          label="All questions"
                          active={pathname === `/lectures/${lecture.slug}/quiz`}
                          onNavigate={onNavigate}
                        />
                        {lecture.sections.slice(0, 4).map((s) => (
                          <SubLink
                            key={s.id}
                            href={`/lectures/${lecture.slug}#${s.id}`}
                            label={s.title}
                            onNavigate={onNavigate}
                          />
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="rounded-lg bg-tint px-3 py-3 text-[0.8rem] leading-relaxed text-ink-soft">
          <p className="font-semibold text-ink">About this site</p>
          <p className="mt-1">
            Notes and questions are hard-coded per lecture, so each one can
            be corrected in place without touching the others.
          </p>
        </div>
      </div>

      <div className="border-t border-rule px-5 py-4 text-[0.75rem] text-faint">
        <p className="font-semibold text-ink-soft">Yossef Hafez Alatter</p>
        <p>Abla Hathout</p>
      </div>
    </div>
  );
}

function SubLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active?: boolean;
  onNavigate: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        className={[
          "flex min-h-9 items-center rounded-md px-2 text-[0.85rem] leading-snug transition-colors",
          active
            ? "font-semibold text-accent-dark"
            : "text-ink-soft hover:text-accent hover:underline",
        ].join(" ")}
      >
        {label}
      </Link>
    </li>
  );
}