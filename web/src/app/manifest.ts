import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f3f2ef",
    theme_color: "#0a0a0a",
    lang: "pt-PT",
    icons: [{ src: "/images/mark.png", sizes: "512x512", type: "image/png" }],
  };
}
