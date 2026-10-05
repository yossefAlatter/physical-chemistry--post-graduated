# Physical Chemistry — Postgraduate

Lecture material and multiple-choice questions for a postgraduate physical
chemistry course, currently covering electrochemistry. Mobile-first, statically
generated, no database and no server at runtime.

Built with Next.js (App Router), TypeScript and Tailwind CSS, with KaTeX for
the maths.

## How the content is organised

The unit you study is a **section**, and a section is a short page. Nothing on
this site is a wall of text.

```
Subject    Physical Chemistry        <- subject area, more are expected
  Course   Electrochemistry         <- group of lectures
    Lecture  lecture-1               <- has its own question bank
      Section  nernst               <- ONE PAGE, ends in its own quick check
```

Everything displayed is hard-coded in `content/`:

```
content/
  types.ts              the shape of every block, section and question
  index.ts              the registry - the only file to touch to add material
  fundamentals.ts       the zero-to-one primer, 7 sections
  fundamentals.mcq.ts   21 questions for the primer
  lecture-1.ts          11 sections, cell anatomy through to batteries
  lecture-1.mcq.ts      80 questions with explanations
```

`content/index.ts` exports the subject structure. The sidebar, the home page,
every route and the quiz filters all read from it, so adding material is
purely additive.

**See [ADDING_A_LECTURE.md](ADDING_A_LECTURE.md)** for how to add a section, a
lecture, a course or a whole subject.

## Routes

| Route | What it is |
| --- | --- |
| `/` | home: subjects, courses, lectures and their section lists |
| `/lectures/[lecture]` | lecture contents: cards for each short section |
| `/lectures/[lecture]/[section]` | one section, with Next / Previous and a quick check |
| `/lectures/[lecture]/quiz` | the full bank for that lecture, shuffled |
| `/lectures/[lecture]/quiz?topic=[section]` | only the questions on one section |

All of these are prerendered at build time via `generateStaticParams`.

## Layout

- **Mobile first.** Below `lg` there is a sticky top bar with a hamburger and
  the sidebar is a slide-in drawer that traps the page behind an overlay and
  closes on Escape or on navigation.
- From `lg` up the sidebar is a permanent column.
- When you are inside a lecture, the sidebar lists that lecture's sections and
  marks the one you are reading.
- Buttons and links are at least 36 px tall on touch, and answer options are
  full-width rows.
- Nothing overflows horizontally at 360 px: long equations and wide tables
  scroll inside their own container instead of pushing the page sideways.

## Colour, fonts and dark mode

**Tones.** There are nine reusable accent hues (`azure`, `indigo`, `violet`,
`rose`, `coral`, `amber`, `emerald`, `teal`, `slate`). Every section declares
one in `content/*.ts`:

```ts
{
  id: "nernst",
  title: "The Nernst equation",
  tone: "azure",        // <- the section's colour
  ...
}
```

The page wrapper renders `data-tone={section.tone}`, and `app/globals.css`
turns that into three variables for the whole subtree:

| Variable | Used for |
| --- | --- |
| `--tone` | heading numerals, links, eyebrow labels, buttons, progress bars |
| `--tone-soft` | tinted panels: quick check, "worth memorising", worked examples |
| `--tone-line` | hairline borders on those panels |

So a topic keeps one colour in the sidebar, on its card, in its heading, in its
callouts and in its quick check. That is deliberate: the colour is a recall cue,
not decoration. Adjacent sections are always given different tones. To add a
tenth hue, extend `TONES` in `content/types.ts` and the two `:root` / `.dark`
blocks in `app/globals.css`.

**Semantic tokens.** Surfaces and text use `--c-*` tokens (`--c-page`,
`--c-surface`, `--c-ink`, `--c-rule`, ...). Components should use those, or
`var(--tone)`, rather than raw hex values. Every text tone clears WCAG AA
(4.5:1) against both the page background and its own soft tint; `tools/check_site.py`
plus a browser audit is how that is kept honest.

**Dark mode** is class-driven (`.dark` on `<html>`) rather than
`prefers-color-scheme`, so the toggle can override the OS. A tiny inline script
in `app/layout.tsx` applies the stored choice before first paint, so there is
no white flash; the choice is kept in `localStorage` under `pc-theme`.
`components/ThemeToggle.tsx` reads the class with `useSyncExternalStore` and is
placed in both the mobile top bar and the sidebar.

**Fonts** are self-hosted at build time by `next/font`, so a visitor makes no
third-party request:

- headings: **Fraunces** (variable, optical sizing)
- body: **Inter**
- code and symbols: **JetBrains Mono**

## Maths

Display maths is rendered on the server with KaTeX, so the maths library is
never sent to the browser.

## Questions

Each question carries a `topicId` matching a section id. Three questions per
section are flagged `quick: true`; those become the inline **Quick check** at
the bottom of the section page, so a learner can test themselves without
leaving the page. Everything else stays in the full bank, which is where the
shuffled end-to-end quiz comes from.

Lecture 1's questions were exported from the verified question bank in the
sibling `electricial-chemistry` project, whose `tools/check_questions.py`
recomputes all 65 printed numeric values against the printed working. The
export is a one-time step; the file is then edited like any other source file.

## Figures

The Fundamentals diagrams are generated by `tools/figures.py`:

```bash
../electricial-chemistry/.venv/bin/python tools/figures.py       # redraw into public/figures
../electricial-chemistry/.venv/bin/python tools/check_figures.py # layout + reference check
```

`check_figures.py` detects overlapping labels, labels pushed off the canvas,
and any figure referenced by content that is missing from disk - the failures
that are invisible in the source but obvious on the page.

The 16 advanced Lecture 1 diagrams are drawn by
`../electricial-chemistry/echem_guide/figures.py` - the same script that
produces the printed guide, so the printed and web versions can never drift.
`tools/advanced_figures.py` imports it, swaps its palette for the site's, and
writes the PNGs here:

```bash
../electricial-chemistry/.venv/bin/python tools/advanced_figures.py  # recolour + redraw
```

Both figure scripts draw in the palette from `app/globals.css`, so a diagram and
the section it illustrates share a hue.

## Attribution

Notes and questions by Yossef Hafez Alatter. Course instructor: Abla Hathout.