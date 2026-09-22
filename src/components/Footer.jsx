import { brand, footerColumns, model, navLinks } from "../data/content"

/* ---------------------------------------------------------------------------
   Footer — brand column, link columns, social icons, legal line.
--------------------------------------------------------------------------- */
function SocialIcon({ label, children }) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-paper-dim transition-colors hover:border-accent-500 hover:text-accent-400"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-700 bg-ink-950 pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-extrabold tracking-[0.3em] text-paper">
              {brand.name.toUpperCase()}
            </p>
            <p className="mt-3 max-w-xs text-sm text-paper-faint">
              {model.name} — {model.tagline}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <SocialIcon label="Instagram">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 8.1a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Zm6.3-8.3a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" />
              </SocialIcon>
              <SocialIcon label="YouTube">
                <path d="M23 7.2s-.2-1.6-.9-2.3c-.8-.9-1.8-.9-2.2-.9C16.8 3.7 12 3.7 12 3.7s-4.8 0-7.9.3c-.4 0-1.4 0-2.2.9-.7.7-.9 2.3-.9 2.3S.8 9.1.8 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.8 2.4.9 1.7.2 7.7.3 7.7.3s4.8 0 7.9-.3c.4 0 1.4 0 2.2-.9.7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c-.2-1.9-.3-3.8-.3-3.8ZM9.7 15.1V8.4l6.4 3.4-6.4 3.3Z" />
              </SocialIcon>
              <SocialIcon label="X">
                <path d="M18.9 2.3h3.4l-7.4 8.5 8.7 11.5h-6.8l-5.3-7-6.1 7H1.9l7.9-9L1.5 2.3H8.5l4.8 6.4 5.6-6.4Zm-1.2 17.9h1.9L6.5 4.2H4.5l13.2 16Z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
              </SocialIcon>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-paper">
                {column.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-paper-faint transition-colors hover:text-accent-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col gap-4 border-t border-ink-700 py-8 text-xs text-paper-faint md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {brand.name} Motors. All rights reserved. Placeholder
            brand & product names — replace in src/data/content.js.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" className="transition-colors hover:text-paper">
                Privacy
              </a>
            </li>
            <li>
              <a href="#top" className="transition-colors hover:text-paper">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}