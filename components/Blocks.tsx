import { createElement } from "react";
import katex from "katex";
import type { Block, Formula as FormulaBlock } from "@/content/types";
import { t, type Locale } from "@/lib/i18n";
import { figureFor } from "@/components/figures";

/**
 * The inline markup reduced to plain text, for places that cannot hold markup.
 *
 * An aria-label is a string, not a document: a screen reader reads it out
 * character by character, so a caption of "The Tafel **slope** is unchanged"
 * used as a label announces "Tafel asterisk asterisk slope". The visible
 * caption goes through RichText; the accessible name has to be flattened.
 * Also used for <meta name="description">, which is plain text and must not
 * carry the reader-facing markup either.
 */
export function plainText(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\(\(.*?\)\)/g, " ($1)")
    .trim();
}

/** Renders LaTeX on the server, so no maths library ships to the browser. */
export function Formula({ tex, caption }: Pick<FormulaBlock, "tex" | "caption">) {
  let html: string;
  try {
    html = katex.renderToString(tex, {
      displayMode: true,
      throwOnError: false,
      strict: false,
      output: "html",
    });
  } catch {
    // A malformed formula should never blank the page; show the source.
    html = `<code>${escapeHtml(tex)}</code>`;
  }

  return (
    <div className="my-5">
      <div
        className="overflow-x-auto rounded-lg border border-rule bg-surface px-3 py-2 sm:px-5 sm:py-3"
        role="math"
        dir="ltr"
        aria-label={plainText(caption ?? tex)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {caption && (
        <p className="mt-1.5 text-[0.82rem] leading-snug text-faint">
          <RichText text={caption} />
        </p>
      )}
    </div>
  );
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Renders the inline markup used in the content.
 *
 * Supported: **bold**, *italic*, `code`, and ((gloss)).
 *
 * The gloss exists for the Arabic tree. The brief was that a chemical term
 * should carry its English name after the Arabic one, so المصعد((anode)) shows
 * "المصعد" with "anode" beside it. Double parentheses were chosen over single
 * ones because single parentheses are ordinary prose punctuation in both
 * languages, and over a bracketed tag because they stay readable in the source
 * and cannot collide with the *italic* or **bold** delimiters.
 *
 * The English is rendered LTR and isolated, because a term like
 * ((butler-volmer)) inside an Arabic sentence must not be reordered by the
 * bidirectional algorithm.
 */
export function RichText({ text }: { text: string }) {
  const parts = text
    .split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\(\([^)]+\)\))/g)
    .filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={i}
              className="rounded bg-tint px-1 py-0.5 font-mono text-[0.88em] text-ink"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("((") && part.endsWith("))")) {
          return (
            <span key={i} className="gloss">
              {" ("}
              {part.slice(2, -2)}
              {")"}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

const CALLOUT_STYLES = {
  key: {
    box: "border-accent-light bg-accent-light/50",
    bar: "bg-accent",
    text: "text-accent-dark",
  },
  warn: {
    box: "border-red-light bg-red-light/60",
    bar: "bg-red",
    text: "text-red",
  },
  term: {
    box: "border-violet-soft bg-violet-soft/60",
    bar: "bg-violet",
    text: "text-violet",
  },
} as const;

export function Callout({
  variant,
  title,
  body,
  locale,
}: {
  variant: "key" | "warn" | "term";
  title: string;
  body: string;
  locale: Locale;
}) {
  const s = CALLOUT_STYLES[variant];
  const d = t(locale);
  const label =
    variant === "key" ? d.keyIdea : variant === "warn" ? d.commonPitfall : d.terminology;
  return (
    <aside
      className={`my-5 flex gap-3 rounded-lg border-s-4 py-3 pe-3 ps-3.5 ${s.box}`}
      style={{ borderInlineStartColor: "currentColor" }}
    >
      <span className={`mt-1 hidden h-full w-1 shrink-0 rounded-full sm:block ${s.bar}`} />
      <div className="min-w-0">
        <p className={`text-[0.72rem] font-bold uppercase tracking-wider ${s.text}`}>
          {title || label}
        </p>
        <div className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">
          <RichText text={body} />
        </div>
      </div>
    </aside>
  );
}

export function Figure({
  src,
  caption,
  alt,
  locale,
}: {
  src: string;
  caption: string;
  alt: string;
  locale: Locale;
}) {
  // A registered name is drawn as inline SVG, which keeps its labels as real
  // text and lets them be in Arabic on /ar. Anything not registered yet falls
  // back to the exported PNG, so figures convert one at a time.
  //
  // A registered figure supplies its own aria-label and <title> from the same
  // locale-aware strings as its labels, so the block's English `alt` is only
  // used by the PNG fallback.
  const Svg = figureFor(src);

  return (
    <figure className="my-6">
      {Svg ? (
        // createElement rather than <Svg />: the registry lookup makes the
        // component reference dynamic, which the React compiler lint rule
        // rejects as "creating components during render".
        createElement(Svg, { locale })
      ) : (
        /* plain <img> rather than next/image: these are fixed-width exported
           diagrams, and this keeps the page statically rendered with no
           image optimiser in the request path */
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`/figures/${src}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={1400}
          height={800}
          className="w-full rounded-lg border border-rule bg-surface shadow-sm"
        />
      )}
      <figcaption className="mt-2 text-[0.84rem] leading-relaxed text-faint">
        <RichText text={caption} />
      </figcaption>
    </figure>
  );
}

export function TableBlock({
  head,
  rows,
  widths,
}: {
  head: string[];
  rows: string[][];
  widths?: number[];
}) {
  return (
    <div className="my-5 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[30rem] border-collapse text-[0.88rem]">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                scope="col"
                style={widths ? { width: `${(widths[i] / widths.reduce((a, b) => a + b, 0)) * 100}%` } : undefined}
                className="border-b-2 border-[color:var(--tone-line)] px-3 py-2 text-start align-bottom font-semibold text-ink"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-rule last:border-0">
              {row.map((cell, c) => (
                <td key={c} className="px-3 py-2.5 align-top leading-snug text-ink-soft">
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Worked({
  title,
  given,
  steps,
  result,
  locale,
}: {
  title: string;
  given: string;
  locale: Locale;
  steps: string[];
  result: string;
}) {
  const maths = steps.every((s) => /[\\^_{}]/.test(s));
  return (
    <section className="card-tone my-6 rounded-lg border p-4 sm:p-5">
      <h4 className="eyebrow">{t(locale).workedExample}</h4>
      <p className="mt-1 font-semibold text-ink">{title}</p>
      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
        <span className="font-semibold text-ink">{t(locale).given}. </span>
        <RichText text={given} />
      </p>
      <ol className="mt-3 space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="text-[0.93rem]">
            {maths ? (
              <Formula tex={s} />
            ) : (
              <span className="flex gap-2.5 leading-relaxed text-ink-soft">
                <span className="font-semibold text-accent tabular-nums">
                  {i + 1}.
                </span>
                <span className="min-w-0">
                  <RichText text={s} />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-3.5 rounded-md bg-green-light px-3 py-2 text-[0.92rem] font-medium text-green">
        <RichText text={result} />
      </p>
    </section>
  );
}

/** Renders one content block. */
export function RenderBlock({
  block,
  locale,
}: {
  block: Block;
  locale: Locale;
}) {
  switch (block.kind) {
    case "para":
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case "formula":
      return <Formula tex={block.tex} caption={block.caption} />;
    case "figure":
      return (
        <Figure
          src={block.src}
          caption={block.caption}
          alt={block.alt}
          locale={locale}
        />
      );
    case "table":
      return (
        <TableBlock head={block.head} rows={block.rows} widths={block.widths} />
      );
    case "callout":
      return (
        <Callout
          variant={block.variant}
          title={block.title}
          body={block.body}
          locale={locale}
        />
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className="my-4 space-y-2 ps-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2.5 leading-relaxed text-ink-soft">
              <span
                className={
                  block.ordered
                    ? "font-semibold text-[color:var(--tone)] tabular-nums"
                    : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--tone)]"
                }
              >
                {block.ordered ? `${i + 1}.` : null}
              </span>
              <span className="min-w-0">
                <RichText text={item} />
              </span>
            </li>
          ))}
        </Tag>
      );
    }
    case "worked":
      return (
        <Worked
          title={block.title}
          given={block.given}
          steps={block.steps}
          result={block.result}
          locale={locale}
        />
      );
  }
}