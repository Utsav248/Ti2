"use client"

import { useEffect, useRef, useState } from "react"

export function LoveLetterSection() {
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
    <section className="relative px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8 shadow-sm md:p-12">
          <div className="absolute right-4 top-4 opacity-10">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="hsl(348, 55%, 40%)">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <p className="mb-6 text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            My dearest
          </p>

          <div className="space-y-5 font-sans text-base leading-relaxed text-card-foreground md:text-lg">
            <p>
              From the first moment we met, thanks for being such a wonderful friend, I remember us meeting in the racing gates of triumph and how I was a moth yet you still guided me.
            </p>
            <p>
              You called me the moth that was annoyed on why he couldnt swim but in all honesty I have no memory of that :v 
            </p>
            <p>
              Even tho i get kinda racist and complain alot thanks for being such a sweetie to me :).
            </p>
            <p className="font-serif text-lg italic text-primary md:text-xl">
              And to my favourite friendship story, and I never want it to end.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="font-serif text-sm italic text-muted-foreground">
              Forever yours
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </div>
    </section>
  )
}
