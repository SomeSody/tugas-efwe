import Navbar from "./Navbar"
import Hero from "./Hero"
import TrustBuilding from "./TrustBuilding"
import Features from "./Features"
import PricingPreview from "./PricingPreview"
import Faq from "./Faq"
import FinalCta from "./FinalCta"
import Footer from "./Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen scroll-smooth bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBuilding />
        <Features />
        <PricingPreview />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
