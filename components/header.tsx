"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const logoPartners = [
    { src: "/sj.png", alt: "Sikomjaru Logo", name: "SIKOMJARU" },
    {
      src: "/ump.png",
      alt: "UMP Logo",
      name: "Universitas Muhammadiyah Purwokerto",
    },
    { src: "/fikes.png", alt: "FIKES Logo", name: "Fakultas Ilmu Kesehatan" },
    {
      src: "/p2mw.png",
      alt: "P2MW Logo",
      name: "Program Pemberdayaan Masyarakat Wirausaha",
    },
    { src: "/logo.png", alt: "Official Logo", name: "Official Logo" },
    {
      src: "/isbi.jpg",
      alt: "ISBI Logo",
      name: "Islamic Student Business Incubator",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true); // Show compact mode when scrolled down
      } else {
        setIsScrolled(false); // Show full header when at top
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20"
          : "bg-white shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="w-full px-4">
        <div
          className={`flex items-center justify-between transition-all duration-500 min-h-0 w-full overflow-visible ${
            isScrolled ? "h-14 py-2" : "h-16 sm:h-20"
          }`}
        >
          {/* Logo SIKOMJARU di kiri */}
          <Link
            href="/"
            className="flex items-center space-x-3 z-10 flex-shrink-0"
          >
            <div
              className={`relative transition-all duration-500 ${
                isScrolled ? "w-9 h-9" : "w-10 h-10 sm:w-12 sm:h-12"
              }`}
            >
              <Image
                src="/sj.png"
                alt="SIKOMJARU Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Teks SIKOMJARU di tengah - hilang saat scroll */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
              isScrolled
                ? "opacity-0 scale-90 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
          >
            <Link
              href="/"
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              SIKOMJARU
            </Link>
          </div>

          {/* Mobile Menu Button di kanan */}
          <button
            className={`p-2 rounded-lg hover:bg-gray-100 transition-all duration-500 z-10 flex-shrink-0 ${
              isScrolled
                ? "opacity-0 scale-90 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && !isScrolled && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 z-40">
            <div className="px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#produk"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Produk
                </a>
                <a
                  href="#profil"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profil
                </a>
                <a
                  href="#penelitian"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Penelitian
                </a>
                <a
                  href="#belanja"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Belanja
                </a>
                <a
                  href="#kontak"
                  className="text-gray-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontak
                </a>
                <div className="pt-4 border-t border-gray-200">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 text-lg">
                    <a href="#belanja" onClick={() => setIsMenuOpen(false)}>
                      Beli Sekarang
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
