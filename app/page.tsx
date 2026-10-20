import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LastPlayed } from "@/components/last-played"
import { Plant } from "@/components/plant"
import { Questions } from "@/components/questions"
import { Collage } from "@/components/collage"
import { Experience } from "@/components/experience"
import { projects } from "@/lib/data"
import { blogPosts } from "@/lib/blog-data"
import { formatPostDate } from "@/lib/format"
import { site } from "@/lib/site"

// Re-render at most once a minute so "last played" stays fresh
export const revalidate = 60

const sectionLabel = "m-0 font-mono text-[13px] font-medium text-muted"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <div className="min-h-screen px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-[640px]">
        <SiteHeader />
        <div className="mt-7 empty:hidden">
          <LastPlayed />
        </div>
      </div>

      <main className="mx-auto max-w-[640px]">
        <section className="flex flex-wrap items-end gap-x-10 gap-y-6 pt-11 pb-8">
          <div className="min-w-0 flex-[1_1_340px]">
            <p className="mt-0 mb-5 font-mono text-[13px] text-muted">{site.greetings.join(", ")}</p>
            <h1 className="m-0 font-serif text-[44px] leading-[1.05] font-normal tracking-[-0.02em] sm:text-[52px]">
              karen deng
            </h1>
            <p className="mt-2 mb-[18px] font-mono text-xs text-muted">noun</p>
            <ol className="m-0 flex list-decimal flex-col gap-1.5 pl-[22px]">
              {site.definitions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ol>
            <p className="mt-3.5 mb-0 text-[15px] text-muted">
              <em className="font-serif text-[17px]">See also:</em>{" "}
              <a href={site.links.github} target="_blank" rel="noreferrer">github</a>,{" "}
              <a href={site.links.linkedin} target="_blank" rel="noreferrer">linkedin</a>,{" "}
              <a href={site.links.email}>email</a>,{" "}
              <a href={site.links.cv} target="_blank" rel="noreferrer">cv</a>
            </p>
          </div>
          <Plant />
        </section>

        <Questions items={site.questions} />

        <Experience items={site.experience} cv={site.links.cv} />

        <section id="projects" className="border-t border-line py-10">
          <h2 className={`${sectionLabel} mb-5`}>02 — Projects</h2>
          <div className="flex flex-col gap-[18px]">
            {featuredProjects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className="group flex flex-wrap justify-between gap-x-4 no-underline"
              >
                <span className="font-medium">{p.title}</span>
                <span className="font-mono text-xs text-muted">{p.date}</span>
                <span className="basis-full text-[15px] text-muted">{p.tagline}</span>
              </Link>
            ))}
          </div>
          <Link href="/projects" className="mt-[22px] inline-block font-mono text-[13px]">
            all projects →
          </Link>
        </section>

        <section id="writing" className="border-t border-line py-10">
          <h2 className={`${sectionLabel} mb-1.5`}>03 — Writing &amp; notes</h2>
          <p className="mt-0 mb-6 font-serif text-lg text-muted italic">
            Essays, learning notes and little artifacts, growing slowly.
          </p>
          <div className="flex flex-col gap-5">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/writing/${post.id}`} className="flex flex-col no-underline">
                <span className="font-serif text-[22px] leading-[1.3]">{post.title} ↗︎</span>
                <span className="font-mono text-xs text-muted">
                  {formatPostDate(post.date)} · {post.kind} · {post.readTime}
                </span>
              </Link>
            ))}
          </div>
          <Link href="/writing" className="mt-[22px] inline-block font-mono text-[13px]">
            all writing &amp; notes →
          </Link>
        </section>

        <section id="beliefs" className="border-t border-line py-10">
          <h2 className={`${sectionLabel} mb-5`}>04 — Things I believe</h2>
          <ol className="m-0 flex list-decimal flex-col gap-2 pl-6 font-serif text-xl">
            {site.beliefs.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ol>
          {site.beliefsLink && (
            <a href={site.beliefsLink} className="mt-3.5 inline-block text-[15px]">
              the whole list ↗︎
            </a>
          )}
        </section>

        <section id="playground" className="border-t border-line pt-10 pb-2">
          <h2 className={sectionLabel}>05 — Playground</h2>
        </section>
      </main>

      <Collage items={site.collage} />

      <SiteFooter className="mx-auto mt-6 max-w-[640px]" />
    </div>
  )
}
