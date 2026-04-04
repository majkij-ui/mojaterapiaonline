"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
              Poznajmy sie
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-balance text-foreground md:text-4xl lg:text-5xl">
              Witaj na stronie mojego gabinetu online, stacjonujacego takze w Warszawie
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground md:mt-8">
              <p>
                Nazywam sie Karolina Bednarska jestem psychologiem oraz dyplomowanym terapeuta EMDR.
                Moje kwalifikacje zawodowe obejmuja ponadto studium Psychoterapii Metoda Procesu,
                studia podyplomowe z psychotraumatologii oraz seksuologii.
              </p>
              <p>
                Odbylam takze liczne warsztaty pracy z cialem, oddechem oraz mindfulness. Stale daze
                do poszerzania swojej wiedzy i doskonalenia narzedzi pracy.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
              >
                czytaj dalej
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-border">|</span>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary"
              >
                Kontakt
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-beige">
              <Image
                src="/images/portrait.jpg"
                alt="Portret Karoliny Bednarskiej"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-4 rounded-xl border-2 border-primary/20" />
            </div>

            <div className="-z-10 absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-sage-light" />
            <div className="-z-10 absolute -right-6 -top-6 h-32 w-32 rounded-full bg-beige-dark/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
