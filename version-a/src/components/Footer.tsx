"use client"

import { motion } from "framer-motion"
import { CreditCard, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { href: "#home", label: "Strona glowna" },
  { href: "#about", label: "O mnie" },
  { href: "#offer", label: "Oferta" },
  { href: "#methods", label: "Metody pracy" },
  { href: "#contact", label: "Kontakt" },
  { href: "#", label: "Polityka prywatnosci" },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <motion.div
          className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h3 className="mb-6 font-serif text-xl font-semibold">KAROLINA BEDNARSKA</h3>
            <div className="space-y-4">
              <a
                href="mailto:mojaterapiaonline@gmail.com"
                className="group flex items-start gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">mojaterapiaonline@gmail.com</span>
              </a>
              <a
                href="tel:+48794121388"
                className="flex items-start gap-3 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">Tel./WhatsApp +48 794 121 388</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold">Informacje</h3>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-primary-foreground">Gabinet stacjonarny</p>
                <p>Warszawa</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold">Dane do przelewu</h3>
            <div className="flex items-start gap-3 text-primary-foreground/80">
              <CreditCard className="mt-0.5 h-5 w-5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium text-primary-foreground">ING Bank</p>
                <p className="mt-1 break-all font-mono text-xs">63 1050 1432 1000 0090 8240 1978</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold">Nawigacja</h3>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
          <p className="text-center text-sm text-primary-foreground/60">
            Copyright © 2026 karolinabednarska.pl
          </p>
        </div>
      </div>
    </footer>
  )
}
