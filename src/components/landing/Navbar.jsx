import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/constants/landingData"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    const user = localStorage.getItem("user")
    if (user) {
      setIsLoggedIn(true)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-md backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/">
          <div className="text-[24px] md:text-[28px] font-black leading-none tracking-tight text-slate-900">
            TravelingGO
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <Button asChild variant="default" size="sm" className="transition-all duration-300 ease-in-out hover:-translate-y-0.5">
              <Link to="/guest">Masuk / Daftar</Link>
            </Button>
          ) : (
            <Button asChild variant="default" size="sm" className="transition-all duration-300 ease-in-out hover:-translate-y-0.5">
              <Link to="/login">Masuk / Daftar</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
