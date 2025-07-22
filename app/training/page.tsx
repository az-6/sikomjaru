import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, Award, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional CPR Training Programs</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive CPR training courses using the innovative SIKOMJARU phantom. From basic life support to
              advanced techniques, we prepare you to save lives.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Available Training Courses</h2>
            <p className="text-xl text-gray-600">Choose the program that best fits your needs and skill level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic CPR */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-100 text-green-800">Beginner</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">Rp 500,000</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Basic CPR Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Essential CPR skills for the general public, workplace safety officers, and community responders.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Duration: 4 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Max 12 participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Certificate included</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What you'll learn:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Adult CPR techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Chest compression fundamentals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Rescue breathing methods</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Emergency response protocols</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">Register for Basic CPR</Button>
              </CardContent>
            </Card>

            {/* Advanced CPR */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-orange-500">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-orange-100 text-orange-800">Advanced</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">Rp 1,200,000</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Advanced CPR for Healthcare</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Comprehensive training for healthcare professionals, nurses, and medical students.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Duration: 8 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Max 8 participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Professional certification</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What you'll learn:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Advanced airway management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Team-based resuscitation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Pediatric CPR techniques</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Post-resuscitation care</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Register for Advanced CPR
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Training */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Corporate</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">Rp 8,000,000</div>
                    <div className="text-sm text-gray-500">per group</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Corporate First Aid Program</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Comprehensive workplace safety training including CPR, first aid, and emergency response.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Duration: 2 days</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Up to 20 participants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Corporate certification</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>On-site training delivery</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Workplace-specific scenarios</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Emergency action planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Training materials included</span>
                    </li>
                  </ul>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Request Corporate Training</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Register for Training</h2>
              <p className="text-xl text-gray-600">Fill out the form below to register for our CPR training programs</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
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
                    <Label htmlFor="course">Select Training Course</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a training program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic CPR Training</SelectItem>
                        <SelectItem value="advanced">Advanced CPR for Healthcare</SelectItem>
                        <SelectItem value="corporate">Corporate First Aid Program</SelectItem>
                        <SelectItem value="instructor">Instructor Certification</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participants">Number of Participants</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of participants" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 participant</SelectItem>
                        <SelectItem value="2-5">2-5 participants</SelectItem>
                        <SelectItem value="6-10">6-10 participants</SelectItem>
                        <SelectItem value="11-20">11-20 participants</SelectItem>
                        <SelectItem value="20+">More than 20 participants</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about any specific requirements or questions you have"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Submit Registration
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll contact you within 24 hours to confirm your registration and provide payment details.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Train with SIKOMJARU?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experience the most effective CPR training with our innovative approach
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Instructors</h3>
                    <p className="text-gray-600">
                      Learn from certified medical professionals with years of emergency response experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hands-On Practice</h3>
                    <p className="text-gray-600">
                      Extensive practical training with the SIKOMJARU phantom for realistic skill development
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Recognized Certification</h3>
                    <p className="text-gray-600">
                      Receive internationally recognized certificates valid for professional requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Access to refresher materials and continued learning resources after certification
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="CPR Training Session"
                width={500}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
