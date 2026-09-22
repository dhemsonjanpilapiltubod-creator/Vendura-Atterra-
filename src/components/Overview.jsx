import { overview } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Overview — alternating text / image storytelling blocks.
--------------------------------------------------------------------------- */
export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-24 bg-ink-950 py-24 md:py-36">
      <div className="mx-auto max-w-7xl space-y-24 px-5 md:space-y-36 md:px-8">
        {overview.map((block, index) => {
          const flipped = index % 2 === 1
          return (
            <div
              key={block.heading}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24`}
            >
              {/* Text */}
              <Reveal className={flipped ? "md:order-2" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
                  {block.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-paper md:text-5xl">
                  {block.heading}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-paper-dim md:text-lg">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              {/* Image */}
              <Reveal
                delay={150}
                className={`overflow-hidden rounded-2xl ${flipped ? "md:order-1" : ""}`}
              >
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
