import { ChevronDown, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="space-y-6 pt-4">
      <div>
        <h3 className="text-base md:text-lg font-bold mb-2">Официальный сайт LeeBet Casino</h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
          Добро пожаловать на официальный сайт <span className="text-foreground font-medium">LeeBet</span>. Здесь вы
          получаете стабильный доступ к играм, быстрый вход через актуальное зеркало, простую регистрацию,
          приветственные бонусы и поддержку 24/7. Платформа ориентирована на удобство: тысячи слотов, live-столы,
          регулярные акции и прозрачные выплаты.
        </p>
      </div>

      <div>
        <h4 className="text-base font-semibold mb-3">Регистрация и вход</h4>
        <button className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 transition rounded-full px-6 py-2 text-sm font-medium">
          Развернуть <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="fixed bottom-4 right-4 z-30">
        <button
          aria-label="Поддержка"
          className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(255,120,60,0.6)] hover:brightness-110 transition"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </footer>
  )
}
