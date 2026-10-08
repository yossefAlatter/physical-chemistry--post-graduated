import type { Block } from "@/content/types";

/**
 * In-page navigation for a section.
 *
 * A section is a flat list of blocks with no heading structure of its own:
 * the only things that behave like sub-headings are a callout's title and a
 * worked example's title. Those become real <h2> elements with ids, and this
 * module derives the table of contents from exactly the same data the
 * renderer sees, on the same helper, so the rail can never point at an
 * anchor that does not exist.
 *
 * Everything here is pure and deterministic: it runs once on the server to
 * produce plain data, and the client never needs the block array.
 */

export type TocItem = {
  id: string;
  label: string;
};

/**
 * A stable id for a heading.
 *
 * Titles are prose and may contain punctuation, so this keeps letters and
 * digits, collapses everything else to a separator, and trims. Two identical
 * titles in one section get the same id, which is why `buildToc` de-dupes
 * rather than appending a counter that the renderer would have to guess.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "section";
}

/** The headings a table of contents should list, in document order. */
export function buildToc(blocks: readonly Block[]): TocItem[] {
  const seen = new Set<string>();
  const items: TocItem[] = [];

  for (const block of blocks) {
    if (block.kind !== "callout" && block.kind !== "worked") continue;
    const raw = (block.title ?? "").trim();
    if (!raw) continue;

    let id = slugify(raw);
    while (seen.has(id)) id += "-2";
    seen.add(id);

    items.push({ id, label: raw });
  }

  return items;
}

/**
 * The id a rendered block should carry. Must agree with `buildToc`, so it
 * runs the same de-duplication against the same prefix of the list.
 */
export function idForBlock(
  blocks: readonly Block[],
  index: number,
): string | undefined {
  const block = blocks[index];
  if (block.kind !== "callout" && block.kind !== "worked") return undefined;
  const raw = (block.title ?? "").trim();
  if (!raw) return undefined;

  const seen = new Set<string>();
  for (let i = 0; i <= index; i += 1) {
    const b = blocks[i];
    if (b.kind !== "callout" && b.kind !== "worked") continue;
    const t = (b.title ?? "").trim();
    if (!t) continue;
    let id = slugify(t);
    while (seen.has(id)) id += "-2";
    seen.add(id);
    if (i === index) return id;
  }
  return undefined;
}
