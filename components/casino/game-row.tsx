import { ChevronLeft, ChevronRight } from "lucide-react"
import { GameCard, type Game } from "./game-card"

export function GameRow({ title, games }: { title: string; games: Game[] }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
        <div className="flex items-center gap-2">
          <button className="text-xs font-medium bg-secondary hover:bg-secondary/80 transition rounded-full px-3 py-1">
            Все
          </button>
          <button
            aria-label="Назад"
            className="w-7 h-7 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            aria-label="Вперёд"
            className="w-7 h-7 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3">
        {games.slice(0, 7).map((g, i) => (
          <GameCard key={i} game={g} />
        ))}
      </div>
    </section>
  )
}
