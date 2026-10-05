"use client";

import { useEffect } from "react";

/**
 * Registers the service worker that keeps the site readable offline.
 *
 * Registration is deliberately deferred until after load so it never competes
 * with the first paint, and it is skipped in development, where a stale worker
 * serving cached pages is more confusing than it is useful.
 *
 * Failures are swallowed on purpose: a browser that refuses service workers
 * (private mode, some embedded webviews) should still get the whole site.
 */
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

    const register = () => {
      navigator.serviceWorker.register("/sw.js", { scope: "/" }).catch(() => {
        /* offline support unavailable; the site works without it */
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
