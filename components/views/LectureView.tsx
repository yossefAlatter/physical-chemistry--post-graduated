import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlock } from "@/components/Blocks";
import { getRegistry, lectureHref, quizHref, sectionHref } from "@/content/registry";
import { fill, t, type Locale } from "@/lib/i18n";

/**
 * The lecture overview page: intro prose, section index, constants panel and
 * previous/next navigation. Shared by both languages.
 */
export default function LectureView({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const reg = getRegistry(locale);
  const d = t(locale);

  const lecture = reg.getLecture(slug);
  if (!lecture) notFound();

  const prev = reg.prevLecture(slug);
  const next = reg.nextLecture(slug);
  const quickTotal = reg.countQuickChecks(lecture);
  const totalMinutes = lecture.sections.reduce(
    (n, s) => n + (s.minutes ?? 0),
    0,
  );

  return (
    <div className="relative isolate pb-12">
      <div aria-hidden="true" className="page-wash" />

      <header className="border-b border-rule pb-6">
        <p className="eyebrow">{lecture.label}</p>
        <h1 className="mt-1.5 font-serif text-[1.7rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.1rem]">
          {lecture.title}
        </h1>
        <p className="mt-2 max-w-[62ch] text-[1rem] leading-relaxed text-ink-soft">
          {lecture.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lectureSectionsCount, { n: lecture.sections.length })}
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lectureMinTotal, { n: totalMinutes || lecture.minutes })}
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lectureQuestions, { n: lecture.mcq.length })}
          </span>
        </div>

        {lecture.intro && lecture.intro.length > 0 && (
          <div className="prose-lecture mt-6 max-w-[62ch]">
            {lecture.intro.map((b, i) => (
              <RenderBlock key={i} block={b} locale={locale} />
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link
            href={
              lecture.sections[0]
                ? sectionHref(locale, lecture, lecture.sections[0])
                : "#"
            }
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
          >
            {lecture.slug === "fundamentals" ? d.startReading : d.continueReading}
            <span aria-hidden="true" className="ms-1.5 flow-arrow">
              →
            </span>
          </Link>
          <Link
            href={quizHref(locale, lecture)}
            className="inline-flex min-h-11 items-center rounded-lg border border-rule bg-surface px-4 py-2.5 text-[0.92rem] font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent-dark"
          >
            {fill(d.allQuestionsLink, { n: lecture.mcq.length })}
          </Link>
        </div>
      </header>

      {/* ---------------- section index ---------------- */}
      <section className="mt-8">
        <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-faint">
          {d.sectionsHeading}
        </h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {lecture.sections.map((s, i) => {
            const n = reg.questionsForSection(lecture, s.id).length;
            const quick = Math.min(3, n);
            return (
              <li key={s.id}>
                <Link
                  href={sectionHref(locale, lecture, s)}
                  data-tone={s.tone}
                  className="group flex h-full flex-col rounded-lg border border-rule bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--tone)] hover:shadow-md"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="numeral text-[1rem] leading-none font-semibold text-[color:var(--tone)] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[1.08rem] leading-snug font-semibold text-ink">
                      {s.title}
                    </span>
                  </span>
                  <span className="mt-1.5 flex-1 text-[0.9rem] leading-relaxed text-ink-soft">
                    {s.summary}
                  </span>
                  <span className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.76rem] text-faint">
                    {s.minutes && <span>{fill(d.minutes, { n: s.minutes })}</span>}
                    {quick > 0 && (
                      <span>
                        {fill(quick === 1 ? d.quickCheckOne : d.quickChecks, {
                          n: quick,
                        })}
                      </span>
                    )}
                    {n > 0 && <span>{fill(d.inQuiz, { n })}</span>}
                    <span className="ms-auto font-semibold text-[color:var(--tone)] opacity-0 transition-opacity group-hover:opacity-100">
                      {d.readLink}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {lecture.constants && lecture.constants.length > 0 && (
        <details className="mt-8 overflow-hidden rounded-lg border border-rule bg-surface">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[0.92rem] font-semibold text-ink">
            {d.constantsHeading}
            <span aria-hidden="true" className="text-faint">
              ▾
            </span>
          </summary>
          <dl className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2">
            {lecture.constants.map((c) => (
              <div key={c.symbol} className="bg-surface px-4 py-2.5">
                <dt className="font-mono text-[0.9rem] font-semibold text-accent-dark">
                  {c.symbol}
                </dt>
                <dd className="text-[0.85rem] leading-snug text-ink-soft">
                  {c.name}: <span className="font-semibold text-ink">{c.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      {lecture.mcq.length > 0 && (
        <div className="mt-8 rounded-lg border border-accent/25 bg-accent-light/45 p-5">
          <h2 className="font-serif text-[1.15rem] font-semibold text-ink">
            {fill(d.quickTotalTitle, {
              a: quickTotal,
              b: lecture.mcq.length,
            })}
          </h2>
          <p className="mt-1.5 max-w-[58ch] text-[0.92rem] leading-relaxed text-ink-soft">
            {d.quickTotalBody}
          </p>
          <Link
            href={quizHref(locale, lecture)}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
          >
            {d.takeFullQuiz}
            <span aria-hidden="true" className="ms-1.5 flow-arrow">
              →
            </span>
          </Link>
        </div>
      )}

      {(prev || next) && (
        <nav className="mt-8 grid gap-2.5 border-t border-rule pt-6 sm:grid-cols-2">
          {prev && (
            <Link
              href={lectureHref(locale, prev)}
              className="rounded-lg border border-rule bg-surface px-4 py-3 transition-colors hover:border-accent hover:shadow-sm"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
                {d.prev}
              </span>
              <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
                {prev.label}: {prev.title}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={lectureHref(locale, next)}
              className="rounded-lg border border-rule bg-surface px-4 py-3 text-end transition-colors hover:border-accent hover:shadow-sm sm:col-start-2"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
                {d.next}
              </span>
              <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
                {next.label}: {next.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
