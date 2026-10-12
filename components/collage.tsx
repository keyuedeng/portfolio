"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { CollageItem } from "@/lib/site"

const BOARD_W = 1040
const BOARD_H = 460

const looks: Record<CollageItem["style"], string> = {
  photo: "bg-white border border-line rounded-[3px] px-2.5 pt-2.5 pb-3.5",
  sticky: "bg-[#FFF4B8] rounded-[2px] p-4",
  dashed: "bg-[#F3F6FF] border border-dashed border-accent rounded-lg p-3.5",
  pill: "bg-white border border-ink rounded-full px-[18px] py-3",
  ticket: "bg-[#EEF6EE] border border-[#CFE3CF] rounded-md p-3.5",
}

// Positions are stored as fractions of the free space so the board reflows
// on narrow screens instead of pushing cards out of view.
type Pos = { fx: number; fy: number; z: number }

export function Collage({ items }: { items: CollageItem[] }) {
  const board = useRef<HTMLElement>(null)
  const [width, setWidth] = useState(BOARD_W)
  const [pos, setPos] = useState<Record<string, Pos>>(() =>
    Object.fromEntries(
      items.map((it, i) => [it.id, { fx: it.x / (BOARD_W - it.w), fy: it.y / (BOARD_H - 160), z: i + 1 }]),
    ),
  )
  const zTop = useRef(items.length)
  const drag = useRef<{ id: string; sx: number; sy: number; ox: number; oy: number; w: number } | null>(null)

  useEffect(() => {
    const el = board.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const d = drag.current
      if (!d) return
      const freeX = Math.max(1, width - d.w)
      const freeY = BOARD_H - 160
      const x = Math.max(0, Math.min(freeX, d.ox + e.clientX - d.sx))
      const y = Math.max(0, Math.min(freeY, d.oy + e.clientY - d.sy))
      setPos((p) => ({ ...p, [d.id]: { ...p[d.id], fx: x / freeX, fy: y / freeY } }))
    }
    const onUp = () => (drag.current = null)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [width])

  return (
    <section
      ref={board}
      aria-label="Collage of things"
      className="relative mx-auto mt-4 h-[460px] max-w-[1040px] overflow-hidden"
    >
      {items.map((it) => {
        const w = Math.min(it.w, width * 0.6)
        const p = pos[it.id]
        const x = p.fx * Math.max(0, width - w)
        const y = p.fy * (BOARD_H - 160)
        return (
          <button
            key={it.id}
            type="button"
            aria-label={`Drag: ${it.label}`}
            onPointerDown={(e) => {
              e.preventDefault()
              zTop.current += 1
              setPos((prev) => ({ ...prev, [it.id]: { ...prev[it.id], z: zTop.current } }))
              drag.current = { id: it.id, sx: e.clientX, sy: e.clientY, ox: x, oy: y, w }
            }}
            style={{ left: x, top: y, zIndex: p.z, width: w, transform: `rotate(${it.rot}deg)` }}
            className={`absolute flex cursor-grab touch-none flex-col gap-2 text-left font-mono text-xs leading-[1.4] text-ink shadow-[0_14px_24px_-16px_rgba(28,28,27,0.45)] select-none active:cursor-grabbing ${looks[it.style]}`}
          >
            {it.style === "photo" &&
              (it.src ? (
                <Image
                  src={it.src}
                  alt=""
                  width={it.w * 2}
                  height={(it.imgH ?? 120) * 2}
                  sizes={`${it.w}px`}
                  draggable={false}
                  style={{ height: it.imgH }}
                  className="w-full rounded-[2px] object-cover"
                />
              ) : (
                <span
                  style={{ height: it.imgH }}
                  className="flex items-center justify-center rounded-[2px] bg-[#E7E7E2] text-muted"
                >
                  {it.img}
                </span>
              ))}
            <span>{it.label}</span>
          </button>
        )
      })}
    </section>
  )
}
