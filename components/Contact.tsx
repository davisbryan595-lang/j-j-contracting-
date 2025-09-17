"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = ["Hauling & Moving", "Lawncare & Junk Removal", "Snow Removal", "Other"]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.service) newErrors.service = "Please select a service"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "", service: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Ready to get started? Contact us today for a free quote on any of our services.
          </p>
        </div>

        {/* Service Area Banner */}
        <Card variant="gradient" className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-4">Serving Belleville & Surrounding Areas</h3>
          <p className="text-white/90 text-xl mb-2">Call 306-481-3203</p>
          <p className="text-white/80">Available 7 days a week for your convenience</p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <h3 className="text-3xl font-bold text-white mb-6">Request a Free Quote</h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 glass-dark rounded-xl border border-green-400/50">
                <div className="flex items-center text-green-400">
                  <CheckCircle size={20} className="mr-2" />
                  <span>Thank you! We'll get back to you within 24 hours.</span>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 glass-dark rounded-xl border border-red-400/50">
                <div className="flex items-center text-red-400">
                  <AlertCircle size={20} className="mr-2" />
                  <span>Something went wrong. Please try again or call us directly.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 glass-dark rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                      errors.name ? "ring-2 ring-red-400" : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 glass-dark rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                      errors.phone ? "ring-2 ring-red-400" : ""
                    }`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass-dark rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                    errors.email ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-white font-medium mb-2">
                  Service Needed *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass-dark rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                    errors.service ? "ring-2 ring-red-400" : ""
                  }`}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-gray-800">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 glass-dark rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none ${
                    errors.message ? "ring-2 ring-red-400" : ""
                  }`}
                  placeholder="Please describe your project or service needs..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-blue-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:306-481-3203" className="text-gray-300 hover:text-blue-400 transition-colors text-lg">
                      306-481-3203
                    </a>
                    <p className="text-gray-400 text-sm mt-1">Available 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-orange-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a
                      href="mailto:joshi@jjcontracting.ca"
                      className="text-gray-300 hover:text-orange-400 transition-colors"
                    >
                      joshi@jjcontracting.ca
                    </a>
                    <p className="text-gray-400 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin size={24} className="text-green-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Service Area</p>
                    <p className="text-gray-300">Belleville & Surrounding Areas</p>
                    <p className="text-gray-400 text-sm mt-1">Free estimates within our service area</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-purple-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">Business Hours</p>
                    <p className="text-gray-300">Monday - Sunday: 7:00 AM - 8:00 PM</p>
                    <p className="text-gray-400 text-sm mt-1">Emergency services available</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <h3 className="text-2xl font-bold text-white mb-4">Service Area Map</h3>
              <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-300">Interactive map coming soon</p>
                  <p className="text-gray-400 text-sm">Serving Belleville & surrounding areas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
