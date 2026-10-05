import type { Metadata } from "next";
import LectureView from "@/components/views/LectureView";
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
  if (!lecture) return { title: d.lectureNotFound };
  return {
    title: `${lecture.label}: ${lecture.title}`,
    description: lecture.summary,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <LectureView locale="ar" slug={slug} />;
}
