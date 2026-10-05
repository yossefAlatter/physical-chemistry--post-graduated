import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Quiz } from "@/components/Quiz";
import { getRegistry } from "@/content/registry";
import { t, type Locale } from "@/lib/i18n";

/**
 * Thin wrapper that owns the Suspense boundary the quiz needs (it reads
 * ?topic=..., which is a client-side search param), so both language routes
 * stay a single line.
 */
export default function QuizView({
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

  return (
    <Suspense
      fallback={
        <p className="py-10 text-center text-ink-soft">{d.quizLoading}</p>
      }
    >
      <Quiz locale={locale} lecture={lecture} />
    </Suspense>
  );
}
