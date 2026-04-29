import { SideRail } from "@/components/casino/side-rail"
import { TopBar } from "@/components/casino/top-bar"
import { HeroBanners } from "@/components/casino/hero-banners"
import { PaymentMethods } from "@/components/casino/payment-methods"
import { GameRow } from "@/components/casino/game-row"
import { Tournaments } from "@/components/casino/tournaments"
import { BonusBanner } from "@/components/casino/bonus-banner"
import { BetHistory } from "@/components/casino/bet-history"
import { SeoText } from "@/components/casino/seo-text"
import { SiteFooter } from "@/components/casino/site-footer"
import { allRows } from "@/lib/casino-games"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SideRail />

      <div className="md:pl-12">
        <TopBar />

        <main className="px-4 md:px-8 pb-16 space-y-8 max-w-[1400px] mx-auto">
          <HeroBanners />
          <PaymentMethods />

          <div className="space-y-8">
            {allRows.map((row) => (
              <GameRow key={row.title} title={row.title} games={row.games} />
            ))}
          </div>

          <Tournaments />
          <BonusBanner />
          <BetHistory />
          <SeoText />
          <SiteFooter />
        </main>
      </div>
    </div>
  )
}
