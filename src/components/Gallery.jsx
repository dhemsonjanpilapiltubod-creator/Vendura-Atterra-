import { formatPrice, trims } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Gallery / variants — horizontally scrollable rail with snap points.
   Each card: trim image, name, starting price.
--------------------------------------------------------------------------- */
export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-ink-950 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
              Gallery & Trims
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-paper md:text-5xl">
              Find your specification.
            </h2>
          </div>
          <p className="hidden text-sm text-paper-faint md:block">
            Scroll →
          </p>
        </Reveal>
      </div>

      {/* Scroll rail — full-bleed, edge padding aligns first card with content */}
      <Reveal delay={120}>
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:px-8">
          {trims.map((trim, index) => (
            <article
              key={trim.name}
              className="group w-[80vw] shrink-0 snap-start sm:w-[420px]"
            >
              {/* PLACEHOLDER image — swap trim.image in content.js */}
              <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
                <img
                  src={trim.image}
                  alt={trim.name}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-bold text-paper">
                  {trim.name}
                </h3>
                <span className="shrink-0 text-sm text-accent-500">
                  From {formatPrice(trim.startingPrice)}
                </span>
              </div>
              <p className="mt-1 text-sm text-paper-faint">
                Trim {String(index + 1).padStart(2, "0")} · Est. delivery Q3 2026
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}