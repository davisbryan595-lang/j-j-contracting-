"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./ui/Button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28"> {/* taller navbar */}
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Image
              src="/logo.png"
              alt="J&J Contracting Logo"
              height={125}
              width={125}
              className="hover:scale-110 transition-transform"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["hero", "about", "services", "gallery", "testimonials", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-dark rounded-2xl mt-2 p-4 space-y-2">
            {["hero", "about", "services", "gallery", "testimonials", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <div className="pt-2">
              <Button onClick={() => scrollToSection("contact")} size="sm" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
