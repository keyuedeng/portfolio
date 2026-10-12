// "2026-08-23" → "23.08.26" (or "23.08" without the year)
export function formatPostDate(date: string, withYear = true) {
  const [y, m, d] = date.split("-")
  return withYear ? `${d}.${m}.${y.slice(2)}` : `${d}.${m}`
}

// ["Next.js", "React", "Tailwind CSS"] → "next.js · react · tailwind css"
export function formatStack(tools: string[], count = 3) {
  return tools.slice(0, count).map((t) => t.toLowerCase()).join(" · ")
}
