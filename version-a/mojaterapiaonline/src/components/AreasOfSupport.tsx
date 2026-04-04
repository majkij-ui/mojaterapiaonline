"use client"

import { motion } from "framer-motion"
import { Apple, Brain, Heart, Users } from "lucide-react"

const supportAreas = [
  {
    icon: Brain,
    title: "ZABURZENIA NASTROJU, DOLEGLIWOSCI SOMATYCZNE",
    items: [
      "Dlugo utrzymujacy sie obnizony nastroj",
      "Depresja",
      "Wypalenie zawodowe",
      "Przewlekle zmeczenie",
      "Problemy ze snem",
    ],
  },
  {
    icon: Heart,
    title: "ZABURZENIA LEKOWE",
    items: [
      "Zespol stresu pourazowego",
      "Zaburzenia obsesyjno-kompulsywne",
      "Fobie i natrectwa",
      "Stany lekowe",
      "Niskie poczucie wlasnej wartosci",
    ],
  },
  {
    icon: Apple,
    title: "ZABURZENIA ODZYWIANIA, UZALEZNIENIA",
    items: [
      "Zaburzenia odzywiania",
      "Uzaleznienia behawioralne oraz od substancji",
    ],
  },
  {
    icon: Users,
    title: "RELACJE I ZWIAZKI",
    items: ["Trudnosci w relacjach", "Kryzys w zwiazku"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function AreasOfSupport() {
  return (
    <section id="methods" className="bg-beige/20 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Obszary wsparcia
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            GLOWNE OBSZARY WSPARCIA
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {supportAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-sage-light transition-transform duration-300 group-hover:scale-110">
                <area.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground md:text-2xl">
                {area.title}
              </h3>

              <ul className="space-y-2">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
