// Arabic content tree.
//
// The English tree in content/index.ts is the structural skeleton: same
// subject slugs, course ids, lecture slugs and section ids, because those are
// what URLs, anchors and MCQ topicId filtering are built from. What changes is
// everything a reader sees - titles, prose, captions, tables, questions.
//
// A lecture is only treated as translated once its module below is filled in.
// An empty or missing translation falls back to the English lecture, so the
// Arabic site is never broken mid-way through the work; `untranslated` records
// what is still outstanding and tools/check_site.py fails on it.

import type { Lecture, Subject } from "../types";
import { subjects as enSubjects } from "../index";
import { fundamentalsAr } from "./fundamentals";
import { lecture1Ar } from "./lecture-1";

/** English lecture slug -> Arabic translation. */
export const arLectures: Record<string, Lecture> = {
  fundamentals: fundamentalsAr,
  lecture1: lecture1Ar,
};

/** A translation counts only if it actually carries sections. */
const isTranslated = (l: Lecture | undefined): l is Lecture =>
  !!l && l.sections.length > 0;

/**
 * Walk the English tree and swap in Arabic lectures where one exists. Course
 * and subject prose is translated inline below; the structure is inherited.
 */
function mergeTree(
  arSubjectText: Record<string, Partial<Pick<Subject, "title" | "tagline" | "description">>> = {},
  arCourseText: Record<string, Partial<Pick<Subject["courses"][number], "title" | "description">>> = {},
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
          lectures: c.lectures.map((l) =>
            isTranslated(arLectures[l.slug]) ? arLectures[l.slug] : l,
          ),
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

/**
 * English lecture slugs still served in English under /ar. Should be empty
 * once the translation pass is finished; the site checker treats a non-empty
 * list as a build failure so a half-finished language cannot ship unnoticed.
 */
export const untranslated: string[] = subjects
  .flatMap((s) => s.courses)
  .flatMap((c) => c.lectures)
  .filter((l) => !isTranslated(arLectures[l.slug]))
  .map((l) => l.slug);
