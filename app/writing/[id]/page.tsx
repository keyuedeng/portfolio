import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PageIntro } from "@/components/page-intro"
import { blogPosts } from "@/lib/blog-data"
import { formatPostDate } from "@/lib/format"

type Props = { params: Promise<{ id: string }> }

const findPost = (id: string) => blogPosts.find((p) => p.id === Number(id))

export function generateStaticParams() {
  return blogPosts.map((p) => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = findPost((await params).id)
  return post ? { title: post.title, description: post.excerpt } : {}
}

export default async function PostPage({ params }: Props) {
  const post = findPost((await params).id)
  if (!post) notFound()

  // The title is already rendered above, so drop a leading "# Title" from the markdown
  const body = post.content.trim().replace(/^#\s+.*\n/, "")
  const index = blogPosts.indexOf(post)
  const older = blogPosts[index + 1]

  return (
    <div className="min-h-screen px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-column">
        <SiteHeader current="writing" />
        <main>
          <PageIntro crumbs={[{ href: "/writing", label: "03 — writing & notes" }, { label: post.kind }]} title={post.title}>
            <p className="m-0 font-mono text-xs text-muted">
              {formatPostDate(post.date)} · {post.kind} · {post.readTime}
            </p>
          </PageIntro>

          <article className="border-t border-line pt-8 font-serif text-[19px] leading-[1.7] text-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-12 mb-3 font-mono text-[13px] font-medium text-muted">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 mb-2 font-sans text-[17px] font-semibold text-ink">{children}</h3>
                ),
                p: ({ children }) => <p className="mt-0 mb-5">{children}</p>,
                strong: ({ children }) => <strong className="font-medium text-ink">{children}</strong>,
                ul: ({ children }) => <ul className="mt-0 mb-5 flex list-disc flex-col gap-1.5 pl-6">{children}</ul>,
                ol: ({ children }) => <ol className="mt-0 mb-5 flex list-decimal flex-col gap-1.5 pl-6">{children}</ol>,
                a: ({ href, children }) => (
                  <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="rounded bg-well px-1 py-0.5 font-mono text-[0.8em]">{children}</code>
                ),
                img: ({ src, alt }) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} className="my-2 block w-full rounded border border-line" />
                ),
                table: ({ children }) => (
                  <div className="mt-0 mb-5 overflow-x-auto">
                    <table className="w-full border-collapse font-sans text-[15px]">{children}</table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="border-b border-line py-2 pr-4 text-left font-mono text-[12px] font-medium text-muted">{children}</th>
                ),
                td: ({ children }) => <td className="border-b border-line py-2 pr-4 align-top">{children}</td>,
                blockquote: ({ children }) => (
                  <blockquote className="my-6 ml-0 border-l-2 border-accent pl-5 italic">{children}</blockquote>
                ),
              }}
            >
              {body}
            </ReactMarkdown>
          </article>

          <nav aria-label="More writing" className="mt-8 flex flex-wrap justify-between gap-4 border-t border-line pt-8 font-mono text-[13px]">
            <Link href="/writing">← all writing</Link>
            {older && <Link href={`/writing/${older.id}`}>older: {older.title.toLowerCase()} →</Link>}
          </nav>
        </main>
        <SiteFooter className="mt-14" />
      </div>
    </div>
  )
}
