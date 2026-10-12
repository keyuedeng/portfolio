import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageIntro } from "@/components/page-intro"

export const metadata: Metadata = { title: "Colophon" }

export default function ColophonPage() {
  return (
    <div className="min-h-screen px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-column">
        <SiteHeader />
        <main>
          <PageIntro crumbs={[{ label: "colophon" }]} title="Colophon" />
          <div className="flex flex-col gap-4 border-t border-line pt-8 font-serif text-[19px] text-body">
            <p className="m-0">
              Built with Next.js and Tailwind CSS. Set in{" "}
              <a href="https://fonts.google.com/specimen/Hanken+Grotesk">Hanken Grotesk</a>,{" "}
              <a href="https://fonts.google.com/specimen/Newsreader">Newsreader</a> and{" "}
              <a href="https://fonts.google.com/specimen/IBM+Plex+Mono">IBM Plex Mono</a>.
            </p>
            <p className="m-0">
              The plant on the homepage is redrawn from characters twenty times a second, and the trail behind your
              cursor is made of <code className="font-mono text-[0.8em]">@ * + : .</code> fading out. Both sit still if
              your system asks for reduced motion.
            </p>
          </div>
        </main>
        <SiteFooter className="mt-14" />
      </div>
    </div>
  )
}
