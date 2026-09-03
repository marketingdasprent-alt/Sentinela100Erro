import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/equipa`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/perspetivas`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/contactos`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/privacidade`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insights.map((post) => ({
    url: `${site.url}/perspetivas/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...insightRoutes];
}
