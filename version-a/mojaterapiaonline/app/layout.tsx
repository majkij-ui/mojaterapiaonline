import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Karolina Bednarska - Konsultacje i Terapia | Psycholog Warszawa",
  description:
    "Psycholog i dyplomowany terapeuta EMDR. Konsultacje psychologiczne i terapia online oraz stacjonarnie w Warszawie. Odnajdź wewnętrzny spokój.",
  keywords: ["psycholog", "terapeuta", "EMDR", "Warszawa", "terapia online", "konsultacje psychologiczne"],
}

export const viewport = {
  themeColor: "#4a5d4a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
