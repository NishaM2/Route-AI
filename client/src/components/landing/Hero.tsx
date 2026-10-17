import { Link } from "react-router"
import { CopyPill } from "./CopyPill.tsx"
import { TerminalDemo } from "./TerminalDemo.tsx"

export function Hero() {
  const baseUrl = `${window.location.origin}/v1`

  return (
    <header className="hero">
      <div className="hero-copy">
        <p className="hero-badge">
          <span className="pulse-dot" aria-hidden="true" />
          OpenAI-compatible · self-hosted · $0 to run
        </p>
        <h1>
          Every model, behind <br className="hero-break" />
          one <span className="serif-accent">quiet</span> endpoint.
        </h1>
        <p className="hero-lead">
          Semantic caching, provider fallback and per-token costs, behind the OpenAI client you already use.
        </p>
        <div className="hero-actions">
          <CopyPill prefix="baseURL" text={baseUrl} label="Copy the base URL" />
          <Link className="button button-secondary" to="/dashboard">
            Open the live dashboard
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
      <TerminalDemo />
    </header>
  )
}
