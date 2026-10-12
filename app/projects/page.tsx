import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageIntro } from "@/components/page-intro"
import { projects } from "@/lib/data"
import { ProjectsGrid } from "./projects-grid"

export const metadata: Metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-[880px]">
        <SiteHeader current="projects" />
        <main>
          <PageIntro crumbs={[{ label: "02 — projects" }]} title="Projects">
            <p className="m-0 max-w-[520px] text-muted">
              Things I&apos;ve built, am building, or have quietly retired. Most started as a problem I had myself.
            </p>
          </PageIntro>
          <ProjectsGrid projects={projects} />
        </main>
        <SiteFooter className="mt-[72px]" />
      </div>
    </div>
  )
}
