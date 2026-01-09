import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ad.hawai1401.fr",
      lastModified: new Date(2026, 0, 9, 23, 40),
      changeFrequency: "weekly",
    },
  ];
}
