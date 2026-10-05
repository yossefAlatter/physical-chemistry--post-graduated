/*
 * Service worker for the offline copy of the site.
 *
 * Strategy, in one line each:
 *
 *   install    precache every page in both languages, plus figures and icons
 *   navigate   network first, fall back to the cached page, then to /offline
 *   assets     cache first with a background refresh
 *
 * Precache covers the pages themselves, so a reader who has been online once
 * can open any section in either language without a connection. Hashed build
 * assets under /_next/static are not precached - their names change every
 * build - so they are picked up by the asset strategy on first use.
 *
 * Bump REVISION whenever public/sw.js changes in a way that needs every open
 * tab to drop its old cache. The precache list itself carries the Next build
 * id, so a deploy also invalidates it.
 */

const REVISION = "v1";
const CACHE = `pc-${REVISION}`;
const MANIFEST_URL = "/precache-manifest";

const OFFLINE_URLS = {
  en: "/offline",
  ar: "/ar/offline",
};

/** Pick the offline page matching the language of the failed navigation. */
function offlineUrlFor(pathname) {
  return pathname.startsWith("/ar") ? OFFLINE_URLS.ar : OFFLINE_URLS.en;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);

      let urls = [];
      try {
        const res = await fetch(MANIFEST_URL, { cache: "no-cache" });
        const data = await res.json();
        urls = data.urls || [];
      } catch {
        // Without the manifest we still register; pages will be cached as the
        // reader visits them.
      }

      // Added one at a time on purpose. A single 404 would make cache.addAll
      // reject and leave the site with no offline copy at all, which is a far
      // worse outcome than one missing page.
      await Promise.all(
        urls.map(async (url) => {
          try {
            const res = await fetch(url, { cache: "reload" });
            if (res && res.ok) await cache.put(url, res);
          } catch {
            /* skip this URL and carry on */
          }
        }),
      );

      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Drop caches from earlier revisions.
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k.startsWith("pc-") && k !== CACHE).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Pages: try the network so a deploy is picked up at once, but never fail
  // because of it.
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(req);
          const cache = await caches.open(CACHE);
          cache.put(req, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(req, { ignoreSearch: true });
          if (cached) return cached;
          const fallback = await caches.match(offlineUrlFor(url.pathname));
          if (fallback) return fallback;
          return new Response(
            "<!doctype html><meta charset=utf-8><title>Offline</title>" +
              "<p style='font:16px system-ui;padding:2rem'>You are offline.</p>",
            { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } },
          );
        }
      })(),
    );
    return;
  }

  // Immutable build assets, fonts and images: serve from cache when we have
  // them and refresh in the background so a deploy is picked up next load.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname.startsWith("/figures/") ||
    /\.(?:png|svg|jpg|jpeg|webp|gif|ico|css|js|woff2?|ttf)$/.test(url.pathname)
  ) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        const cached = await cache.match(req);
        const refreshed = fetch(req)
          .then((res) => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => null);

        if (cached) return cached;
        const fresh = await refreshed;
        return fresh || Response.error();
      })(),
    );
  }
});
