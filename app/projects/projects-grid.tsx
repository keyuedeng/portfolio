"use client"

import { useState } from "react"
import Link from "next/link"
import { FilterPills } from "@/components/filter-pills"
import { projectKinds, type Project } from "@/lib/data"
import { formatStack } from "@/lib/format"

const statusColor: Record<Project["status"], string> = {
  shipped: "text-shipped",
  "in progress": "text-accent",
  archived: "text-muted",
}

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("all")

  const options = [{ id: "all", label: "all" }, ...projectKinds]
    .map((k) => ({
      ...k,
      count: projects.filter((p) => k.id === "all" || p.kind === k.id).length,
    }))
    .filter((k) => k.count > 0)

  const shown = projects.filter((p) => filter === "all" || p.kind === filter)

  return (
    <>
      <FilterPills label="Filter projects" options={options} value={filter} onChange={setFilter} />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-x-7 gap-y-10 pt-9">
        {shown.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`} className="group flex flex-col gap-2.5 text-ink no-underline">
            <span className="relative block aspect-[4/3] overflow-hidden rounded-[10px] border border-line bg-well">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span
                className={`absolute top-2.5 left-2.5 rounded-full border border-line bg-white px-[9px] py-0.5 font-mono text-[11px] ${statusColor[p.status]}`}
              >
                {p.status}
              </span>
            </span>
            <span className="flex items-baseline justify-between gap-3">
              <span className="text-lg font-semibold group-hover:text-accent">{p.title}</span>
              <span className="font-mono text-xs text-muted">{p.date}</span>
            </span>
            <span className="text-[15px] leading-normal text-muted">{p.tagline}</span>
            {p.award && (
              <span className="font-mono text-xs text-ink">
                <span aria-hidden="true">🏆 </span>
                {p.award}
              </span>
            )}
            <span className="font-mono text-xs text-muted">{formatStack(p.tools)}</span>
          </Link>
        ))}
      </div>
    </>
  )
}
