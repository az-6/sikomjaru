"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Heart,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Zap,
  Shield,
  Target,
  Eye,
  ShoppingBag,
  FlaskConical,
  Building,
  Mic,
  Lightbulb,
  Monitor,
} from "lucide-react";
import { useState, useEffect } from "react";

// Komponen untuk ikon media sosial (contoh sederhana)
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);
const TiktokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);
const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3 0 10 0 10-4.5 2-9.5 2-9.5-2-9.5-3z"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);
const ShopeeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-orange-500"
  >
    <path d="M21.49 9.236c-.047-.202-.147-.384-.288-.535l-2.43-2.52c-.22-.228-.524-.345-.832-.345H5.96c-.32 0-.624.125-.848.353l-2.52 2.52c-.14.14-.24.324-.288.527L1.01 14.73c-.047.202.012.412.152.571l.012.012c.047.055.1.1.16.14l.012.008c.18.125.396.188.612.188h18c.216 0 .432-.063.612-.188l.012-.008c.06-.04.113-.085.16-.14l.012-.012c.14-.16.2-.37.152-.572L21.49 9.236zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open (prevents page shifting / overflow)
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#produk", label: "Produk" },
    { href: "#profil", label: "Profil" },
    { href: "#penelitian", label: "Penelitian" },
    { href: "#belanja", label: "Belanja" },
    { href: "#kontak", label: "Kontak" },
  ];

  const logoPartners = [
    { src: "/sj.png", alt: "SJ Logo", name: "SIKOMJARU" },
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
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/60 backdrop-blur-sm shadow-sm border-b border-gray-200/40"
            : "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/60"
        }`}
      >
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-20 sm:h-24 min-h-0 w-full overflow-visible">
            {/* Logo Partners - Desktop & Mobile */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 flex-1 justify-center mx-2 sm:mx-4 max-w-full">
              {logoPartners.map((logo, index) => (
                <div key={index} className="relative group flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain hover:opacity-80 transition-opacity duration-300 max-w-[120px]"
                    onError={(e) => {
                      // Fallback jika gambar tidak ditemukan
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Tooltip - Hide on small screens */}
                  <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Burger Menu Button - Always visible */}
            <button
              className="relative z-10 flex-shrink-0 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
              )}
            </button>
          </div>

          {/* Burger Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-200 max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto z-40 overscroll-contain">
              <div className="px-4 py-6">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 font-medium text-lg py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 break-words"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 text-lg">
                      <a href="#belanja">Beli Sekarang</a>
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="pt-20 sm:pt-24">
        {/* Bagian Home */}
        <section
          id="home"
          className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 lg:py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    SIKOMJARU: Solusi Inovatif Pelatihan{" "}
                    <span className="text-blue-600">Selamatkan Nyawa</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Tingkatkan keterampilan Bantuan Hidup Dasar (BHD) dengan
                    alat peraga yang akurat, terjangkau, dan mudah digunakan.
                    Selamatkan nyawa dengan persiapan yang tepat.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                  >
                    <a href="#produk">Lihat Produk</a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 bg-transparent text-lg"
                  >
                    <a href="#kontak">Hubungi Kami</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://placehold.co/600x500/d1fae5/34d399?text=Alat+Peraga+SIKOMJARU"
                  alt="Alat Peraga SIKOMJARU"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Produk */}
        <section id="produk" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Produk Inovatif SIKOMJARU
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan
                fitur canggih untuk simulasi yang realistis dan terjangkau.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <img
                  src="https://placehold.co/600x500/e0f2fe/0ea5e9?text=Tampak+Produk+SIKOMJARU"
                  alt="Fitur Produk SIKOMJARU"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800">
                  Manfaat dan Keunggulan
                </h3>
                <p className="text-gray-600">
                  SIKOMJARU mengatasi kelemahan produk komersial dengan harga
                  yang jauh lebih terjangkau (hanya 15% dari harga pasar),
                  material fiber yang kokoh, serta fitur edukatif yang ramah
                  bagi pemula.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Harga Terjangkau
                      </h4>
                      <p className="text-gray-600">
                        Memudahkan akses bagi sekolah, kader kesehatan, dan
                        individu.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Desain Edukatif & Lokal
                      </h4>
                      <p className="text-gray-600">
                        Motif Batik Banyumasan sebagai ikon budaya dan daya
                        tarik edukatif.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Material Tahan Lama
                      </h4>
                      <p className="text-gray-600">
                        Terbuat dari fiber yang kuat, tahan air, dan mudah
                        diperbaiki.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-12 mt-20">
              <h3 className="text-3xl font-bold text-gray-900">
                Fitur Utama & Spesifikasi
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Indikator Lampu
                  </h3>
                  <p className="text-gray-600">
                    Memberi tanda visual jika kedalaman kompresi sudah sesuai (5
                    cm) atau belum.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mic className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Panduan Suara
                  </h3>
                  <p className="text-gray-600">
                    Speaker memandu pengguna menekan dada sesuai ketukan standar
                    (100-120 kali/menit).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Monitor className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Layar LCD Digital
                  </h3>
                  <p className="text-gray-600">
                    Menampilkan jumlah kompresi, visualisasi EKG, dan indikator
                    tekanan secara real-time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Adaptor Listrik
                  </h3>
                  <p className="text-gray-600">
                    Lebih praktis dan hemat biaya, cocok untuk sesi pelatihan
                    yang panjang dan berulang.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bagian Profil */}
        <section id="profil" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Profil Tim SIKOMJARU
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi
                untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi
                darurat jantung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Tujuan Mulia Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fokus kami adalah mengatasi tingginya angka kematian akibat
                    henti jantung dengan menyediakan alat edukasi RJP yang
                    terjangkau. Kami ingin memberdayakan masyarakat awam, kader
                    kesehatan, hingga siswa untuk menjadi penolong pertama yang
                    kompeten dan percaya diri.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang
                    inovatif, ekonomis, dan berakar pada kearifan lokal, serta
                    memperluas akses pelatihan RJP yang efektif dan menyeluruh
                    ke seluruh lapisan masyarakat Indonesia.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900">
                Sikomjaru Team
              </h3>
            </div>

            {/* Dosen Pembimbing */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                    <img
                      src="https://placehold.co/150x150/99f6e4/115e59?text=Dosen+Pembimbing"
                      alt="Dosen Pembimbing"
                      width={150}
                      height={150}
                      className="rounded-lg shadow-md flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            Ns. M. Hanif Prasetya Adhi, S.Kep., M. kep
                          </h4>
                          <p className="text-blue-600 font-semibold">
                            Dosen Pembimbing
                          </p>
                          <p className="text-gray-600 mt-2">
                            Memberikan arahan teknis, validasi akademik, dan
                            penguatan struktur bisnis untuk memastikan SIKOMJARU
                            berkembang secara profesional dan berkelanjutan.
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Button
                            size="sm"
                            className="bg-pink-500 hover:bg-pink-600 text-white"
                          >
                            <a
                              href="https://www.instagram.com/hanif_prasetyaadhi?igsh=MTBhdjhtM2J0dmZiNA=="
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <InstagramIcon />
                              <span className="ml-2">Instagram</span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tim Mahasiswa P2MW */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tim Mahasiswa P2MW
              </h3>

              {/* Carousel untuk Foto Kelompok */}
              <div className="max-w-2xl mx-auto mb-8">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="https://placehold.co/500x300/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+1"
                        alt="Foto Kelompok Tim Mahasiswa P2MW - 1"
                        width={500}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto w-full h-64 object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="https://placehold.co/500x300/fef3c7/d97706?text=Foto+Kelompok+Tim+2"
                        alt="Foto Kelompok Tim Mahasiswa P2MW - 2"
                        width={500}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto w-full h-64 object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="https://placehold.co/500x300/ecfdf5/10b981?text=Foto+Kelompok+Tim+3"
                        alt="Foto Kelompok Tim Mahasiswa P2MW - 3"
                        width={500}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto w-full h-64 object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            {/* Profil Mahasiswa - Grid 2 baris */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Vieki Diva Ksatria */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="https://placehold.co/120x120/bfdbfe/1e40af?text=VD"
                      alt="Vieki Diva Ksatria"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-md mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold text-gray-900">
                      Vieki Diva Ksatria
                    </h4>
                    <p className="text-blue-600 font-semibold">CEO</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Memimpin tim, merancang perencanaan, dan mengawasi
                      pengembangan produk dengan fokus pada inovasi dan
                      kualitas.
                    </p>
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        <a
                          href="https://www.instagram.com/vieki.divaks_?igsh=cHd4d2ZrZGp2MmFu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <InstagramIcon />
                          <span className="ml-2">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ruliyanti */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="https://placehold.co/120x120/fecaca/991b1b?text=R"
                      alt="Ruliyanti"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-md mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold text-gray-900">
                      Ruliyanti
                    </h4>
                    <p className="text-blue-600 font-semibold">Finance</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Mengelola administrasi dan keuangan proyek secara efisien
                      dan akurat, memastikan transparansi finansial tim.
                    </p>
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        <a
                          href="https://www.instagram.com/rulliyyn?igsh=OWplazBmdG80eXo1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <InstagramIcon />
                          <span className="ml-2">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ilham Saifullah Yusup */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="https://placehold.co/120x120/fed7aa/9a3412?text=ISY"
                      alt="Ilham Saifullah Yusup"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-md mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold text-gray-900">
                      Ilham Saifullah Yusup
                    </h4>
                    <p className="text-blue-600 font-semibold">Procurement</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Bertugas membeli dan menyiapkan semua bahan serta alat
                      untuk proses produksi dengan kualitas terbaik.
                    </p>
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        <a
                          href="https://www.instagram.com/hmsy14_?igsh=MTdlMDh3bjlkZWl4Zw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <InstagramIcon />
                          <span className="ml-2">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Diva Bagus Kurniawan */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src="https://placehold.co/120x120/d8b4fe/581c87?text=DBK"
                      alt="Diva Bagus Kurniawan"
                      width={120}
                      height={120}
                      className="rounded-lg shadow-md mx-auto mb-4"
                    />
                    <h4 className="text-xl font-bold text-gray-900">
                      Diva Bagus Kurniawan
                    </h4>
                    <p className="text-blue-600 font-semibold">Publication</p>
                    <p className="text-gray-600 mt-2 text-sm">
                      Bertanggung jawab atas publikasi, promosi, dan citra merek
                      SIKOMJARU di berbagai platform digital.
                    </p>
                    <div className="mt-4">
                      <Button
                        size="sm"
                        className="bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        <a
                          href="https://www.instagram.com/divabagus74?igsh=ZGt0bTVrMmV3YnAx"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <InstagramIcon />
                          <span className="ml-2">Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bagian Penelitian */}
        <section id="penelitian" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Penelitian
              </h2>
              {/* Text Box untuk deskripsi penelitian */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dokumentasi dari proses perancangan, pengujian, hingga
                    sosialisasi produk kepada masyarakat dan institusi
                    pendidikan. SIKOMJARU telah melalui serangkaian penelitian
                    mendalam untuk memastikan efektivitas sebagai alat peraga
                    RJP. Proses penelitian meliputi analisis kebutuhan,
                    pengembangan prototype, pengujian fungsionalitas, hingga
                    evaluasi dampak pembelajaran pada berbagai kelompok target
                    termasuk siswa SMK, kader kesehatan masyarakat, dan tenaga
                    medis profesional.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementasi - Horizontal Carousel */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Implementasi
              </h3>
              <div className="relative px-12">
                <Carousel className="w-full">
                  <CarouselContent className="ml-0">
                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <img
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+SMA"
                            alt="Sosialisasi di SMA Muhammadiyah Tambak"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Sosialisasi di SMA Muhammadiyah Tambak
                            </h4>
                            <p className="text-sm text-gray-600">
                              Edukasi RJP untuk siswa SMK kesehatan
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <img
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+Desa"
                            alt="Sosialisasi di Desa Kalisaleh"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Sosialisasi di Desa Kalisaleh
                            </h4>
                            <p className="text-sm text-gray-600">
                              Pelatihan RJP untuk masyarakat desa
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <img
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Instalasi"
                            alt="Proses Instalasi"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Proses Instalasi & Setup
                            </h4>
                            <p className="text-sm text-gray-600">
                              Pemasangan dan konfigurasi perangkat
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <img
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+Kader"
                            alt="Sosialisasi ke Kader"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Pelatihan Kader Kesehatan
                            </h4>
                            <p className="text-sm text-gray-600">
                              Edukasi untuk kader posyandu dan puskesmas
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <img
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Perancangan"
                            alt="Proses Perancangan"
                            width={400}
                            height={300}
                            className="rounded-lg w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Proses Perancangan
                            </h4>
                            <p className="text-sm text-gray-600">
                              Desain dan pengembangan prototype
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-48 flex items-center justify-center p-6">
                            <div className="text-center">
                              <FlaskConical className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                              <p className="text-blue-800 font-semibold text-lg">
                                Dan banyak kegiatan penelitian lainnya
                              </p>
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Penelitian Berkelanjutan
                            </h4>
                            <p className="text-sm text-gray-600">
                              Evaluasi dan pengembangan lebih lanjut
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Belanja */}
        <section id="belanja" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Belanja Produk SIKOMJARU
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dapatkan alat peraga RJP inovatif kami dengan mudah melalui
                berbagai platform marketplace terpercaya di Indonesia.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <img
                    src="https://placehold.co/600x600/dbeafe/1e3a8a?text=SIKOMJARU"
                    alt="Produk SIKOMJARU"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru
                    </h3>
                    <p className="text-gray-600 mt-2 mb-4">
                      Alat peraga RJP inovatif dengan fitur lengkap: indikator
                      lampu, panduan suara, dan layar LCD.
                    </p>
                    <div className="text-4xl font-bold text-blue-600 mb-6">
                      Rp 660.000
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-800">
                        Tersedia di:
                      </h4>
                      <div className="flex flex-col space-y-3">
                        <Button
                          size="lg"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <ShopeeIcon />
                            <span className="ml-3">Beli di Shopee</span>
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          className="w-full bg-green-500 hover:bg-green-600 text-white justify-start"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="ml-3">Beli di Tokopedia</span>
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white justify-start"
                          asChild
                        >
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <ShoppingBag className="w-6 h-6" />
                            <span className="ml-3">Beli di Lazada</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Section kontak dipindah ke footer */}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6282234845084"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] transition-transform hover:scale-105"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
          {/* WhatsApp Icon - Clean and recognizable */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 sm:w-8 sm:h-8"
          >
            <path d="M20.5 3.5C18.25 1.25 15.2 0 12 0S5.75 1.25 3.5 3.5 0 8.8 0 12c0 2.1.55 4.15 1.6 5.95L.05 24l6.25-1.6c1.75.95 3.7 1.45 5.7 1.45 3.2 0 6.25-1.25 8.5-3.5s3.5-5.3 3.5-8.5-1.25-6.25-3.5-8.5zM12 21.85c-1.8 0-3.55-.45-5.1-1.35l-.35-.2-3.7.95 1-3.6-.25-.4c-.95-1.5-1.45-3.25-1.45-5.05 0-2.65 1.05-5.15 2.95-7.05S9.35 2.15 12 2.15s5.15 1.05 7.05 2.95 2.95 4.4 2.95 7.05-1.05 5.15-2.95 7.05S14.65 21.85 12 21.85z" />
            <path d="M18.75 15.3c-.15-.25-.55-.4-.9-.55l-1.75-.85c-.35-.15-.6-.25-.85.25-.25.5-.85 1.1-1.05 1.3-.2.25-.4.25-.75.1-.35-.15-1.5-.55-2.85-1.75-1.05-.95-1.75-2.1-1.95-2.45-.2-.35 0-.55.15-.7.15-.15.35-.4.5-.6.15-.2.2-.35.35-.55.15-.25.05-.45-.05-.6-.1-.15-.85-2.05-1.15-2.8-.3-.7-.6-.6-.85-.6h-.7c-.25 0-.65.1-.95.45-.35.35-1.25 1.2-1.25 3 0 1.8 1.3 3.55 1.5 3.8.2.25 2.8 4.3 6.75 6.05.95.4 1.65.65 2.25.8.95.3 1.8.25 2.5.15.75-.1 2.35-.95 2.7-1.9.35-.95.35-1.75.25-1.9z" />
          </svg>
        </div>
      </a>

      {/* Footer (mengandung kontak & platform) */}
      <footer id="kontak" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">SJ</span>
                </div>
                <span className="text-xl font-bold">SIKOMJARU</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga
                kesehatan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Supported By</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="https://www.instagram.com/ump.ac.id?igsh=dXRvazl2NGpsM3dn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UMP
                </a>
                <a
                  href="https://www.instagram.com/kemahasiswaan.dikti?igsh=MWJhdmpuY3E5NXRvaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kemahasiswaan Dikti
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Belmawa Dikti
                </a>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform & Sosial</h3>
              <div className="grid grid-cols-4 gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282234845084"
                  className="group"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sikomjaru.official?igsh=MWZ5c3lvdjd1M252bA=="
                  className="group"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition">
                    <InstagramIcon />
                  </div>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@sikomjaru?_t=ZS-8z4z1yF59rF&_r=1"
                  className="group"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-700/40 border border-gray-500/30 flex items-center justify-center text-gray-200 group-hover:bg-gray-900 group-hover:text-white transition">
                    <TiktokIcon />
                  </div>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61576916254865"
                  className="group"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FacebookIcon />
                  </div>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@SIKOMJARU_Phantom_Edukasi_RJP"
                  className="group"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                    <YoutubeIcon />
                  </div>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Logo Partners</h3>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {logoPartners.map((logo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Tooltip */}
                    <div className="hidden sm:block absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-50">
                      {logo.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">
                    info.sikomjaru@email.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Purwokerto, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} SIKOMJARU. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
