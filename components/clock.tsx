"use client"

import { useEffect, useState } from "react"

function melbourneTime() {
  return new Date().toLocaleTimeString("en-AU", {
    timeZone: "Australia/Melbourne",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
}

export function Clock() {
  // Rendered on the client only, so the server's clock never mismatches the visitor's
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    setTime(melbourneTime())
    const id = setInterval(() => setTime(melbourneTime()), 10_000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-xs text-muted tabular-nums">
      <time suppressHydrationWarning>{time ?? "--:--"}</time> · MEL
    </span>
  )
}
