import { CopyPill } from "./CopyPill.tsx"

export function ClosingCta() {
  return (
    <section className="closing reveal" aria-labelledby="closing-title">
      <span className="closing-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h5c3 0 3.5-5 7-5h4M9 12c3 0 3.5 5 7 5h4" />
        </svg>
      </span>
      <h2 id="closing-title">
        One <span className="serif-accent">baseURL</span> away.
      </h2>
      <CopyPill prefix="baseURL" text={`${window.location.origin}/v1`} label="Copy the base URL" />
      <p className="closing-meta">Node 22 · Postgres + pgvector · Redis · any OpenAI client</p>
    </section>
  )
}
