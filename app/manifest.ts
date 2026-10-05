import type { MetadataRoute } from "next";

/**
 * Web-app manifest, so the site installs to a home screen with the real
 * electrochemistry mark rather than a screenshot. Icons come from
 * tools/make_icons.py, which draws the same geometry as app/icon.svg.
 *
 * The Arabic tree has its own manifest at app/(ar)/ar/manifest.ts, served
 * from /ar/manifest.webmanifest, so an install launched from an Arabic page
 * gets an Arabic name and start URL.
 */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Physical Chemistry — Postgraduate",
    short_name: "Phys. Chem.",
    description:
      "Postgraduate physical chemistry in short illustrated sections, starting " +
      "from a Fundamentals primer. Works offline once installed.",
    lang: "en",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "any",
    background_color: "#eef2f7",
    theme_color: "#0B6E99",
    categories: ["education", "books", "science"],
    prefer_related_applications: false,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Start from zero",
        short_name: "Fundamentals",
        description: "Open the Fundamentals primer",
        url: "/lectures/fundamentals",
      },
      {
        name: "Lecture 1",
        short_name: "Lecture 1",
        description: "Open Lecture 1 and its question bank",
        url: "/lectures/lecture-1",
      },
    ],
  };
}
