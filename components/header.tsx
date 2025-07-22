"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">SIKOMJARU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Product
            </Link>
            <Link href="/training" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Training
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/training">Book Training</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 font-medium">
                About Us
              </Link>
              <Link href="/product" className="text-gray-700 hover:text-teal-600 font-medium">
                Product
              </Link>
              <Link href="/training" className="text-gray-700 hover:text-teal-600 font-medium">
                Training
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-teal-600 font-medium">
                Resources
              </Link>
              <Link href="/testimonials" className="text-gray-700 hover:text-teal-600 font-medium">
                Testimonials
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 font-medium">
                Contact
              </Link>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
                <Link href="/training">Book Training</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
