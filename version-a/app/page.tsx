import { Header } from "@/src/components/Header"
import { Hero } from "@/src/components/Hero"
import { About } from "@/src/components/About"
import { Testimonials } from "@/src/components/Testimonials"
import { Offer } from "@/src/components/Offer"
import { AreasOfSupport } from "@/src/components/AreasOfSupport"
import { Contact } from "@/src/components/Contact"
import { Footer } from "@/src/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Offer />
      <AreasOfSupport />
      <Contact />
      <Footer />
    </main>
  )
}
