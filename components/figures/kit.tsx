/**
 * Shared building blocks for the SVG figures.
 *
 * Why SVG rather than a <canvas> element or an exported PNG:
 *
 *   - it stays sharp at any zoom and prints sharply, which a raster cannot;
 *   - the labels are text, so they are real text: selectable, searchable, and
 *     translatable, which is what lets the same figure carry Arabic labels on
 *     /ar and English on /;
 *   - it inherits the theme, because every colour here is a CSS custom
 *     property, so the figure follows light and dark without a second file;
 *   - it costs a few kilobytes instead of a few hundred, which matters for the
 *     offline precache;
 *   - and it needs no build step and no canvas polyfill.
 *
 * Geometry is in a 0 0 720 H viewBox with `preserveAspectRatio`, so a figure
 * scales to its container while its text keeps a predictable size relative to
 * the drawing.
 */

import type { Locale } from "@/lib/i18n";

/** A label that differs by language. */
export type L10n = Record<Locale, string>;

/** One of these per word. */
export function en(ar: string, english: string): L10n {
  return { en: english, ar };
}

/** Common bits, so each figure is mostly its own content. */
export const C = {
  ink: "var(--c-ink)",
  inkSoft: "var(--c-ink-soft)",
  faint: "var(--c-ink-faint)",
  rule: "var(--rule, var(--c-ink-faint))",
  surface: "var(--c-surface, var(--c-page))",
  tone: "var(--tone)",
} as const;

export function Frame({
  children,
  height,
  title,
  locale,
}: {
  children: React.ReactNode;
  height: number;
  title: string;
  locale: Locale;
}) {
  return (
    <svg
      viewBox={`0 0 720 ${height}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={title}
      data-locale={locale}
      className="h-auto w-full rounded-lg border border-rule bg-surface shadow-sm"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
}

/** A text label. `anchor` and `baseline` map to SVG's text-anchor / dominant-baseline. */
export function T({
  x,
  y,
  children,
  size = 13,
  weight = 500,
  fill = C.ink,
  anchor = "middle",
  baseline = "middle",
  opacity = 1,
  italic,
}: {
  x: number;
  y: number;
  children?: React.ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  baseline?: "auto" | "middle" | "hanging";
  opacity?: number;
  italic?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
      dominantBaseline={baseline}
      opacity={opacity}
      fontStyle={italic ? "italic" : undefined}
    >
      {children}
    </text>
  );
}

/**
 * Arabic labels inside an SVG need two things that CSS on the page cannot
 * give them, because SVG text is not laid out by the surrounding document:
 * `direction: rtl` on the run itself, and the run anchored from its right edge
 * so the words read right-to-left from the right.
 */
export function AT({
  x,
  y,
  children,
  size = 13,
  weight = 500,
  fill = C.ink,
  anchor = "middle",
  baseline = "middle",
  opacity = 1,
}: {
  x: number;
  y: number;
  children?: React.ReactNode;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  baseline?: "auto" | "middle" | "hanging";
  opacity?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      fill={fill}
      textAnchor={anchor}
      dominantBaseline={baseline}
      opacity={opacity}
      direction="rtl"
      unicodeBidi="isolate"
    >
      {children}
    </text>
  );
}

/**
 * Split a label into lines that fit the frame.
 *
 * A figure's width is fixed, and a translated label is not: the English may be
 * one short line while the Arabic runs well past the edge, or the reverse.
 * Rather than hand-tuning two sets of coordinates, long labels are wrapped to
 * a character budget, which is approximate for Arabic (its glyphs are wider
 * and its words longer) but dependable enough to keep text inside the frame.
 *
 * `perLine` is characters per line, not pixels: see tools/check_figure_fit.ts,
 * which measures the real rendered width in a browser and fails if anything
 * overflows.
 */
export function lines(t: L10n, locale: Locale, perLine: number): string[] {
  const words = pick(t, locale).split(/\s+/).filter(Boolean);
  const out: string[] = [];
  let cur = "";
  for (const w of words) {
    if (!cur) {
      cur = w;
    } else if (cur.length + 1 + w.length <= perLine) {
      cur += " " + w;
    } else {
      out.push(cur);
      cur = w;
    }
  }
  if (cur) out.push(cur);
  return out;
}

/** Pick the right label for the active language. */
export function pick(t: L10n, locale: Locale): string {
  return t[locale];
}

/**
 * A label that must render in the right script for the language, wrapped so
 * the caller does not have to branch on locale for every single string.
 */
export function Label({
  t,
  locale,
  x,
  y,
  size,
  weight,
  fill,
  anchor,
  baseline,
  opacity,
}: {
  t: L10n;
  locale: Locale;
  x: number;
  y: number;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  baseline?: "auto" | "middle" | "hanging";
  opacity?: number;
}) {
  const text = pick(t, locale);
  return locale === "ar" ? (
    <AT x={x} y={y} size={size} weight={weight} fill={fill} anchor={anchor} baseline={baseline} opacity={opacity}>
      {text}
    </AT>
  ) : (
    <T x={x} y={y} size={size} weight={weight} fill={fill} anchor={anchor} baseline={baseline} opacity={opacity}>
      {text}
    </T>
  );
}

/** A rounded box, used for electrodes, panels and badges. */
export function Box({
  x,
  y,
  w,
  h,
  rx = 8,
  fill = "none",
  stroke = C.rule,
  strokeWidth = 1.5,
  opacity,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  rx?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      opacity={opacity}
    />
  );
}

/** A straight connector. */
export function Line({
  x1,
  y1,
  x2,
  y2,
  stroke = C.rule,
  strokeWidth = 1.5,
  dash,
  markerEnd,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke?: string;
  strokeWidth?: number;
  dash?: string;
  markerEnd?: string;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeDasharray={dash}
      markerEnd={markerEnd}
    />
  );
}

/** A filled arrowhead, for the electron-flow direction. */
export function ArrowHead({ id, color = C.ink, flip }: { id: string; color?: string; flip?: boolean }) {
  return (
    <marker
      id={id}
      viewBox="0 0 10 10"
      refX={flip ? 0 : 8}
      refY={5}
      markerWidth={5}
      markerHeight={5}
      orient="auto-start-reverse"
    >
      <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
    </marker>
  );
}
