import { Card } from "./ui/Card"
import { Phone, Mail, MapPin, Award, Users, Clock, Shield } from "lucide-react"

export function About() {
  const values = [
    {
      icon: <Award size={32} className="text-orange-400" />,
      title: "Quality Work",
      description: "We deliver 100% quality in every project we undertake.",
    },
    {
      icon: <Users size={32} className="text-blue-400" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority in everything we do.",
    },
    {
      icon: <Clock size={32} className="text-green-400" />,
      title: "Reliable Service",
      description: "On-time, dependable service you can count on.",
    },
    {
      icon: <Shield size={32} className="text-purple-400" />,
      title: "Fully Insured",
      description: "Licensed and insured for your peace of mind.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">About J&J Contracting</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-balance">
            Your trusted partner for all contracting needs in Belleville and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Company Story */}
          <Card className="h-fit">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              J&J Contracting was founded with a simple mission: to provide reliable, high-quality contracting services
              to the Belleville community. We believe in doing 100% of what we promise, which is why our motto is "We do
              100%."
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              From hauling and moving to lawncare and snow removal, we've built our reputation on dependable service,
              fair pricing, and complete customer satisfaction. Every project, big or small, receives our full attention
              and commitment to excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Led by owner Joshi Jose, our team brings years of experience and a dedication to serving our community
              with integrity and professionalism.
            </p>
          </Card>

          {/* Contact Info */}
          <Card>
            <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone size={24} className="text-blue-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <a href="tel:306-481-3203" className="text-gray-300 hover:text-blue-400 transition-colors">
                    306-481-3203
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={24} className="text-orange-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a
                    href="mailto:joshi@jjcontracting.ca"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    joshi@jjcontracting.ca
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin size={24} className="text-green-400 mr-4 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Belleville & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 glass-dark rounded-xl">
              <p className="text-center text-white font-semibold mb-2">Owner</p>
              <p className="text-center text-gray-300">Joshi Jose</p>
            </div>
          </Card>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Why Choose Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm text-balance">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Area Banner */}
        <Card variant="gradient" className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Serving Belleville & Surrounding Areas</h3>
          <p className="text-white/90 text-lg mb-4">Call 306-481-3203</p>
          <p className="text-white/80">Licensed • Insured • Reliable</p>
        </Card>
      </div>
    </section>
  )
}
