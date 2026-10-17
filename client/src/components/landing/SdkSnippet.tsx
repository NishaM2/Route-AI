import { highlight } from "./highlight.tsx"
import { SectionHeading } from "./SectionHeading.tsx"

const ROUTES = [
  { name: "fast", first: "groq · gpt-oss-20b", then: "gemini · 3.6-flash" },
  { name: "smart", first: "groq · gpt-oss-120b", then: "gemini · 3.6-flash" },
  { name: "balanced", first: "gemini · 3.6-flash", then: "groq · gpt-oss-120b" },
]

export function SdkSnippet() {
  const code = `import OpenAI from "openai"

const client = new OpenAI({
  baseURL: "${window.location.origin}/v1",
  apiKey: process.env.ROUTE_AI_KEY,
})

const stream = await client.chat.completions.create({
  model: "fast",
  stream: true,
  messages: [{ role: "user", content: "How do I reset my password?" }],
})

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content ?? "")
}`

  return (
    <section id="sdk" className="section">
      <SectionHeading
        kicker="Drop-in"
        title={
          <>
            Still just the <span className="serif-accent">OpenAI</span> SDK.
          </>
        }
      >
        Same request, same response, streaming included. Ask for a logical model name and Route AI picks the provider, falling back when it has to.
      </SectionHeading>

      <div className="sdk">
        <div className="terminal code-window reveal">
          <div className="terminal-bar">
            <span className="terminal-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="terminal-title">app.ts</span>
          </div>
          <pre className="code-body">
            <code>{highlight(code)}</code>
          </pre>
        </div>

        <aside className="routes reveal" aria-label="Logical model names">
          <p className="routes-title">Logical model names</p>
          <ul>
            {ROUTES.map((route) => (
              <li key={route.name}>
                <code className="route-name">{route.name}</code>
                <span className="route-path">
                  <span>{route.first}</span>
                  <span className="route-then">then {route.then}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="routes-note">
            Real model names work too, and never fall back: asking for a specific model means that model. <code>mock</code> fails on demand for testing.
          </p>
        </aside>
      </div>
    </section>
  )
}
