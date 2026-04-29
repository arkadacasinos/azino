import { Gamepad2, User } from "lucide-react"

type Row = {
  game: string
  bet: number
  payout: number
  multi: string
  player: string
  time: string
  currency: "P" | "₿"
  highlight?: boolean
}

const rows: Row[] = [
  { game: "WereWolf's Hunt", bet: 6, payout: 0, multi: "0x", player: "kris3110", time: "13:26:56", currency: "P" },
  { game: "Jurassic Kingdom", bet: 6, payout: 0, multi: "0x", player: "Username562904", time: "13:26:55", currency: "P" },
  { game: "Wild Ape #3258", bet: 36, payout: 0, multi: "0x", player: "username310140", time: "13:26:54", currency: "P" },
  { game: "The Knight King", bet: 16, payout: 0, multi: "0x", player: "Скрыт", time: "13:26:52", currency: "P" },
  { game: "The Dog House Mobile", bet: 16, payout: 0, multi: "0x", player: "username403176", time: "13:26:51", currency: "P" },
  { game: "Big Bass Bonanza 1000 Mobile", bet: 8, payout: 0, multi: "0x", player: "Username630736", time: "13:26:50", currency: "₿" },
  { game: "The Dog House Mobile", bet: 16, payout: 36, multi: "2.25x", player: "User#1206263", time: "13:26:49", currency: "P", highlight: true },
  { game: "The Dog House Mobile", bet: 16, payout: 0, multi: "0x", player: "username403176", time: "13:26:48", currency: "P" },
  { game: "Wild Bounty Showdown", bet: 6, payout: 0, multi: "0x", player: "Username666731", time: "13:26:47", currency: "P" },
  { game: "Electric Cubes", bet: 200, payout: 225, multi: "1.125x", player: "Username239040", time: "13:26:39", currency: "P", highlight: true },
]

export function BetHistory() {
  return (
    <section className="space-y-3">
      <h2 className="text-lg md:text-xl font-bold">История ставок</h2>
      <div className="rounded-2xl bg-card/60 ring-1 ring-border/60 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-muted-foreground bg-secondary/40">
                <th className="text-left font-medium px-4 py-3">Игра</th>
                <th className="text-left font-medium px-4 py-3">Ставка</th>
                <th className="text-left font-medium px-4 py-3">Выплата</th>
                <th className="text-left font-medium px-4 py-3">Множитель</th>
                <th className="text-left font-medium px-4 py-3">Игрок</th>
                <th className="text-left font-medium px-4 py-3">Время</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-border/40 hover:bg-secondary/20 transition">
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-foreground/70">
                        <Gamepad2 className="w-3.5 h-3.5" />
                      </span>
                      <span className="font-medium">{r.game}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 tabular-nums">
                    <span className={`inline-flex items-center gap-1 ${r.currency === "₿" ? "text-accent" : "text-primary"}`}>
                      <span className="text-xs">{r.currency}</span>
                      <span className="text-foreground/90">{r.bet.toFixed(6)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-2.5 tabular-nums">
                    <span className={`inline-flex items-center gap-1 ${r.currency === "₿" ? "text-accent" : "text-primary"}`}>
                      <span className="text-xs">{r.currency}</span>
                      <span className="text-foreground/90">{r.payout.toFixed(6)}</span>
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    {r.highlight ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold tabular-nums">
                        {r.multi}
                      </span>
                    ) : (
                      <span className="text-muted-foreground tabular-nums">{r.multi}</span>
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-foreground/70">
                        <User className="w-3 h-3" />
                      </span>
                      <span>{r.player}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground tabular-nums">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
