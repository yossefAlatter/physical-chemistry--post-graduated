import type { MetadataRoute } from "next";

/**
 * Web-app manifest, so the site installs to a home screen with the real
 * electrochemistry mark rather than a screenshot. Icons come from
 * tools/make_icons.py, which draws the same geometry as app/icon.svg.
 */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Physical Chemistry — Postgraduate",
    short_name: "Phys. Chem.",
    description:
      "Postgraduate physical chemistry in short illustrated sections, starting " +
      "from a Fundamentals primer.",
    start_url: "/",
    display: "standalone",
    background_color: "#eef2f7",
    theme_color: "#0B6E99",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}