import { Link } from "react-router"
import { AUTHOR_NAME, AUTHOR_URL, DESIGN_URL, GITHUB_URL, README_URL, RESULTS_URL } from "../../site.ts"
import { Logo } from "./Logo.tsx"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-about">
            <Logo />
            <p>An OpenAI-compatible gateway with semantic caching, provider fallback, budgets and per-token cost tracking.</p>
          </div>
          <div className="footer-col">
            <h3>Project</h3>
            <ul>
              <li><a href={GITHUB_URL}>Source on GitHub</a></li>
              <li><a href={README_URL}>README</a></li>
              <li><a href={DESIGN_URL}>Design reference</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/dashboard">Live dashboard</Link></li>
              <li><a href={RESULTS_URL}>Threshold study</a></li>
              <li><a href="/health">Health check</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© {new Date().getFullYear()} Route AI</span>
          <span>
            Built by{" "}
            <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer">
              {AUTHOR_NAME}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
