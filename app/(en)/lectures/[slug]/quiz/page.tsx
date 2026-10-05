import type { Metadata } from "next";
import QuizView from "@/components/views/QuizView";
import { allLectures } from "@/content";
import { t } from "@/lib/i18n";

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
  const d = t("en");
  const lecture = allLectures.find((l) => l.slug === slug);
  if (!lecture) return { title: d.quizNotFound };
  return {
    title: `${lecture.label} quiz`,
    description: d.quizMetaDesc.replace("{title}", lecture.title),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <QuizView locale="en" slug={slug} />;
}
