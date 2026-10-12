import Link from "next/link"
import { Clock } from "@/components/clock"

const navItems = [
  { href: "/#experience", label: "experience", n: "01", id: "experience" },
  { href: "/projects", label: "projects", n: "02", id: "projects" },
  { href: "/writing", label: "writing", n: "03", id: "writing" },
  { href: "/#beliefs", label: "beliefs", n: "04", id: "beliefs" },
  { href: "/#playground", label: "playground", n: "05", id: "playground" },
] as const

export function SiteHeader({ current }: { current?: "projects" | "writing" }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 pt-7">
      <Link href="/" className="font-semibold tracking-[-0.01em] no-underline">
        karen deng
      </Link>
      <nav aria-label="Primary" className="flex flex-wrap gap-x-[18px] gap-y-1 text-[15px]">
        {navItems.map((item) => {
          const active = item.id === current
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`no-underline ${active ? "text-ink" : "text-muted"}`}
            >
              {item.label}
              <sup className="ml-0.5 font-mono text-[9px]">{item.n}</sup>
            </Link>
          )
        })}
      </nav>
      <Clock />
    </header>
  )
}
