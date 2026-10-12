"use client"

import { useState } from "react"

export function Questions({ items }: { items: { label: string; answer: string }[] }) {
  const [open, setOpen] = useState(-1)

  return (
    <section aria-label="Quick questions" className="flex flex-col pt-2 pb-12">
      {items.map((q, i) => {
        const on = open === i
        return (
          <div key={q.label} className="border-t border-line-soft">
            <button
              type="button"
              aria-expanded={on}
              aria-controls={`q-${i}`}
              onClick={() => setOpen(on ? -1 : i)}
              className={`flex min-h-12 w-full cursor-pointer items-center gap-2.5 border-0 bg-transparent py-2 text-left text-base hover:text-accent ${
                on ? "text-accent" : "text-ink"
              }`}
            >
              <span aria-hidden="true" className="font-mono text-accent">↳</span>
              {q.label}
            </button>
            {on && (
              <p id={`q-${i}`} className="mt-0 mb-4 ml-[26px] font-serif text-[19px] text-body">
                {q.answer}
              </p>
            )}
          </div>
        )
      })}
    </section>
  )
}
