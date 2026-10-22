import type { MetadataRoute } from "next"

const SITE = "https://eccdigital.cz"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Klientské prezentace — nesmí do indexu (mají také <meta noindex>)
        disallow: ["/prezentace-ksp-group/", "/florea/", "/ukazky/"],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  }
}
