// Internationalisation.
//
// Two locales, English and Arabic. English is the default and keeps its
// original URLs (`/lectures/lecture-1`); Arabic lives under `/ar`. That
// asymmetry is deliberate: existing links, bookmarks and search results stay
// valid, and the Arabic tree can be added without touching the English one.
//
// Direction is a property of the locale, not of individual components. The
// root layout puts `dir` on <html> once, and every component then relies on
// CSS logical properties instead of deciding alignment for itself.
//
// Everything user-visible that is *not* lecture content lives here: labels,
// navigation, quiz chrome. The teaching content is translated alongside its
// English original in content/ar/, because prose has to be rewritten by a
// person, not substituted.

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

/** Writing direction for a locale. */
export const dirOf = (l: Locale): "ltr" | "rtl" =>
  l === "ar" ? "rtl" : "ltr";

/** Endonym: each language named in itself, as language pickers should. */
export const localeName: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

/** BCP 47 tag for <html lang> and the manifest. */
export const htmlLang: Record<Locale, string> = { en: "en", ar: "ar" };

/**
 * Option markers for MCQs. English uses A-D; Arabic uses its own letter
 * order (أ ب ج د) so that "the answer is B" in an explanation and the marker
 * on the button refer to the same option in both languages.
 */
export const optionLetters: Record<Locale, readonly string[]> = {
  en: ["A", "B", "C", "D"],
  ar: ["أ", "ب", "ج", "د"],
};

/**
 * Arabic needs a font with Arabic glyphs. Inter, Fraunces and JetBrains Mono
 * are all Latin-only, so the Arabic layout loads Noto Sans Arabic and swaps it
 * in through the same --font-body custom property the rest of the design
 * already uses. See app/(ar)/layout.tsx.
 */

/**
 * Prefix a site path with its locale. English is served from the root, so it
 * gets no prefix at all - that is what keeps the old URLs working.
 */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  return `/ar${clean === "/" ? "" : clean}`;
}

/** Strip the locale prefix back off, to recover the English path. */
export function stripLocale(pathname: string): string {
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    const rest = pathname.slice(3);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

/* ------------------------------------------------------------------ strings --*/

const en = {
  siteTitle: "Physical Chemistry",
  siteTagline: "Postgraduate",
  siteAuthorLine: "Postgraduate · Yossef Hafez Alatter",

  navOpen: "Open navigation",
  navClose: "Close navigation",
  navCourseNavigation: "Course navigation",
  navAllQuestions: "All questions",
  navSectionNavigation: "Section navigation",
  navHowBuiltTitle: "How this site is built",
  navHowBuiltBody:
    "Every lecture is a short set of section pages, each ending in its own quick check. Content is stored in the project files, so a correction lands on every copy at once.",
  navSecondAuthor: "Abla Hathout",
  navHome: "Home",

  switchLanguage: "Switch language",
  switchTo: "Switch to {name}",

  homeLedeLead: "Physical chemistry,",
  homeLedeRest: "one short section at a time.",
  homeSub:
    "Nothing here is a wall of text. Every topic is a page you can finish in a few minutes, with an illustration, the points worth memorising, and three questions answered on the spot.",
  statLectures: "Lectures",
  statSections: "Sections",
  statQuestions: "Questions",
  startFromZero: "Start from zero",
  howToUseTitle: "How to use this site",
  howStep1:
    "Begin with Fundamentals. It assumes nothing and takes about half an hour.",
  howStep2:
    "Read one section, then use the Next button. Never two screens at once.",
  howStep3:
    "Answer the three quick checks at the bottom before moving on. The explanation tells you which paragraph to reread if you got one wrong.",
  howStep4:
    "Only then try the full quiz, which mixes every section together.",

  lectureSectionsCount: "{n} short sections",
  lectureMinTotal: "{n} min total",
  lectureQuestions: "{n} questions",
  startReading: "Start reading",
  continueReading: "Continue reading",
  allQuestionsLink: "All {n} questions",
  sectionsHeading: "Sections",
  quickChecks: "{n} quick checks",
  quickCheckOne: "{n} quick check",
  inQuiz: "{n} in quiz",
  readLink: "Read →",
  constantsHeading: "Constants you will need",
  cardMeta: "{n} sections · {m} min · {k} questions",
  breadcrumbAria: "Breadcrumb",
  sectionNavAria: "Section navigation",
  quizMetaDesc: "Multiple choice questions on {title}.",

  quickTotalTitle: "{a} quick checks, {b} questions in total",
  quickTotalBody:
    "Every section ends with three questions answered on the spot. When you want the whole bank at once, including everything shuffled into one sitting, take the full quiz.",
  takeFullQuiz: "Take the full quiz",
  prev: "← Previous",
  next: "Next →",
  lectureNotFound: "Lecture not found",
  quizNotFound: "Quiz not found",
  sectionNotFound: "Section not found",

  sectionOf: "Section {i} of {n}",
  minutes: "{n} min",
  worthMemorising: "Worth memorising",
  bankCovers: "{n} questions in the full bank cover this topic.",
  openAll: "Open all {n}",
  contents: "← Contents",
  allSectionsOf: "All {n} sections of {label}",
  finish: "Finish →",
  backToContents: "Back to {label} contents",

  keyIdea: "Key idea",
  commonPitfall: "Common pitfall",
  terminology: "Terminology",
  workedExample: "Worked example",
  given: "Given",

  quizLoading: "Loading the quiz…",
  quizTitle: "Quiz: {title}",
  quizLede:
    "{n} questions, one at a time. You get the explanation as soon as you commit to an answer, so read every one — including the ones you got right.",
  testSingleTopic: "Test a single topic",
  startWithAll: "Start with all {n} questions",
  finishedLabel: "{label} · finished",
  yourScore: "Your score",
  scoreHigh: "Solid. Reread only the explanations you disagreed with.",
  scoreMid: "Halfway there. The explanations below are where the marks are.",
  scoreLow:
    "Work through the notes again, then retake it. The explanations matter more than the score.",
  correct: "Correct.",
  notQuite: "Not quite — the answer is {letter}.",
  why: "Why",
  nextQuestion: "Next question",
  seeScore: "See your score",
  seeResult: "See result",
  pickOption: "Pick an option to see the explanation.",
  notes: "Notes",

  qcTitle: "Quick check",
  qcOn: "on {title}",
  qcScore: "{right} of {n} correct",
  qcQuestionOf: "Question {i} of {n}",
  qcPercentAria: "{p} per cent correct",
  qcAllCorrect:
    "All correct. The explanation still matters - it is the wording you will meet in the full quiz.",
  qcReread:
    "Reread the {title} section for the ones you missed, then try again.",
  tryAgain: "Try again",
  correctShort: "✓ Correct.",
  notCorrectShort: "✗ Not correct.",

  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",

  pwaOfflineTitle: "You are offline",
  pwaOfflineBody:
    "This page has not been saved for offline use yet. Anything you have already read is still available from the sidebar.",
  pwaBackHome: "Back to the home page",
  pwaOfflineNote:
    "The whole site is downloaded when it is installed, so every lesson should be readable without a connection.",
} as const;

export type Dict = { -readonly [K in keyof typeof en]: string };

const ar: Dict = {
  siteTitle: "الكيمياء الفيزيائية",
  siteTagline: "دراسات عليا",
  siteAuthorLine: "دراسات عليا · يوسف حافظ العطار",

  navOpen: "فتح قائمة التنقل",
  navClose: "إغلاق قائمة التنقل",
  navCourseNavigation: "تنقل المحاضرات",
  navAllQuestions: "كل الأسئلة",
  navSectionNavigation: "تنقل الأقسام",
  navHowBuiltTitle: "كيف بُني هذا الموقع",
  navHowBuiltBody:
    "كل محاضرة مجموعة أقسام قصيرة، ينتهي كل قسم منها بفحصه السريع الخاص. المحتوى محفوظ داخل ملفات المشروع، لذا أي تصحيح يصل إلى كل النسخ في وقت واحد.",
  navSecondAuthor: "آبلة حطوت",
  navHome: "الرئيسية",

  switchLanguage: "تغيير اللغة",
  switchTo: "التبديل إلى {name}",

  homeLedeLead: "الكيمياء الفيزيائية،",
  homeLedeRest: "قسمًا قصيرًا في كل مرة.",
  homeSub:
    "لا يوجد هنا جدار من النص. كل موضوع صفحة يمكنك إنهاؤها في دقائق قليلة، مع رسم توضيحي، والنقاط الجديرة بالحفظ، وثلاثة أسئلة تُجاب في مكانها.",
  statLectures: "محاضرات",
  statSections: "أقسام",
  statQuestions: "أسئلة",
  startFromZero: "ابدأ من الصفر",
  howToUseTitle: "كيف تستخدم هذا الموقع",
  howStep1:
    "ابدأ بأسس الكيمياء الكهربية. لا تفترض أي معرفة سابقة وتستغرق نحو نصف ساعة.",
  howStep2: "اقرأ قسمًا واحدًا ثم استخدم زر التالي. لا تقرأ شاشتين معًا أبدًا.",
  howStep3:
    "أجب عن الأسئلة السريعة الثلاثة في أسفل القسم قبل أن تنتقل. الشرح يخبرك أي فقرة تعيد قراءتها إذا أخطأت.",
  howStep4:
    "عندئذ فقط جرّب الاختبار الكامل، فهو يخلط كل الأقسام معًا.",

  lectureSectionsCount: "{n} أقسام قصيرة",
  lectureMinTotal: "{n} دقيقة إجمالًا",
  lectureQuestions: "{n} سؤال",
  startReading: "ابدأ القراءة",
  continueReading: "تابع القراءة",
  allQuestionsLink: "كل الأسئلة الـ {n}",
  sectionsHeading: "الأقسام",
  quickChecks: "{n} فحصًا سريعًا",
  quickCheckOne: "فحص سريع واحد",
  inQuiz: "{n} في الاختبار",
  readLink: "اقرأ ←",
  constantsHeading: "الثوابت التي ستحتاجها",
  cardMeta: "{n} قسمًا · {m} دقيقة · {k} سؤالًا",
  breadcrumbAria: "مسار التنقل",
  sectionNavAria: "تنقل الأقسام",
  quizMetaDesc: "أسئلة اختيار من متعدد حول {title}.",
  quickTotalTitle: "{a} فحصًا سريعًا، و{b} سؤالًا في المجموع",
  quickTotalBody:
    "ينتهي كل قسم بثلاثة أسئلة تُجاب في مكانها. وحين تريد كلبنك دفعة واحدة، بما فيه كل شيء مخلوط في جلسة واحدة، خذ الاختبار الكامل.",
  takeFullQuiz: "خُذ الاختبار الكامل",
  prev: "السابق ←",
  next: "التالي →",
  lectureNotFound: "المحاضرة غير موجودة",
  quizNotFound: "الاختبار غير موجود",
  sectionNotFound: "القسم غير موجود",

  sectionOf: "القسم {i} من {n}",
  minutes: "{n} دقيقة",
  worthMemorising: "يستحق الحفظ",
  bankCovers: "{n} سؤالًا في البنك الكامل تغطي هذا الموضوع.",
  openAll: "افتح كل الـ {n}",
  contents: "← الفهرس",
  allSectionsOf: "كل أقسام {label} الـ {n}",
  finish: "إنهاء →",
  backToContents: "العودة إلى فهرس {label}",

  keyIdea: "الفكرة الأساسية",
  commonPitfall: "خطأ شائع",
  terminology: "مصطلحات",
  workedExample: "مثال محلول",
  given: "المعطيات",

  quizLoading: "جارٍ تحميل الاختبار…",
  quizTitle: "اختبار: {title}",
  quizLede:
    "{n} سؤالًا، واحدًا في كل مرة. تحصل على الشرح بمجرد تثبيت إجابتك، لذا اقرأها كلها، بما فيها التي أجبت عنها بشكل صحيح.",
  testSingleTopic: "اختبر موضوعًا واحدًا",
  startWithAll: "ابدأ بكل الأسئلة الـ {n}",
  finishedLabel: "{label} · انتهى",
  yourScore: "نتيجتك",
  scoreHigh: "نتيجة جيدة. أعد قراءة الشروح التيختلفت معها فقط.",
  scoreMid: "وصلت إلى المنتصف. الشرح أدناه هو مصدر الدرجات الحقيقية.",
  scoreLow:
    "عُد إلى الملاحظات ثم أعد الاختبار. الشرح أهم من الدرجة نفسها.",
  correct: "إجابة صحيحة.",
  notQuite: "غير صحيح تمامًا — الإجابة هي {letter}.",
  why: "لماذا",
  nextQuestion: "السؤال التالي",
  seeScore: "شاهد نتيجتك",
  seeResult: "شاهد النتيجة",
  pickOption: "اختر خيارًا لترى الشرح.",
  notes: "الملاحظات",

  qcTitle: "فحص سريع",
  qcOn: "في {title}",
  qcScore: "{right} من {n} صحيحة",
  qcQuestionOf: "السؤال {i} من {n}",
  qcPercentAria: "{p} بالمئة صحيحة",
  qcAllCorrect:
    "كل الإجابات صحيحة. الشرح يبقى مهمًا، فهو الصياغة التي ستراها في الاختبار الكامل.",
  qcReread: "أعد قراءة قسم {title} في ما فاتك ثم حاول مرة أخرى.",
  tryAgain: "حاول مرة أخرى",
  correctShort: "✓ صحيحة.",
  notCorrectShort: "✗ غير صحيحة.",

  themeToLight: "التبديل إلى الوضع الفاتح",
  themeToDark: "التبديل إلى الوضع الداكن",

  pwaOfflineTitle: "أنت غير متصل بالإنترنت",
  pwaOfflineBody:
    "لم تُحفظ هذه الصفحة للعمل دون اتصال بعد. أما ما قرأته سابقًا فبقي متاحًا من القائمة الجانبية.",
  pwaBackHome: "العودة إلى الصفحة الرئيسية",
  pwaOfflineNote:
    "يُنزَّل الموقع بالكامل عند التثبيت، لذا ينبغي أن يكون كل قسم قابلًا للقراءة دون اتصال.",
};

const dicts: Record<Locale, Dict> = { en: { ...en }, ar };

/**
 * Look up a UI string for a locale. English is the fallback for any key a
 * translation has not caught up with yet, so a missing Arabic string shows
 * readable text rather than a key name.
 */
export function t(locale: Locale): Dict {
  return dicts[locale] ?? dicts[defaultLocale];
}

/** Substitute {placeholders} in a dictionary string. */
export function fill(
  s: string,
  vars: Record<string, string | number> = {},
): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) =>
    k in vars ? String(vars[k]) : m,
  );
}
