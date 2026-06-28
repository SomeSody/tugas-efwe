import { Shield, Users, Headphones } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FEATURES_DATA } from "@/constants/landingData"

const iconMap = {
  Shield,
  Users,
  Headphones,
}

export default function Features() {
  return (
    <section id="armada" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Keunggulan Layanan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Semua yang Anda butuhkan untuk perjalanan nyaman, aman, dan berkesan bersama TravelingGO.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES_DATA.map((feature) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <Card key={feature.id} className="border-gray-200 bg-white transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-blue-100">
                    <IconComponent className="size-5 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
