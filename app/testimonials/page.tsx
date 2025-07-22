import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hear from healthcare professionals, institutions, and organizations who trust SIKOMJARU for their CPR
              training needs
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-4 bg-blue-100 text-blue-800">Medical School</Badge>
                </div>
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "SIKOMJARU has revolutionized our CPR training program. The real-time feedback system helps our
                  medical students develop proper technique much faster than traditional methods. Our pass rates have
                  improved by 35% since implementation."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Dr. Maria Santoso"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Maria Santoso</div>
                    <div className="text-sm text-gray-600">Dean of Medical Education</div>
                    <div className="text-sm text-gray-500">University of Indonesia Medical School</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-4 bg-green-100 text-green-800">Hospital</Badge>
                </div>
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "As a training coordinator for one of Jakarta's largest hospitals, I can confidently say SIKOMJARU
                  provides the most realistic CPR training experience. Our nursing staff feel more confident and
                  prepared for real emergencies."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Nurse Indira Putri"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Nurse Indira Putri, RN</div>
                    <div className="text-sm text-gray-600">Training Coordinator</div>
                    <div className="text-sm text-gray-500">RS Cipto Mangunkusumo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600">From medical schools to corporate training programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-purple-100 text-purple-800 text-xs">Corporate</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Our employees now feel confident handling emergency situations. The training was comprehensive and
                  the SIKOMJARU phantom made it incredibly realistic."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Budi Hartono"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Budi Hartono</div>
                    <div className="text-xs text-gray-600">HR Manager, PT Astra International</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-red-100 text-red-800 text-xs">Emergency Services</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "SIKOMJARU helps us maintain the highest standards in our paramedic training program. The feedback
                  system is invaluable for skill assessment."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Captain Agus Wijaya"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Captain Agus Wijaya</div>
                    <div className="text-xs text-gray-600">Jakarta Fire Department</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-orange-100 text-orange-800 text-xs">Training Center</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "As a certified CPR instructor, I've used many training phantoms. SIKOMJARU provides the most accurate
                  and helpful feedback for students."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Dr. Lisa Permata"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Dr. Lisa Permata</div>
                    <div className="text-xs text-gray-600">Certified CPR Instructor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <Badge className="ml-3 bg-teal-100 text-teal-800 text-xs">Nursing School</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Our nursing students love the immediate feedback. It helps them understand proper compression
                  technique much faster than traditional methods."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Prof. Siti Nurhaliza"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Prof. Siti Nurhaliza</div>
                    <div className="text-xs text-gray-600">Director, Nursing Academy Jakarta</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-blue-100 text-blue-800 text-xs">Medical Center</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "The durability and reliability of SIKOMJARU is impressive. After two years of intensive use, it still
                  performs like new."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Dr. Rahman Hakim"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Dr. Rahman Hakim</div>
                    <div className="text-xs text-gray-600">Medical Director, Siloam Hospital</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-green-100 text-green-800 text-xs">Community</Badge>
                </div>
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "The community CPR program using SIKOMJARU has been incredibly successful. People feel more confident
                  about helping in emergencies."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Ibu Dewi Sartika"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Ibu Dewi Sartika</div>
                    <div className="text-xs text-gray-600">Community Health Coordinator</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">Numbers that speak to our impact on CPR education</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Healthcare Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Customer Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">2+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
