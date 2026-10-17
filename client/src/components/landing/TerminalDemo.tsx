type Line =
  | { kind: "command"; text: string }
  | { kind: "result"; tone: "ok" | "hit" | "stop"; text: string; meta: string }

const LINES: Line[] = [
  { kind: "command", text: 'ask fast "How do I reset my password?"' },
  { kind: "result", tone: "ok", text: "routed to groq / openai/gpt-oss-20b", meta: "718 ms · $0.000035" },
  { kind: "command", text: 'ask fast "How do I reset my password?"' },
  { kind: "result", tone: "hit", text: "exact hit · served from Redis", meta: "56 ms · $0" },
  { kind: "command", text: 'ask fast "How can I reset my password?"' },
  { kind: "result", tone: "hit", text: "semantic hit · similarity 0.987", meta: "141 ms · $0" },
  { kind: "command", text: 'ask fast "Why is my code not working?"' },
  { kind: "result", tone: "stop", text: "match 0.972 refused · one side is negated", meta: "→ provider" },
]

const MARKS = { ok: "→", hit: "✓", stop: "✕" }

export function TerminalDemo() {
  return (
    <div className="terminal hero-terminal" role="img" aria-label="Example gateway session: a provider call, an exact cache hit, a semantic cache hit, and a near match refused by the guards">
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-title">route-ai · request log</span>
        <span className="terminal-live">live</span>
      </div>
      <div className="terminal-body" aria-hidden="true">
        {LINES.map((line, index) =>
          line.kind === "command" ? (
            <div key={index} className="t-line" style={{ animationDelay: `${0.25 + index * 0.16}s` }}>
              <span className="t-prompt">$</span> {line.text}
            </div>
          ) : (
            <div key={index} className={`t-line t-result t-${line.tone}`} style={{ animationDelay: `${0.25 + index * 0.16}s` }}>
              <span className="t-mark">{MARKS[line.tone]}</span>
              <span className="t-text">{line.text}</span>
              <span className="t-meta">{line.meta}</span>
            </div>
          ),
        )}
        <div className="t-line t-cursor-line" style={{ animationDelay: `${0.25 + LINES.length * 0.16}s` }}>
          <span className="t-prompt">$</span> <span className="t-cursor" />
        </div>
      </div>
    </div>
  )
}
