import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RenderBlock } from "@/components/Blocks";
import { allLectures, getCourseOf, getLecture, nextLecture, prevLecture } from "@/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allLectures.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lecture = getLecture(slug);
  if (!lecture) return { title: "Lecture not found" };
  return {
    title: `${lecture.label}: ${lecture.title}`,
    description: lecture.summary,
  };
}

export default async function LecturePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lecture = getLecture(slug);
  if (!lecture) notFound();

  const course = getCourseOf(slug);
  const prev = prevLecture(slug);
  const next = nextLecture(slug);

  return (
    <div className="pb-12">
      {/* ---------------- header ---------------- */}
      <header className="border-b border-rule pb-6">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-accent">
          {course?.title} · {lecture.label}
        </p>
        <h1 className="mt-1.5 font-serif text-[1.75rem] leading-tight font-semibold tracking-tight text-ink sm:text-[2.2rem]">
          {lecture.title}
        </h1>
        <p className="mt-2 max-w-[60ch] text-[1rem] leading-relaxed text-ink-soft">
          {lecture.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {lecture.sections.length} topics
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {lecture.minutes} min read
          </span>
          <span className="rounded-full bg-tint px-2.5 py-1 text-[0.78rem] text-ink-soft">
            {lecture.mcq.length} questions
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2.5">
          <Link
            href={`/lectures/${lecture.slug}/quiz`}
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Start the quiz
            <span aria-hidden="true" className="ml-1.5">
              →
            </span>
          </Link>
          <a
            href="#contents"
            className="inline-flex min-h-11 items-center rounded-lg border border-rule bg-white px-4 py-2.5 text-[0.92rem] font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent-dark"
          >
            Jump to a topic
          </a>
        </div>
      </header>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start">
        <div className="min-w-0">
          {/* ---------------- constants ---------------- */}
          {lecture.constants && lecture.constants.length > 0 && (
            <details className="mb-8 rounded-lg border border-rule bg-white">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[0.92rem] font-semibold text-ink">
                Constants you will need
                <span aria-hidden="true" className="text-faint">
                  ▾
                </span>
              </summary>
              <dl className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2">
                {lecture.constants.map((c) => (
                  <div key={c.symbol} className="bg-white px-4 py-2.5">
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

          {/* ---------------- sections ---------------- */}
          {lecture.sections.map((section, i) => {
            const count = lecture.mcq.filter(
              (q) => q.topicId === section.id,
            ).length;
            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 pb-9"
              >
                <h2 className="flex items-baseline gap-2.5 border-b border-rule pb-2 font-serif text-[1.35rem] leading-snug font-semibold text-ink">
                  <span className="text-[0.95rem] text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>

                {section.summary && (
                  <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink-soft italic">
                    {section.summary}
                  </p>
                )}

                <div className="prose-lecture mt-4">
                  {section.blocks.map((block, j) => (
                    <RenderBlock key={j} block={block} />
                  ))}
                </div>

                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="mt-5 rounded-lg border border-gold/25 bg-gold-light/60 p-4">
                    <p className="text-[0.72rem] font-bold uppercase tracking-wider text-gold">
                      Worth memorising
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {section.keyPoints.map((k, j) => (
                        <li key={j} className="flex gap-2.5 text-[0.94rem] leading-relaxed text-ink-soft">
                          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-gold/70" />
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {count > 0 && (
                  <p className="mt-4 text-[0.86rem] text-faint">
                    {count}{" "}
                    {count === 1 ? "question" : "questions"} in the quiz
                    cover this topic.{" "}
                    <Link
                      href={`/lectures/${lecture.slug}/quiz?topic=${section.id}`}
                      className="font-medium text-accent-dark underline underline-offset-2"
                    >
                      Test this topic
                    </Link>
                  </p>
                )}
              </section>
            );
          })}
        </div>

        {/* ---------------- on this page (desktop only) ---------------- */}
        <aside className="no-print hidden lg:block">
          <div className="sticky top-6">
            <nav id="contents" aria-label="On this page">
              <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-faint">
                On this page
              </h2>
              <ul className="mt-2 space-y-0.5 border-l border-rule">
                {lecture.sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-3 text-[0.85rem] leading-snug text-ink-soft transition-colors hover:border-accent hover:text-accent-dark"
                    >
                      <span className="text-faint tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>{" "}
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href={`/lectures/${lecture.slug}/quiz`}
              className="mt-5 block rounded-lg bg-accent px-3 py-2.5 text-center text-[0.88rem] font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Take the quiz
            </Link>

            {(prev || next) && (
              <div className="mt-4 space-y-1.5 border-t border-rule pt-4 text-[0.85rem]">
                {prev && (
                  <Link
                    href={`/lectures/${prev.slug}`}
                    className="block rounded-md px-2 py-1.5 text-ink-soft hover:bg-tint hover:text-accent-dark"
                  >
                    ← {prev.label}
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/lectures/${next.slug}`}
                    className="block rounded-md px-2 py-1.5 text-ink-soft hover:bg-tint hover:text-accent-dark"
                  >
                    {next.label} →
                  </Link>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* ---------------- mobile topic jump ---------------- */}
      <details className="no-print mt-2 rounded-lg border border-rule bg-white lg:hidden">
        <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-3 px-4 py-3 text-[0.92rem] font-semibold text-ink">
          All topics in this lecture
          <span aria-hidden="true" className="text-faint">
            ▾
          </span>
        </summary>
        <ul className="border-t border-rule">
          {lecture.sections.map((s, i) => (
            <li key={s.id} className="border-b border-rule last:border-0">
              <a
                href={`#${s.id}`}
                className="flex min-h-11 items-center gap-2.5 px-4 py-2.5 text-[0.9rem] text-ink-soft"
              >
                <span className="text-[0.8rem] text-faint tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </details>

      {/* ---------------- lecture nav ---------------- */}
      {(prev || next) && (
        <nav className="no-print mt-8 grid gap-2.5 border-t border-rule pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/lectures/${prev.slug}`}
              className="rounded-lg border border-rule bg-white px-4 py-3 transition-colors hover:border-accent"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
                ← Previous
              </span>
              <span className="mt-0.5 block text-[0.92rem] font-semibold text-ink">
                {prev.label}: {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              href={`/lectures/${next.slug}`}
              className="rounded-lg border border-rule bg-white px-4 py-3 text-right transition-colors hover:border-accent sm:col-start-2"
            >
              <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
                Next →
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