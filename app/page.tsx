"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  Star,
  Quote,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Zap,
  Shield,
  Target,
  Eye,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                SIKOMJARU
              </span>
            </div>

            {/* Navigasi Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Beranda
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Tentang
              </a>
              <a
                href="#product"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Produk
              </a>
              <a
                href="#training"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Pelatihan
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Testimoni
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Kontak
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <a href="#contact">Mulai</a>
              </Button>
            </div>

            {/* Tombol Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigasi Mobile */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Tentang
                </a>
                <a
                  href="#product"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Produk
                </a>
                <a
                  href="#training"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Pelatihan
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Testimoni
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-teal-600 font-medium"
                >
                  Kontak
                </a>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit">
                  <a href="#contact">Mulai</a>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Bagian Hero */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 lg:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Kuasai CPR,
                  <span className="text-teal-600"> Selamatkan Nyawa</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  SIKOMJARU adalah pelatihan CPR inovatif yang merevolusi
                  pendidikan penyelamatan jiwa. Rasakan pelatihan realistis
                  dengan teknologi umpan balik canggih.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                >
                  <a href="#product">Jelajahi Produk</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 bg-transparent"
                >
                  <a href="#training">Daftar Pelatihan</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=+Pelatihan+CPR+SIKOMJARU"
                alt=" Pelatihan CPR SIKOMJARU"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Fitur */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih SIKOMJARU?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              pelatihan CPR inovatif kami menggabungkan teknologi mutakhir
              dengan metode pendidikan yang telah terbukti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pelatihan Realistis
                </h3>
                <p className="text-gray-600">
                  Rasakan pelatihan CPR yang hidup dengan umpan balik kompresi
                  dada yang akurat secara anatomi
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pelatihan Profesional
                </h3>
                <p className="text-gray-600">
                  Dipercaya oleh sekolah kedokteran, rumah sakit, dan para
                  profesional kesehatan di seluruh dunia
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Kualitas Tersertifikasi
                </h3>
                <p className="text-gray-600">
                  Memenuhi standar internasional untuk peralatan pelatihan CPR
                  dan keunggulan pendidikan
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pembelajaran Komprehensif
                </h3>
                <p className="text-gray-600">
                  Program pelatihan lengkap dari CPR dasar hingga teknik bantuan
                  hidup tingkat lanjut
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bagian Tentang */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Tentang Tim P2MW Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SIKOMJARU dikembangkan oleh tim P2MW (Program Mahasiswa
                  Wirausaha) yang terdiri dari 4 mahasiswa berbakat dan 1 dosen
                  pembimbing berpengalaman. Tim ini terbentuk dari keprihatinan
                  bersama akan kurangnya peralatan pelatihan CPR yang mudah
                  diakses dan berkualitas tinggi di Indonesia.
                </p>
                <p>
                  Dengan latar belakang multidisiplin dari bidang teknik,
                  kesehatan, dan pendidikan, tim kami menggabungkan semangat
                  inovasi mahasiswa dengan bimbingan akademis yang mendalam.
                  Kolaborasi ini menciptakan solusi yang tidak hanya secara
                  teknis canggih, tetapi juga relevan dengan kebutuhan nyata di
                  lapangan untuk pendidikan penyelamatan jiwa.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Kisah+Inovasi"
                alt="Kisah Inovasi SIKOMJARU"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Profil Tim P2MW */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tim P2MW SIKOMJARU
              </h3>
              <p className="text-xl text-gray-600">
                Mengenal lebih dekat tim inovator di balik SIKOMJARU
              </p>
            </div>

            {/* Dosen Pembimbing */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Dosen Pembimbing
              </h4>
              <div className="max-w-2xl mx-auto">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                      <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-2xl">
                          DP
                        </span>
                      </div>
                      <div>
                        <h5 className="text-xl font-bold text-gray-900 mb-2">
                          Dr. [Nama Dosen Pembimbing]
                        </h5>
                        <p className="text-gray-700 mb-1">
                          Dosen Pembimbing P2MW
                        </p>
                        <p className="text-gray-600">
                          Ahli dalam bidang teknologi kesehatan dan inovasi
                          medis yang membimbing tim dalam pengembangan SIKOMJARU
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tim Mahasiswa */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Tim Mahasiswa
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">M1</span>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      [Nama Mahasiswa 1]
                    </h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Ketua Tim & Developer
                    </p>
                    <p className="text-gray-500 text-xs">
                      Memimpin pengembangan teknologi dan koordinasi tim
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">M2</span>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      [Nama Mahasiswa 2]
                    </h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Desainer Produk
                    </p>
                    <p className="text-gray-500 text-xs">
                      Bertanggung jawab atas desain dan user experience
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">M3</span>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      [Nama Mahasiswa 3]
                    </h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Teknisi & Engineer
                    </p>
                    <p className="text-gray-500 text-xs">
                      Menangani aspek teknis dan engineering produk
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">M4</span>
                    </div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      [Nama Mahasiswa 4]
                    </h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Marketing & Business
                    </p>
                    <p className="text-gray-500 text-xs">
                      Mengembangkan strategi bisnis dan pemasaran
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Misi & Visi */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mendemokratisasikan pendidikan penyelamatan jiwa dengan
                  menyediakan solusi pelatihan CPR yang inovatif, mudah diakses,
                  dan efektif yang memberdayakan individu dan organisasi untuk
                  merespons dengan percaya diri dalam situasi darurat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi penyedia teknologi pelatihan CPR terkemuka di Asia
                  Tenggara, menciptakan dunia di mana setiap orang memiliki
                  pengetahuan dan kepercayaan diri untuk menyelamatkan nyawa
                  melalui solusi pendidikan yang inovatif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bagian Produk */}
      <section id="product" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SIKOMJARU
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              pelatihan CPR generasi berikutnya dengan sensor umpan balik
              canggih dan anatomi yang realistis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Fitur+Produk+SIKOMJARU"
                alt="Fitur Produk SIKOMJARU"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Sistem Umpan Balik Real-time
                    </h3>
                    <p className="text-gray-600">
                      Sensor canggih memberikan umpan balik instan tentang
                      kedalaman, kecepatan, dan penempatan tangan saat kompresi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Bahan Kelas Medis
                    </h3>
                    <p className="text-gray-600">
                      Kulit silikon yang tahan lama dengan lapisan antimikroba
                      untuk penggunaan berulang yang aman
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Konektivitas Cerdas
                    </h3>
                    <p className="text-gray-600">
                      Konektivitas Bluetooth untuk pelacakan kinerja dan laporan
                      pelatihan terperinci
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Standar Internasional
                    </h3>
                    <p className="text-gray-600">
                      Sesuai dengan Pedoman AHA 2020 dan Standar ERC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Fitur Produk */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Umpan Balik Real-time
                </h3>
                <p className="text-gray-600">
                  Umpan balik instan tentang kualitas kompresi membantu
                  meningkatkan teknik
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Teknologi Cerdas
                </h3>
                <p className="text-gray-600">
                  Elektronik canggih melacak dan menganalisis metrik kinerja
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Desain Tahan Lama
                </h3>
                <p className="text-gray-600">
                  Dibuat untuk menahan pelatihan intensif dengan bahan kelas
                  medis
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Siap untuk Banyak Pengguna
                </h3>
                <p className="text-gray-600">
                  Sempurna untuk pelatihan kelompok dengan perawatan dan
                  pembersihan yang mudah
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Pelatihan */}
      <section id="training" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Pelatihan
            </h2>
            <p className="text-xl text-gray-600">
              Kursus pelatihan CPR profesional untuk semua tingkat keahlian
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CPR Dasar */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-green-100 text-green-800">Pemula</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      Rp 500rb
                    </div>
                    <div className="text-sm text-gray-500">per orang</div>
                  </div>
                </div>
                <CardTitle className="text-xl">Pelatihan CPR Dasar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Keterampilan CPR penting untuk masyarakat umum dan petugas
                  keselamatan kerja.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Durasi: 4 jam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Maks 12 peserta
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Termasuk sertifikat
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* CPR Lanjutan */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-t-orange-500">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-orange-100 text-orange-800">
                    Lanjutan
                  </Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      Rp 1,2jt
                    </div>
                    <div className="text-sm text-gray-500">per orang</div>
                  </div>
                </div>
                <CardTitle className="text-xl">
                  CPR Lanjutan untuk Tenaga Kesehatan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Pelatihan komprehensif untuk para profesional kesehatan dan
                  mahasiswa kedokteran.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Durasi: 8 jam</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Maks 8 peserta
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Sertifikasi profesional
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            {/* Pelatihan Korporat */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-100 text-blue-800">Korporat</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      Rp 8jt
                    </div>
                    <div className="text-sm text-gray-500">per grup</div>
                  </div>
                </div>
                <CardTitle className="text-xl">
                  Program Pertolongan Pertama Korporat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Pelatihan keselamatan kerja termasuk CPR dan tanggap darurat.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Durasi: 2 hari
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Hingga 20 peserta
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">
                      Sertifikasi korporat
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Minta Penawaran
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Klien Kami
            </h2>
            <p className="text-xl text-gray-600">
              Dipercaya oleh para profesional dan institusi kesehatan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-blue-100 text-blue-800 text-xs">
                    Sekolah Kedokteran
                  </Badge>
                </div>
                <Quote className="w-6 h-6 text-teal-600 mb-3" />
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "SIKOMJARU telah merevolusi program pelatihan CPR kami.
                  Mahasiswa kami mengembangkan teknik yang benar jauh lebih
                  cepat dengan sistem umpan balik real-time."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=Dr.+Maria"
                    alt="Dr. Maria Santoso"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Dr. Maria Santoso
                    </div>
                    <div className="text-xs text-gray-600">
                      Fakultas Kedokteran Universitas Indonesia
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-green-100 text-green-800 text-xs">
                    Rumah Sakit
                  </Badge>
                </div>
                <Quote className="w-6 h-6 text-teal-600 mb-3" />
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Staf perawat kami merasa lebih percaya diri dan siap
                  menghadapi keadaan darurat yang sebenarnya. Pelatihannya
                  sangat realistis dan efektif."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=Perawat+Indira"
                    alt="Perawat Indira Putri"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Perawat Indira Putri, S.Kep., Ners
                    </div>
                    <div className="text-xs text-gray-600">
                      RS Cipto Mangunkusumo
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Badge className="ml-3 bg-purple-100 text-purple-800 text-xs">
                    Korporat
                  </Badge>
                </div>
                <Quote className="w-6 h-6 text-teal-600 mb-3" />
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "Karyawan kami sekarang merasa percaya diri menangani situasi
                  darurat. Pelatihan yang komprehensif membuat semua perbedaan."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40&text=Budi+H"
                    alt="Budi Hartono"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      Budi Hartono
                    </div>
                    <div className="text-xs text-gray-600">
                      PT Astra International
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistik */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">500+</div>
              <div className="text-gray-600">Orang Terlatih</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Institusi Mitra</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">2+</div>
              <div className="text-gray-600">Tahun Keunggulan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Kontak */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap mengubah pelatihan CPR Anda? Hubungi kami hari ini
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulir Kontak */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Kirim Pesan kepada Kami
                </CardTitle>
                <p className="text-gray-600">
                  Kami akan menghubungi Anda kembali dalam 24 jam
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nama Depan *</Label>
                      <Input
                        id="firstName"
                        placeholder="Masukkan nama depan Anda"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang *</Label>
                      <Input
                        id="lastName"
                        placeholder="Masukkan nama belakang Anda"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Alamat Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan alamat email Anda"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input
                      id="phone"
                      placeholder="Masukkan nomor telepon Anda"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Jenis Pertanyaan *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis pertanyaan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">
                          Informasi Produk
                        </SelectItem>
                        <SelectItem value="training">
                          Program Pelatihan
                        </SelectItem>
                        <SelectItem value="demo">Demo Produk</SelectItem>
                        <SelectItem value="partnership">Kemitraan</SelectItem>
                        <SelectItem value="support">Dukungan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      placeholder="Beri tahu kami tentang kebutuhan atau pertanyaan Anda"
                      rows={4}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informasi Kontak */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Hubungi Kami
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>+62 21 1234 5678</p>
                          <p>+62 812 3456 7890 (WhatsApp)</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Email Kami
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>info@sikomjaru.com</p>
                          <p>sales@sikomjaru.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Kunjungi Kami
                        </h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Pusat Inovasi SIKOMJARU</p>
                          <p>Jl. Teknologi No. 123</p>
                          <p>Jakarta Selatan 12345</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Siap untuk Memulai?
                </h3>
                <p className="text-orange-800 mb-4">
                  Jadwalkan demonstrasi produk gratis dan lihat SIKOMJARU
                  beraksi
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Jadwalkan Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Mengubah Pelatihan CPR Anda?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Bergabunglah dengan ribuan profesional kesehatan yang mempercayai
              SIKOMJARU untuk pendidikan penyelamatan jiwa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <a href="#contact">Mulai Hari Ini</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 bg-transparent"
              >
                <a href="#product">Pelajari Lebih Lanjut</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Info Perusahaan */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">SIKOMJARU</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                pelatihan CPR inovatif yang merevolusi pendidikan penyelamatan
                jiwa bagi para profesional kesehatan.
              </p>
            </div>

            {/* Tautan Cepat */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tautan Cepat</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
                <a
                  href="#product"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produk
                </a>
                <a
                  href="#training"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Program Pelatihan
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimoni
                </a>
              </nav>
            </div>

            {/* Layanan */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Layanan</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#training"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pelatihan CPR Dasar
                </a>
                <a
                  href="#training"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CPR Lanjutan
                </a>
                <a
                  href="#training"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pelatihan Korporat
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Demo Produk
                </a>
              </nav>
            </div>

            {/* Info Kontak */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Info Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-400">info@sikomjaru.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-400">+62 21 1234 5678</span>
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
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SIKOMJARU. Hak cipta dilindungi
                undang-undang.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kebijakan Privasi
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ketentuan Layanan
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
