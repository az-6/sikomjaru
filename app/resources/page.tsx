import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, User, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">CPR Knowledge Hub</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your comprehensive resource for CPR education, first aid techniques, and life-saving knowledge. Stay
              informed with the latest guidelines and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600">Essential reading for anyone interested in life-saving skills</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="CPR Importance"
                  width={600}
                  height={300}
                  className="rounded-t-xl w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-100 text-red-800">Essential Knowledge</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>8 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Dr. Sari Indrawati</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Critical Importance of CPR: Why Every Second Counts
                </h3>
                <p className="text-gray-600 mb-6">
                  Understanding the vital role of immediate CPR intervention in cardiac arrest situations. Learn why
                  prompt action can mean the difference between life and death, and how proper training saves lives
                  every day.
                </p>
                <Button variant="outline" className="group bg-transparent">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="CPR Technique Guide"
                  width={600}
                  height={300}
                  className="rounded-t-xl w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-800">How-To Guide</Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>12 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Dr. Ahmad Rizki</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Step-by-Step Guide to Perfect Chest Compressions
                </h3>
                <p className="text-gray-600 mb-6">
                  Master the fundamental technique of chest compressions with our comprehensive guide. From proper hand
                  placement to compression depth and rate, learn the skills that make CPR effective.
                </p>
                <Button variant="outline" className="group bg-transparent">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Article Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find the information you need organized by topic</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CPR Basics */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">CPR Fundamentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Essential knowledge about CPR techniques, guidelines, and best practices.
                </p>
                <div className="space-y-3">
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Understanding Cardiac Arrest
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Adult vs. Pediatric CPR
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • AHA 2020 Guidelines Update
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Common CPR Mistakes to Avoid
                  </Link>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View All Articles
                </Button>
              </CardContent>
            </Card>

            {/* First Aid */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">First Aid Essentials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Comprehensive first aid knowledge for emergency situations and workplace safety.
                </p>
                <div className="space-y-3">
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Choking Emergency Response
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Wound Care and Bleeding Control
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Shock Recognition and Treatment
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Workplace First Aid Kit Essentials
                  </Link>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View All Articles
                </Button>
              </CardContent>
            </Card>

            {/* Training Tips */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Training & Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Tips for effective CPR training, skill retention, and continuing education.
                </p>
                <div className="space-y-3">
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Effective Practice Techniques
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Skill Retention Strategies
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Certification Requirements
                  </Link>
                  <Link href="#" className="block text-sm text-gray-700 hover:text-teal-600 transition-colors">
                    • Instructor Development Tips
                  </Link>
                </div>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  View All Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay up-to-date with the newest content and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="First Aid Myths"
                  width={400}
                  height={200}
                  className="rounded-t-xl w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-yellow-100 text-yellow-800">Myth Busting</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span>5 min read</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  First Aid Myths Debunked: Separating Fact from Fiction
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Common misconceptions about first aid can be dangerous. Learn the truth behind popular myths.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-teal-600 hover:text-teal-700">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="CPR Success Story"
                  width={400}
                  height={200}
                  className="rounded-t-xl w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">Case Study</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span>7 min read</span>
                  <span>•</span>
                  <span>1 week ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Real-Life CPR Success: How Quick Action Saved a Life
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A detailed case study of successful CPR intervention and the importance of immediate response.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-teal-600 hover:text-teal-700">
                  Read More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Workplace Safety"
                  width={400}
                  height={200}
                  className="rounded-t-xl w-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-purple-100 text-purple-800">Workplace Safety</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <span>6 min read</span>
                  <span>•</span>
                  <span>2 weeks ago</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Building an Emergency Response Plan for Your Workplace
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Essential steps to create an effective emergency response strategy for any organization.
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-teal-600 hover:text-teal-700">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Stay Informed, Stay Prepared</h2>
            <p className="text-xl text-teal-100 mb-8">
              Subscribe to our newsletter for the latest CPR guidelines, training tips, and life-saving knowledge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">Subscribe</Button>
            </div>
            <p className="text-teal-100 mt-4 text-sm">Join 5,000+ healthcare professionals and safety enthusiasts</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
