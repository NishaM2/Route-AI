import { SectionHeading } from "./SectionHeading.tsx"

const LATENCY = [
  { label: "Exact hit", ms: 56, tone: "fast" },
  { label: "Semantic hit", ms: 141, tone: "fast" },
  { label: "Provider", ms: 718, tone: "slow" },
]

export function FeatureBento() {
  return (
    <section id="features" className="section">
      <SectionHeading
        kicker="What it does"
        title={
          <>
            Everything a gateway should do, <span className="serif-accent">minus</span> the guesswork.
          </>
        }
      />

      <div className="bento">
        <article className="tile tile-tall reveal">
          <TileIcon path="M4 6h16M4 12h10M4 18h6" />
          <h3>Two caches, one lookup</h3>
          <p>
            Identical requests are answered from Redis. Reworded ones are matched by meaning in pgvector, inside a namespace of tenant, model, system prompt,
            tools and conversation so far.
          </p>
          <div className="namespace" aria-label="What must match before meaning is compared">
            <span className="namespace-label">must match exactly</span>
            <div className="namespace-chips">
              {["tenant", "model", "system prompt", "tools", "temperature", "history"].map((field) => (
                <code key={field}>{field}</code>
              ))}
            </div>
            <span className="namespace-label">then compared by meaning</span>
            <div className="namespace-chips">
              <code className="namespace-question">last user message</code>
            </div>
          </div>
          <div className="latency-mini" aria-label="Median response time">
            {LATENCY.map((row) => (
              <div key={row.label} className="latency-row">
                <span>{row.label}</span>
                <span className="latency-track">
                  <span className={`latency-fill ${row.tone}`} style={{ width: `${(row.ms / 718) * 100}%` }} />
                </span>
                <span className="latency-value">{row.ms} ms</span>
              </div>
            ))}
          </div>
        </article>

        <article className="tile reveal">
          <TileIcon path="M4 12h4l2-5 4 10 2-5h4" />
          <h3>Fallback that knows when to stop</h3>
          <p>Doubling, jittered retries, then the next provider. A circuit breaker skips one that keeps failing.</p>
          <div className="state-chips" aria-label="Circuit breaker states">
            <span className="state closed">closed</span>
            <span className="state-arrow" aria-hidden="true">→</span>
            <span className="state open">open</span>
            <span className="state-arrow" aria-hidden="true">→</span>
            <span className="state half">half-open</span>
          </div>
        </article>

        <article className="tile reveal">
          <TileIcon path="M12 3v18M16 7.5c0-1.4-1.8-2.5-4-2.5s-4 1.1-4 2.5S9.8 10 12 10s4 1.1 4 2.5S14.2 15 12 15s-4-1.1-4-2.5" />
          <h3>Every token, priced</h3>
          <p>Each request is costed in micro-dollars from a price table with effective dates, hidden reasoning tokens included.</p>
          <code className="tile-code">86 in + 53 out = 22 µ$</code>
        </article>

        <article className="tile reveal">
          <TileIcon path="M7 11V8a5 5 0 0 1 10 0v3M5 11h14v9H5z" />
          <h3>Budgets before spend</h3>
          <p>Keys are stored as hashes and shown once. A tenant over its monthly budget is stopped before a token is bought.</p>
          <code className="tile-code">HTTP 402 · budget reached</code>
        </article>

        <article className="tile reveal">
          <TileIcon path="M4 7h16M4 12h16M4 17h9" />
          <h3>Cached streams still stream</h3>
          <p>A cached answer is replayed in small paced chunks, so a chat UI keeps typing instead of flashing a wall of text.</p>
          <span className="stream-dots" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </span>
        </article>
      </div>
    </section>
  )
}

function TileIcon({ path }: { path: string }) {
  return (
    <span className="tile-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d={path} />
      </svg>
    </span>
  )
}
