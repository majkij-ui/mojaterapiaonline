import { About } from "@/src/components/About"
import { AreasOfSupport } from "@/src/components/AreasOfSupport"
import { Contact } from "@/src/components/Contact"
import { Footer } from "@/src/components/Footer"
import { Header } from "@/src/components/Header"
import { Hero } from "@/src/components/Hero"
import { Offer } from "@/src/components/Offer"
import { Testimonials } from "@/src/components/Testimonials"

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
