import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

/**
 * Dynamic sitemap. The base URL is taken from NEXT_PUBLIC_SITE_URL so the
 * generated XML always points to the correct domain on every deployment.
 */
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
    {
      url: `${base}/#top`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${base}/#novye`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${base}/#sloty`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${base}/#live-casino`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${base}/#endorphina`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/#easter`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/#belatra`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/#amigogaming`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/#tournaments`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ]

  return routes
}
