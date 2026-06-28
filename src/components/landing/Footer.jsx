import { FOOTER_DATA } from "@/constants/landingData"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-500">{FOOTER_DATA.copyright}</p>
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
