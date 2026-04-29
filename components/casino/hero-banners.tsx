import Image from "next/image"
import { Zap, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroBanners() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Bonus banner */}
      <div className="bonus-banner relative rounded-2xl overflow-hidden p-6 md:p-8 min-h-[220px] flex flex-col justify-between">
        {/* Confetti decoration */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-3 left-8 w-2 h-2 bg-primary rotate-45" />
          <div className="absolute top-8 left-24 w-1.5 h-3 bg-accent" />
          <div className="absolute top-2 left-1/2 w-2 h-2 bg-chart-3 rounded-full" />
          <div className="absolute top-6 right-1/3 w-2 h-2 bg-chart-4" />
          <div className="absolute top-1 right-20 w-1 h-4 bg-primary" />
          <div className="absolute top-10 right-10 w-2 h-2 bg-chart-5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-[55%]">
          <p className="text-foreground/90 text-sm md:text-base mb-2">Забирай бонус</p>
          <h2 className="text-primary text-3xl md:text-5xl font-extrabold tracking-tight leading-none">
            150% <span className="text-foreground">+</span> 250FS
          </h2>
          <button className="mt-5 inline-flex items-center justify-center bg-accent text-accent-foreground font-semibold text-sm rounded-full px-6 py-2.5 shadow-[0_8px_24px_-8px_rgba(255,120,60,0.6)] hover:brightness-110 transition">
            Забрать Бонус
          </button>
        </div>

        {/* Mascot */}
        <div className="absolute right-2 bottom-0 top-0 w-1/2 pointer-events-none">
          <Image
            src="/mascot-monkey.jpg"
            alt="Маскот казино"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* Carousel arrows */}
        <div className="absolute bottom-4 right-6 flex gap-2 z-20">
          <button
            aria-label="Предыдущий"
            className="w-7 h-7 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Следующий"
            className="w-7 h-7 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fast payouts banner */}
      <div className="payout-banner relative rounded-2xl overflow-hidden p-6 md:p-8 min-h-[220px] flex items-center">
        <div className="relative z-10 max-w-[70%]">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-2">Быстрые Выплаты</h3>
          <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
            Быстрые выплаты за <span className="text-primary font-bold">15 мин</span> или даже быстрее!
          </p>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="relative">
            <Zap className="w-32 h-32 md:w-40 md:h-40 text-primary fill-primary drop-shadow-[0_0_30px_rgba(140,255,160,0.4)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
