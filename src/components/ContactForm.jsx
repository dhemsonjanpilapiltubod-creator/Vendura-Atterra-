import { useState } from "react"
import { brand, dealers, model } from "../data/content"
import Reveal from "./Reveal"

/* ---------------------------------------------------------------------------
   Contact / lead form — fully client-side. No backend.

   On valid submit it calls handleMockSubmit(payload) below, which currently
   console.logs the data. Replace the body of that function with your real
   API call / form service (Formspree, HubSpot, etc.) later.
--------------------------------------------------------------------------- */

const initialValues = {
  name: "",
  email: "",
  phone: "",
  dealer: "",
  message: "",
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please enter your name."
  if (!values.email.trim()) {
    errors.email = "Please enter your email."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address doesn’t look right."
  }
  if (
    values.phone.trim() &&
    !/^[+]?[\d\s().-]{7,20}$/.test(values.phone.trim())
  ) {
    errors.phone = "That phone number doesn’t look right."
  }
  if (!values.dealer) errors.dealer = "Please choose a preferred dealer."
  return errors
}

/* MOCK SUBMIT HANDLER — swap this for a real fetch() / form service later. */
function handleMockSubmit(payload) {
  // TODO: wire up to your backend or CRM endpoint here.
  console.log("[ContactForm] submitted payload:", payload)
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    const { value } = event.target
    setValues((prev) => ({ ...prev, [field]: value }))
    // Clear the field's error as soon as the user edits it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      // Focus the first invalid field for accessibility.
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    handleMockSubmit(values)
    setSubmitted(true)
    setValues(initialValues)
  }

  const fieldClasses = (field) =>
    `w-full rounded-lg border bg-ink-900 px-4 py-3 text-sm text-paper outline-none transition-colors placeholder:text-paper-faint focus:border-accent-500 ${
      errors[field] ? "border-red-500" : "border-ink-600"
    }`

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent-600 bg-ink-800 p-10 text-center">
        <h3 className="font-display text-2xl font-bold text-paper">
          Thank you — we’ll be in touch.
        </h3>
        <p className="mt-3 text-paper-dim">
          A {brand.name} product specialist will contact you within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent-500 hover:text-accent-400"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-ink-700 bg-ink-800 p-6 md:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent-500">
          Test Drive
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.02em] text-paper md:text-4xl">
          Book your {model.name}
        </h2>
        <p className="mt-3 text-sm text-paper-dim">
          Tell us how to reach you and we’ll arrange a personal demonstration at
          a dealer near you.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="md:col-span-1">
            <label htmlFor="name" className="mb-2 block text-sm text-paper-dim">
              Full name <span className="text-accent-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Alex Morgan"
              value={values.name}
              onChange={update("name")}
              aria-invalid={Boolean(errors.name)}
              className={fieldClasses("name")}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-paper-dim">
              Email <span className="text-accent-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="alex@example.com"
              value={values.email}
              onChange={update("email")}
              aria-invalid={Boolean(errors.email)}
              className={fieldClasses("email")}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-paper-dim">
              Phone <span className="text-paper-faint">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 123-4567"
              value={values.phone}
              onChange={update("phone")}
              aria-invalid={Boolean(errors.phone)}
              className={fieldClasses("phone")}
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-400">{errors.phone}</p>
            )}
          </div>

          {/* Dealer */}
          <div>
            <label htmlFor="dealer" className="mb-2 block text-sm text-paper-dim">
              Preferred dealer <span className="text-accent-500">*</span>
            </label>
            <select
              id="dealer"
              name="dealer"
              value={values.dealer}
              onChange={update("dealer")}
              aria-invalid={Boolean(errors.dealer)}
              className={`${fieldClasses("dealer")} appearance-none`}
            >
              <option value="">Select a location…</option>
              {dealers.map((dealer) => (
                <option key={dealer.id} value={dealer.id}>
                  {dealer.label}
                </option>
              ))}
            </select>
            {errors.dealer && (
              <p className="mt-2 text-sm text-red-400">{errors.dealer}</p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm text-paper-dim">
              Message <span className="text-paper-faint">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Preferred dates, questions, trade-in details…"
              value={values.message}
              onChange={update("message")}
              className={fieldClasses("message")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-full bg-accent-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink-950 transition-colors hover:bg-accent-400 md:w-auto"
        >
          Request a Test Drive
        </button>

        <p className="mt-4 text-xs text-paper-faint">
          By submitting, you agree to be contacted about your enquiry. This demo
          form does not send data anywhere — it only logs to the console.
        </p>
      </form>
    </Reveal>
  )
}