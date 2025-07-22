import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your CPR training program? Contact our team for personalized solutions, product
              demonstrations, or training consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p>+62 21 1234 5678</p>
                  <p>+62 812 3456 7890 (WhatsApp)</p>
                </div>
                <Button className="mt-4 bg-teal-600 hover:bg-teal-700 text-white">Call Now</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Us</h3>
                <div className="space-y-2 text-gray-600">
                  <p>info@sikomjaru.com</p>
                  <p>sales@sikomjaru.com</p>
                </div>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WhatsApp</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Quick responses</p>
                  <p>24/7 Support</p>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Chat on WhatsApp</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/Company</Label>
                    <Input id="organization" placeholder="Enter your organization name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="demo">Product Demonstration</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs, questions, or how we can help you"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Office</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>SIKOMJARU Innovation Center</p>
                        <p>Jl. Teknologi No. 123</p>
                        <p>Jakarta Selatan 12345</p>
                        <p>Indonesia</p>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-video bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Click to view directions</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Emergency Support:</strong> For urgent technical support, contact us via WhatsApp 24/7 at
                      +62 812 3456 7890
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about SIKOMJARU</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does it take to receive a quote?</h3>
                <p className="text-gray-600">
                  We typically provide detailed quotes within 24-48 hours of receiving your inquiry. For urgent
                  requests, contact us directly by phone for faster response.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer product demonstrations?</h3>
                <p className="text-gray-600">
                  Yes! We offer both on-site and virtual product demonstrations. Contact us to schedule a demo that
                  works best for your team and location.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your warranty and support policy?</h3>
                <p className="text-gray-600">
                  SIKOMJARU comes with a 2-year comprehensive warranty and lifetime technical support. We also provide
                  training for your instructors and ongoing maintenance services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer bulk pricing for institutions?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for educational institutions, hospitals, and bulk orders. Contact our
                  sales team to discuss volume discounts and institutional packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
