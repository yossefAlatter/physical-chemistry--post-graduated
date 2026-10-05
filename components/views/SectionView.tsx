import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlock, RichText } from "@/components/Blocks";
import QuickCheck from "@/components/QuickCheck";
import {
  getRegistry,
  homeHref,
  lectureHref,
  quizHref,
  sectionHref,
} from "@/content/registry";
import { fill, t, type Locale } from "@/lib/i18n";

/**
 * One section: the unit of study. Every section is its own page with its own
 * header, body blocks, key points, quick check and previous/next navigation.
 * Shared by both languages.
 */
export default function SectionView({
  locale,
  slug,
  sectionId,
}: {
  locale: Locale;
  slug: string;
  sectionId: string;
}) {
  const reg = getRegistry(locale);
  const d = t(locale);

  const lecture = reg.getLecture(slug);
  if (!lecture) notFound();

  const nav = reg.sectionNeighbours(lecture, sectionId);
  if (!nav) notFound();
  const { section, index, total, prev, next } = nav;

  const quick = reg.quickCheckFor(lecture, section.id);
  const quizCount = reg.questionsForSection(lecture, section.id).length;

  return (
    <div data-tone={section.tone} className="relative isolate pb-12">
      {/* soft wash in this topic's colour, behind the header */}
      <div aria-hidden="true" className="page-wash" />

      {/* ---------------- breadcrumb ---------------- */}
      <nav aria-label={d.breadcrumbAria} className="no-print text-[0.8rem]">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-faint">
          <li>
            <Link href={homeHref(locale)} className="hover:text-accent-dark">
              {d.navHome}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={lectureHref(locale, lecture)}
              className="hover:text-accent-dark"
            >
              {lecture.label}
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
        <p className="eyebrow">{lecture.label}</p>
        <div className="mt-1.5 flex items-baseline gap-2.5">
          <span className="numeral text-[1.35rem] leading-none font-semibold text-[color:var(--tone)] tabular-nums">
            {String(index).padStart(2, "0")}
          </span>
          <h1 className="font-serif text-[1.6rem] leading-tight font-semibold text-ink sm:text-[2rem]">
            {section.title}
          </h1>
        </div>
        {section.summary && (
          <p className="mt-2 max-w-[62ch] text-[1rem] leading-relaxed text-ink-soft italic">
            {section.summary}
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
      <div className="prose-lecture mt-6 max-w-[68ch]">
        {section.blocks.map((block, i) => (
          <RenderBlock key={i} block={block} locale={locale} />
        ))}
      </div>

      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className="card-tone mt-7 max-w-[68ch] rounded-lg border p-4">
          <p className="eyebrow">{d.worthMemorising}</p>
          <ul className="mt-2 space-y-1.5">
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
        <p className="mt-4 text-[0.88rem] text-faint">
          {fill(d.bankCovers, { n: quizCount })}{" "}
          <Link
            href={`${quizHref(locale, lecture)}?topic=${section.id}`}
            className="font-semibold text-[color:var(--tone)] underline underline-offset-2"
          >
            {fill(d.openAll, { n: quizCount })}
          </Link>
        </p>
      )}

      {/* ---------------- quick check ---------------- */}
      <div className="max-w-[68ch]">
        <QuickCheck
          locale={locale}
          questions={quick}
          sectionTitle={section.title}
        />
      </div>

      {/* ---------------- closing call to action ---------------- */}
      {section.cta && (
        <div className="card-tone no-print mt-8 max-w-[68ch] rounded-xl border p-5">
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
        className="no-print mt-10 grid gap-2.5 border-t border-rule pt-6 sm:grid-cols-2"
      >
        {prev ? (
          <Link
            href={sectionHref(locale, lecture, prev)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 transition-colors hover:border-accent hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.prev}
            </span>
            <span className="mt-0.5 block text-[0.92rem] leading-snug font-semibold text-ink">
              {String(index - 1).padStart(2, "0")} {prev.title}
            </span>
            <span className="mt-0.5 block text-[0.82rem] text-faint">
              {prev.summary}
            </span>
          </Link>
        ) : (
          <Link
            href={lectureHref(locale, lecture)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 transition-colors hover:border-accent hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.contents}
            </span>
            <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
              {fill(d.allSectionsOf, { n: total, label: lecture.label })}
            </span>
          </Link>
        )}

        {next ? (
          <Link
            href={sectionHref(locale, lecture, next)}
            className="group rounded-lg border border-[color:var(--tone-line)] bg-[color:var(--tone-soft)] px-4 py-3 text-end transition-colors hover:shadow-sm"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[color:var(--tone)]">
              {d.next}
            </span>
            <span className="mt-0.5 block text-[0.92rem] leading-snug font-semibold text-ink">
              {String(index + 1).padStart(2, "0")} {next.title}
            </span>
            <span className="mt-0.5 block text-[0.82rem] text-faint">
              {next.summary}
            </span>
          </Link>
        ) : (
          <Link
            href={lectureHref(locale, lecture)}
            className="group rounded-lg border border-rule bg-surface px-4 py-3 text-end transition-colors hover:border-accent hover:shadow-sm sm:col-start-2"
          >
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              {d.finish}
            </span>
            <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
              {fill(d.backToContents, { label: lecture.label })}
            </span>
          </Link>
        )}
      </nav>
    </div>
  );
}
