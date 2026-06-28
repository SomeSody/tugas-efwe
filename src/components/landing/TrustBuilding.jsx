import { TRUST_DATA } from "@/constants/landingData"

export default function TrustBuilding() {
  return (
    <section className="border-y border-gray-100 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
          {TRUST_DATA.title}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {TRUST_DATA.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
