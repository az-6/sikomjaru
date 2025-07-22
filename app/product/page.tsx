import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Zap, Shield, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Revolutionary CPR Training</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">SIKOMJARU Phantom</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The next-generation CPR training phantom with advanced feedback sensors, realistic anatomy, and
                  comprehensive training capabilities for all skill levels.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Request Quote
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 bg-transparent"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="SIKOMJARU CPR Training Phantom"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Gallery</h2>
            <p className="text-xl text-gray-600">Explore the SIKOMJARU phantom from every angle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Front View"
                width={400}
                height={300}
                className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-xl"></div>
            </div>
            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Side View"
                width={400}
                height={300}
                className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-xl"></div>
            </div>
            <div className="relative group">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Control Panel"
                width={400}
                height={300}
                className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology meets proven educational methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Feedback</h3>
                <p className="text-gray-600">
                  Advanced sensors provide instant feedback on compression depth, rate, and hand placement
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Technology</h3>
                <p className="text-gray-600">
                  Integrated electronics track performance metrics and provide detailed training reports
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Durable Design</h3>
                <p className="text-gray-600">
                  Built with medical-grade materials for long-lasting performance in intensive training environments
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-User Ready</h3>
                <p className="text-gray-600">
                  Designed for group training sessions with easy-to-clean surfaces and replaceable components
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
                <p className="text-xl text-gray-600 mb-8">Engineered for precision, built for performance</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Dimensions & Weight</h3>
                    <p className="text-gray-600">Length: 60cm, Width: 40cm, Height: 25cm, Weight: 8.5kg</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Materials</h3>
                    <p className="text-gray-600">
                      Medical-grade silicone skin, reinforced internal structure, antimicrobial coating
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Feedback System</h3>
                    <p className="text-gray-600">Pressure sensors, LED indicators, audio feedback, digital display</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Power & Connectivity</h3>
                    <p className="text-gray-600">
                      Rechargeable battery (8+ hours), USB-C charging, Bluetooth connectivity
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Compliance</h3>
                    <p className="text-gray-600">AHA Guidelines 2020, ERC Standards, ISO 13485 certified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Technical Specifications"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose SIKOMJARU?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits that make SIKOMJARU the preferred choice for CPR training
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Learning Outcomes</h3>
              <p className="text-gray-600">
                Real-time feedback improves skill acquisition and retention rates by up to 40% compared to traditional
                training methods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost-Effective Training</h3>
              <p className="text-gray-600">
                Durable construction and minimal maintenance requirements provide excellent long-term value for training
                programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standardized Assessment</h3>
              <p className="text-gray-600">
                Objective performance metrics ensure consistent evaluation and certification across all training
                sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Maintenance</h3>
              <p className="text-gray-600">
                Simple cleaning procedures and replaceable components minimize downtime and maintenance costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructor Support</h3>
              <p className="text-gray-600">
                Comprehensive training materials and ongoing support help instructors maximize teaching effectiveness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Trusted by leading medical institutions with documented improvements in CPR skill competency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your CPR Training?</h2>
            <p className="text-xl text-teal-100 mb-8">
              Contact our sales team for detailed pricing information and customized training solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Request Quote
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
            <p className="text-teal-100 mt-6 text-sm">
              Special pricing available for educational institutions and bulk orders
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
