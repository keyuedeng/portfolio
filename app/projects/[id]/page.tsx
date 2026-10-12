import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageIntro } from "@/components/page-intro"
import { Inline, RichText } from "@/components/rich-text"
import { projects } from "@/lib/data"

type Props = { params: Promise<{ id: string }> }

const findProject = (id: string) => projects.find((p) => p.id === Number(id))

export function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).id)
  return project ? { title: project.title, description: project.tagline } : {}
}

const label = "m-0 mb-4 font-mono text-[13px] font-medium text-muted"

function List({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[16px] text-body">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span aria-hidden="true" className="font-mono text-accent">↳</span>
          <span>
            <Inline text={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).id)
  if (!project) notFound()

  const images = project.images?.length ? project.images : [project.image]
  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="min-h-screen px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-[880px]">
        <SiteHeader current="projects" />
      </div>

      <main>
        <div className="mx-auto max-w-column">
          <PageIntro crumbs={[{ href: "/projects", label: "02 — projects" }, { label: project.title.toLowerCase() }]} title={project.title}>
            <p className="m-0 font-serif text-[19px] text-muted italic">{project.tagline}</p>
            {project.award && (
              <p className="mt-4 mb-0 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-ink">
                <span aria-hidden="true">🏆</span>
                {project.award}
              </p>
            )}
          </PageIntro>

          <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-line py-5 font-mono text-xs sm:grid-cols-4">
            {[
              ["status", project.status],
              ["when", project.date],
              ["took", project.duration],
              ["team", project.teamSize],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-faint">{k}</dt>
                <dd className="m-0 text-ink">{v.toLowerCase()}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 mb-0 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px]">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">live ↗</a>
            )}
            {project.devpostLink && (
              <a href={project.devpostLink} target="_blank" rel="noreferrer">devpost ↗</a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">code ↗</a>
            )}
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-[880px] flex-col gap-6">
          {images.map((src, i) => (
            <figure key={src} className="m-0 overflow-hidden rounded-[10px] border border-line bg-well">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="block h-auto w-full" />
            </figure>
          ))}
        </div>

        <div className="mx-auto max-w-column">
          <section className="py-10">
            <h2 className={label}>about</h2>
            <RichText text={project.longDescription} className="text-body" />
          </section>

          <section className="border-t border-line py-10">
            <h2 className={label}>stack</h2>
            {project.stackGroups ? (
              <dl className="m-0 flex flex-col gap-3 text-[15px] text-body">
                {project.stackGroups.map((g) => (
                  <div key={g.label} className="flex flex-wrap gap-x-4">
                    <dt className="w-24 flex-none font-mono text-xs leading-[1.9] text-faint">{g.label}</dt>
                    <dd className="m-0 min-w-0 flex-[1_1_300px]">{g.items}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="m-0 font-mono text-[13px] text-body">
                {project.tools.map((t) => t.toLowerCase()).join(" · ")}
              </p>
            )}
          </section>

          <section className="border-t border-line py-10">
            <h2 className={label}>what I learned</h2>
            <List items={project.keyTakeaways} />
          </section>

          <section className="border-t border-line py-10">
            <h2 className={label}>what was hard</h2>
            <List items={project.challenges} />
          </section>

          {project.futureFeatures && project.futureFeatures.length > 0 && (
            <section className="border-t border-line py-10">
              <h2 className={label}>what&apos;s next</h2>
              <List items={project.futureFeatures} />
            </section>
          )}

          <nav aria-label="More projects" className="flex flex-wrap justify-between gap-4 border-t border-line pt-8 font-mono text-[13px]">
            <Link href="/projects">← all projects</Link>
            {next.id !== project.id && <Link href={`/projects/${next.id}`}>next: {next.title.toLowerCase()} →</Link>}
          </nav>
        </div>
      </main>

      <SiteFooter className="mx-auto mt-[72px] max-w-[880px]" />
    </div>
  )
}
