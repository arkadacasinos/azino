import Image from "next/image"
import { Play } from "lucide-react"

export type Game = {
  title: string
  provider: string
  query: string
  gradient?: string
}

export function GameCard({ game }: { game: Game }) {
  const initials = game.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")

  return (
    <div className="group relative rounded-xl overflow-hidden bg-card aspect-[3/4] cursor-pointer ring-1 ring-border/50 hover:ring-primary/60 transition">
      <Image
        src={`/placeholder.svg?height=320&width=240&query=${encodeURIComponent(game.query)}`}
        alt={game.title}
        fill
        sizes="(max-width: 768px) 40vw, 14vw"
        className="object-cover"
      />
      {/* Bottom label gradient */}
      <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <p className="text-[11px] md:text-xs font-bold leading-tight line-clamp-2 uppercase">{game.title}</p>
        <p className="text-[10px] text-foreground/70 mt-0.5">{game.provider}</p>
      </div>
      {/* Hover play */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </div>
      </div>
      {/* Initials watermark fallback when image is generic */}
      <div className="absolute top-2 left-2 text-[10px] font-bold bg-black/40 backdrop-blur px-1.5 py-0.5 rounded">
        {initials}
      </div>
    </div>
  )
}
