/**
 * Central site configuration.
 *
 * The canonical site URL is read from NEXT_PUBLIC_SITE_URL so it can be
 * overridden per environment (production / preview / local) without code
 * changes. On Vercel preview deployments where the env var is not set we
 * gracefully fall back to VERCEL_URL, and finally to localhost in dev.
 */

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL
  if (fromEnv && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, "")
  }

  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL
  if (vercelUrl && vercelUrl.length > 0) {
    return `https://${vercelUrl.replace(/\/$/, "")}`
  }

  return "http://localhost:3000"
}

export const siteConfig = {
  name: "LeeBet Casino",
  shortName: "LeeBet",
  url: resolveSiteUrl(),
  locale: "ru_RU",
  defaultTitle: "LeeBet Casino — Официальный сайт. Бонус 150% + 250FS",
  titleTemplate: "%s | LeeBet Casino",
  description:
    "Либет казино — официальный сайт LeeBet Casino. Регистрация за минуту, рабочее зеркало, бонус 150% + 250FS, быстрые выплаты за 15 минут, тысячи слотов и live-столов.",
  keywords: [
    "leebet",
    "leebet casino",
    "leebet casino онлайн",
    "leebet casino регистрация",
    "leebet казино",
    "либет казино",
    "либет казино вход",
    "либет казино зеркало",
    "либет казино играть",
    "либет казино онлайн",
    "либет казино официальный",
    "либет казино официальный сайт",
    "либэт казино",
    "лилбет казино",
  ],
  ogImage: "/og-image.jpg",
  twitterHandle: "@leebet",
} as const

export type SiteConfig = typeof siteConfig
