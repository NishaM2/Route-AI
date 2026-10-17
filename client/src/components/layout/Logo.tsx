import { Link } from "react-router"

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Route AI home">
      <svg className="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path d="M8 16h5c3 0 3.5-6 7-6h3M13 16c3 0 3.5 6 7 6h3" fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="8" cy="16" r="2.4" fill="var(--page)" />
      </svg>
      <span className="brand-name">
        Route <em>AI</em>
      </span>
    </Link>
  )
}
