import type { Metadata } from "next";
import SectionView from "@/components/views/SectionView";
import { getRegistry } from "@/content/registry";
import { t } from "@/lib/i18n";

type Params = { slug: string; section: string };

export function generateStaticParams(): Params[] {
  return getRegistry("ar").allLectures.flatMap((l) =>
    l.sections.map((s) => ({ slug: l.slug, section: s.id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug, section } = await params;
  const d = t("ar");
  const lecture = getRegistry("ar").getLecture(slug);
  const s = lecture?.sections.find((x) => x.id === section);
  if (!s || !lecture) return { title: d.sectionNotFound };
  return {
    title: `${s.title} — ${lecture.label}`,
    description: s.summary,
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug, section } = await params;
  return <SectionView locale="ar" slug={slug} sectionId={section} />;
}
