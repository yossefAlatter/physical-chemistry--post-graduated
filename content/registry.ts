// Content access.
//
// Routes and views never import the content files directly. They ask this
// module for the registry, which returns the derived data (navigation, section
// neighbours, question counts) and the site links, so there is exactly one
// definition of what a lesson URL looks like.

import { registry, type Registry } from "./index";
import type { Lesson, Section, Subject } from "./types";

/** The registry: the whole derived view of the content tree. */
export function getRegistry(): Registry {
  return registry;
}

export function getSubjects(): Subject[] {
  return registry.subjects;
}

/* -------------------------------------------------------------------- links --*/

export function homeHref(): string {
  return registry.homeHref();
}

export function lessonHref(lesson: Lesson | { slug: string }): string {
  return registry.lessonHref(lesson);
}

export function sectionHref(
  lesson: Lesson | { slug: string },
  section: Section | { id: string },
): string {
  return registry.sectionHref(lesson, section);
}

export function quizHref(lesson: Lesson | { slug: string }): string {
  return registry.quizHref(lesson);
}

export type { Registry };
