"use client"

import { useEffect, useRef, useState } from "react"

export function PhotoSection() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl transition-all duration-1000 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-sans uppercase tracking-[0.3em] text-muted-foreground">
            Our beautiful
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">Memories Together</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/images/flower.jpg"
              alt="Flowers for you"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-all duration-300 group-hover:bg-foreground/20">
              <p className="translate-y-4 font-serif text-sm text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Your favourite flowers, but only pics because you live too far.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg md:mt-8">
            <img
              src="/images/underwatercouch.jpg"
              alt="Underwater Couch"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-all duration-300 group-hover:bg-foreground/20">
              <p className="translate-y-4 font-serif text-sm text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Underwater Couch
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <img
              src="/images/metplace.jpg"
              alt="Place we met"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-foreground/0 p-4 transition-all duration-300 group-hover:bg-foreground/20">
              <p className="translate-y-4 font-serif text-sm text-background opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Place we met
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center font-sans text-sm italic text-muted-foreground">
          Im sorry I didnt take more pics lol.
        </p>
      </div>
    </section>
  )
}
