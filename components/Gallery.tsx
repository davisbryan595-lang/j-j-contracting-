"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "./ui/Card"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/hauling-truck-with-furniture.jpg",
      alt: "Professional hauling service with loaded truck",
      caption: "Furniture and appliance hauling",
    },
    {
      src: "/landscaped-yard-with-fresh-cut-grass.jpg",
      alt: "Beautifully maintained lawn and landscaping",
      caption: "Lawn maintenance and landscaping",
    },
    {
      src: "/snow-removal-equipment-clearing-driveway.jpg",
      alt: "Snow removal service clearing residential driveway",
      caption: "Snow removal services",
    },
    {
      src: "/junk-removal-before-and-after.jpg",
      alt: "Property cleanout and junk removal",
      caption: "Junk removal and cleanouts",
    },
    {
      src: "/moving-boxes-and-furniture.jpg",
      alt: "Professional moving services",
      caption: "Residential and commercial moving",
    },
    {
      src: "/construction-debris-removal.png",
      alt: "Construction debris and waste removal",
      caption: "Construction debris removal",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            See the quality and professionalism we bring to every project. From hauling to landscaping, we deliver
            results that exceed expectations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden p-0 hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm">{image.caption}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 glass rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 glass rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] max-h-[80vh]">
                <Image
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">{galleryImages[selectedImage].caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
