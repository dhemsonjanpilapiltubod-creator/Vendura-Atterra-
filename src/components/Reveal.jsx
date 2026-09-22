import { useEffect, useRef } from "react"

/* ---------------------------------------------------------------------------
   <Reveal /> — wraps any block and fades/slides it in the first time it
   enters the viewport, using an IntersectionObserver (no extra deps).
   Usage: <Reveal delay={120}> ... </Reveal>
--------------------------------------------------------------------------- */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect users who prefer reduced motion — the CSS fallback
    // already renders content visible, so this is purely additive.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible")
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}