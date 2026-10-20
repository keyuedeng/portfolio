"use client"

import { useState } from "react"
import Link from "next/link"
import { FilterPills } from "@/components/filter-pills"
import { postKinds, type BlogPost } from "@/lib/blog-data"
import { formatPostDate } from "@/lib/format"

export function WritingList({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState("all")

  const options = [{ id: "all", label: "all" }, ...postKinds].map((k) => ({
    ...k,
    count: posts.filter((p) => k.id === "all" || p.kind === k.id).length,
  }))

  // Posts arrive newest first; group consecutive posts by year
  const groups: { year: string; posts: BlogPost[] }[] = []
  for (const post of posts.filter((p) => filter === "all" || p.kind === filter)) {
    const year = post.date.slice(0, 4)
    const last = groups[groups.length - 1]
    if (last?.year === year) last.posts.push(post)
    else groups.push({ year, posts: [post] })
  }

  return (
    <>
      <FilterPills label="Filter posts" options={options} value={filter} onChange={setFilter} />

      {groups.length === 0 && (
        <p className="py-8 font-serif text-lg text-muted italic">Nothing here yet.</p>
      )}

      {groups.map((g) => (
        <section key={g.year} className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line-soft py-8">
          <h2 className="mt-1 mb-0 flex-[0_0_72px] font-mono text-[13px] font-medium text-muted">{g.year}</h2>
          <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-5">
            {g.posts.map((post) => (
              <Link key={post.id} href={`/writing/${post.id}`} className="flex flex-col no-underline">
                <span className="font-serif text-[22px] leading-[1.3]">{post.title} ↗︎</span>
                <span className="font-mono text-xs text-muted">
                  {formatPostDate(post.date, false)} · {post.kind} · {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
