"use client";

// The "Quick check" that closes every section page: a few questions answered
// in place, with the explanation shown the moment you commit. It is
// deliberately smaller than the full quiz - two or three questions, one at a
// time, no timer - so that finishing a section feels like finishing a
// section.

import { useState } from "react";
import type { Mcq } from "@/content/types";
import { fill, optionLetters, t, type Locale } from "@/lib/i18n";

export default function QuickCheck({
  locale,
  questions,
  sectionTitle,
}: {
  locale: Locale;
  questions: Mcq[];
  sectionTitle: string;
}) {
  const d = t(locale);
  const LETTERS = optionLetters[locale];
  const [at, setAt] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [got, setGot] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  if (questions.length === 0) return null;

  const q = questions[at];
  const right = got.filter(Boolean).length;

  function choose(i: number) {
    if (picked !== null) return;
    setPicked(i);
    setGot((g) => [...g, i === q.answer]);
  }

  function next() {
    if (at + 1 >= questions.length) {
      setDone(true);
      return;
    }
    setAt((n) => n + 1);
    setPicked(null);
  }

  function restart() {
    setAt(0);
    setPicked(null);
    setGot([]);
    setDone(false);
  }

  const pct = Math.round((100 * right) / questions.length);

  return (
    <section
      aria-labelledby="quickcheck"
      className="card-tone no-print mt-10 rounded-xl border p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h2
          id="quickcheck"
          className="font-serif text-[1.15rem] font-semibold text-ink"
        >
          {d.qcTitle}
        </h2>
        <span className="sr-only">{fill(d.qcOn, { title: sectionTitle })}</span>
        <span className="text-[0.78rem] text-faint">
          {done
            ? fill(d.qcScore, { right, n: questions.length })
            : fill(d.qcQuestionOf, { i: at + 1, n: questions.length })}
        </span>
      </div>

      {done ? (
        <div className="mt-4">
          <p className="numeral text-[1.9rem] leading-none font-semibold text-[color:var(--tone)]">
            {right}/{questions.length}
          </p>
          <div
            className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-rule"
            role="img"
            aria-label={fill(d.qcPercentAria, { p: pct })}
          >
            <div
              className="h-full rounded-full bg-[color:var(--tone)] transition-[width] duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">
            {right === questions.length
              ? d.qcAllCorrect
              : fill(d.qcReread, { title: sectionTitle })}
          </p>
          <button
            type="button"
            onClick={restart}
            className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-rule bg-surface px-4 text-[0.9rem] font-semibold text-ink-soft transition-colors hover:border-[color:var(--tone)] hover:text-[color:var(--tone)]"
          >
            {d.tryAgain}
          </button>
        </div>
      ) : (
        <>
          <p className="mt-3.5 text-[0.98rem] leading-relaxed font-medium text-ink">
            {q.question}
          </p>

          <ul className="mt-3.5 space-y-2">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isPicked = i === picked;
              const show = picked !== null;
              const tone = !show
                ? "border-rule bg-surface hover:border-[color:var(--tone)]"
                : isAnswer
                  ? "border-good bg-good/10"
                  : isPicked
                    ? "border-bad bg-bad/10"
                    : "border-rule bg-surface opacity-55";
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={isPicked}
                    className={`flex w-full items-start gap-3 rounded-lg border px-3.5 py-3 text-start transition-colors ${tone}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-px grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.75rem] font-bold ${
                        !show
                          ? "bg-[color:var(--tone-soft)] text-[color:var(--tone)]"
                          : isAnswer
                            ? "bg-good text-on-good"
                            : isPicked
                              ? "bg-bad text-on-bad"
                              : "bg-tint text-faint"
                      }`}
                    >
                      {show && isAnswer ? "✓" : show && isPicked ? "✗" : LETTERS[i]}
                    </span>
                    <span className="text-[0.94rem] leading-relaxed text-ink">
                      {opt}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {picked === null ? (
            <p className="mt-3 text-[0.85rem] text-faint">
              {d.pickOption}
            </p>
          ) : (
            <div className="mt-4 border-t border-[color:var(--tone-line)] pt-4">
              <p
                className={`text-[0.95rem] font-semibold ${picked === q.answer ? "text-good" : "text-bad"}`}
              >
                {picked === q.answer ? d.correctShort : d.notCorrectShort}
              </p>
              <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-wider text-faint">
                {d.why}
              </p>
              <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-soft">
                {q.explanation}
              </p>
              <button
                type="button"
                onClick={next}
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[color:var(--tone)] px-4 text-[0.92rem] font-semibold text-on-accent transition-opacity hover:opacity-90 sm:w-auto"
              >
                {at + 1 >= questions.length ? d.seeResult : d.nextQuestion}
                <span aria-hidden="true" className="ms-1.5 flow-arrow">
                  →
                </span>
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}