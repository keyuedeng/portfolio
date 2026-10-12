"use client"

import { useEffect, useState } from "react"

const W = 26
const H = 15
const GROUND = ".,_.__,._.__._,.__.,_.__.,"

// Three ASCII stems swaying in the wind; the big flower blinks now and then.
function drawPlant(t: number) {
  const g = Array.from({ length: H }, () => Array(W).fill(" "))
  const put = (r: number, c: number, ch: string) => {
    if (r >= 0 && r < H && c >= 0 && c < W) g[r][c] = ch
  }

  const stem = (x0: number, top: number, phase: number, head: string[], leaves: Record<number, "l" | "r">) => {
    let tx = x0
    for (let r = H - 2; r >= top; r--) {
      const k = (H - 2 - r) / (H - 2 - top)
      const x = Math.round(x0 + Math.sin(t * 1.8 + phase) * 2.2 * k * k)
      put(r, x, "|")
      if (leaves[r] === "l") put(r, x - 1, "\\")
      if (leaves[r] === "r") put(r, x + 1, "/")
      tx = x
    }
    head.forEach((line, i) => {
      const off = Math.floor(line.length / 2)
      for (let j = 0; j < line.length; j++) {
        if (line[j] !== " ") put(top - head.length + i, tx - off + j, line[j])
      }
    })
  }

  const eye = Math.floor(t * 1.4) % 4 === 0 ? "o" : "@"
  stem(8, 4, 0, ["\\ | /", `-(${eye})-`, "/ | \\"], { 10: "l", 7: "r", 12: "r" })
  stem(18, 8, 1.3, [" _ ", "(*)"], { 11: "l" })
  stem(23, 11, 2.4, ["."], {})
  g[H - 1] = GROUND.split("")

  return g.map((row) => row.join("")).join("\n")
}

export function Plant() {
  const [t, setT] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => {
      if (!document.hidden) setT((v) => v + 0.05)
    }, 50)
    return () => clearInterval(id)
  }, [])

  return (
    <figure className="m-0 flex-none">
      <pre
        aria-hidden="true"
        className="m-0 font-mono text-xs leading-[1.15] whitespace-pre text-leaf select-none"
      >
        {drawPlant(t)}
      </pre>
    </figure>
  )
}
