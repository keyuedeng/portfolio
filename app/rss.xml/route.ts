import { blogPosts } from "@/lib/blog-data"
import { site } from "@/lib/site"

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export const dynamic = "force-static"

export function GET() {
  const items = blogPosts
    .map(
      (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${site.url}/writing/${post.id}</link>
      <guid>${site.url}/writing/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt)}</description>
    </item>`,
    )
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>karen deng — writing &amp; notes</title>
    <link>${site.url}</link>
    <description>Essays, learning notes and little artifacts.</description>
${items}
  </channel>
</rss>`

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
