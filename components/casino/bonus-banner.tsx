import Image from "next/image"

export function BonusBanner() {
  return (
    <section className="bonus-banner relative rounded-2xl overflow-hidden p-6 md:p-10 min-h-[220px] flex items-center">
      <div className="relative z-10 max-w-[55%]">
        <p className="text-foreground/90 text-base md:text-lg mb-2">Забирай бонус</p>
        <h2 className="text-primary text-3xl md:text-5xl font-extrabold tracking-tight leading-none">
          150% <span className="text-foreground">+</span> 250FS
        </h2>
        <button className="mt-5 inline-flex items-center justify-center bg-accent text-accent-foreground font-semibold text-sm rounded-full px-6 py-2.5 shadow-[0_8px_24px_-8px_rgba(255,120,60,0.6)] hover:brightness-110 transition">
          Получить Бонус
        </button>
      </div>

      {/* Decorative leaves */}
      <div aria-hidden className="absolute right-1/3 top-6 text-primary/40 text-4xl rotate-12">
        ✦
      </div>
      <div aria-hidden className="absolute right-1/4 bottom-8 text-primary/40 text-3xl -rotate-12">
        ✦
      </div>

      {/* Mascot */}
      <div className="absolute right-2 bottom-0 top-0 w-[40%] pointer-events-none">
        <Image src="/mascot-monkey.jpg" alt="" fill className="object-contain object-bottom" />
      </div>
    </section>
  )
}
