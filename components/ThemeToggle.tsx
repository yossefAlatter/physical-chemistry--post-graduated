"use client";

import { useSyncExternalStore } from "react";
import { t, type Locale } from "@/lib/i18n";

const KEY = "pc-theme";

/**
 * The `dark` class on <html> is the single source of truth. It is set before
 * first paint by an inline script in the document head (see app/layout.tsx)
 * and toggled here, so the observer below is all this component needs to stay
 * in sync - no duplicated state, and nothing to hydrate.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function isDark() {
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle({
  className = "",
  locale,
}: {
  className?: string;
  locale: Locale;
}) {
  const dark = useSyncExternalStore(subscribe, isDark, () => false);
  const label = t(locale)[dark ? "themeToLight" : "themeToDark"];

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(KEY, next ? "dark" : "light");
    } catch {
      /* private mode: the theme just will not persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={[
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rule",
        "bg-surface text-ink-soft transition-colors",
        "hover:border-accent hover:text-accent",
        className,
      ].join(" ")}
    >
      {dark ? (
        <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true">
          <circle
            cx="10"
            cy="10"
            r="3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line
              key={a}
              x1="10"
              y1="2.4"
              x2="10"
              y2="4.6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              transform={`rotate(${a} 10 10)`}
            />
          ))}
        </svg>
      ) : (
        <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M16.3 12.4A7 7 0 0 1 7.6 3.7a7 7 0 1 0 8.7 8.7z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}