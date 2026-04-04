"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Globe, Users, Video } from "lucide-react"
import Link from "next/link"

const features = [
  { icon: Clock, text: "55 minut sesji" },
  { icon: Users, text: "Indywidualnie i pary" },
  { icon: Globe, text: "Polski i angielski" },
  { icon: Video, text: "Online i stacjonarnie" },
]

export function Offer() {
  return (
    <section id="offer" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Oferta
            </span>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Konsultacje, terapia, coaching
            </h2>
          </motion.div>

          <motion.div
            className="rounded-3xl bg-sage-light/20 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 leading-relaxed text-foreground">
              <p>
                Mozesz wybrac pomiedzy jednorazowa konsultacja, na ktorej bedzie mozliwosc zadac
                najwazniejsze pytania a cyklem regularnych sesji poglebionej pracy. Jedno spotkanie
                trwa 55 minut. Pracuje indywidualnie oraz z parami. Prowadze sesje w jezyku polskim
                oraz angielskim, online i stacjonarnie.
              </p>
              <p>
                Jesli jestes rodzicem lub opiekunem dziecka i szukasz wsparcia dla swojego dziecka,
                zapraszam do kontaktu. Pracuje z dziecmi powyzej 10 roku zycia metoda EMDR oraz
                wspierajacymi technikami pracy z cialem i oddechem.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-2 rounded-xl bg-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                  <span className="text-center text-sm text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Umow wizyte
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
