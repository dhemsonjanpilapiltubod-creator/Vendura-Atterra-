import { hero, model } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Hero — full-bleed placeholder image, model name, tagline, primary CTA and
   a subtle scroll-down indicator.
--------------------------------------------------------------------------- */
export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed background image (PLACEHOLDER — swap hero.image in content.js) */}
      <img
        src={hero.image}
        alt={`${model.name} at speed`}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Cinematic gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-8 md:pb-32">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
            The All-New
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(3rem,12vw,9rem)] font-black leading-[0.9] tracking-[-0.03em] text-paper">
            {model.name.toUpperCase()}
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-xl text-lg text-paper-dim md:text-2xl">
            {model.tagline}
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaHref}
              className="rounded-full bg-accent-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-950 transition-colors hover:bg-accent-400"
            >
              {hero.ctaLabel}
            </a>
            <a
              href="#specs"
              className="rounded-full border border-ink-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-paper transition-colors hover:border-accent-500 hover:text-accent-400"
            >
              Explore Specs
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#overview"
        aria-label="Scroll to overview"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-paper-faint transition-colors hover:text-accent-400"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>
    </section>
  )
}
