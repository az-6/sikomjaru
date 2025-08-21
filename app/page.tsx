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
import { useState } from "react";

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

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#produk", label: "Produk" },
    { href: "#profil", label: "Profil" },
    { href: "#penelitian", label: "Penelitian" },
    { href: "#belanja", label: "Belanja" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">SJ</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                SIKOMJARU
              </span>
            </a>

            {/* Navigasi Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-lg"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base">
                <a href="#belanja">Beli Sekarang</a>
              </Button>
            </div>

            {/* Tombol Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Navigasi Mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit mt-4">
                  <a href="#belanja">Beli Sekarang</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
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
                Tim Inovator Kami
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
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Foto Kelompok Mahasiswa */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tim Mahasiswa P2MW
              </h3>
              <div className="max-w-3xl mx-auto mb-8">
                <img
                  src="https://placehold.co/600x400/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+Mahasiswa+P2MW"
                  alt="Foto Kelompok Tim Mahasiswa P2MW"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg mx-auto"
                />
                <p className="text-gray-600 mt-4 text-sm">
                  Tim mahasiswa P2MW SIKOMJARU: 4 inovator muda yang berdedikasi
                  untuk mengembangkan teknologi pelatihan RJP
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src="https://placehold.co/80x80/bfdbfe/1e40af?text=VD"
                    alt="Vieki Diva Ksatria"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-900">
                    Vieki Diva Ksatria
                  </h4>
                  <p className="text-blue-600 font-semibold">CEO</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Memimpin tim, merancang perencanaan, dan mengawasi
                    pengembangan produk.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src="https://placehold.co/80x80/fecaca/991b1b?text=R"
                    alt="Ruliyanti"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-900">Ruliyanti</h4>
                  <p className="text-blue-600 font-semibold">Finance</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Mengelola administrasi dan keuangan proyek secara efisien
                    dan akurat.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src="https://placehold.co/80x80/fed7aa/9a3412?text=ISY"
                    alt="Ilham Saifullah Yusup"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-900">
                    Ilham Saifullah Yusup
                  </h4>
                  <p className="text-blue-600 font-semibold">Procurement</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Bertugas membeli dan menyiapkan semua bahan serta alat untuk
                    proses produksi.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <img
                    src="https://placehold.co/80x80/d8b4fe/581c87?text=DBK"
                    alt="Diva Bagus Kurniawan"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-900">
                    Diva Bagus Kurniawan
                  </h4>
                  <p className="text-blue-600 font-semibold">Publication</p>
                  <p className="text-gray-600 mt-2 text-sm">
                    Bertanggung jawab atas publikasi, promosi, dan citra merek
                    SIKOMJARU.
                  </p>
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
              <Carousel className="w-full max-w-6xl mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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

                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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

                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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

                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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

                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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

                  <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
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
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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

        {/* Bagian E-Commerce & Media Sosial */}
        <section
          id="kontak"
          className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Temukan SIKOMJARU di Platform Favorit Anda
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dapatkan produk SIKOMJARU melalui e-commerce terpercaya dan
                ikuti perkembangan terbaru di media sosial kami
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* E-Commerce Section */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  🛒 Belanja di E-Commerce
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Shopee */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-orange-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Shopee
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        Gratis ongkir & cashback menarik
                      </p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Beli di Shopee
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Tokopedia */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Tokopedia
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        Mulai dari produk terbaik
                      </p>
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Beli di Tokopedia
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Lazada */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        Lazada
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        Pengiriman cepat se-Indonesia
                      </p>
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Beli di Lazada
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Media Sosial Section */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  📱 Ikuti Kami di Media Sosial
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* WhatsApp */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">WhatsApp</h5>
                      <Button
                        size="sm"
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Instagram */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <InstagramIcon />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        Instagram
                      </h5>
                      <Button
                        size="sm"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* TikTok */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <TiktokIcon />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">TikTok</h5>
                      <Button
                        size="sm"
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white"
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Follow
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Facebook */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FacebookIcon />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">Facebook</h5>
                      <Button
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Like
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* YouTube */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <YoutubeIcon />
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">YouTube</h5>
                      <Button
                        size="sm"
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Subscribe
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-500 to-blue-600">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Siap Bergabung dengan Komunitas SIKOMJARU?
                    </h3>
                    <p className="text-teal-100 mb-6">
                      Dapatkan update terbaru, promo eksklusif, dan konten
                      edukatif seputar pelatihan RJP
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        size="lg"
                        className="bg-white text-teal-600 hover:bg-gray-100"
                      >
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Belanja Sekarang
                      </Button>
                      <Button
                        size="lg"
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all duration-300"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Hubungi Kami
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Akun Official</h3>
              <div className="text-gray-400 space-y-2">
                <p>Instagram: sikomjaru.official</p>
                <p>TikTok: sikomjaru.official</p>
                <p>Shopee: sikomjaru.official.store</p>
                <p>Tokopedia: sikomjaru.official.store</p>
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
