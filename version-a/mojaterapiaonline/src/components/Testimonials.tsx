"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    text: "Z calego serca polecam ! Pani Karolina jest bardzo zaangazowana w niesieniu wsparcia i analizie stanow przez ktore przechodze... czuje sie silniejsza po kazdym spotkaniu...",
    author: "AW",
    rating: 5,
  },
  {
    text: "Pani Karolina to 5! terapeuta, z ktorym mialam przyjemnosc wspolpracowac. Dopiero przy niej poczulam sie bezpiecznie... Przede wszystkim slucha...",
    author: "KW",
    rating: 5,
  },
  {
    text: "Duzo podrozuje i sceptycznie nastawiony postanowilem dac szanse terapii online... od pierwszej sesji wiedzialem ze bede chcial kontynuowac terapie. Czuc zaangazowanie i empatie...",
    author: "M.K.",
    rating: 5,
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Testimonials() {
  return (
    <section className="bg-beige/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Opinie
          </span>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Opinie - ZnanyLekarz
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative rounded-2xl bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
            >
              <div className="absolute right-6 top-6 text-sage-light">
                <Quote className="h-10 w-10" />
              </div>

              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="relative z-10 mb-6 leading-relaxed text-foreground">
                {'"'}
                {testimonial.text}
                {'"'}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light font-medium text-primary">
                  {testimonial.author[0]}
                </div>
                <span className="font-medium text-foreground">{testimonial.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
