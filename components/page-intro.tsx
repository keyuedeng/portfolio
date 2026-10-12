import Link from "next/link"

// Breadcrumb + serif title used at the top of the index and detail pages
export function PageIntro({
  crumbs,
  title,
  children,
}: {
  crumbs: { href?: string; label: string }[]
  title: string
  children?: React.ReactNode
}) {
  return (
    <section className="pt-16 pb-7">
      <p className="mb-3 font-mono text-[13px] text-muted">
        <Link href="/" className="text-muted">home</Link>
        {crumbs.map((c) => (
          <span key={c.label}>
            {" / "}
            {c.href ? <Link href={c.href} className="text-muted">{c.label}</Link> : c.label}
          </span>
        ))}
      </p>
      <h1 className="mb-2.5 font-serif text-[40px] leading-[1.1] font-normal tracking-[-0.02em] sm:text-[46px]">
        {title}
      </h1>
      {children}
    </section>
  )
}
