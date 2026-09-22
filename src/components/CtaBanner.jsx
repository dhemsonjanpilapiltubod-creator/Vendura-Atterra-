import { model } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   CTA banner — full-width conversion block linking to the lead form.
--------------------------------------------------------------------------- */
export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 md:py-36">
      {/* Soft copper glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
            {model.name}
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] text-paper md:text-6xl">
            Ready to configure yours?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-paper-dim">
            Build your specification, reserve your preferred dealer, and take the
            first drive.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-full bg-accent-500 px-10 py-4 text-sm font-semibold uppercase tracking-wider text-ink-950 transition-colors hover:bg-accent-400"
          >
            Start Your Enquiry
          </a>
        </Reveal>
      </div>
    </section>
  )
}