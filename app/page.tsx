import Link from "next/link";
import { allLectures, courses } from "@/content";

export default function HomePage() {
  const totalQuestions = allLectures.reduce((n, l) => n + l.mcq.length, 0);
  const totalSections = allLectures.reduce((n, l) => n + l.sections.length, 0);

  return (
    <div className="pb-10">
      {/* ---------------- hero ---------------- */}
      <section className="overflow-hidden rounded-xl bg-gradient-to-br from-ink via-[#0d3a52] to-accent px-5 py-8 text-white sm:px-8 sm:py-10">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-[#f0b27a]">
          Fundamentals · Yossef Hafez Alatter
        </p>
        <h1 className="mt-2 font-serif text-[2rem] leading-[1.15] font-semibold tracking-tight sm:text-[2.6rem]">
          Electrochemistry, one lecture at a time.
        </h1>
        <p className="mt-3 max-w-[52ch] text-[1.02rem] leading-relaxed text-[#c6d6e2]">
          Full notes with worked examples and illustrations, then a multiple
          choice quiz on everything in the lecture. Read the notes first —
          every question is answerable from them.
        </p>

        <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg bg-white/15 sm:max-w-md">
          {[
            [String(allLectures.length), "Lectures"],
            [String(totalSections), "Topics"],
            [String(totalQuestions), "Questions"],
          ].map(([n, l]) => (
            <div key={l} className="bg-ink/35 px-3 py-3 text-center">
              <dt className="font-serif text-[1.5rem] leading-none font-semibold">
                {n}
              </dt>
              <dd className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#9fb4c6]">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------------- courses ---------------- */}
      {courses.map((course) => (
        <section key={course.id} className="mt-9">
          <h2 className="font-serif text-[1.4rem] font-semibold text-ink">
            {course.title}
          </h2>
          <p className="mt-1 max-w-[60ch] text-[0.95rem] leading-relaxed text-ink-soft">
            {course.description}
          </p>

          <ul className="mt-4 space-y-3">
            {course.lectures.map((lecture) => (
              <li key={lecture.slug}>
                <Link
                  href={`/lectures/${lecture.slug}`}
                  className="block rounded-xl border border-rule bg-white p-4 transition-colors hover:border-accent sm:p-5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-accent">
                      {lecture.label}
                    </span>
                    <span className="shrink-0 text-[0.72rem] text-faint tabular-nums">
                      {lecture.minutes} min · {lecture.mcq.length} questions
                    </span>
                  </div>

                  <h3 className="mt-1 font-serif text-[1.2rem] leading-snug font-semibold text-ink">
                    {lecture.title}
                  </h3>
                  <p className="mt-1.5 text-[0.93rem] leading-relaxed text-ink-soft">
                    {lecture.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {lecture.sections.slice(0, 6).map((s) => (
                      <span
                        key={s.id}
                        className="rounded-full bg-tint px-2.5 py-1 text-[0.74rem] text-ink-soft"
                      >
                        {s.title}
                      </span>
                    ))}
                    {lecture.sections.length > 6 && (
                      <span className="rounded-full bg-tint px-2.5 py-1 text-[0.74rem] text-faint">
                        +{lecture.sections.length - 6} more
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {/* ---------------- how to use ---------------- */}
      <section className="mt-9 rounded-xl border border-rule bg-white p-5">
        <h2 className="font-serif text-[1.2rem] font-semibold text-ink">
          How to use this site
        </h2>
        <ol className="mt-3 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
          <li>
            <span className="font-semibold text-ink">1.</span> Work through
            the lecture notes. Each topic ends with the points worth
            memorising.
          </li>
          <li>
            <span className="font-semibold text-ink">2.</span> Take the quiz.
            You get the explanation straight after you commit to an answer, so
            guessing first is the point.
          </li>
          <li>
            <span className="font-semibold text-ink">3.</span> Read the
            explanation even when you were right. A lucky guess comes back.
          </li>
        </ol>
      </section>
    </div>
  );
}