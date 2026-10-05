import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Quiz } from "@/components/Quiz";
import { allLectures, getLecture } from "@/content";

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
  if (!lecture) return { title: "Quiz not found" };
  return {
    title: `${lecture.label} quiz`,
    description: `Multiple choice questions on ${lecture.title}.`,
  };
}

export default async function QuizPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lecture = getLecture(slug);
  if (!lecture) notFound();

  return (
    // the quiz reads ?topic=..., which needs a Suspense boundary
    <Suspense
      fallback={
        <p className="py-10 text-center text-ink-soft">Loading the quiz…</p>
      }
    >
      <Quiz lecture={lecture} />
    </Suspense>
  );
}