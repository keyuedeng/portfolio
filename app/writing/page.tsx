import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageIntro } from "@/components/page-intro"
import { blogPosts } from "@/lib/blog-data"
import { WritingList } from "./writing-list"

export const metadata: Metadata = { title: "Writing & notes" }

export default function WritingPage() {
  return (
    <div className="min-h-screen px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-[880px]">
        <SiteHeader current="writing" />
        <main>
          <PageIntro crumbs={[{ label: "03 — writing & notes" }]} title="Writing & notes">
            <p className="m-0 font-serif text-[19px] text-muted italic">
              Essays, learning notes and little artifacts, growing slowly. Some are finished, most aren&apos;t.
            </p>
          </PageIntro>
          <WritingList posts={blogPosts} />
        </main>
        <SiteFooter className="mt-14" />
      </div>
    </div>
  )
}
