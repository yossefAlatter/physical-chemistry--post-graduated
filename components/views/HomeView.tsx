import Link from "next/link";
import { getSubjects, lectureHref } from "@/content/registry";
import { fill, t, type Locale } from "@/lib/i18n";

/**
 * The home page, shared by both languages.
 *
 * All it needs is a locale: the subject tree comes from that language's
 * registry and every string from its dictionary, so there is exactly one
 * implementation of this page. Nothing below is hard-coded English.
 */
export default function HomeView({ locale }: { locale: Locale }) {
  const subjects = getSubjects(locale);
  const d = t(locale);

  const allLectures = subjects.flatMap((s) =>
    s.courses.flatMap((c) => c.lectures),
  );
  const totalQuestions = allLectures.reduce((n, l) => n + l.mcq.length, 0);
  const totalSections = allLectures.reduce((n, l) => n + l.sections.length, 0);
  const start = allLectures[0];

  return (
    <div className="pb-10">
      {/* ---------------- hero ---------------- */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#10192b] via-[#123a52] to-[#0b6e99] px-5 py-8 text-white shadow-lg sm:px-8 sm:py-10">
        {/* colour wash so the hero is not one flat navy block */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -end-20 h-72 w-72 rounded-full bg-[#7c3aed] opacity-25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -start-16 h-72 w-72 rounded-full bg-[#f59e0b] opacity-20 blur-3xl"
        />

        <p className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-[#fcd34d]">
          {d.siteAuthorLine}
        </p>
        <h1 className="mt-2 max-w-[20ch] font-serif text-[2.1rem] leading-[1.1] font-semibold sm:text-[2.8rem]">
          <span className="text-shine-hero">{d.homeLedeLead}</span>{" "}
          {d.homeLedeRest}
        </h1>
        <p className="mt-3 max-w-[52ch] text-[1.02rem] leading-relaxed text-[#cfdeeb]">
          {d.homeSub}
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/15 sm:max-w-md">
          {[
            [String(allLectures.length), d.statLectures],
            [String(totalSections), d.statSections],
            [String(totalQuestions), d.statQuestions],
          ].map(([n, l]) => (
            <div key={l} className="bg-[#10192b]/45 px-3 py-3 text-center">
              <dt className="numeral text-[1.6rem] leading-none font-semibold">
                {n}
              </dt>
              <dd className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#a9c2d6]">
                {l}
              </dd>
            </div>
          ))}
        </dl>

        {start && (
          <Link
            href={lectureHref(locale, start)}
            className="mt-6 inline-flex min-h-12 items-center rounded-lg bg-[#fcd34d] px-5 text-[0.95rem] font-semibold text-[#1a1206] shadow-sm transition-colors hover:bg-[#fde68a]"
          >
            {d.startFromZero}
            <span aria-hidden="true" className="ms-1.5 flow-arrow">
              →
            </span>
          </Link>
        )}
      </section>

      {/* ---------------- subjects, courses, lectures ---------------- */}
      {subjects.map((subject) => (
        <section key={subject.slug} className="mt-9">
          <h2 className="font-serif text-[1.45rem] font-semibold text-ink">
            {subject.title}
          </h2>
          <p className="eyebrow mt-1">{subject.tagline}</p>
          <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-soft">
            {subject.description}
          </p>

          {subject.courses.map((course) => (
            <div key={course.id} className="mt-6">
              <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-faint">
                {course.title}
              </h3>
              <div aria-hidden="true" className="mt-2 flex gap-1">
                {course.lectures.flatMap((l) =>
                  l.sections.map((s) => (
                    <span
                      key={`${l.slug}-${s.id}`}
                      data-tone={s.tone}
                      className="h-1.5 w-6 rounded-full bg-[color:var(--tone)]"
                    />
                  )),
                )}
              </div>
              <p className="mt-1 max-w-[60ch] text-[0.9rem] leading-relaxed text-ink-soft">
                {course.description}
              </p>

              <ul className="mt-4 space-y-3">
                {course.lectures.map((lecture) => {
                  const mins = lecture.sections.reduce(
                    (n, s) => n + (s.minutes ?? 0),
                    0,
                  );
                  return (
                    <li key={lecture.slug}>
                      <Link
                        href={lectureHref(locale, lecture)}
                        className="block rounded-xl border border-rule bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md sm:p-5"
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-accent">
                            {lecture.label}
                          </span>
                          <span className="shrink-0 text-[0.72rem] text-faint tabular-nums">
                            {fill(d.cardMeta, {
                              n: lecture.sections.length,
                              m: mins || lecture.minutes,
                              k: lecture.mcq.length,
                            })}
                          </span>
                        </div>

                        <h4 className="mt-1 font-serif text-[1.2rem] leading-snug font-semibold text-ink">
                          {lecture.title}
                        </h4>
                        <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink-soft">
                          {lecture.summary}
                        </p>

                        <ul className="mt-3.5 divide-y divide-rule border-t border-rule">
                          {lecture.sections.map((s, i) => (
                            <li
                              key={s.id}
                              data-tone={s.tone}
                              className="flex items-baseline gap-2.5 py-1.5 text-[0.86rem]"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--tone)]"
                              />
                              <span className="shrink-0 text-[0.74rem] font-semibold text-faint tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="min-w-0 text-ink-soft">
                                {s.title}
                              </span>
                              {s.minutes && (
                                <span className="ms-auto shrink-0 text-[0.74rem] text-faint">
                                  {fill(d.minutes, { n: s.minutes })}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>
      ))}

      {/* ---------------- how to use ---------------- */}
      <section className="card-tone mt-9 rounded-xl border p-5">
        <h2 className="font-serif text-[1.2rem] font-semibold text-ink">
          {d.howToUseTitle}
        </h2>
        <ol className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
          {[d.howStep1, d.howStep2, d.howStep3, d.howStep4].map((step, i) => (
            <li key={i}>
              <span className="font-semibold text-ink">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
