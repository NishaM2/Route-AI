import type { ReactNode } from "react"

const KEYWORDS = new Set(["import", "from", "const", "new", "await", "for", "of", "true", "false"])

export function highlight(code: string): ReactNode[] {
  const parts = code.split(/("(?:[^"\\]|\\.)*"|\b[A-Za-z_]+\b)/g)
  return parts.map((part, index) => {
    if (part.startsWith('"')) return <span key={index} className="tk-str">{part}</span>
    if (KEYWORDS.has(part)) return <span key={index} className="tk-key">{part}</span>
    return part
  })
}
