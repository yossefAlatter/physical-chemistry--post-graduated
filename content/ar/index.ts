// Arabic content tree.
//
// The English tree in content/index.ts is the structural skeleton: same
// subject slugs, course ids, lecture slugs, section ids and question ids,
// because those are what URLs, anchors and MCQ topicId filtering are built
// from. What changes is everything a reader sees - titles, prose, captions,
// tables, questions.
//
// Translation is merged at the level of the individual section and the
// individual question, not the whole lecture. A lecture is assembled from its
// English original with any translated part swapped in, so work in progress
// can never drop a section or a question from the Arabic site. `missing`
// records exactly what is still English, and tools/check_translation.py plus
// tools/check_site.py treat a non-empty list as a build failure.

import type { Block, Lecture, Mcq, Section, Subject } from "../types";
import { subjects as enSubjects } from "../index";
import { fundamentalsAr } from "./fundamentals";
import { lecture1Ar } from "./lecture-1";

/**
 * Partial Arabic lectures. A section or question is translated by appearing in
 * the matching list below; anything absent keeps its English text.
 */
export const arLectures: Record<string, Partial<Lecture>> = {
  fundamentals: fundamentalsAr,
  "lecture-1": lecture1Ar,
};

/**
 * Merge one English lecture with its Arabic translation.
 *
 * Section and question ids are matched positionally against the English
 * original rather than trusted blindly, so a translation that reorders or
 * invents an id fails the parity checks instead of silently swapping two
 * topics.
 */
function mergeLecture(en: Lecture, ar: Partial<Lecture> | undefined): Lecture {
  if (!ar) return en;

  const arSections = new Map<string, Section>(
    (ar.sections ?? []).map((s) => [s.id, s]),
  );
  const arMcq = new Map<string, Mcq>((ar.mcq ?? []).map((q) => [q.id, q]));

  // A section's block list is replaced wholesale rather than merged block by
  // block: a half-translated section would read worse than a clearly
  // untranslated one, and block-level merging invites drift.
  const sections = en.sections.map((s) => arSections.get(s.id) ?? s);
  const mcq = en.mcq.map((q) => arMcq.get(q.id) ?? q);

  return {
    ...en,
    label: ar.label || en.label,
    title: ar.title || en.title,
    summary: ar.summary || en.summary,
    minutes: ar.minutes || en.minutes,
    intro: ar.intro?.length ? (ar.intro as Block[]) : en.intro,
    constants: ar.constants?.length ? ar.constants : en.constants,
    sections,
    mcq,
  };
}

function mergeTree(
  arSubjectText: Record<
    string,
    Partial<Pick<Subject, "title" | "tagline" | "description">>
  > = {},
  arCourseText: Record<
    string,
    Partial<Pick<Subject["courses"][number], "title" | "description">>
  > = {},
): Subject[] {
  return enSubjects.map((s) => {
    const st = arSubjectText[s.slug] ?? {};
    return {
      ...s,
      title: st.title ?? s.title,
      tagline: st.tagline ?? s.tagline,
      description: st.description ?? s.description,
      courses: s.courses.map((c) => {
        const ct = arCourseText[c.id] ?? {};
        return {
          ...c,
          title: ct.title ?? c.title,
          description: ct.description ?? c.description,
          lectures: c.lectures.map((l) => mergeLecture(l, arLectures[l.slug])),
        };
      }),
    };
  });
}

export const subjects: Subject[] = mergeTree(
  {
    "physical-chemistry": {
      title: "الكيمياء الفيزيائية",
      tagline: "دراسات عليا · من المبادئ الأساسية إلى مستوى البحث",
      description:
        "كيمياء فيزيائية لطلاب الدراسات العليا، مبنية كتسلسل متدرّج لا كمرجع. " +
        "ابدأ بأسس الكيمياء الكهربية، التي لا تفترض أي معرفة كيمياء سابقة " +
        "إضافة إلى فيزياء وكيمياء المرحلة الثانوية، ثم تابع المحاضرات. كل قسم " +
        "صفحة قصيرة تنتهي بفحصها السريع الخاص، وبنك الأسئلة الكامل متاح خلف كل محاضرة.",
    },
  },
  {
    electrochemistry: {
      title: "الكيمياء الكهربية",
      description:
        "المادة الأساسية: كيف تتحرك الشحنة، وكيف تُقاس الجهد، ولماذا تكون " +
        "السرعات ما هي، وكيف تُصمَّم الخلايا وتُستخدم وتُعطَّل. ابدأ بأسس " +
        "الكيمياء الكهربية التي لا تفترض أي معرفة سابقة، ثم تابع المحاضرات بالترتيب.",
    },
  },
);

/** Everything still served in English under /ar, as "lecture/section" keys. */
export function missing(localeLectures = arLectures): string[] {
  const out: string[] = [];
  for (const en of enSubjects.flatMap((s) => s.courses).flatMap((c) => c.lectures)) {
    const ar = localeLectures[en.slug];
    if (!ar) {
      out.push(en.slug);
      continue;
    }
    const arSections = new Set((ar.sections ?? []).map((s) => s.id));
    for (const s of en.sections) {
      if (!arSections.has(s.id)) out.push(`${en.slug}/${s.id}`);
    }
    const arMcq = new Set((ar.mcq ?? []).map((q) => q.id));
    for (const q of en.mcq) {
      if (!arMcq.has(q.id)) out.push(`${en.slug}#${q.id}`);
    }
  }
  return out;
}

export const untranslated = missing();
