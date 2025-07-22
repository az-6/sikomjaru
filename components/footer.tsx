import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-xl font-bold">SIKOMJARU</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Innovative CPR training phantom revolutionizing life-saving education for healthcare professionals and the
              public.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/product" className="text-gray-400 hover:text-white transition-colors">
                Product
              </Link>
              <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                Training Programs
              </Link>
              <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                Resources
              </Link>
              <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                Basic CPR Training
              </Link>
              <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                Advanced CPR
              </Link>
              <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                Corporate Training
              </Link>
              <Link href="/training" className="text-gray-400 hover:text-white transition-colors">
                Instructor Certification
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400">info@sikomjaru.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400">+62 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span className="text-gray-400">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SIKOMJARU. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
