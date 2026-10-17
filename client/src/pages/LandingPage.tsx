import { useEffect } from "react"
import { ClosingCta } from "../components/landing/ClosingCta.tsx"
import { DashboardTeaser } from "../components/landing/DashboardTeaser.tsx"
import { FeatureBento } from "../components/landing/FeatureBento.tsx"
import { FreeTier } from "../components/landing/FreeTier.tsx"
import { GuardProof } from "../components/landing/GuardProof.tsx"
import { Hero } from "../components/landing/Hero.tsx"
import { NumberStrip } from "../components/landing/NumberStrip.tsx"
import { Pipeline } from "../components/landing/Pipeline.tsx"
import { SdkSnippet } from "../components/landing/SdkSnippet.tsx"
import { useReveal } from "../components/landing/useReveal.ts"
import { SiteFooter } from "../components/layout/SiteFooter.tsx"
import { SiteHeader } from "../components/layout/SiteHeader.tsx"

export function LandingPage() {
  useReveal()

  useEffect(() => {
    document.title = "Route AI · One endpoint for every model"
  }, [])

  return (
    <div className="landing">
      <SiteHeader page="landing" />
      <main className="wrap">
        <Hero />
        <NumberStrip />
        <FeatureBento />
        <Pipeline />
        <GuardProof />
        <SdkSnippet />
        <DashboardTeaser />
        <FreeTier />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  )
}
