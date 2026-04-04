"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#home", label: "Strona glowna" },
  { href: "#about", label: "O mnie" },
  { href: "#offer", label: "Oferta" },
  { href: "#contact", label: "Umow wizyte" },
  { href: "#methods", label: "Metody pracy" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLang, setActiveLang] = useState<"pl" | "en">("pl")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="bg-[#4a5d4e] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href="mailto:mojaterapiaonline@gmail.com"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">mojaterapiaonline@gmail.com</span>
            </a>
            <a
              href="tel:+48794121388"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <Phone className="h-4 w-4" />
              <span>+48 794 121 388</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-80">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-80">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-80">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <motion.header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex flex-shrink-0 flex-col">
              <span className="font-serif text-xl font-bold tracking-wide text-gray-900">
                KAROLINA BEDNARSKA
              </span>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500">
                KONSULTACJE I TERAPIA
              </span>
            </Link>

            <div className="hidden flex-nowrap items-center gap-10 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative whitespace-nowrap text-sm font-semibold text-gray-600 transition-colors duration-200 hover:text-[#4a5d4e]"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#4a5d4e] transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}

              <div className="ml-6 flex items-center rounded-full border border-gray-200 px-1 py-0.5 whitespace-nowrap">
                <button
                  onClick={() => setActiveLang("pl")}
                  className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
                    activeLang === "pl"
                      ? "bg-[#4a5d4e] text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  PL
                </button>
                <span className="mx-1 text-gray-300">/</span>
                <button
                  onClick={() => setActiveLang("en")}
                  className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
                    activeLang === "en"
                      ? "bg-[#4a5d4e] text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-100 bg-white lg:hidden"
            >
              <div className="flex flex-col gap-3 px-6 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-2 text-gray-700 transition-colors hover:text-[#4a5d4e]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
                  <button
                    onClick={() => setActiveLang("pl")}
                    className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                      activeLang === "pl"
                        ? "bg-[#4a5d4e] text-white"
                        : "border border-gray-200 text-gray-500"
                    }`}
                  >
                    Polski
                  </button>
                  <button
                    onClick={() => setActiveLang("en")}
                    className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                      activeLang === "en"
                        ? "bg-[#4a5d4e] text-white"
                        : "border border-gray-200 text-gray-500"
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
