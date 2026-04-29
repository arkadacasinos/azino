import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

/**
 * Dynamic robots.txt. Uses NEXT_PUBLIC_SITE_URL so the absolute sitemap link
 * stays correct on every environment.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/", "/*?*utm_"],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
