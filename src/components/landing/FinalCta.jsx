import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { FINAL_CTA_DATA } from "@/constants/landingData"

export default function FinalCta() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {FINAL_CTA_DATA.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-blue-100/80">
          {FINAL_CTA_DATA.subheadline}
        </p>
        <div className="mt-10">
          <Button
            asChild
            variant="default"
            size="lg"
            className="px-8 py-6 text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105"
          >
            <Link to={FINAL_CTA_DATA.ctaHref}>{FINAL_CTA_DATA.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
