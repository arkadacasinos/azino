import {
  Home,
  Flame,
  Sparkles,
  Cherry,
  Dice5,
  Trophy,
  Gift,
  Wallet,
  Headphones,
  Settings,
  Search,
  Crown,
} from "lucide-react"

const items = [
  { icon: Home, label: "Главная" },
  { icon: Search, label: "Поиск" },
  { icon: Flame, label: "Топ" },
  { icon: Sparkles, label: "Новые" },
  { icon: Cherry, label: "Слоты" },
  { icon: Dice5, label: "Лайв" },
  { icon: Crown, label: "VIP" },
  { icon: Trophy, label: "Турниры" },
  { icon: Gift, label: "Бонусы" },
  { icon: Wallet, label: "Кошелёк" },
  { icon: Headphones, label: "Поддержка" },
  { icon: Settings, label: "Настройки" },
]

export function SideRail() {
  return (
    <aside
      aria-label="Боковое меню"
      className="hidden md:flex fixed left-0 top-0 bottom-0 w-12 flex-col items-center gap-1 bg-sidebar border-r border-border z-40 py-3"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold text-sm mb-2">
        L
      </div>
      {items.map(({ icon: Icon, label }, i) => (
        <button
          key={i}
          aria-label={label}
          className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </aside>
  )
}
