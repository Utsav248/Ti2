"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <div
        className={`relative z-10 max-w-2xl transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-primary/30" />
          <Heart className="h-5 w-5 fill-primary text-primary" />
          <div className="h-px w-12 bg-primary/30" />
        </div>

        <p className="mb-4 text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
          A letter for you
        </p>

        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          <span className="text-balance">Happy Valentine{"'"}s Day,</span>
          <br />
          <span className="italic text-primary">Ties</span>
        </h1>

        <p className="mx-auto max-w-md font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
          Thanks to you for being such a lovely friend throughout the years.
        </p>

        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-primary/30" />
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground">scroll down</span>
          <div className="h-px w-8 bg-primary/30" />
        </div>

        <div className="mt-4 flex justify-center">
          <div className="animate-bounce">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(348, 55%, 40%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-roses.jpg"
          alt="Romantic roses on linen"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
    </section>
  )
}
