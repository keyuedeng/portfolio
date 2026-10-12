"use client"

import { useEffect, useRef } from "react"

const RAMP = ["@", "*", "+", ":", "."]
const LIFETIME = 750
const MAX_POINTS = 40

type Point = { x: number; y: number; born: number; jitter: number; el: HTMLSpanElement }

// ASCII characters that fall and fade behind the pointer.
// Drawn straight to the DOM in a rAF loop so React doesn't re-render per frame.
export function CursorTrail({ color = "#3B5BDB" }: { color?: string }) {
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = layer.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    let points: Point[] = []
    let last = 0
    let frame = 0

    const tick = () => {
      const now = performance.now()
      points = points.filter((p) => {
        const a = Math.min(0.999, (now - p.born) / LIFETIME)
        if (now - p.born >= LIFETIME) {
          p.el.remove()
          return false
        }
        p.el.textContent = RAMP[Math.floor(a * RAMP.length)]
        p.el.style.opacity = String(1 - a)
        p.el.style.transform = `translate(calc(-50% + ${(p.jitter - 0.5) * 10 * a}px), calc(-50% + ${a * 14}px))`
        return true
      })
      frame = points.length ? requestAnimationFrame(tick) : 0
    }

    const onMove = (e: PointerEvent) => {
      const now = performance.now()
      if (now - last < 24) return
      last = now
      const el = document.createElement("span")
      el.style.cssText = `position:absolute;left:${e.clientX}px;top:${e.clientY}px;color:${color}`
      root.appendChild(el)
      points.push({ x: e.clientX, y: e.clientY, born: now, jitter: Math.random(), el })
      if (points.length > MAX_POINTS) points.shift()!.el.remove()
      if (!frame) frame = requestAnimationFrame(tick)
    }

    window.addEventListener("pointermove", onMove)
    return () => {
      window.removeEventListener("pointermove", onMove)
      cancelAnimationFrame(frame)
      points.forEach((p) => p.el.remove())
    }
  }, [color])

  return (
    <div
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] font-mono text-[13px] leading-none select-none"
    />
  )
}
