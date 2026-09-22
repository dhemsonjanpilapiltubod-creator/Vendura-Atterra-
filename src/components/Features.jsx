import { features } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Feature icons — lightweight inline SVGs (no icon dependency).
--------------------------------------------------------------------------- */
function FeatureIcon({ name }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }

  switch (name) {
    case "powertrain":
      return (
        <svg {...common}>
          <path d="M7 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3m-9 0h10m-10 0v8h3l2 3 2-3h3V8M4 12h3m10 0h3" />
        </svg>
      )
    case "terrain":
      return (
        <svg {...common}>
          <path d="M3 19 9 7l4 6 3-4 5 10H3Z" />
          <path d="M14 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
        </svg>
      )
    case "tech":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 9h4M7 12h7" />
        </svg>
      )
    case "design":
      return (
        <svg {...common}>
          <path d="M12 3 4 9v6l8 6 8-6V9l-8-6Z" />
          <path d="M12 12v9M4 9l8 3 8-3" />
        </svg>
      )
    case "safety":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    default:
      return null
  }
}

/* ---------------------------------------------------------------------------
   Key features grid — 6 cards, responsive 1 → 2 → 3 columns.
--------------------------------------------------------------------------- */
export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-ink-900 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
            Key Features
          </p>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.02em] text-paper md:text-5xl">
            Engineered in every detail.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 100}>
              <article className="group h-full rounded-2xl border border-ink-700 bg-ink-800 p-7 transition-colors duration-300 hover:border-accent-600 md:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-600 bg-ink-900 text-accent-500 transition-colors duration-300 group-hover:border-accent-600 group-hover:text-accent-400">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-paper">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim md:text-base">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
