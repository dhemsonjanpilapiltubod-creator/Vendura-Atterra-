import { useState } from "react"
import { specGroups } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Specs — collapsible accordion grouped by category.
   First group starts open; rows are label / value pairs.
--------------------------------------------------------------------------- */
export default function Specs() {
  const [openGroup, setOpenGroup] = useState(specGroups[0]?.category ?? null)

  const toggle = (category) =>
    setOpenGroup((current) => (current === category ? null : category))

  return (
    <section id="specs" className="scroll-mt-24 bg-ink-900 py-24 md:py-36">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
            Technical Specification
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-paper md:text-5xl">
            The numbers behind the presence.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 divide-y divide-ink-700 border-y border-ink-700">
            {specGroups.map((group) => {
              const isOpen = openGroup === group.category
              return (
                <div key={group.category}>
                  <button
                    type="button"
                    onClick={() => toggle(group.category)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-accent-400"
                  >
                    <span className="font-display text-lg font-bold text-paper md:text-xl">
                      {group.category}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-600 text-accent-500 transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-accent-600" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  {/* Collapsible body */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <dl className="pb-8">
                        {group.rows.map((row) => (
                          <div
                            key={row.label}
                            className="flex flex-col gap-1 border-b border-ink-800 py-3 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                          >
                            <dt className="text-sm text-paper-faint">{row.label}</dt>
                            <dd className="text-sm font-medium text-paper sm:text-right">
                              {row.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}