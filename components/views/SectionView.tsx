import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlock, RichText } from "@/components/Blocks";
import QuickCheck from "@/components/QuickCheck";
import { SectionChrome } from "@/components/SectionChrome";
import {
  getRegistry,
  homeHref,
  lessonHref,
  quizHref,
  sectionHref,
} from "@/content/registry";
import { fill, t } from "@/lib/i18n";
import { buildToc, idForBlock } from "@/lib/toc";

/**
 * One section: the unit of study. Every section is its own page with its own
 * header, body blocks, key points, quick check and previous/next navigation.
 */
export default function SectionView({
  slug,
  sectionId,
}: {
  slug: string;
  sectionId: string;
}) {
  const reg = getRegistry();
  const d = t();

  const lesson = reg.getLesson(slug);
  if (!lesson) notFound();

  const nav = reg.sectionNeighbours(lesson, sectionId);
  if (!nav) notFound();
  const { section, index, total, prev, next } = nav;

  const quick = reg.quickCheckFor(lesson, section.id);
  const quizCount = reg.questionsForSection(lesson, section.id).length;

  const toc = buildToc(section.blocks);
  const lessonNav = lesson.sections.map((s) => ({
    id: s.id,
    label: s.title,
    tone: s.tone,
    href: sectionHref(lesson, s),
  }));

  return (
    <div data-tone={section.tone} className="pb-12">

      <SectionChrome toc={toc} sections={lessonNav} currentId={section.id}>

      {/* ---------------- breadcrumb ---------------- */}
      <nav aria-label={d.breadcrumbAria} className="no-print text-[0.8rem]">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-faint">
          <li>
            <Link href={homeHref()} className="hover:text-accent-dark">
              {d.navHome}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={lessonHref(lesson)}
              className="hover:text-accent-dark"
            >
              {lesson.label}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-[color:var(--tone)]">
            {String(index).padStart(2, "0")} {section.title}
          </li>
        </ol>
      </nav>

      {/* ---------------- header ---------------- */}
      <header className="mt-3 border-b border-rule pb-5">
        <p className="eyebrow">{lesson.label}</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="numeral grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[color:var(--tone-soft)] text-[1.05rem] font-semibold text-[color:var(--tone)] ring-1 ring-[color:var(--tone-line)] tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
          <h1 className="font-serif text-[1.55rem] leading-tight font-semibold text-ink sm:text-[1.95rem]">
            {section.title}
          </h1>
        </div>
        {section.summary && (
          <p className="mt-3 max-w-[62ch] text-[1rem] leading-relaxed text-ink-soft italic">
            <RichText text={section.summary} />
          </p>
        )}

        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[color:var(--tone-line)] bg-[color:var(--tone-soft)] px-2.5 py-1 text-[0.76rem] font-semibold text-[color:var(--tone)]">
            {fill(d.sectionOf, { i: index, n: total })}
          </span>
          {section.minutes && (
            <span className="rounded-full border border-rule bg-surface px-2.5 py-1 text-[0.76rem] text-ink-soft">
              {fill(d.minutes, { n: section.minutes })}
            </span>
          )}
          {quick.length > 0 && (
            <span className="rounded-full border border-rule bg-surface px-2.5 py-1 text-[0.76rem] text-ink-soft">
              {fill(quick.length === 1 ? d.quickCheckOne : d.quickChecks, {
                n: quick.length,
              })}
            </span>
          )}
        </div>

        {/* section progress, a thin bar so the reader knows how far in they are */}
        <div
          className="mt-4 h-1 overflow-hidden rounded-full bg-rule"
          role="img"
          aria-label={fill(d.sectionOf, { i: index, n: total })}
        >
          <div
            className="h-full rounded-full bg-[color:var(--tone)]"
            style={{ width: `${(100 * index) / total}%` }}
          />
        </div>
      </header>

      {/* ---------------- body ---------------- */}
      <div className="prose-lesson mt-8 max-w-[64ch]">
        {section.blocks.map((block, i) => (
          <RenderBlock key={i} block={block} id={idForBlock(section.blocks, i)} />
        ))}
      </div>

      {/* key points last: a short recap once the reader has worked through
          the body, so the section opens with the subject itself rather than
          a list of answers. */}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className="card-tone mt-10 max-w-[64ch] rounded-lg border p-5">
          <p className="eyebrow">{d.worthMemorising}</p>
          <ul className="mt-3 space-y-2.5">
            {section.keyPoints.map((k, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-[0.94rem] leading-relaxed text-ink-soft"
              >
                <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--tone)]" />
                <span><RichText text={k} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {quizCount > 0 && (
        <p className="mt-6 max-w-[64ch] text-[0.88rem] text-faint">
          {fill(d.bankCovers, { n: quizCount })}{" "}
          <Link
            href={`${quizHref(lesson)}?topic=${section.id}`}
            className="font-semibold text-[color:var(--tone)] underline underline-offset-2"
          >
            {fill(d.openAll, { n: quizCount })}
          </Link>
        </p>
      )}

      {/* ---------------- quick check ---------------- */}
      <div className="mt-8 max-w-[64ch]">
        <QuickCheck questions={quick} sectionTitle={section.title} />
      </div>

      {/* ---------------- closing call to action ---------------- */}
      {section.cta && (
        <div className="card-tone no-print mt-8 max-w-[64ch] rounded-xl border p-5">
          <h2 className="font-serif text-[1.25rem] leading-snug font-semibold text-ink">
            {section.cta.title}
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
            {section.cta.body}
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              href={section.cta.href}
              className="inline-flex min-h-11 items-center rounded-lg bg-[color:var(--tone)] px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-opacity hover:opacity-90"
            >
              {section.cta.linkLabel}
              <span aria-hidden="true" className="ms-1.5 flow-arrow">
                →
              </span>
            </Link>
            {section.cta.secondaryHref && section.cta.secondaryLabel && (
              <Link
                href={section.cta.secondaryHref}
                className="inline-flex min-h-11 items-center rounded-lg border border-rule bg-surface px-4 py-2.5 text-[0.92rem] font-semibold text-ink-soft transition-colors hover:border-[color:var(--tone)] hover:text-[color:var(--tone)]"
              >
                {section.cta.secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      )}

      {/* ---------------- previous / next section ---------------- */}
      <nav
        aria-label={d.sectionNavAria}
        className="no-print mt-10 max-w-[64ch] grid gap-2.5 border-t border-rule pt-6 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={sectionHref(lesson, prev)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 transition-colors hover:border-accent hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.prev}
            </span>
            <span className="mt-0.5 block text-[0.92rem] leading-snug font-semibold text-ink">
              {String(index - 1).padStart(2, "0")} {prev.title}
            </span>
            <span className="mt-0.5 block text-[0.82rem] text-faint">
              <RichText text={prev.summary} />
            </span>
          </Link>
        ) : (
          <Link
            href={lessonHref(lesson)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 transition-colors hover:border-accent hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.contents}
            </span>
            <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
              {fill(d.allSectionsOf, { n: total, label: lesson.label })}
            </span>
          </Link>
        )}

        {next ? (
          <Link
            href={sectionHref(lesson, next)}
            className="group rounded-lg border border-[color:var(--tone-line)] bg-[color:var(--tone-soft)] px-4 py-3 text-end transition-colors hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[color:var(--tone)]">
              {d.next}
            </span>
            <span className="mt-0.5 block text-[0.92rem] leading-snug font-semibold text-ink">
              {String(index + 1).padStart(2, "0")} {next.title}
            </span>
            <span className="mt-0.5 block text-[0.82rem] text-faint">
              <RichText text={next.summary} />
            </span>
          </Link>
        ) : (
          <Link
            href={lessonHref(lesson)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 text-end transition-colors hover:border-accent hover:shadow-sm sm:col-start-2"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.finish}
            </span>
            <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
              {fill(d.backToContents, { label: lesson.label })}
            </span>
          </Link>
        )}
      </nav>
      </SectionChrome>
    </div>
  );
}
