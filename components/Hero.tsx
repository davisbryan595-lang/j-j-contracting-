"use client"

import Image from "next/image"
import { Button } from "./ui/Button"
import { ArrowDown, Phone } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="glass rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
            <Image src="/logo.png" alt="J&J Contracting Logo" width={200} height={200} className="mx-auto" priority />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="gradient-text">J&J Contracting</span>
          <br />
          <span className="text-white text-4xl sm:text-5xl lg:text-6xl">We do 100%</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 text-balance">
          Hauling & Moving • Lawncare & Junk Removal • Snow Removal
        </p>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 text-balance">Serving Belleville & Surrounding Areas</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto min-w-[200px]">
            <Phone className="mr-2" size={20} />
            Get a Free Quote
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => scrollToSection("services")}
            className="w-full sm:w-auto min-w-[200px]"
          >
            Our Services
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection("services")}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to services"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 glass rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 glass rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 glass rounded-full opacity-25 animate-pulse delay-500"></div>
    </section>
  )
}
