import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const lastModified = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },

  ]

  return routes
}
