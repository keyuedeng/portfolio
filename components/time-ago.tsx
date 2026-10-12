"use client"

import { useEffect, useState } from "react"

function ago(iso: string) {
  const mins = Math.round((Date.now() - new Date(iso).getTime()) / 60_000)
  if (mins < 1) return "just now"
  if (mins < 60) return `${mins} min ago`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `${hours} hr ago`
  const days = Math.round(hours / 24)
  return `${days} day${days === 1 ? "" : "s"} ago`
}

export function TimeAgo({ iso }: { iso: string }) {
  const [text, setText] = useState<string | null>(null)

  useEffect(() => {
    setText(ago(iso))
    const id = setInterval(() => setText(ago(iso)), 60_000)
    return () => clearInterval(id)
  }, [iso])

  return text ? <span>· {text}</span> : null
}
