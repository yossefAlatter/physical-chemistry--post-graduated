import Link from "next/link";
import { t } from "@/lib/i18n";

/**
 * Shown when a page is opened with no connection and was never cached. It
 * points back to the parts of the site that are, which is everything, since
 * install precaches the whole site.
 */
export const metadata = { title: "Offline" };

export default function OfflinePage() {
  const d = t();

  return (
    <div className="mx-auto max-w-[54ch] py-10">
      <p className="eyebrow">{d.siteTagline}</p>
      <h1 className="mt-1.5 font-serif text-[1.8rem] leading-tight font-semibold text-ink sm:text-[2.1rem]">
        {d.pwaOfflineTitle}
      </h1>
      <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft">
        {d.pwaOfflineBody}
      </p>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
        >
          {d.pwaBackHome}
        </Link>
        <Link
          href="/lessons/lesson-0"
          className="inline-flex min-h-11 items-center rounded-lg border border-rule bg-surface px-4 py-2.5 text-[0.92rem] font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent-dark"
        >
          {d.startFromZero}
        </Link>
      </div>

      <p className="mt-8 rounded-lg border border-rule bg-surface-2 px-4 py-3 text-[0.88rem] leading-relaxed text-ink-soft">
        {d.pwaOfflineNote}
      </p>
    </div>
  );
}
