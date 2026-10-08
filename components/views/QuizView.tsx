import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Quiz } from "@/components/Quiz";
import { getRegistry } from "@/content/registry";
import { t } from "@/lib/i18n";

/**
 * Thin wrapper that owns the Suspense boundary the quiz needs (it reads
 * ?topic=..., which is a client-side search param), so the route stays a
 * single line.
 */
export default function QuizView({ slug }: { slug: string }) {
  const reg = getRegistry();
  const d = t();

  const lesson = reg.getLesson(slug);
  if (!lesson) notFound();

  return (
    <Suspense
      fallback={
        <p className="py-10 text-center text-ink-soft">{d.quizLoading}</p>
      }
    >
      <Quiz lesson={lesson} />
    </Suspense>
  );
}
