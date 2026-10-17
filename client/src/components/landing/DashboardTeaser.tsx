import { Link } from "react-router"
import { SectionHeading } from "./SectionHeading.tsx"

const PANELS = [
  { title: "Spend and savings", text: "What this month cost, and what the cache saved.", path: "M4 17l5-5 4 3 7-8" },
  { title: "Hit rate by type", text: "Exact and semantic hits, day by day.", path: "M5 19V9M12 19V5M19 19v-7" },
  { title: "Cached vs uncached", text: "Median and p95 response time for every cache outcome.", path: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
  { title: "Request log", text: "Filter by tenant, cache or outcome, then open any request.", path: "M4 6h16M4 12h16M4 18h10" },
]

export function DashboardTeaser() {
  return (
    <section id="dashboard" className="section">
      <div className="teaser-head">
        <SectionHeading
          kicker="Observability"
          title={
            <>
              Prefer to <span className="serif-accent">watch</span> it work?
            </>
          }
        >
          The dashboard reads the same request log the gateway writes. It's live, read-only, and filters and pages on the server.
        </SectionHeading>
        <Link className="button button-primary teaser-cta reveal" to="/dashboard">
          Open the dashboard
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className="panels">
        {PANELS.map((panel, index) => (
          <Link key={panel.title} to="/dashboard" className="panel-link reveal" style={{ transitionDelay: `${index * 60}ms` }}>
            <span className="panel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d={panel.path} />
              </svg>
            </span>
            <span className="panel-title">{panel.title}</span>
            <span className="panel-text">{panel.text}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
