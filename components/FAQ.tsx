"use client"

import { useState } from "react"
import { Card } from "./ui/Card"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ScrollReveal } from "./ScrollReveal"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Belleville and all surrounding areas. Contact us to confirm service availability in your specific location. We provide free estimates within our service area.",
    },
    {
      question: "Do you offer free estimates?",
      answer:
        "Yes! We provide free, no-obligation estimates for all our services. Simply call us at 306-481-3203 or fill out our contact form, and we'll schedule a convenient time to assess your needs.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Absolutely. J&J Contracting is fully licensed and insured for your peace of mind. We carry comprehensive liability insurance and all necessary permits for our services.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, check, and all major credit cards. Payment is typically due upon completion of work, though we can discuss payment arrangements for larger projects.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer emergency services for urgent situations, especially for snow removal during storms and emergency junk removal. Call us at 306-481-3203 for immediate assistance.",
    },
    {
      question: "How quickly can you start my project?",
      answer:
        "Most projects can be scheduled within 1-3 days, depending on the scope and our current schedule. Emergency services are available same-day or next-day in most cases.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300 text-balance">
              Got questions? We've got answers. Here are some common questions about our services.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="cursor-pointer hover:bg-white/5 transition-all duration-300">
                <button onClick={() => toggleFAQ(index)} className="w-full text-left flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
