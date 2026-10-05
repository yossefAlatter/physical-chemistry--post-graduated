# Adding material

Every lecture is a set of **short section pages**, and each section ends with
its own three-question check. That structure is the whole design: no page is
long enough to feel like a wall, and a learner can stop after any section.

The nesting is:

```
Subject   Physical Chemistry          <- a subject area; others are expected
  Course  Electrochemistry           <- a group of lectures
    Lecture  lecture-1                <- has its own question bank
      Section  nernst                <- ONE PAGE, with Next / Previous
```

Adding a section, a lecture, a course or a subject is purely additive. Nothing
that already exists has to change.

## Add a section to an existing lecture

Sections are the common case, and the change is one file edit: append an
object to that lecture's `sections` array.

```ts
{
  id: "capacitors",              // URL segment, unique inside the lecture
  title: "Double-layer capacitance",
  summary: "One-line card text. Say what the section answers.",
  minutes: 7,                    // shown on the card and the section header
  keyPoints: ["Worth memorising; also drives the quiz review."],
  blocks: [ /* see below */ ],
  cta: {                         // optional panel at the very bottom
    title: "Next up",
    body: "Why it matters.",
    href: "/lectures/lecture-2",
    linkLabel: "Go to Lecture 2",
  },
}
```

That is all. The route `/lectures/lecture-1/capacitors`, the card on the
contents page, the sidebar entry and the Next/Previous buttons are generated
from `sections`, so there is nothing else to register.

## Add a lecture

Two files, then one line in the registry.

### 1. `content/lecture-2.ts`

```ts
import type { Lecture } from "./types";
import { lecture2Mcq } from "./lecture-2.mcq";

export const lecture2: Lecture = {
  slug: "lecture-2",              // becomes /lectures/lecture-2
  label: "Lecture 2",             // sidebar text
  title: "Electroanalytical methods",
  summary: "One or two sentences, shown on the home page card.",
  order: 2,                       // sidebar ordering, lowest first
  minutes: 60,                    // fallback if sections carry no minutes
  intro: [ { kind: "para", text: "Shown on the lecture contents page." } ],
  sections: [ /* as above */ ],
  mcq: lecture2Mcq,
  constants: [ { symbol: "F", name: "Faraday", value: "96 485 C mol⁻¹" } ],
};
```

### 2. `content/lecture-2.mcq.ts`

```ts
import type { Mcq } from "./types";

export const lecture2Mcq: Mcq[] = [
  {
    id: "l2-mcq-001",             // unique across the whole site
    topicId: "capacitors",        // must match a section id
    quick: true,                  // optional: include in that section's check
    question: "…",
    options: ["…", "…", "…", "…"],  // exactly four
    answer: 2,                    // index of the correct option
    explanation: "Why that is right, and why the nearest wrong answer is not.",
  },
];
```

Mark three questions per section with `quick: true`. Those become the inline
**Quick check** at the bottom of the section page; everything else stays in
the full bank. `content/index.ts` falls back to the first three of a section's
questions if none are flagged, so a section is never left without a check.

### 3. Register it: `content/index.ts`

```ts
import { lecture2 } from "./lecture-2";   // add

lectures: [
  lecture1,
  lecture2,                              // add
],
```

## Add a course or a subject

A **course** is a group of lectures in the sidebar. A **subject** is a group
of courses. Both are plain objects in `content/index.ts`:

```ts
{
  id: "spectroscopy",
  title: "Spectroscopy",
  tagline: "Postgraduate · from first principles to research level",
  description: "Shown on the subject block of the home page.",
  courses: [ /* ... */ ],
}
```

When a second subject appears the sidebar starts printing subject headings on
its own - no change to `SiteShell` is needed.

## What you can write in `blocks`

| `kind` | Purpose | Fields |
| --- | --- | --- |
| `para` | body text | `text` |
| `formula` | display maths (KaTeX) | `tex`, `caption?` |
| `figure` | a diagram from `public/figures` | `src`, `caption`, `alt` |
| `table` | comparison table | `head`, `rows`, `widths?` |
| `callout` | highlighted box | `variant`: `key`\|`warn`\|`term`, `title`, `body` |
| `list` | bullets or numbers | `items`, `ordered?` |
| `worked` | worked calculation | `title`, `given`, `steps`, `result` |

### Text formatting

`text`, `body`, `caption` and `result` accept a small inline subset:

- `**bold**`
- `*italic*`
- `` `code` ``

### Maths

`formula.tex` is LaTeX for KaTeX and is rendered on the server, so nothing
maths-related is shipped to the browser. Display maths scrolls horizontally
on a narrow screen rather than overflowing the page.

Inside a `worked` block, write each step in LaTeX and it is rendered as a
displayed equation:

```ts
{
  kind: "worked",
  title: "Levich current at 900 rpm",
  given: "D = 7.0e-6 cm²/s, C* = 1.0e-5 mol/cm³, ω = 94.2 rad/s",
  steps: [
    String.raw`D^{2/3} = (7.0\times10^{-6})^{2/3} = 3.65\times10^{-4}`,
    String.raw`i_L = 0.620\,nF\,D^{2/3}\,\omega^{1/2}\,C^{*}`,
  ],
  result: "9.2 mA cm⁻².",
}
```

Use `String.raw` so backslashes survive JavaScript. A malformed formula is
rendered in red by KaTeX rather than crashing the page.

### Figures

Drop a PNG into `public/figures/` and reference it by file name:

```ts
{ kind: "figure", src: "passivation.png", alt: "…", caption: "…" }
```

Always write a real `alt`: it is what a screen reader announces.

The Fundamentals diagrams are generated by `tools/figures.py`:

```bash
../electricial-chemistry/.venv/bin/python tools/figures.py     # redraw
../electricial-chemistry/.venv/bin/python tools/check_figures.py # layout check
```

`check_figures.py` reports overlapping labels, labels pushed off the canvas,
and any figure referenced by content that does not exist on disk.

## Checklist before you commit

```bash
npm run build
npm run lint
../electricial-chemistry/.venv/bin/python tools/check_figures.py
```

The build fails if a question's `topicId` matches no section, if an option
list is not length four, or if the types do not line up.

## Quiz behaviour you get for free

- questions shuffled per attempt
- one question per screen, large tap targets, no horizontal scrolling
- the explanation appears the moment you commit, including for correct answers
- a results screen with the score and a review list of everything you got wrong
- per-section entry points: `/lectures/lecture-2/quiz?topic=capacitors`