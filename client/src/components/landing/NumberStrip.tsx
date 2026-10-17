const NUMBERS = [
  { value: "13×", label: "faster on a cache hit", detail: "56 ms against 718 ms" },
  { value: "56%", label: "of lookups answered from cache", detail: "25 of 45 requests" },
  { value: "−50%", label: "spend on the same workload", detail: "909 µ$ against 1,836 µ$" },
  { value: "30 → 3", label: "wrong semantic matches", detail: "once the guards are on" },
]

export function NumberStrip() {
  return (
    <section className="number-strip reveal" aria-label="Measured results">
      <div className="number-grid" role="list">
        {NUMBERS.map((item) => (
          <div key={item.label} className="number-cell" role="listitem">
            <span className="number-value">{item.value}</span>
            <span className="number-label">{item.label}</span>
            <span className="number-detail">{item.detail}</span>
          </div>
        ))}
      </div>
      <p className="number-note">Measured on a 50-request workload through the gateway to Groq, with repeats and rewordings mixed in on purpose.</p>
    </section>
  )
}
