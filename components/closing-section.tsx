"use client"

import { useEffect, useRef, useState } from "react"
import { Heart } from "lucide-react"

export function ClosingSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative px-6 py-32 md:py-48">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/sunset.jpg"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-xl text-center transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="h-px w-16 bg-primary/30" />
          <Heart className="h-5 w-5 fill-primary text-primary" />
          <div className="h-px w-16 bg-primary/30" />
        </div>

        <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-6xl">
          <span className="text-balance italic text-primary">I love you</span>
        </h2>

        <p className="mx-auto mb-8 max-w-md font-sans text-lg leading-relaxed text-muted-foreground">
          Today, tomorrow, and every day that follows.
        </p>

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3">
          <Heart className="h-4 w-4 animate-pulse fill-primary text-primary" />
          <span className="font-serif text-sm text-primary">
            Made with all my love, just for you
          </span>
          <Heart className="h-4 w-4 animate-pulse fill-primary text-primary" />
        </div>
      </div>
    </section>
  )
}
