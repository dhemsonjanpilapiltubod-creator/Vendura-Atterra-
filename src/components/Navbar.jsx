import { useEffect, useState } from "react"
import { brand, model, navLinks } from "../data/content"

/* ---------------------------------------------------------------------------
   Sticky nav — wordmark left, section links centre, CTA right.
   Collapses to a hamburger menu on mobile.
--------------------------------------------------------------------------- */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-ink-700/60 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Wordmark */}
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-[0.3em] text-paper md:text-xl">
            {brand.name.toUpperCase()}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.35em] text-accent-500 md:inline">
            {model.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium text-paper-dim transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-400 lg:inline-block"
        >
          Book a Test Drive
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-paper lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-ink-700/60 bg-ink-950/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-paper-dim transition-colors hover:bg-ink-800 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent-500 px-5 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Book a Test Drive
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
