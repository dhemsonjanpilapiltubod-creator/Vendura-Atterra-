import CtaBanner from "./components/CtaBanner"
import ContactForm from "./components/ContactForm"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Overview from "./components/Overview"
import Specs from "./components/Specs"

/* ---------------------------------------------------------------------------
   Single-product landing page — sections in the order specified.
--------------------------------------------------------------------------- */
export default function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-paper">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Features />
        <Gallery />
        <Specs />
        <CtaBanner />
        <section id="contact" className="scroll-mt-24 bg-ink-950 py-24 md:py-36">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}