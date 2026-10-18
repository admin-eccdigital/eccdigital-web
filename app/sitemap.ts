import type { MetadataRoute } from "next"

const SITE = "https://eccdigital.cz"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/reference/nexus-recovery/`,
      lastModified: new Date("2026-10-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/banner-generator/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE}/inzenyring-smolik/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
