import { useState } from "react"
import { Check } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { FLEET_DATA } from "@/constants/landingData"

function FleetImage({ src, alt }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-t-xl bg-slate-200">
        <span className="text-sm font-medium text-slate-400">TravelingGO</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={600}
      height={400}
      loading="lazy"
      className="aspect-video w-full rounded-t-xl object-cover"
      onError={() => setError(true)}
    />
  )
}

export default function PricingPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Pilih Armada untuk Perjalanan Anda
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Berbagai pilihan kendaraan terpelihara siap mengantar rombongan Anda ke mana saja.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET_DATA.map((fleet) => (
            <Card
              key={fleet.id}
              className={`overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${
                fleet.highlighted
                  ? "border-blue-200 shadow-md ring-1 ring-blue-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              <FleetImage src={fleet.image} alt={fleet.imageAlt} />
              <CardHeader>
                {fleet.highlighted && (
                  <span className="mb-2 inline-block w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    Paling Populer
                  </span>
                )}
                <CardTitle className="text-xl">{fleet.name}</CardTitle>
                <p className="text-sm text-blue-600 font-medium">{fleet.capacity}</p>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">{fleet.price}</span>
                  {fleet.period && (
                    <span className="text-sm text-gray-500">{fleet.period}</span>
                  )}
                </div>
                <CardDescription>{fleet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fleet.features.map((feature) => (
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
                  variant={fleet.highlighted ? "default" : "outline"}
                  size="lg"
                  className="w-full transition-all duration-300 ease-in-out hover:-translate-y-0.5"
                >
                  <Link to={fleet.ctaHref}>{fleet.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

