import type { Metadata } from "next";
import QuizView from "@/components/views/QuizView";
import { allLessons } from "@/content";
import { t } from "@/lib/i18n";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allLessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = t();
  const lesson = allLessons.find((l) => l.slug === slug);
  if (!lesson) return { title: d.quizNotFound };
  return {
    title: `${lesson.label} quiz`,
    description: d.quizMetaDesc.replace("{title}", lesson.title),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <QuizView slug={slug} />;
}
