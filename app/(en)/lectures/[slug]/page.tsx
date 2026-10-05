import type { Metadata } from "next";
import LectureView from "@/components/views/LectureView";
import { plainText } from "@/components/Blocks";
import { allLectures } from "@/content";

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
  const lecture = allLectures.find((l) => l.slug === slug);
  if (!lecture) return { title: "Lecture not found" };
  return {
    title: `${lecture.label}: ${lecture.title}`,
    description: plainText(lecture.summary),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  return <LectureView locale="en" slug={slug} />;
}
