import type { Metadata } from "next";
import SectionView from "@/components/views/SectionView";
import { plainText } from "@/components/Blocks";
import { allLectures } from "@/content";

type Params = { slug: string; section: string };

export function generateStaticParams(): Params[] {
  return allLectures.flatMap((l) =>
    l.sections.map((s) => ({ slug: l.slug, section: s.id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, section } = await params;
  const lecture = allLectures.find((l) => l.slug === slug);
  const s = lecture?.sections.find((x) => x.id === section);
  if (!s || !lecture) return { title: "Section not found" };
  return {
    title: `${s.title} — ${lecture.label}`,
    description: plainText(s.summary),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug, section } = await params;
  return <SectionView locale="en" slug={slug} sectionId={section} />;
}
