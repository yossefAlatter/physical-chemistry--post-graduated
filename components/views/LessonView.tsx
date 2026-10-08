import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlock, RichText } from "@/components/Blocks";
import { getRegistry, lessonHref, quizHref, sectionHref } from "@/content/registry";
import { fill, t } from "@/lib/i18n";

/**
 * The lesson overview page: intro prose, section index, constants panel and
 * previous/next navigation.
 */
export default function LessonView({ slug }: { slug: string }) {
  const reg = getRegistry();
  const d = t();

  const lesson = reg.getLesson(slug);
  if (!lesson) notFound();

  const prev = reg.prevLesson(slug);
  const next = reg.nextLesson(slug);
  const quickTotal = reg.countQuickChecks(lesson);
  const totalMinutes = lesson.sections.reduce(
    (n, s) => n + (s.minutes ?? 0),
    0,
  );

  return (
    <div className="pb-12">
      <header className="border-b border-rule pb-6">
        <p className="eyebrow">{lesson.label}</p>
        <h1 className="mt-1.5 font-serif text-[1.7rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.1rem]">
          {lesson.title}
        </h1>
        <p className="mt-2 max-w-[62ch] text-[1rem] leading-relaxed text-ink-soft">
          <RichText text={lesson.summary} />
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lessonSectionsCount, { n: lesson.sections.length })}
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lessonMinTotal, { n: totalMinutes || lesson.minutes })}
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {fill(d.lessonQuestions, { n: lesson.mcq.length })}
          </span>
        </div>

        {lesson.intro && lesson.intro.length > 0 && (
          <div className="prose-lesson mt-6 max-w-[62ch]">
            {lesson.intro.map((b, i) => (
              <RenderBlock key={i} block={b} />
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link
            href={
              lesson.sections[0]
                ? sectionHref(lesson, lesson.sections[0])
                : "#"
            }
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
          >
            {lesson.slug === "lesson-0" ? d.startReading : d.continueReading}
            <span aria-hidden="true" className="ms-1.5 flow-arrow">
              →
            </span>
          </Link>
          <Link
            href={quizHref(lesson)}
            className="inline-flex min-h-11 items-center rounded-lg border border-rule bg-surface px-4 py-2.5 text-[0.92rem] font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent-dark"
          >
            {fill(d.allQuestionsLink, { n: lesson.mcq.length })}
          </Link>
        </div>
      </header>

      {/* ---------------- section index ---------------- */}
      <section className="mt-8">
        <h2 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-faint">
          {d.sectionsHeading}
        </h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {lesson.sections.map((s, i) => {
            const n = reg.questionsForSection(lesson, s.id).length;
            const quick = Math.min(3, n);
            return (
              <li key={s.id}>
                <Link
                  href={sectionHref(lesson, s)}
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
                    <RichText text={s.summary} />
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

      {lesson.constants && lesson.constants.length > 0 && (
        <details className="mt-8 overflow-hidden rounded-lg border border-rule bg-surface">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[0.92rem] font-semibold text-ink">
            {d.constantsHeading}
            <span aria-hidden="true" className="text-faint">
              ▾
            </span>
          </summary>
          <dl className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2">
            {lesson.constants.map((c) => (
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

      {lesson.mcq.length > 0 && (
        <div className="mt-8 rounded-lg border border-accent/25 bg-accent-light/45 p-5">
          <h2 className="font-serif text-[1.15rem] font-semibold text-ink">
            {fill(d.quickTotalTitle, {
              a: quickTotal,
              b: lesson.mcq.length,
            })}
          </h2>
          <p className="mt-1.5 max-w-[58ch] text-[0.92rem] leading-relaxed text-ink-soft">
            {d.quickTotalBody}
          </p>
          <Link
            href={quizHref(lesson)}
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
              href={lessonHref(prev)}
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
              href={lessonHref(next)}
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
