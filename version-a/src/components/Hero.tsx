"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const versionBFontStyles = {
  sans: { fontFamily: '"Plus Jakarta Sans", "Outfit", sans-serif' },
  mono: { fontFamily: '"IBM Plex Mono", monospace' },
  drama: { fontFamily: '"Cormorant Garamond", serif' },
} as const

const versionBAccentOrange = "#CC5833"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full items-end overflow-hidden bg-primary pb-20 pt-40"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
          alt="Organic nature background"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/75 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl">
        <motion.p
          className="mb-4 font-mono text-sm tracking-widest text-primary-foreground/80 uppercase"
          style={versionBFontStyles.mono}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          Terapia Online & W Gabinecie
        </motion.p>

        <motion.h1
          className="mb-8 flex flex-col leading-[0.85] tracking-tighter text-primary-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
        >
          <span className="font-sans text-5xl font-bold md:text-7xl lg:text-8xl" style={versionBFontStyles.sans}>
            Rozwój to
          </span>
          <span
            className="ml-0 font-drama text-7xl italic md:ml-12 md:text-9xl lg:text-[11rem]"
            style={{ ...versionBFontStyles.drama, color: versionBAccentOrange }}
          >
            Proces.
          </span>
        </motion.h1>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          <Link
            href="#contact"
            aria-label="Rozpocznij terapię"
            className="inline-flex items-center gap-3 rounded-[2rem] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            style={{ backgroundColor: versionBAccentOrange }}
          >
            <span>Rozpocznij terapię</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
