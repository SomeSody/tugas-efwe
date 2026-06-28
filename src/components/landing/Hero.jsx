import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { HERO_DATA } from "@/constants/landingData"

export default function Hero() {
  const handleSecondaryClick = (e) => {
    e.preventDefault()
    const target = document.querySelector(HERO_DATA.secondaryCta.href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Sistem CRM Paling Simpel untuk{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Naikkan Penjualan
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
          {HERO_DATA.subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant="default"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105"
          >
            <Link to={HERO_DATA.primaryCta.href}>{HERO_DATA.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8 py-6 text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5"
          >
            <a href={HERO_DATA.secondaryCta.href} onClick={handleSecondaryClick}>
              {HERO_DATA.secondaryCta.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
