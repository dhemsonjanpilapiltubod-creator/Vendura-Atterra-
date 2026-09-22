# Vendura Aterra X7 — Single-Product Landing Page

A responsive, single-page automotive landing page built with **React + Vite + Tailwind CSS v4**. Dark, moody palette with a copper accent, inspired by premium sites like landrover.com.

> **Note:** `Vendura` (brand) and `Aterra X7` (model) are **placeholder names** — swap them for the real ones in one place (see below).

## Run locally

```bash
npm install
npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built site locally
npm run lint       # oxlint
```

Requires Node 18+.

## Where to swap in real content

Everything on the page — names, copy, prices, specs, dealers, and **all images** — is driven by a single file:

```
src/data/content.js
```

| What | Where |
| --- | --- |
| Brand & model names | `brand.name`, `model.name` |
| Taglines & hero CTA | `model`, `hero` |
| Overview paragraphs & images | `overview` |
| Feature cards | `features` |
| Trim names, prices, images | `trims` (prices auto-format via `formatPrice`) |
| Spec sheet | `specGroups` |
| Dealer dropdown | `dealers` |
| Footer links | `footerColumns` |

### Images (placeholder)

Every image is a **placeholder Unsplash URL** built by the `img()` helper in `content.js`. Comments mark each occurrence as `PLACEHOLDER`. To use real assets:

- drop photos into `public/assets/` and reference `'/assets/photo.webp'`, or
- replace the Unsplash URLs directly in `content.js`.

Note: the Unsplash photos are generic automotive shots (not the X7). Do not ship them in production.

### Colors & fonts

- Palette & fonts: `src/index.css` → `@theme` block (copper accent = `accent-*` tokens, near-black = `ink-*`, off-white text = `paper-*`).
- Fonts are loaded in `index.html` (Archivo for headlines, Inter for body).

## Structure

```
src/
  main.jsx                  # React entry
  App.jsx                   # Composes sections in order
  index.css                 # Tailwind theme + base + reveal animation
  data/content.js           # ← ALL content & image URLs
  components/
    Navbar.jsx              # Sticky nav, mobile hamburger
    Hero.jsx                # Full-bleed hero + scroll indicator
    Overview.jsx            # Alternating text/image blocks
    Features.jsx            # 6-card grid with inline SVG icons
    Gallery.jsx             # Horizontally scrollable trim rail
    Specs.jsx               # Collapsible accordion spec groups
    CtaBanner.jsx           # "Ready to configure yours?"
    ContactForm.jsx         # Validated lead form (client-side only)
    Footer.jsx              # Links, social icons, legal
    Reveal.jsx              # IntersectionObserver fade/slide wrapper
```

## Wiring up the lead form

`ContactForm.jsx` validates client-side and calls `handleMockSubmit(payload)`, which currently only does `console.log`. Replace the body of that function with a real `fetch()` call or your form service (Formspree, HubSpot, etc.) when you have a backend endpoint.

## Accessibility & motion

- Reveal animations use an `IntersectionObserver` and respect `prefers-reduced-motion`.
- Form errors are linked to inputs via `aria-invalid` and focus is moved to the first invalid field.