import fs from "node:fs";
import path from "node:path";
import { swSource } from "@/lib/sw-source";

/**
 * Serves the service worker, with the Next build id baked into its body.
 *
 * The browser compares the bytes of /sw.js on every navigation and only
 * reinstalls when they differ. Deriving REVISION from the build id means a
 * deploy always changes those bytes, so the install handler re-runs and the
 * precache is rebuilt - including any pages added since. A static file in
 * public/ could not do that, because it would need a hand-edited constant.
 *
 * Left dynamic on purpose: reading the build id at request time also picks up
 * the id of whatever build is actually being served, and the response is sent
 * no-store so an edge cache can never pin a stale worker.
 */
export const dynamic = "force-dynamic";

/** Next writes this during the build; fall back if it is ever unreadable. */
function buildId(): string {
  try {
    const id = fs
      .readFileSync(path.join(process.cwd(), ".next", "BUILD_ID"), "utf8")
      .trim();
    if (id) return id;
  } catch {
    /* dev server, or a runtime without the build directory */
  }
  return "dev";
}

export function GET() {
  return new Response(swSource(buildId()), {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      // The update check must always reach the origin.
      "Cache-Control": "no-cache, no-store, must-revalidate",
      // Keep the root scope even if the file ever moves.
      "Service-Worker-Allowed": "/",
    },
  });
}
