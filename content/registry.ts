// Locale-aware content access.
//
// Routes and views never import the content files directly. They ask for the
// registry of their language, which returns the same derived data (navigation,
// section neighbours, question counts) either way. That is what keeps the two
// languages from drifting apart in behaviour: only strings differ.
//
// Links are the one place the two languages genuinely differ, so they are
// built here rather than in the registry. English keeps its original root
// URLs; every other locale is prefixed. Each locale-aware helper reuses the
// English path shape, so there is exactly one definition of what a lecture
// URL looks like.

import {
  defaultLocale,
  localePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n";
import {
  createRegistry,
  registry as enRegistry,
  subjects as enSubjects,
  type Registry,
} from "./index";
import type { Lecture, Section, Subject } from "./types";
import { subjects as arSubjects, untranslated as arUntranslated } from "./ar";

const arRegistry: Registry = createRegistry(arSubjects);

const registries: Record<Locale, Registry> = {
  en: enRegistry,
  ar: arRegistry,
};

/** The registry for a language, falling back to English if it is unknown. */
export function getRegistry(locale: Locale = defaultLocale): Registry {
  return registries[locale] ?? enRegistry;
}

export function getSubjects(locale: Locale = defaultLocale): Subject[] {
  return getRegistry(locale).subjects;
}

/* -------------------------------------------------------------------- links --*/

export function homeHref(locale: Locale = defaultLocale): string {
  return localePath(locale, "/");
}

export function lectureHref(
  locale: Locale,
  lecture: Lecture | { slug: string },
): string {
  return localePath(locale, enRegistry.lectureHref(lecture));
}

export function sectionHref(
  locale: Locale,
  lecture: Lecture | { slug: string },
  section: Section | { id: string },
): string {
  return localePath(locale, enRegistry.sectionHref(lecture, section));
}

export function quizHref(
  locale: Locale,
  lecture: Lecture | { slug: string },
): string {
  return localePath(locale, enRegistry.quizHref(lecture));
}

/**
 * The same page in the other language, for the language switcher.
 *
 * The current prefix has to come off before the new one goes on: passing the
 * raw pathname to localePath would leave "/ar/lectures/x" still pointing at
 * Arabic when the reader asked for English.
 */
export function alternateLocalePath(locale: Locale, pathname: string): string {
  const next: Locale = locale === "ar" ? "en" : "ar";
  return localePath(next, stripLocale(pathname));
}

/* ------------------------------------------------------------- translation --*/

export { arSubjects, enSubjects };

/** Lecture slugs still falling back to English. Checked by the site tests. */
export function untranslatedLectures(locale: Locale = defaultLocale): string[] {
  return locale === "ar" ? arUntranslated : [];
}

export type { Registry };
