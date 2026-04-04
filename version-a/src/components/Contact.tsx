"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon / WhatsApp",
    value: "+48 794 121 388",
    href: "tel:+48794121388",
  },
  {
    icon: Mail,
    title: "Email",
    value: "mojaterapiaonline@gmail.com",
    href: "mailto:mojaterapiaonline@gmail.com",
  },
  {
    icon: MapPin,
    title: "Gabinet stacjonarny",
    value: "Warszawa",
    href: "#",
  },
  {
    icon: Clock,
    title: "Czas sesji",
    value: "55 minut",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-sage-light/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Kontakt
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Umow wizyte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Zadzwon, napisz lub umow sie przez formularz. Chetnie odpowiem na Twoje pytania.
          </p>
        </motion.div>

        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage-light">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 font-medium text-foreground">{method.title}</h3>
                  {method.href ? (
                    <Link href={method.href} className="text-sm text-primary underline-offset-2 hover:underline">
                      {method.value}
                    </Link>
                  ) : (
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center"
          >
            <div className="w-full rounded-3xl bg-card p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                Gotowy/a na pierwszy krok?
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Pierwsza konsultacja to okazja, by poznac sie nawzajem i okreslic Twoje potrzeby.
                Nie musisz miec konkretnego problemu - kazdy powod jest wazny.
              </p>
              <a
                href="tel:+48794121388"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Zadzwon teraz
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                lub napisz:{" "}
                <a href="mailto:mojaterapiaonline@gmail.com" className="text-primary hover:underline">
                  mojaterapiaonline@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
