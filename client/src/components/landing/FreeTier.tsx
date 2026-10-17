import { GITHUB_URL } from "../../site.ts"
import { GitHubIcon } from "../layout/GitHubIcon.tsx"

const STACK = [
  { name: "Vercel", role: "web app" },
  { name: "Render", role: "gateway" },
  { name: "Neon", role: "Postgres + pgvector" },
  { name: "Upstash", role: "Redis" },
  { name: "MiniLM", role: "embeddings, run locally" },
]

export function FreeTier() {
  return (
    <section className="section free reveal">
      <div className="free-copy">
        <p className="kicker">Running costs</p>
        <h2>
          Free, and <span className="serif-accent">staying</span> that way.
        </h2>
        <p className="section-lead">
          No paid embedding API, no paid hosting. The whole demo runs on free tiers, and the embedding model runs inside the gateway itself.
        </p>
        <a className="button button-secondary" href={GITHUB_URL}>
          <GitHubIcon />
          Star it on GitHub
        </a>
      </div>
      <ul className="stack-list">
        {STACK.map((item) => (
          <li key={item.name}>
            <span className="stack-name">{item.name}</span>
            <span className="stack-role">{item.role}</span>
            <span className="stack-price">$0</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
