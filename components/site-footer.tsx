import Link from "next/link"

export function SiteFooter({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`flex flex-wrap justify-between gap-x-4 gap-y-2 border-t border-line pt-5 font-mono text-xs text-muted ${className}`}
    >
      <span>© {new Date().getFullYear()} karen deng</span>
      <span className="flex gap-3.5">
        <Link href="/colophon" className="text-muted">colophon</Link>
        <a href="/rss.xml" className="text-muted">rss</a>
      </span>
    </footer>
  )
}
