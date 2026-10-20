import { TimelineScroller } from "@/components/timeline-scroller"
import type { ExperienceItem } from "@/lib/site"

// Sideways-scrolling timeline, oldest on the left. Items are newest-first in the DOM and laid
// out with row-reverse, so the browser starts the scroller at its right end: the page opens on
// the current role and scrolling left goes back in time.
export function Experience({ items, cv }: { items: ExperienceItem[]; cv: string }) {
  return (
    <section id="experience" className="scroll-mt-6 border-t border-line py-10">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h2 className="m-0 font-mono text-[13px] font-medium text-muted">01 — Experience</h2>
        <span aria-hidden="true" className="font-mono text-xs text-subtle">← earlier</span>
      </div>
      <TimelineScroller
        label="Experience timeline, newest first, scrolls sideways"
        className="m-0 flex snap-x snap-mandatory list-none flex-row-reverse gap-5 overflow-x-auto p-0 pt-1.5 pb-3.5 [mask-image:linear-gradient(to_left,#000_82%,transparent)]"
      >
        {items.map((item, i) => {
          const oldest = i === items.length - 1
          return (
            <li
              key={`${item.when}-${item.role}`}
              className={`relative flex flex-[0_0_230px] snap-end flex-col gap-1 border-t border-pill pt-[18px] ${
                oldest || item.upcoming ? "border-dashed" : ""
              }`}
            >
              {item.upcoming ? (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2 border-accent bg-paper shadow-[0_0_0_4px_#E6EBFB]"
                />
              ) : item.current ? (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 left-0 h-[11px] w-[11px] rounded-full bg-accent shadow-[0_0_0_4px_#E6EBFB]"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="absolute top-[-5px] left-0 h-[9px] w-[9px] rounded-full border border-subtle bg-paper"
                />
              )}
              <span className={`font-mono text-xs ${item.current || item.upcoming ? "text-accent" : "text-muted"}`}>
                {item.when}
              </span>
              <span className="leading-[1.35] font-semibold">{item.role}</span>
              <span className="text-[15px] text-body">{item.org}</span>
              <span className="text-sm leading-normal text-muted">{item.blurb}</span>
            </li>
          )
        })}
      </TimelineScroller>
      <a href={cv} target="_blank" rel="noreferrer" className="mt-[18px] inline-block font-mono text-[13px]">
        full cv ↗︎
      </a>
    </section>
  )
}
