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
//
// This module holds the ENGLISH tree and the lookup logic. The logic is
// written as a factory over an arbitrary subject tree so that a translated
// tree can reuse every derived value (navigation, section neighbours,
// question counts) instead of reimplementing them. content/registry.ts picks
// the right tree per locale; English is always the fallback, so a partly
// translated language still renders a complete site.

import { defaultLocale, localePath, type Locale } from "@/lib/i18n";
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
        id: "electrochemistry",
        title: "Electrochemistry",
        description:
          "The core subject: how charge moves, how potentials are measured, " +
          "why rates are what they are, and how cells are designed, used and " +
          "broken. Start with Fundamentals, which assumes no prior chemistry " +
          "beyond high-school physics and chemistry, then work through the " +
          "lectures in order.",
        lectures: [
          fundamentals,
          lecture1,
          // lecture2,   <- Lecture 2 goes here
          // lecture3,
        ],
      },
    ],
  },
  // A second subject, e.g. { slug: "spectroscopy", title: "Spectroscopy", ... }
];

/* ----------------------------------------------------------------- registry --*/

export interface SectionNeighbour {
  section: Section;
  /** 1-based position inside the lecture. */
  index: number;
  total: number;
  prev?: Section;
  next?: Section;
}

/**
 * Every derived lookup the site performs, computed once for one subject tree.
 * Routes ask for a Registry by locale rather than reaching into the content
 * files, so switching language never changes how navigation is computed.
 */
export interface Registry {
  subjects: Subject[];
  allCourses: Course[];
  allLectures: Lecture[];
  allSections: Section[];

  getSubject(slug: string): Subject | undefined;
  /** The default subject, used for the site root. */
  primarySubject(): Subject;
  getCourse(id: string): Course | undefined;
  getLecture(slug: string): Lecture | undefined;
  getSection(
    lecture: Lecture | undefined,
    sectionId: string,
  ): Section | undefined;
  subjectOfLecture(lecture: Lecture): Subject | undefined;
  courseOfLecture(lecture: Lecture): Course | undefined;
  nextLecture(slug: string): Lecture | undefined;
  prevLecture(slug: string): Lecture | undefined;

  questionsForSection(lecture: Lecture, sectionId: string): Mcq[];
  quickCheckFor(lecture: Lecture, sectionId: string): Mcq[];
  countQuestions(lecture: Lecture): number;
  countQuickChecks(lecture: Lecture): number;

  sectionNeighbours(
    lecture: Lecture,
    sectionId: string,
  ): SectionNeighbour | undefined;

  /* Links. English is served from the root, so its URLs carry no prefix. */
  lectureHref(lecture: Lecture | { slug: string }): string;
  sectionHref(
    lecture: Lecture | { slug: string },
    section: Section | { id: string },
  ): string;
  quizHref(lecture: Lecture | { slug: string }): string;
  homeHref(): string;
}

export function createRegistry(tree: Subject[]): Registry {
  const allCourses = tree.flatMap((s) => s.courses);
  const allLectures = allCourses.flatMap((c) => c.lectures);
  const allSections = allLectures.flatMap((l) => l.sections);

  // Defined as locals, not inline methods: the shortcuts below destructure
  // these off the object, and `this` would be undefined by then.
  const questionsForSection = (lecture: Lecture, sectionId: string): Mcq[] =>
    lecture.mcq.filter((q) => q.topicId === sectionId);

  /**
   * The two or three questions shown inline at the bottom of a section page.
   * Falls back to the first few of the section's questions so a section is
   * never left without a quick check just because nobody flagged one.
   */
  const quickCheckFor = (lecture: Lecture, sectionId: string): Mcq[] => {
    const all = questionsForSection(lecture, sectionId);
    const flagged = all.filter((q) => q.quick);
    return (flagged.length ? flagged : all).slice(0, 3);
  };

  return {
    subjects: tree,
    allCourses,
    allLectures,
    allSections,

    getSubject: (slug) => tree.find((s) => s.slug === slug),
    primarySubject: () => tree[0],
    getCourse: (id) => allCourses.find((c) => c.id === id),
    getLecture: (slug) => allLectures.find((l) => l.slug === slug),
    getSection: (lecture, sectionId) =>
      lecture?.sections.find((s) => s.id === sectionId),

    subjectOfLecture: (lecture) =>
      tree.find((s) => s.courses.some((c) => c.lectures.includes(lecture))),
    courseOfLecture: (lecture) =>
      allCourses.find((c) => c.lectures.includes(lecture)),

    nextLecture: (slug) => {
      const i = allLectures.findIndex((l) => l.slug === slug);
      return i >= 0 ? allLectures[i + 1] : undefined;
    },
    prevLecture: (slug) => {
      const i = allLectures.findIndex((l) => l.slug === slug);
      return i > 0 ? allLectures[i - 1] : undefined;
    },

    questionsForSection,

    quickCheckFor,

    countQuestions: (lecture) => lecture.mcq.length,
    countQuickChecks: (lecture) =>
      lecture.sections.reduce((n, s) => n + quickCheckFor(lecture, s.id).length, 0),

    sectionNeighbours: (lecture, sectionId) => {
      const i = lecture.sections.findIndex((s) => s.id === sectionId);
      if (i < 0) return undefined;
      return {
        section: lecture.sections[i],
        index: i + 1,
        total: lecture.sections.length,
        prev: lecture.sections[i - 1],
        next: lecture.sections[i + 1],
      };
    },

    // English links are built at the root, so the original `/lectures/...`
    // URLs are byte-for-byte unchanged. Other locales go through
    // content/registry.ts, which wraps these paths with localePath.
    lectureHref: (lecture) => `/lectures/${lecture.slug}`,
    sectionHref: (lecture, section) => `/lectures/${lecture.slug}/${section.id}`,
    quizHref: (lecture) => `/lectures/${lecture.slug}/quiz`,
    homeHref: () => "/",
  };
}

/* ------------------------------------------------------- English shortcuts --*/

/*
 * The English registry, plus the unprefixed helper functions the original
 * routes were written against. Kept as thin wrappers so existing call sites
 * keep reading the same while the locale-aware versions live in
 * content/registry.ts.
 */

export const registry: Registry = createRegistry(subjects);

export const allCourses = registry.allCourses;
export const allLectures = registry.allLectures;
export const allSections = registry.allSections;

export const getSubject = registry.getSubject;
export const primarySubject = registry.primarySubject;
export const getCourse = registry.getCourse;
export const getLecture = registry.getLecture;
export const getSection = registry.getSection;
export const subjectOfLecture = registry.subjectOfLecture;
export const courseOfLecture = registry.courseOfLecture;
export const nextLecture = registry.nextLecture;
export const prevLecture = registry.prevLecture;
export const questionsForSection = registry.questionsForSection;
export const quickCheckFor = registry.quickCheckFor;
export const countQuestions = registry.countQuestions;
export const countQuickChecks = registry.countQuickChecks;
export const sectionNeighbours = registry.sectionNeighbours;

/**
 * Build a site path for one locale. English stays at the root so the original
 * `/lectures/...` URLs keep working; other locales are prefixed.
 */
export function href(locale: Locale, ...segments: string[]): string {
  return localePath(locale, "/" + segments.filter(Boolean).join("/"));
}

export const lectureHref = (lecture: Lecture | { slug: string }) =>
  registry.lectureHref(lecture);

export const sectionHref = (
  lecture: Lecture | { slug: string },
  section: Section | { id: string },
) => registry.sectionHref(lecture, section);

export const quizHref = (lecture: Lecture | { slug: string }) =>
  registry.quizHref(lecture);

export { defaultLocale };
