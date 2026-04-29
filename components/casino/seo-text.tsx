"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function SeoText() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section
      aria-labelledby="seo-heading"
      className="rounded-2xl border border-border bg-card/40 p-6 md:p-8"
    >
      <h2 id="seo-heading" className="text-xl md:text-2xl font-semibold text-foreground">
        LeeBet Casino — официальный сайт онлайн-казино
      </h2>

      <div
        className={`relative mt-4 text-sm md:text-[15px] leading-relaxed text-muted-foreground space-y-4 overflow-hidden transition-all ${
          expanded ? "max-h-[6000px]" : "max-h-64"
        }`}
      >
        <p>
          <strong className="text-foreground">LeeBet</strong> — современное онлайн-казино с лицензией, удобным
          интерфейсом и широкой коллекцией слотов от ведущих провайдеров. На официальном сайте{" "}
          <strong className="text-foreground">LeeBet Casino</strong> игроки получают мгновенный доступ к тысячам
          азартных игр, регулярным турнирам, щедрым бонусам и круглосуточной поддержке. Благодаря продуманному
          дизайну и стабильной работе платформы{" "}
          <strong className="text-foreground">leebet casino онлайн</strong> подходит как новичкам, так и опытным
          игрокам, которые ценят качество, прозрачность и быстрые выплаты.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Регистрация на LeeBet Casino
        </h3>
        <p>
          Чтобы начать играть на реальные деньги, достаточно пройти короткую процедуру{" "}
          <strong className="text-foreground">leebet casino регистрация</strong>. Вам потребуется указать e-mail,
          придумать пароль и подтвердить совершеннолетие. После создания аккаунта на{" "}
          <strong className="text-foreground">leebet казино</strong> открывается приветственный пакет: бонус 150%
          на первый депозит и 250 фриспинов в популярных слотах. Аккаунт привязывается к вашей электронной почте,
          поэтому все средства, история ставок и достижения сохраняются даже при смене устройства.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Либет казино: вход и официальный сайт
        </h3>
        <p>
          Многие пользователи в русскоязычном сегменте ищут проект как{" "}
          <strong className="text-foreground">либет казино</strong>,{" "}
          <strong className="text-foreground">либэт казино</strong> или{" "}
          <strong className="text-foreground">лилбет казино</strong> — все эти варианты ведут на одну и ту же
          платформу. <strong className="text-foreground">Либет казино официальный сайт</strong> доступен 24/7,
          а кнопка <strong className="text-foreground">либет казино вход</strong> расположена в правом верхнем
          углу главной страницы. Авторизация занимает несколько секунд: введите логин и пароль, при необходимости
          подтвердите вход через код из письма — и можно сразу{" "}
          <strong className="text-foreground">либет казино играть</strong> в любимые слоты.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Либет казино зеркало — стабильный доступ к играм
        </h3>
        <p>
          Если основной адрес временно недоступен из-за региональных ограничений или технических работ,
          используйте <strong className="text-foreground">либет казино зеркало</strong>. Зеркало полностью
          повторяет функционал основного ресурса: тот же баланс, та же история ставок, те же бонусы и турниры.
          Получить актуальную ссылку на <strong className="text-foreground">либет казино онлайн</strong> можно у
          службы поддержки или в e-mail-рассылке. Это удобный способ обойти блокировки и продолжить игру без
          потери прогресса. Все соединения защищены SSL-шифрованием, поэтому ваши данные и платежи остаются в
          безопасности.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Каталог игр и провайдеры
        </h3>
        <p>
          В каталоге{" "}
          <strong className="text-foreground">либет казино официальный</strong> представлено более 5000 слотов,
          настольных игр и live-столов от Pragmatic Play, Endorphina, BGaming, Hacksaw Gaming, Belatra,
          Evolution, Fugaso и AmigoGaming. Игроки найдут классические автоматы, новинки с уникальными
          механиками, прогрессивные джекпоты и тематические серии — от Olympus Rivals и Fortune Bags до
          Trump It Coin Link и Rabbit Garden. Все игры запускаются в браузере без скачивания, поддерживают
          демо-режим и игру на реальные деньги, а также корректно работают на смартфонах и планшетах.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Бонусы, турниры и программа лояльности
        </h3>
        <p>
          <strong className="text-foreground">LeeBet</strong> делает ставку на щедрые поощрения: помимо
          стартового бонуса, действуют еженедельные кэшбэки, релоад-акции, фриспины за пополнения и личные
          подарки в день рождения. Регулярно проводятся турниры с призовыми фондами в USDT и рублях — каждый
          игрок может побороться за место в топе и получить весомую награду. Многоуровневая VIP-программа
          открывает доступ к персональному менеджеру, повышенным лимитам, ускоренным выплатам и эксклюзивным
          подаркам.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Платежи и безопасность
        </h3>
        <p>
          Платформа поддерживает Visa, Mastercard, криптовалюты Bitcoin, Ethereum, BNB и Tether (USDT), а также
          популярные электронные кошельки. Минимальный депозит начинается от 100 рублей, выплаты обрабатываются
          за 15 минут или быстрее. Все транзакции на <strong className="text-foreground">leebet casino</strong>
          {" "}проходят проверку анти-фрод системы, а данные пользователей защищены современным шифрованием.
          Лицензия и независимый аудит RNG гарантируют честность результатов в каждой игре.
        </p>

        <h3 className="text-base md:text-lg font-semibold text-foreground">
          Почему игроки выбирают LeeBet
        </h3>
        <p>
          <strong className="text-foreground">Leebet casino</strong> объединяет всё необходимое для комфортной
          игры: огромный каталог, прозрачные правила, быстрые выплаты и отзывчивую поддержку. Удобная мобильная
          версия позволяет запускать слоты в дороге, а актуальное{" "}
          <strong className="text-foreground">либет казино зеркало</strong> исключает простои. Если вы только
          начинаете путь в азартных играх или ищете надёжную площадку с большим выбором развлечений, пройдите{" "}
          <strong className="text-foreground">leebet casino регистрация</strong>, активируйте приветственный
          бонус и убедитесь сами: <strong className="text-foreground">либет казино онлайн</strong> — это
          сочетание драйва, честности и премиального сервиса.
        </p>

        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          aria-expanded={expanded}
        >
          {expanded ? "Свернуть" : "Развернуть"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  )
}
