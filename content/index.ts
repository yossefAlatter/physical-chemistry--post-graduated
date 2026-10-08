// The content registry.
//
// This is the only file that announces new material. The sidebar, the home
// page, every route and the quiz filters all read from here.
//
//   Subject  -> a subject area          content/types.ts
//     Course -> a group of lessons
//       Lesson
//         Section                       <- one page each
//
// To add a subject, a course, a lesson or a section, add the file and one
// line below. Nothing else needs editing.
//
// This module holds the content tree and the lookup logic, written as a
// factory so the derived values (navigation, section neighbours, question
// counts) are computed once from it. Routes and views read those through
// content/registry.ts rather than reaching into the content files.

import type { Course, Lesson, Mcq, Section, Subject } from "./types";
import { lesson0 } from "./lesson-0";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";
import { lesson6 } from "./lesson-6";
import { lesson7 } from "./lesson-7";
import { lesson8 } from "./lesson-8";
import { lesson9 } from "./lesson-9";
import { lesson10 } from "./lesson-10";
import { lesson11 } from "./lesson-11";
import { lesson12 } from "./lesson-12";
import { lesson13 } from "./lesson-13";
import { lesson14 } from "./lesson-14";
import { lesson15 } from "./lesson-15";
import { lesson16 } from "./lesson-16";

/* --------------------------------------------------------------- subjects --*/

export const subjects: Subject[] = [
  {
    slug: "physical-chemistry",
    title: "Physical Chemistry",
    tagline: "Postgraduate · from first principles to research level",
    description:
      "Postgraduate physical chemistry, taught in short illustrated sections. " +
      "Begin with Lesson 0, a short orientation, then work through the " +
      "lessons in order. Every section is a short page with its own quick " +
      "check, and the full question bank sits behind each lesson.",
    courses: [
      {
        id: "electrochemistry",
        title: "Electrochemistry",
        description:
          "The core subject: how charge moves, how potentials are measured, " +
          "why rates are what they are, and how cells are designed, used and " +
          "broken. Begin with Lesson 0, a short orientation, then work " +
          "through the lessons in order.",
        lessons: [
          lesson0,
          lesson1,
          lesson2,
          lesson3,
          lesson4,
          lesson5,
          lesson6,
          lesson7,
          lesson8,
          lesson9,
          lesson10,
          lesson11,
          lesson12,
          lesson13,
          lesson14,
          lesson15,
          lesson16,
        ],
      },
    ],
  },
  // A second subject, e.g. { slug: "spectroscopy", title: "Spectroscopy", ... }
];

/* ----------------------------------------------------------------- registry --*/

export interface SectionNeighbour {
  section: Section;
  /** 1-based position inside the lesson. */
  index: number;
  total: number;
  prev?: Section;
  next?: Section;
}

/**
 * Every derived lookup the site performs, computed once for one subject tree.
 * Routes ask for a Registry rather than reaching into the content files.
 */
export interface Registry {
  subjects: Subject[];
  allCourses: Course[];
  allLessons: Lesson[];
  allSections: Section[];

  getSubject(slug: string): Subject | undefined;
  /** The default subject, used for the site root. */
  primarySubject(): Subject;
  getCourse(id: string): Course | undefined;
  getLesson(slug: string): Lesson | undefined;
  getSection(
    lesson: Lesson | undefined,
    sectionId: string,
  ): Section | undefined;
  subjectOfLesson(lesson: Lesson): Subject | undefined;
  courseOfLesson(lesson: Lesson): Course | undefined;
  nextLesson(slug: string): Lesson | undefined;
  prevLesson(slug: string): Lesson | undefined;

  questionsForSection(lesson: Lesson, sectionId: string): Mcq[];
  quickCheckFor(lesson: Lesson, sectionId: string): Mcq[];
  countQuestions(lesson: Lesson): number;
  countQuickChecks(lesson: Lesson): number;

  sectionNeighbours(
    lesson: Lesson,
    sectionId: string,
  ): SectionNeighbour | undefined;

  /* Links. The site is served from the root, so its URLs carry no prefix. */
  lessonHref(lesson: Lesson | { slug: string }): string;
  sectionHref(
    lesson: Lesson | { slug: string },
    section: Section | { id: string },
  ): string;
  quizHref(lesson: Lesson | { slug: string }): string;
  homeHref(): string;
}

export function createRegistry(tree: Subject[]): Registry {
  const allCourses = tree.flatMap((s) => s.courses);
  const allLessons = allCourses.flatMap((c) => c.lessons);
  const allSections = allLessons.flatMap((l) => l.sections);

  // Defined as locals, not inline methods: the shortcuts below destructure
  // these off the object, and `this` would be undefined by then.
  const questionsForSection = (lesson: Lesson, sectionId: string): Mcq[] =>
    lesson.mcq.filter((q) => q.topicId === sectionId);

  /**
   * The two or three questions shown inline at the bottom of a section page.
   * Falls back to the first few of the section's questions so a section is
   * never left without a quick check just because nobody flagged one.
   */
  const quickCheckFor = (lesson: Lesson, sectionId: string): Mcq[] => {
    const all = questionsForSection(lesson, sectionId);
    const flagged = all.filter((q) => q.quick);
    return (flagged.length ? flagged : all).slice(0, 3);
  };

  return {
    subjects: tree,
    allCourses,
    allLessons,
    allSections,

    getSubject: (slug) => tree.find((s) => s.slug === slug),
    primarySubject: () => tree[0],
    getCourse: (id) => allCourses.find((c) => c.id === id),
    getLesson: (slug) => allLessons.find((l) => l.slug === slug),
    getSection: (lesson, sectionId) =>
      lesson?.sections.find((s) => s.id === sectionId),

    subjectOfLesson: (lesson) =>
      tree.find((s) => s.courses.some((c) => c.lessons.includes(lesson))),
    courseOfLesson: (lesson) =>
      allCourses.find((c) => c.lessons.includes(lesson)),

    nextLesson: (slug) => {
      const i = allLessons.findIndex((l) => l.slug === slug);
      return i >= 0 ? allLessons[i + 1] : undefined;
    },
    prevLesson: (slug) => {
      const i = allLessons.findIndex((l) => l.slug === slug);
      return i > 0 ? allLessons[i - 1] : undefined;
    },

    questionsForSection,

    quickCheckFor,

    countQuestions: (lesson) => lesson.mcq.length,
    countQuickChecks: (lesson) =>
      lesson.sections.reduce((n, s) => n + quickCheckFor(lesson, s.id).length, 0),

    sectionNeighbours: (lesson, sectionId) => {
      const i = lesson.sections.findIndex((s) => s.id === sectionId);
      if (i < 0) return undefined;
      return {
        section: lesson.sections[i],
        index: i + 1,
        total: lesson.sections.length,
        prev: lesson.sections[i - 1],
        next: lesson.sections[i + 1],
      };
    },

    // Links are built at the root, so the original `/lessons/...` URLs are
    // byte-for-byte unchanged.
    lessonHref: (lesson) => `/lessons/${lesson.slug}`,
    sectionHref: (lesson, section) => `/lessons/${lesson.slug}/${section.id}`,
    quizHref: (lesson) => `/lessons/${lesson.slug}/quiz`,
    homeHref: () => "/",
  };
}

/* ------------------------------------------------------------- shortcuts --*/

/*
 * The registry for this content tree, plus the unprefixed helper functions the
 * routes were written against. Kept as thin wrappers so existing call sites
 * keep reading the same, with content/registry.ts offering the same set.
 */

export const registry: Registry = createRegistry(subjects);

export const allCourses = registry.allCourses;
export const allLessons = registry.allLessons;
export const allSections = registry.allSections;

export const getSubject = registry.getSubject;
export const primarySubject = registry.primarySubject;
export const getCourse = registry.getCourse;
export const getLesson = registry.getLesson;
export const getSection = registry.getSection;
export const subjectOfLesson = registry.subjectOfLesson;
export const courseOfLesson = registry.courseOfLesson;
export const nextLesson = registry.nextLesson;
export const prevLesson = registry.prevLesson;
export const questionsForSection = registry.questionsForSection;
export const quickCheckFor = registry.quickCheckFor;
export const countQuestions = registry.countQuestions;
export const countQuickChecks = registry.countQuickChecks;
export const sectionNeighbours = registry.sectionNeighbours;

export const lessonHref = (lesson: Lesson | { slug: string }) =>
  registry.lessonHref(lesson);

export const sectionHref = (
  lesson: Lesson | { slug: string },
  section: Section | { id: string },
) => registry.sectionHref(lesson, section);

export const quizHref = (lesson: Lesson | { slug: string }) =>
  registry.quizHref(lesson);
