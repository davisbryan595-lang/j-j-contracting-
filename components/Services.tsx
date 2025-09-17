"use client"

import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import { Truck, Scissors, Snowflake, CheckCircle } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Truck size={48} className="text-blue-400" />,
      title: "Hauling & Moving",
      description: "Professional hauling and moving services for residential and commercial needs.",
      features: [
        "Residential & commercial moving",
        "Furniture & appliance hauling",
        "Construction debris removal",
        "Same-day service available",
      ],
    },
    {
      icon: <Scissors size={48} className="text-orange-400" />,
      title: "Lawncare & Junk Removal",
      description: "Complete lawn maintenance and junk removal services to keep your property pristine.",
      features: [
        "Lawn mowing & maintenance",
        "Yard cleanup & landscaping",
        "Junk & debris removal",
        "Property cleanouts",
      ],
    },
    {
      icon: <Snowflake size={48} className="text-blue-300" />,
      title: "Snow Removal",
      description: "Reliable snow removal services to keep your property safe and accessible.",
      features: ["Residential driveways", "Commercial parking lots", "Sidewalk clearing", "24/7 emergency service"],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            We provide comprehensive contracting services with a commitment to excellence. From hauling to snow removal,
            we do 100% of what we promise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="text-center group">
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-balance">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-200">
                    <CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card variant="gradient" className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/90 mb-6 text-balance">
              Contact us today for a free quote on any of our services. We're here to help with all your contracting
              needs.
            </p>
            <Button variant="secondary" size="lg" onClick={scrollToContact}>
              Get Your Free Quote
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
