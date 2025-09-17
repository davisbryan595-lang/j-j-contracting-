"use client"

import { useState, useEffect } from "react"
import { Card } from "./ui/Card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Belleville",
      rating: 5,
      text: "J&J Contracting helped us move our entire household with such care and professionalism. Joshi and his team were punctual, efficient, and handled our belongings like they were their own. Highly recommend!",
    },
    {
      name: "Mike Thompson",
      location: "Belleville",
      rating: 5,
      text: "Outstanding snow removal service! They cleared our driveway and walkways perfectly all winter long. Always reliable, even during the worst storms. True to their motto - they really do 100%!",
    },
    {
      name: "Jennifer Adams",
      location: "Belleville Area",
      rating: 5,
      text: "The lawn care service exceeded our expectations. Our yard has never looked better! The team is professional, reasonably priced, and always goes the extra mile. We're customers for life.",
    },
    {
      name: "Robert Chen",
      location: "Belleville",
      rating: 5,
      text: "Needed junk removal after a home renovation. J&J Contracting came the same day I called and cleared everything out efficiently. Great communication and fair pricing. Will definitely use again.",
    },
    {
      name: "Lisa Rodriguez",
      location: "Belleville Area",
      rating: 5,
      text: "Professional hauling service for our office move. The team was careful with our equipment and furniture. Everything arrived in perfect condition. Excellent service from start to finish!",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={20} className={i < rating ? "text-yellow-400 fill-current" : "text-gray-400"} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative text-center min-h-[300px] flex flex-col justify-center">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={48} className="text-blue-400" />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">{renderStars(testimonials[currentTestimonial].rating)}</div>

            {/* Testimonial Text */}
            <blockquote className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed text-balance px-8">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="text-white font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-blue-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid (Mobile Swipeable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 ${
                index === currentTestimonial ? "ring-2 ring-blue-400 scale-105" : "hover:scale-105"
              }`}
            >
              <div className="flex justify-center mb-4">{renderStars(testimonial.rating)}</div>
              <blockquote className="text-gray-300 mb-4 text-sm leading-relaxed text-balance">
                "{testimonial.text}"
              </blockquote>
              <div className="text-center">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
