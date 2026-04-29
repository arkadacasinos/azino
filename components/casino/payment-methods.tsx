const methods = [
  { name: "VISA", style: "italic font-extrabold tracking-tight" },
  { name: "mastercard", style: "font-bold" },
  { name: "BNB", style: "font-bold" },
  { name: "bitcoin", style: "font-bold" },
  { name: "ethereum", style: "font-medium" },
  { name: "tether", style: "font-bold" },
]

export function PaymentMethods() {
  return (
    <section
      aria-label="Способы оплаты"
      className="flex flex-wrap items-center justify-around gap-y-4 gap-x-6 py-6 px-2 md:px-8 opacity-70"
    >
      {methods.map((m) => (
        <div key={m.name} className={`text-foreground/70 text-lg md:text-xl ${m.style}`}>
          {m.name === "bitcoin" && <span className="text-accent">₿</span>}
          {m.name === "ethereum" && <span className="text-foreground/60">◆</span>}
          {m.name === "tether" && <span className="text-primary">₮</span>}
          {m.name === "BNB" && <span className="text-yellow-300">◆</span>} {m.name}
        </div>
      ))}
    </section>
  )
}
