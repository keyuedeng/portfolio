"use client"

import { useLayoutEffect, useRef } from "react"

const GLIDE_MS = 2200
const DELAY_MS = 250

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// The timeline's scroller. It rests on the newest item (see Experience); on load it rewinds to
// the oldest item, and the first time it scrolls into view it glides back to the newest, telling
// the story once in order. If it's already up in the reading area on load (e.g. linked to
// #experience), it's left alone. Touching, clicking, sideways scrolling or a
// key press stops it for good, and reduced motion skips it entirely.
export function TimelineScroller({ className, label, children }: { className: string; label: string; children: React.ReactNode }) {
  const ref = useRef<HTMLOListElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // row-reverse scrollers start at 0 on the right edge and go negative towards the left
    const oldest = () => -(el.scrollWidth - el.clientWidth)
    let frame = 0
    let timer = 0
    let done = false

    const finish = () => {
      if (done) return
      done = true
      cancelAnimationFrame(frame)
      clearTimeout(timer)
      el.style.scrollSnapType = ""
      reveal.disconnect()
      interactions.forEach((type) => el.removeEventListener(type, finish))
      el.removeEventListener("wheel", onWheel)
    }

    // Vertical wheel over the strip is just page scrolling; only sideways scrolling takes control
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) finish()
    }

    const glide = () => {
      const from = el.scrollLeft
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / GLIDE_MS)
        el.scrollLeft = from * (1 - easeInOutCubic(t))
        if (t < 1) frame = requestAnimationFrame(step)
        else finish()
      }
      frame = requestAnimationFrame(step)
    }

    // Glide once most of it is visible
    const reveal = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return
        reveal.disconnect()
        timer = window.setTimeout(glide, DELAY_MS)
      },
      { threshold: 0.7 },
    )

    const interactions = ["touchstart", "pointerdown", "keydown"] as const
    interactions.forEach((type) => el.addEventListener(type, finish, { passive: true }))
    el.addEventListener("wheel", onWheel, { passive: true })

    const top = el.getBoundingClientRect().top
    if (top < window.innerHeight * 0.6 || el.scrollWidth <= el.clientWidth) {
      finish()
      return
    }
    el.style.scrollSnapType = "none"
    el.scrollLeft = oldest()
    reveal.observe(el)

    return finish
  }, [])

  return (
    <ol ref={ref} tabIndex={0} aria-label={label} className={className}>
      {children}
    </ol>
  )
}
