"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, Menu, Phone, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#about", label: "O mnie" },
  { href: "#offer", label: "Oferta" },
  { href: "#methods", label: "Metody pracy" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-4 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <div
          className={`pointer-events-auto rounded-[2rem] border px-4 py-3 text-primary transition-all duration-500 sm:px-6 ${
            isScrolled
              ? "border-border/80 bg-beige/85 shadow-lg backdrop-blur-xl text-foreground"
              : "border-transparent bg-transparent text-primary-foreground"
          }`}
        >
          <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
            <Link href="#home" className="shrink-0 leading-tight">
              <span className="block font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Karolina Bednarska
              </span>
              <span
                className={`block text-[9px] uppercase tracking-[0.22em] sm:text-[11px] ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                KONSULTACJE I TERAPIA
              </span>
            </Link>

            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-foreground hover:text-primary"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-primary" : "bg-primary-foreground/70"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="mailto:mojaterapiaonline@gmail.com"
                aria-label="Wyślij e-mail"
                className={`rounded-full p-2 transition-colors ${
                  isScrolled
                    ? "hover:bg-secondary text-muted-foreground hover:text-primary"
                    : "hover:bg-primary-foreground/15 text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+48794121388"
                aria-label="Zadzwoń +48 794 121 388"
                className={`rounded-full p-2 transition-colors ${
                  isScrolled
                    ? "hover:bg-secondary text-muted-foreground hover:text-primary"
                    : "hover:bg-primary-foreground/15 text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                <Phone className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className={`ml-2 inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  isScrolled
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-primary-foreground text-primary hover:opacity-90"
                }`}
              >
                Umów sesję
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className={`inline-flex rounded-full p-2 transition-colors lg:hidden ${
                isScrolled
                  ? "hover:bg-secondary text-foreground"
                  : "hover:bg-primary-foreground/15 text-primary-foreground"
              }`}
              aria-label={isMobileMenuOpen ? "Zamknij menu nawigacyjne" : "Otworz menu nawigacyjne"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-panel"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-nav-panel"
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className={`overflow-hidden lg:hidden ${isScrolled ? "pt-3" : "pt-2"}`}
              >
                <div
                  className={`rounded-2xl border p-4 ${
                    isScrolled
                      ? "border-border bg-card text-card-foreground"
                      : "border-primary-foreground/20 bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                          isScrolled
                            ? "hover:bg-secondary hover:text-primary"
                            : "hover:bg-primary-foreground/15"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-current/15 pt-4">
                    <Link
                      href="mailto:mojaterapiaonline@gmail.com"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:bg-current/10"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </Link>
                    <Link
                      href="tel:+48794121388"
                      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:bg-current/10"
                    >
                      <Phone className="h-4 w-4" />
                      +48 794 121 388
                    </Link>
                  </div>

                  <div className="mt-3 flex items-center gap-1">
                    <Link
                      href="#"
                      aria-label="Facebook"
                      className="rounded-full p-2 transition-colors hover:bg-current/10"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="LinkedIn"
                      className="rounded-full p-2 transition-colors hover:bg-current/10"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#"
                      aria-label="Instagram"
                      className="rounded-full p-2 transition-colors hover:bg-current/10"
                    >
                      <Instagram className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
