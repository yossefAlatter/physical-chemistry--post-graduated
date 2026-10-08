import type { MetadataRoute } from "next";

/**
 * Web-app manifest, so the site installs to a home screen with the real
 * electrochemistry mark rather than a screenshot. Icons come from
 * tools/make_icons.py, which draws the same geometry as app/icon.svg.
 */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Physical Chemistry — Postgraduate",
    short_name: "Phys. Chem.",
    description:
      "Postgraduate physical chemistry in short illustrated sections, starting " +
      "from a short Lesson 0 orientation. Works offline once installed.",
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
        short_name: "Lesson 0",
        description: "Open the Lesson 0 orientation",
        url: "/lessons/lesson-0",
      },
      {
        name: "Lesson 1",
        short_name: "Lesson 1",
        description: "Open Lesson 1 and its question bank",
        url: "/lessons/lesson-1",
      },
    ],
  };
}
