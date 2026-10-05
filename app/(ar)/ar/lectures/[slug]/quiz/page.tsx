import type { Metadata } from "next";
import QuizView from "@/components/views/QuizView";
import { getRegistry } from "@/content/registry";
import { t } from "@/lib/i18n";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getRegistry("ar").allLectures.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = t("ar");
  const lecture = getRegistry("ar").getLecture(slug);
  if (!lecture) return { title: d.quizNotFound };
  return {
    title: `اختبار ${lecture.label}`,
    description: d.quizMetaDesc.replace("{title}", lecture.title),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <QuizView locale="ar" slug={slug} />;
}
