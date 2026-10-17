import { SectionHeading } from "./SectionHeading.tsx"

const STAGES = [
  { name: "auth", title: "Key and budget", text: "Hashed API key to tenant. Over budget means a 402 before anything is spent.", exit: "refuses", stop: true },
  { name: "exact_cache", title: "Exact cache", text: "The request in one canonical form, hashed. Redis answers identical requests.", exit: "answers repeats", stop: false },
  { name: "semantic_cache", title: "Semantic cache", text: "A local 384-number embedding, matched in pgvector within the same namespace.", exit: "answers rewordings", stop: false },
  { name: "guards", title: "Guards", text: "Numbers, dates, names, negation and word order must agree, or the match is refused.", exit: "refuses near misses", stop: true },
  { name: "router", title: "Router", text: "Retries, fallback to the next provider, and a circuit breaker for the ones that are down.", exit: "calls a provider", stop: false },
]

export function Pipeline() {
  return (
    <section id="pipeline" className="section">
      <SectionHeading
        kicker="The pipeline"
        title={
          <>
            Five checks, <span className="serif-accent">cheapest</span> first.
          </>
        }
      >
        Every request walks the same path. Each stage either answers or hands on, so the paid provider call happens only when nothing cheaper can answer.
      </SectionHeading>

      <ol className="stages">
        {STAGES.map((stage, index) => (
          <li key={stage.name} className="stage reveal" style={{ transitionDelay: `${index * 60}ms` }}>
            <span className="stage-number" aria-hidden="true">
              0{index + 1}
            </span>
            <code className="stage-name">{stage.name}</code>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            <span className={stage.stop ? "stage-exit stop" : "stage-exit"}>{stage.exit}</span>
          </li>
        ))}
      </ol>
      <p className="pipeline-note reveal">Whichever stage answers, the request becomes one row in the log: tokens, cost, latency and time to first token.</p>
    </section>
  )
}
