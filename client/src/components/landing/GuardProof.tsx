import { RESULTS_URL } from "../../site.ts"
import { SectionHeading } from "./SectionHeading.tsx"

const TRAPS = [
  { score: "0.992", pair: "string → number  /  number → string", verdict: "direction swapped" },
  { score: "0.989", pair: "London → Paris  /  Paris → London", verdict: "names reordered" },
  { score: "0.984", pair: "legal  /  illegal", verdict: "opposite meaning" },
  { score: "0.972", pair: "working  /  not working", verdict: "negated" },
  { score: "0.969", pair: "next week  /  this week", verdict: "dates differ" },
  { score: "0.936", pair: "3 ideas  /  10 ideas", verdict: "numbers differ" },
]

export function GuardProof() {
  return (
    <section id="guards" className="section">
      <SectionHeading
        kicker="Measured, not guessed"
        title={
          <>
            Similar is not <span className="serif-accent">the same.</span>
          </>
        }
      >
        Embeddings barely notice one changed word. On 200 hand-labelled question pairs, the most dangerous mistakes scored higher than real rewordings, so a
        higher threshold made things worse. Cheap text checks catch what the model misses.
      </SectionHeading>

      <div className="proof">
        <div className="terminal proof-terminal reveal">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="terminal-title">npm run eval:sweep:guards</span>
          </div>
          <div className="terminal-body proof-body">
            <div className="proof-head" aria-hidden="true">
              <span>score</span>
              <span>pair</span>
              <span>verdict</span>
            </div>
            <ul>
              {TRAPS.map((trap) => (
                <li key={trap.score}>
                  <span className="proof-score">{trap.score}</span>
                  <span className="proof-pair">{trap.pair}</span>
                  <span className="proof-verdict">refused · {trap.verdict}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="proof-card reveal">
          <p className="proof-label">Wrong matches at a 0.90 threshold, out of 115 different-meaning pairs</p>
          <p className="proof-figure">
            30 <span className="proof-arrow">→</span> <span className="serif-accent">3</span>
          </p>
          <div className="proof-bars">
            <div className="proof-bar-row">
              <span>Embeddings alone</span>
              <span className="proof-track">
                <span className="proof-fill muted" style={{ width: "52%" }} />
              </span>
              <span>52%</span>
            </div>
            <div className="proof-bar-row">
              <span>With guards</span>
              <span className="proof-track">
                <span className="proof-fill" style={{ width: "90%" }} />
              </span>
              <span>90%</span>
            </div>
            <p className="proof-caption">of cache hits that were actually right</p>
          </div>
          <a className="text-link" href={RESULTS_URL}>
            Read the threshold study
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
