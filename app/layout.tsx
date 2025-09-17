import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "J&J Contracting — We do 100% | Belleville",
  description:
    "Professional hauling & moving, lawncare & junk removal, and snow removal services in Belleville. Contact us at 306-481-3203 for a free quote.",
  keywords: "contracting, hauling, moving, lawncare, junk removal, snow removal, Belleville",
  openGraph: {
    title: "J&J Contracting — We do 100% | Belleville",
    description: "Professional hauling & moving, lawncare & junk removal, and snow removal services in Belleville.",
    url: "https://jjcontracting.ca",
    siteName: "J&J Contracting",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "J&J Contracting Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&J Contracting — We do 100% | Belleville",
    description: "Professional hauling & moving, lawncare & junk removal, and snow removal services in Belleville.",
    images: ["/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
