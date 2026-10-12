"use client"

export type FilterOption = { id: string; label: string; count: number }

export function FilterPills({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: FilterOption[]
  value: string
  onChange: (id: string) => void
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2 border-b border-line pb-7">
      {options.map((o) => {
        const on = o.id === value
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.id)}
            className={`min-h-11 cursor-pointer rounded-full border px-4 font-mono text-xs transition-colors ${
              on ? "border-ink bg-ink text-paper" : "border-pill bg-transparent text-ink hover:border-ink"
            }`}
          >
            {o.label} <span className="opacity-60">{o.count}</span>
          </button>
        )
      })}
    </div>
  )
}
