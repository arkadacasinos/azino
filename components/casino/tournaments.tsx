import Image from "next/image"

type Leader = {
  rank: number
  user: string
  prize: string
  amount: string
}

type Tournament = {
  prizePool: string
  countdown: string
  title: string
  leaders: Leader[]
  mascot: string
  progress: number
}

const tournaments: Tournament[] = [
  {
    prizePool: "USDT 5 000",
    countdown: "01D 03H 33M",
    title: "Смелый Ли",
    progress: 38,
    mascot: "/mascot-tournament.jpg",
    leaders: [
      { rank: 1, user: "Sanich8...", prize: "USDT 2 700", amount: "$ 47 113.057" },
      { rank: 2, user: "User#806882", prize: "USDT 900", amount: "$ 39 524.308" },
      { rank: 3, user: "Иван_60...", prize: "USDT 700", amount: "$ 37 804.024" },
    ],
  },
  {
    prizePool: "RUB 200 000",
    countdown: "07D 03H 33M",
    title: "Играй с огнём",
    progress: 62,
    mascot: "/mascot-devil.jpg",
    leaders: [
      { rank: 1, user: "User#759794", prize: "RUB 90 000", amount: "$ 57 507.499" },
      { rank: 2, user: "Sanich8...", prize: "RUB 40 000", amount: "$ 22 466.049" },
      { rank: 3, user: "Usernam...", prize: "RUB 25 000", amount: "$ 12 133.029" },
    ],
  },
]

function TournamentCard({ t }: { t: Tournament }) {
  return (
    <div className="relative rounded-2xl bg-card overflow-hidden ring-1 ring-border/60">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 bg-secondary/60">
        <span className="text-primary font-bold text-sm md:text-base">{t.prizePool}</span>
        <span className="text-foreground/80 font-mono text-sm tabular-nums">{t.countdown}</span>
      </div>
      {/* Progress */}
      <div className="h-1 bg-border/60">
        <div className="h-full bg-primary" style={{ width: `${t.progress}%` }} />
      </div>

      <div className="relative p-5 grid grid-cols-[1fr,140px] gap-3 min-h-[260px]">
        <div className="space-y-3">
          <h3 className="text-lg md:text-xl font-bold">{t.title}</h3>

          <div className="grid grid-cols-[24px,1fr,auto] text-[11px] text-muted-foreground uppercase tracking-wide gap-x-3 pb-1 border-b border-border/60">
            <span>№</span>
            <span>Пользователь</span>
            <span>Приз</span>
          </div>

          <ul className="space-y-2">
            {t.leaders.map((l) => (
              <li
                key={l.rank}
                className="grid grid-cols-[24px,1fr,auto] items-center gap-x-3 text-sm"
              >
                <span className="w-6 h-6 rounded bg-secondary flex items-center justify-center text-xs font-bold">
                  {l.rank}
                </span>
                <div className="min-w-0">
                  <p className="font-medium truncate">{l.user}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{l.amount}</p>
                </div>
                <span className="text-primary font-semibold text-xs whitespace-nowrap">{l.prize}</span>
              </li>
            ))}
          </ul>

          <button className="mt-2 inline-flex items-center justify-center bg-accent text-accent-foreground font-semibold text-sm rounded-full px-5 py-2 hover:brightness-110 transition">
            Посмотреть Турнир
          </button>
        </div>

        {/* Mascot */}
        <div className="relative">
          <Image src={t.mascot} alt="" fill className="object-contain object-bottom" />
        </div>
      </div>
    </div>
  )
}

export function Tournaments() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold">Турниры</h2>
        <button className="text-xs font-medium bg-secondary hover:bg-secondary/80 transition rounded-full px-3 py-1">
          Все
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tournaments.map((t, i) => (
          <TournamentCard key={i} t={t} />
        ))}
      </div>
    </section>
  )
}
