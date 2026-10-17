import { useEffect, useState } from "react"

type Props = { text: string; prefix?: string; label: string }

export function CopyPill({ text, prefix = "$", label }: Props) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="copy-pill">
      <code>
        <span className="copy-prefix" aria-hidden="true">{prefix}</span>
        {text}
      </code>
      <button type="button" onClick={copy} aria-label={copied ? "Copied" : label} title={copied ? "Copied" : label}>
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="8.5" y="8.5" width="11" height="11" rx="2.5" />
            <path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5" />
          </svg>
        )}
      </button>
      <span className="visually-hidden" aria-live="polite">{copied ? "Copied to clipboard" : ""}</span>
    </div>
  )
}
