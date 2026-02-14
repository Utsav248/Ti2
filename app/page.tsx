import { FloatingHearts } from "@/components/floating-hearts"
import { HeroSection } from "@/components/hero-section"
import { LoveLetterSection } from "@/components/love-letter-section"
import { PhotoSection } from "@/components/photo-section"
import { ClosingSection } from "@/components/closing-section"

export default function ValentinePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <FloatingHearts />
      <HeroSection />
      <LoveLetterSection />
      <PhotoSection />
      <ClosingSection />
      <footer className="relative z-10 py-8 text-center">
        <p className="font-sans text-xs text-muted-foreground">
          With love, always and forever
        </p>
      </footer>
    </main>
  )
}
