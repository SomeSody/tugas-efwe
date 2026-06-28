import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { PRICING_DATA } from "@/constants/landingData"

export default function PricingPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Pilih Paket yang Tepat untuk Bisnis Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Mulai gratis, upgrade kapan saja sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_DATA.map((plan) => (
            <Card
              key={plan.id}
              className={`transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
                plan.highlighted
                  ? "border-blue-200 bg-gradient-to-b from-blue-50/50 to-white shadow-md ring-1 ring-blue-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              <CardHeader>
                {plan.highlighted && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    Paling Populer
                  </span>
                )}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="size-4 shrink-0 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className="w-full transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <Link to={plan.ctaHref}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
