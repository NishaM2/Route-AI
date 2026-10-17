import { useEffect, useState } from "react"
import { Link } from "react-router"
import { GITHUB_URL } from "../../site.ts"
import { GitHubIcon } from "./GitHubIcon.tsx"
import { Logo } from "./Logo.tsx"
import { ThemeToggle } from "./ThemeToggle.tsx"

type Props = { page: "landing" | "dashboard" }

export function SiteHeader({ page }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <nav className={scrolled ? "site-nav scrolled" : "site-nav"} aria-label="Main">
      <div className="wrap nav-inner">
        <Logo />
        <div className="nav-links">
          {page === "landing" ? (
            <>
              <a className="nav-link optional" href="#features">Features</a>
              <a className="nav-link optional" href="#pipeline">Pipeline</a>
              <a className="nav-link optional" href="#guards">Guards</a>
              <a className="nav-link optional" href="#sdk">SDK</a>
            </>
          ) : (
            <Link className="nav-link optional" to="/">
              Overview
            </Link>
          )}
          <span className="nav-divider optional" aria-hidden="true" />
          <a className="icon-button" href={GITHUB_URL} aria-label="Route AI on GitHub" title="GitHub">
            <GitHubIcon />
          </a>
          <ThemeToggle />
          {page === "landing" && (
            <Link className="button button-primary button-small" to="/dashboard">
              Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
