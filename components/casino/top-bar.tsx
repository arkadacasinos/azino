import { LogIn, UserPlus } from "lucide-react"

export function TopBar() {
  return (
    <header className="flex items-center justify-end gap-3 px-4 md:px-8 py-4">
      <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 hover:text-foreground transition-colors">
        <LogIn className="w-4 h-4" />
        Вход
      </button>
      <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground bg-accent hover:brightness-110 transition rounded-full px-4 py-2 shadow-[0_8px_24px_-8px_rgba(255,120,60,0.6)]">
        <UserPlus className="w-4 h-4" />
        Регистрация
      </button>
    </header>
  )
}
