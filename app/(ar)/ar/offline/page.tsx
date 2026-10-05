import Link from "next/link";
import { t } from "@/lib/i18n";

export const metadata = { title: "غير متصل" };

/**
 * Arabic offline page, served at /ar/offline. The service worker picks this
 * one over the English page for any failed navigation under /ar, so an Arabic
 * reader never lands on an English error.
 */
export default function OfflinePage() {
  const d = t("ar");

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
          href="/ar"
          className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2.5 text-[0.92rem] font-semibold text-on-accent transition-colors hover:bg-accent-dark"
        >
          {d.pwaBackHome}
        </Link>
        <Link
          href="/ar/lectures/fundamentals"
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
