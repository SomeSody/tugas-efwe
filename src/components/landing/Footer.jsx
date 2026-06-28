import { FOOTER_DATA } from "@/constants/landingData"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="text-[24px] font-black leading-none tracking-tight text-slate-900">
            TravelingGO
          </div>
          <span className="text-sm text-gray-400">|</span>
          <p className="text-sm text-gray-500">{FOOTER_DATA.copyright}</p>
        </div>
        <div className="flex gap-6">
          {FOOTER_DATA.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
