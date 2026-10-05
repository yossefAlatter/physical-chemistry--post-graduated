// The content registry.
//
// This is the only file that announces new material. The sidebar, the home
// page, every route and the quiz filters all read from here.
//
//   Subject  -> a subject area          content/types.ts
//     Course -> a group of lectures
//       Lecture
//         Section                       <- one page each
//
// To add a subject, a course, a lecture or a section, add the file and one
// line below. Nothing else needs editing.

import type { Course, Lecture, Mcq, Section, Subject } from "./types";
import { fundamentals } from "./fundamentals";
import { lecture1 } from "./lecture-1";

/* --------------------------------------------------------------- subjects --*/

export const subjects: Subject[] = [
  {
    slug: "physical-chemistry",
    title: "Physical Chemistry",
    tagline: "Postgraduate · from first principles to research level",
    description:
      "Physical chemistry for postgraduate students, built as a sequence " +
      "rather than a reference. Start with Fundamentals, which assumes no " +
      "prior chemistry beyond high-school physics and chemistry, then work " +
      "through the lectures. Every section is a short page with its own " +
      "quick check, and the full question bank sits behind each lecture.",
    courses: [
      {
        id: "start-here",
        title: "Start Here",
        description:
          "Read this first. It builds the vocabulary and the handful of " +
          "relations every later lecture assumes, and it finishes by telling " +
          "you which topics you are ready to start.",
        lectures: [fundamentals],
      },
      {
        id: "electrochemistry",
        title: "Electrochemistry",
        description:
          "The core subject: how charge moves, how potentials are measured, " +
          "why rates are what they are, and how cells are designed, used and " +
          "broken. Work through the lectures in order.",
        lectures: [
          lecture1,
          // lecture2,   <- Lecture 2 goes here
          // lecture3,
        ],
      },
    ],
  },
  // A second subject, e.g. { slug: "spectroscopy", title: "Spectroscopy", ... },
];

/* ---------------------------------------------------------------- lookups --*/

export const allCourses: Course[] = subjects.flatMap((s) => s.courses);

export const allLectures: Lecture[] = allCourses.flatMap((c) => c.lectures);

export const allSections: Section[] = allLectures.flatMap((l) => l.sections);

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

/** The default subject, used for the site root. */
export function primarySubject(): Subject {
  return subjects[0];
}

export function getCourse(id: string): Course | undefined {
  return allCourses.find((c) => c.id === id);
}

export function getLecture(slug: string): Lecture | undefined {
  return allLectures.find((l) => l.slug === slug);
}

export function getSection(
  lecture: Lecture | undefined,
  sectionId: string,
): Section | undefined {
  return lecture?.sections.find((s) => s.id === sectionId);
}

export function subjectOfLecture(lecture: Lecture): Subject | undefined {
  return subjects.find((s) => s.courses.some((c) => c.lectures.includes(lecture)));
}

export function courseOfLecture(lecture: Lecture): Course | undefined {
  return allCourses.find((c) => c.lectures.includes(lecture));
}

export function nextLecture(slug: string): Lecture | undefined {
  const i = allLectures.findIndex((l) => l.slug === slug);
  return i >= 0 ? allLectures[i + 1] : undefined;
}

export function prevLecture(slug: string): Lecture | undefined {
  const i = allLectures.findIndex((l) => l.slug === slug);
  return i > 0 ? allLectures[i - 1] : undefined;
}

/* ----------------------------------------------------------------- quizzes --*/

export function questionsForSection(
  lecture: Lecture,
  sectionId: string,
): Mcq[] {
  return lecture.mcq.filter((q) => q.topicId === sectionId);
}

/**
 * The two or three questions shown inline at the bottom of a section page.
 * Falls back to the first few of the section's questions so a section is
 * never left without a quick check just because nobody flagged one.
 */
export function quickCheckFor(lecture: Lecture, sectionId: string): Mcq[] {
  const all = questionsForSection(lecture, sectionId);
  const flagged = all.filter((q) => q.quick);
  return (flagged.length ? flagged : all).slice(0, 3);
}

export function countQuestions(lecture: Lecture): number {
  return lecture.mcq.length;
}

/** Total quick-check questions across a lecture. */
export function countQuickChecks(lecture: Lecture): number {
  return lecture.sections.reduce(
    (n, s) => n + quickCheckFor(lecture, s.id).length,
    0,
  );
}

/* ------------------------------------------------------------- navigation --*/

export interface SectionNeighbour {
  section: Section;
  /** 1-based position inside the lecture. */
  index: number;
  total: number;
  prev?: Section;
  next?: Section;
}

export function sectionNeighbours(
  lecture: Lecture,
  sectionId: string,
): SectionNeighbour | undefined {
  const i = lecture.sections.findIndex((s) => s.id === sectionId);
  if (i < 0) return undefined;
  return {
    section: lecture.sections[i],
    index: i + 1,
    total: lecture.sections.length,
    prev: lecture.sections[i - 1],
    next: lecture.sections[i + 1],
  };
}

export const lectureHref = (lecture: Lecture | { slug: string }) =>
  `/lectures/${lecture.slug}`;

export const sectionHref = (
  lecture: Lecture | { slug: string },
  section: Section | { id: string },
) => `/lectures/${lecture.slug}/${section.id}`;

export const quizHref = (lecture: Lecture | { slug: string }) =>
  `/lectures/${lecture.slug}/quiz`;