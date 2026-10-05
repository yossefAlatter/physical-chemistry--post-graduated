// The content registry.
//
// This is the only place a new lecture has to be announced. To add Lecture 2:
//
//   1. content/lecture-2.ts          -> the content
//   2. content/lecture-2.mcq.ts      -> its questions
//   3. add the two imports and one entry in courses below
//
// The sidebar, the home page, the routes and the quiz filters all read from
// here, so nothing else needs editing.

import type { Course, Lecture } from "./types";
import { lecture1 } from "./lecture-1";

/** Adding a lecture: import it here and give it an `order`. */
export const lectures: Lecture[] = [
  lecture1,
  // lecture2,   <- Lecture 2 goes here
  // lecture3,   <- and Lecture 3
];

export const courses: Course[] = [
  {
    id: "fundamentals",
    title: "Fundamentals",
    description:
      "The core electrochemistry, in order. Work through the lectures in " +
      "sequence: each one assumes the previous.",
    lectures,
  },
  // A second group, e.g. { id: "advanced", title: "Advanced", ... },
];

export const allLectures: Lecture[] = courses.flatMap((c) => c.lectures);

export function getLecture(slug: string): Lecture | undefined {
  return allLectures.find((l) => l.slug === slug);
}

export function getCourseOf(slug: string): Course | undefined {
  return courses.find((c) => c.lectures.some((l) => l.slug === slug));
}

export function nextLecture(slug: string): Lecture | undefined {
  const flat = allLectures;
  const i = flat.findIndex((l) => l.slug === slug);
  return i >= 0 ? flat[i + 1] : undefined;
}

export function prevLecture(slug: string): Lecture | undefined {
  const flat = allLectures;
  const i = flat.findIndex((l) => l.slug === slug);
  return i > 0 ? flat[i - 1] : undefined;
}

/** Section lookup, used by the quiz to group questions by topic. */
export function sectionsOf(lecture: Lecture) {
  return lecture.sections;
}

export function countQuestions(lecture: Lecture): number {
  return lecture.mcq.length;
}

export function questionsForSection(
  lecture: Lecture,
  sectionId: string,
): Lecture["mcq"] {
  return lecture.mcq.filter((q) => q.topicId === sectionId);
}