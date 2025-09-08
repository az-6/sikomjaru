"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Heart,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
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

// Komponen untuk ikon media sosial (contoh sederhana)
const InstagramIcon = ({ className }: { className?: string }) => (
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
    className={className}
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
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.56a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z" />
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
    className="text-white"
  >
    <path d="M21.49 9.236c-.047-.202-.147-.384-.288-.535l-2.43-2.52c-.22-.228-.524-.345-.832-.345H5.96c-.32 0-.624.125-.848.353l-2.52 2.52c-.14.14-.24.324-.288.527L1.01 14.73c-.047.202.012.412.152.571l.012.012c.047.055.1.1.16.14l.012.008c.18.125.396.188.612.188h18c.216 0 .432-.063.612-.188l.012-.008c.06-.04.113-.085.16-.14l.012-.012c.14-.16.2-.37.152-.572L21.49 9.236zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);

export default function LandingPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  // Komponen untuk gambar yang bisa diklik untuk dibuka modal
  const ClickableImage = ({
    src,
    alt,
    className,
    onError,
  }: {
    src: string;
    alt: string;
    className?: string;
    onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  }) => (
    <img
      src={src}
      alt={alt}
      className={`cursor-pointer hover:opacity-90 transition-opacity ${
        className || ""
      }`}
      onClick={() => setSelectedImage(src)}
      onError={onError}
    />
  );

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <main className="pt-14 sm:pt-16 lg:pt-20">
        {/* Adjusted padding for new responsive header height */}
        {/* Bagian Home */}
        <section
          id="home"
          className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://placehold.co/1920x1080/f0f9ff/1e40af?text=Medical+Training+CPR+Healthcare+Professional+Background')`,
              }}
            ></div>
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-teal-800/70 to-blue-800/75"></div>
          </div>

          {/* Content with relative positioning */}
          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    {/* Logo Partners tepat di atas judul */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:justify-start mb-4">
                      {logoPartners.slice(1).map((logo, index) => (
                        <div
                          key={index}
                          className="relative group flex-shrink-0"
                        >
                          <ClickableImage
                            src={logo.src}
                            alt={logo.alt}
                            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-300 max-w-[60px] sm:max-w-[80px]"
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

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                      SIKOMJARU: Solusi Inovatif Pelatihan{" "}
                      <span className="text-blue-300">Selamatkan Nyawa</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                      Tingkatkan keterampilan Bantuan Hidup Dasar (BHD) dengan
                      alat peraga yang akurat, terjangkau, dan mudah digunakan.
                      Selamatkan nyawa dengan persiapan yang tepat.
                    </p>
                  </div>
                </div>
                <div className="relative order-1 lg:order-2">
                  {/* Instagram-style Media Carousel */}
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {/* Slide 1 - Video */}
                        <CarouselItem>
                          <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <div className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                              </div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">
                                Video Demo SIKOMJARU
                              </h3>
                              <p className="text-gray-600">
                                Lihat bagaimana alat peraga SIKOMJARU bekerja
                                dalam pelatihan RJP
                              </p>
                            </div>
                            {/* Video placeholder - you can replace with actual video element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-50"></div>
                          </div>
                        </CarouselItem>

                        {/* Slide 2 - Foto Produk */}
                        <CarouselItem>
                          <ClickableImage
                            src="https://placehold.co/600x450/e0f2fe/0ea5e9?text=Produk+SIKOMJARU+Tampak+Depan"
                            alt="Produk SIKOMJARU Tampak Depan"
                            className="w-full h-full object-cover aspect-[4/3]"
                          />
                        </CarouselItem>

                        {/* Slide 3 - Foto Fitur */}
                        <CarouselItem>
                          <ClickableImage
                            src="https://placehold.co/600x450/d1fae5/34d399?text=Fitur+LCD+dan+Speaker"
                            alt="Fitur LCD dan Speaker SIKOMJARU"
                            className="w-full h-full object-cover aspect-[4/3]"
                          />
                        </CarouselItem>

                        {/* Slide 4 - Foto dalam Penggunaan */}
                        <CarouselItem>
                          <ClickableImage
                            src="https://placehold.co/600x450/fef3c7/d97706?text=SIKOMJARU+dalam+Pelatihan"
                            alt="SIKOMJARU dalam Pelatihan RJP"
                            className="w-full h-full object-cover aspect-[4/3]"
                          />
                        </CarouselItem>

                        {/* Slide 5 - Foto Detail Komponen */}
                        <CarouselItem>
                          <ClickableImage
                            src="https://placehold.co/600x450/ecfdf5/10b981?text=Detail+Komponen+SIKOMJARU"
                            alt="Detail Komponen SIKOMJARU"
                            className="w-full h-full object-cover aspect-[4/3]"
                          />
                        </CarouselItem>
                      </CarouselContent>

                      {/* Navigation Buttons */}
                      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                      {/* Instagram-style dots indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Produk */}
        <section id="produk" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Produk Inovatif SIKOMJARU
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan
                fitur canggih untuk simulasi yang realistis dan terjangkau.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
              <div className="relative order-2 lg:order-1">
                {/* Product Features Carousel */}
                <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {/* Slide 1 - Tampak Produk Utama */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/e0f2fe/0ea5e9?text=Tampak+Produk+SIKOMJARU"
                          alt="Tampak Produk SIKOMJARU"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>

                      {/* Slide 2 - Fitur LCD Display */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/d1fae5/34d399?text=Layar+LCD+Digital"
                          alt="Layar LCD Digital SIKOMJARU"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>

                      {/* Slide 3 - Speaker dan Audio */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/fef3c7/d97706?text=Panduan+Suara+Speaker"
                          alt="Panduan Suara Speaker"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>

                      {/* Slide 4 - Indikator Lampu */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/ecfdf5/10b981?text=Indikator+Lampu+LED"
                          alt="Indikator Lampu LED"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>

                      {/* Slide 5 - Material dan Build Quality */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/fecaca/991b1b?text=Material+Fiber+Berkualitas"
                          alt="Material Fiber Berkualitas"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>

                      {/* Slide 6 - Batik Design */}
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/dbeafe/1e3a8a?text=Motif+Batik+Banyumasan"
                          alt="Motif Batik Banyumasan"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                  </Carousel>
                </div>
              </div>
              <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Manfaat dan Keunggulan
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  SIKOMJARU mengatasi kelemahan produk komersial dengan harga
                  yang jauh lebih terjangkau (hanya 15% dari harga pasar),
                  material fiber yang kokoh, serta fitur edukatif yang ramah
                  bagi pemula.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Harga Terjangkau
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Memudahkan akses bagi sekolah, kader kesehatan, dan
                        individu.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Desain Edukatif & Lokal
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Motif Batik Banyumasan sebagai ikon budaya dan daya
                        tarik edukatif.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        Material Tahan Lama
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Terbuat dari fiber yang kuat, tahan air, dan mudah
                        diperbaiki.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8 lg:mb-12 mt-16 lg:mt-20">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Fitur Utama & Spesifikasi
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Indikator Lampu
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Memberi tanda visual jika kedalaman kompresi sudah sesuai (5
                    cm) atau belum.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Panduan Suara
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Speaker memandu pengguna menekan dada sesuai ketukan standar
                    (100-120 kali/menit).
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Layar LCD Digital
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Menampilkan jumlah kompresi, visualisasi EKG, dan indikator
                    tekanan secara real-time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Adaptor Listrik
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Lebih praktis dan hemat biaya, cocok untuk sesi pelatihan
                    yang panjang dan berulang.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bagian Profil */}
        <section id="profil" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Profil Tim SIKOMJARU
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi
                untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi
                darurat jantung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Tujuan Mulia Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Fokus kami adalah mengatasi tingginya angka kematian akibat
                    henti jantung dengan menyediakan alat edukasi RJP yang
                    terjangkau. Kami ingin memberdayakan masyarakat awam, kader
                    kesehatan, hingga siswa untuk menjadi penolong pertama yang
                    kompeten dan percaya diri.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    Visi Kami
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang
                    inovatif, ekonomis, dan berakar pada kearifan lokal, serta
                    memperluas akses pelatihan RJP yang efektif dan menyeluruh
                    ke seluruh lapisan masyarakat Indonesia.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mb-12 lg:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Sikomjaru Team
              </h3>
            </div>

            {/* Team Layout - Photo Carousel Left, Team Cards Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
              {/* Left Side - Team Photo Carousel */}
              <div className="relative order-1 lg:order-1">
                <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+1"
                          alt="Foto Kelompok Tim Mahasiswa P2MW - 1"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/fef3c7/d97706?text=Foto+Kelompok+Tim+2"
                          alt="Foto Kelompok Tim Mahasiswa P2MW - 2"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <ClickableImage
                          src="https://placehold.co/600x500/ecfdf5/10b981?text=Foto+Kelompok+Tim+3"
                          alt="Foto Kelompok Tim Mahasiswa P2MW - 3"
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                  </Carousel>
                </div>
              </div>

              {/* Right Side - Team Members */}
              <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
                {/* Dosen Pembimbing */}
                <div>
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3">
                        <ClickableImage
                          src="https://placehold.co/60x60/99f6e4/115e59?text=HP"
                          alt="Ns. M. Hanif Prasetya Adhi"
                          className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                            Ns. M. Hanif Prasetya Adhi, S.Kep., M.Kep
                          </h4>
                          <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                            COO
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button
                            size="sm"
                            className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                          >
                            <a
                              href="https://www.instagram.com/hanif_prasetyaadhi?igsh=MTBhdjhtM2J0dmZiNA=="
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <InstagramIcon className="w-3 h-3" />
                              <span className="ml-1 hidden sm:inline">
                                Instagram
                              </span>
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Mahasiswa */}
                <div>
                  <div className="space-y-2 sm:space-y-3">
                    {/* Vieki Diva Ksatria */}
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center space-x-3">
                          <ClickableImage
                            src="https://placehold.co/60x60/bfdbfe/1e40af?text=VD"
                            alt="Vieki Diva Ksatria"
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                              Vieki Diva Ksatria
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                              CEO
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                            >
                              <a
                                href="https://www.instagram.com/vieki.divaks_?igsh=cHd4d2ZrZGp2MmFu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <InstagramIcon className="w-3 h-3" />
                                <span className="ml-1 hidden sm:inline">
                                  Instagram
                                </span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ruliyanti */}
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center space-x-3">
                          <ClickableImage
                            src="https://placehold.co/60x60/fecaca/991b1b?text=R"
                            alt="Ruliyanti"
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                              Ruliyanti
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                              Finance
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                            >
                              <a
                                href="https://www.instagram.com/rulliyyn?igsh=OWplazBmdG80eXo1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <InstagramIcon className="w-3 h-3" />
                                <span className="ml-1 hidden sm:inline">
                                  Instagram
                                </span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Ilham Saifullah Yusup */}
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center space-x-3">
                          <ClickableImage
                            src="https://placehold.co/60x60/fed7aa/9a3412?text=ISY"
                            alt="Ilham Saifullah Yusup"
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                              Ilham Saifullah Yusup
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                              Procurement
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                            >
                              <a
                                href="https://www.instagram.com/hmsy14_?igsh=MTdlMDh3bjlkZWl4Zw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <InstagramIcon className="w-3 h-3" />
                                <span className="ml-1 hidden sm:inline">
                                  Instagram
                                </span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Diva Bagus Kurniawan */}
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center space-x-3">
                          <ClickableImage
                            src="https://placehold.co/60x60/d8b4fe/581c87?text=DBK"
                            alt="Diva Bagus Kurniawan"
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                              Diva Bagus Kurniawan
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                              Publication
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                            >
                              <a
                                href="https://www.instagram.com/divabagus74?igsh=ZGt0bTVrMmV3YnAx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <InstagramIcon className="w-3 h-3" />
                                <span className="ml-1 hidden sm:inline">
                                  Instagram
                                </span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Sertifikasi & Legalitas */}
        <section id="sertifikasi" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Sertifikasi & Legalitas
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                SIKOMJARU telah memiliki legalitas dan sertifikasi resmi sebagai
                produk inovasi yang terdaftar dan diakui secara hukum.
              </p>
            </div>

            {/* Sertifikasi Grid - 2 Items Centered */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Dokumen Resmi
              </h3>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
                  {/* NIB */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <ClickableImage
                        src="https://placehold.co/400x300/dbeafe/1e3a8a?text=Surat+NIB+SIKOMJARU"
                        alt="Surat NIB (Nomor Induk Berusaha) SIKOMJARU"
                        className="rounded-lg w-full h-36 sm:h-48 object-cover"
                      />
                      <div className="p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Surat NIB (Nomor Induk Berusaha)
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Legalitas usaha resmi dari pemerintah Indonesia
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* HKI */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <ClickableImage
                        src="https://placehold.co/400x300/ecfdf5/10b981?text=Sertifikat+HKI+SIKOMJARU"
                        alt="Sertifikat HKI (Hak Kekayaan Intelektual) SIKOMJARU"
                        className="rounded-lg w-full h-36 sm:h-48 object-cover"
                      />
                      <div className="p-3 sm:p-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                          Sertifikat HKI (Hak Kekayaan Intelektual)
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Perlindungan hukum atas inovasi produk SIKOMJARU
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bagian Penelitian */}
        <section id="penelitian" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Penelitian
              </h2>
              {/* Text Box untuk deskripsi penelitian */}
              <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
                <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-200">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Implementasi
              </h3>
              <div className="relative px-6 sm:px-12">
                <Carousel className="w-full">
                  <CarouselContent className="ml-0">
                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+SMA"
                            alt="Sosialisasi di SMA Muhammadiyah Tambak"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Sosialisasi di SMA Muhammadiyah Tambak
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Edukasi RJP untuk siswa SMK kesehatan
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+Desa"
                            alt="Sosialisasi di Desa Kalisaleh"
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
                          <ClickableImage
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Instalasi"
                            alt="Proses Instalasi"
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
                          <ClickableImage
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+Kader"
                            alt="Sosialisasi ke Kader"
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
                          <ClickableImage
                            src="https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Perancangan"
                            alt="Proses Perancangan"
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
        <section id="belanja" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Belanja Produk SIKOMJARU
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Dapatkan alat peraga RJP inovatif kami dengan mudah melalui
                berbagai platform marketplace terpercaya di Indonesia.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  {/* Product Image Carousel */}
                  <div className="relative order-1 md:order-1">
                    <div className="relative rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden bg-white">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {/* Slide 1 - Tampak Produk Utama */}
                          <CarouselItem>
                            <ClickableImage
                              src="https://placehold.co/600x600/dbeafe/1e3a8a?text=SIKOMJARU+Produk+Utama"
                              alt="Produk SIKOMJARU Tampak Utama"
                              className="w-full h-full object-cover aspect-square"
                            />
                          </CarouselItem>

                          {/* Slide 2 - Tampak Samping */}
                          <CarouselItem>
                            <ClickableImage
                              src="https://placehold.co/600x600/e0f2fe/0ea5e9?text=SIKOMJARU+Tampak+Samping"
                              alt="Produk SIKOMJARU Tampak Samping"
                              className="w-full h-full object-cover aspect-square"
                            />
                          </CarouselItem>

                          {/* Slide 3 - Fitur LCD */}
                          <CarouselItem>
                            <ClickableImage
                              src="https://placehold.co/600x600/d1fae5/34d399?text=Fitur+LCD+SIKOMJARU"
                              alt="Fitur LCD Digital SIKOMJARU"
                              className="w-full h-full object-cover aspect-square"
                            />
                          </CarouselItem>

                          {/* Slide 4 - Detail Komponen */}
                          <CarouselItem>
                            <ClickableImage
                              src="https://placehold.co/600x600/fef3c7/d97706?text=Detail+Komponen+SIKOMJARU"
                              alt="Detail Komponen SIKOMJARU"
                              className="w-full h-full object-cover aspect-square"
                            />
                          </CarouselItem>

                          {/* Slide 5 - Motif Batik */}
                          <CarouselItem>
                            <ClickableImage
                              src="https://placehold.co/600x600/ecfdf5/10b981?text=Motif+Batik+Banyumasan"
                              alt="Motif Batik Banyumasan SIKOMJARU"
                              className="w-full h-full object-cover aspect-square"
                            />
                          </CarouselItem>
                        </CarouselContent>

                        {/* Navigation Buttons */}
                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                        {/* Slide indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                          <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 order-2 md:order-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru
                    </h3>
                    <p className="text-gray-600 mt-2 mb-4 text-sm sm:text-base">
                      Alat peraga RJP inovatif dengan fitur lengkap: indikator
                      lampu, panduan suara, dan layar LCD.
                    </p>
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
                      Rp 660.000
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                        Tersedia di:
                      </h4>
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <Button
                          size="lg"
                          className="w-full bg-orange-500 hover:bg-orange-600 text-white justify-start text-sm sm:text-base"
                          asChild
                        >
                          <a
                            href="https://id.shp.ee/xPVSBVK"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="ml-2 sm:ml-3">Beli di Shopee</span>
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          className="w-full bg-green-500 hover:bg-green-600 text-white justify-start text-sm sm:text-base"
                          asChild
                        >
                          <a
                            href="https://tk.tokopedia.com/ZSAC9y2ch/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ShoppingBag className="w-4 h-4 sm:w-6 sm:h-6" />
                            <span className="ml-2 sm:ml-3">
                              Beli di Tokopedia
                            </span>
                          </a>
                        </Button>
                        <Button
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-white justify-start text-sm sm:text-base"
                          asChild
                        >
                          <a
                            href="https://wa.me/6282234845084"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
                            <span className="ml-2 sm:ml-3">
                              Pesan via WhatsApp
                            </span>
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

        {/* Bagian Review & Testimoni */}
        <section id="review" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Review & Testimoni
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai
                institusi pendidikan, rumah sakit, dan komunitas kesehatan di
                seluruh Indonesia.
              </p>
            </div>

            {/* Review Photos Carousel - Horizontal Layout */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                Foto Review Pengguna
              </h3>
              <div className="relative px-6 sm:px-12">
                <Carousel className="w-full">
                  <CarouselContent className="ml-0">
                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/e0f2fe/0ea5e9?text=Review+Mahasiswa+Keperawatan"
                            alt="Review dari Mahasiswa Keperawatan"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Mahasiswa Keperawatan
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Feedback positif dari mahasiswa program studi
                              keperawatan
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/d1fae5/34d399?text=Review+Tenaga+Medis+RS"
                            alt="Review dari Tenaga Medis Rumah Sakit"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Tenaga Medis Rumah Sakit
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Apresiasi dari dokter dan perawat profesional
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/fef3c7/d97706?text=Review+Guru+SMK+Kesehatan"
                            alt="Review dari Guru SMK Kesehatan"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Guru SMK Kesehatan
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Pengalaman menggunakan SIKOMJARU dalam
                              pembelajaran
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/dbeafe/1e3a8a?text=Review+Kader+Posyandu"
                            alt="Review dari Kader Posyandu"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Kader Posyandu
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Manfaat SIKOMJARU untuk pelatihan masyarakat
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/ecfdf5/10b981?text=Review+Organisasi+Mahasiswa"
                            alt="Review dari Organisasi Mahasiswa"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Organisasi Mahasiswa
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Penggunaan untuk pelatihan BHD di kampus
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <ClickableImage
                            src="https://placehold.co/400x300/fed7aa/9a3412?text=Review+Puskesmas+Daerah"
                            alt="Review dari Puskesmas Daerah"
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Testimoni Puskesmas Daerah
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Implementasi untuk program kesehatan masyarakat
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>

                    <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-36 sm:h-48 flex items-center justify-center p-6">
                            <div className="text-center">
                              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                              <p className="text-sm font-semibold text-blue-800">
                                Kepuasan 100%
                              </p>
                            </div>
                          </div>
                          <div className="p-3 sm:p-4">
                            <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                              Tingkat Kepuasan Tinggi
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Testimoni dan review positif dari seluruh pengguna
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

        {/* Section kontak dipindah ke footer */}
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6282234845084"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[60] transition-transform hover:scale-105"
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
          {/* WhatsApp Icon - Clean and recognizable */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          >
            <path d="M20.5 3.5C18.25 1.25 15.2 0 12 0S5.75 1.25 3.5 3.5 0 8.8 0 12c0 2.1.55 4.15 1.6 5.95L.05 24l6.25-1.6c1.75.95 3.7 1.45 5.7 1.45 3.2 0 6.25-1.25 8.5-3.5s3.5-5.3 3.5-8.5-1.25-6.25-3.5-8.5zM12 21.85c-1.8 0-3.55-.45-5.1-1.35l-.35-.2-3.7.95 1-3.6-.25-.4c-.95-1.5-1.45-3.25-1.45-5.05 0-2.65 1.05-5.15 2.95-7.05S9.35 2.15 12 2.15s5.15 1.05 7.05 2.95 2.95 4.4 2.95 7.05-1.05 5.15-2.95 7.05S14.65 21.85 12 21.85z" />
            <path d="M18.75 15.3c-.15-.25-.55-.4-.9-.55l-1.75-.85c-.35-.15-.6-.25-.85.25-.25.5-.85 1.1-1.05 1.3-.2.25-.4.25-.75.1-.35-.15-1.5-.55-2.85-1.75-1.05-.95-1.75-2.1-1.95-2.45-.2-.35 0-.55.15-.7.15-.15.35-.4.5-.6.15-.2.2-.35.35-.55.15-.25.05-.45-.05-.6-.1-.15-.85-2.05-1.15-2.8-.3-.7-.6-.6-.85-.6h-.7c-.25 0-.65.1-.95.45-.35.35-1.25 1.2-1.25 3 0 1.8 1.3 3.55 1.5 3.8.2.25 2.8 4.3 6.75 6.05.95.4 1.65.65 2.25.8.95.3 1.8.25 2.5.15.75-.1 2.35-.95 2.7-1.9.35-.95.35-1.75.25-1.9z" />
          </svg>
        </div>
      </a>

      {/* Footer (mengandung kontak & platform) */}
      <footer id="kontak" className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SJ</span>
                </div>
                <span className="text-lg sm:text-xl font-bold">SIKOMJARU</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga
                kesehatan.
              </p>
            </div>
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Supported By
              </h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="https://www.instagram.com/ump.ac.id?igsh=dXRvazl2NGpsM3dn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  UMP
                </a>
                <a
                  href="https://www.instagram.com/kemahasiswaan.dikti?igsh=MWJhdmpuY3E5NXRvaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Kemahasiswaan Dikti
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  Belmawa Dikti
                </a>
              </nav>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Platform & Sosial
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282234845084"
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    +62 822-3484-5084
                  </span>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sikomjaru.official?igsh=MWZ5c3lvdjd1M252bA=="
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition">
                    <InstagramIcon />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    @sikomjaru.official
                  </span>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@sikomjaru?_t=ZS-8z4z1yF59rF&_r=1"
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-700/40 border border-gray-500/30 flex items-center justify-center text-gray-200 group-hover:bg-gray-900 group-hover:text-white transition">
                    <TiktokIcon />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    @sikomjaru.official
                  </span>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61579365418597"
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FacebookIcon />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    Sikomjaru.official
                  </span>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@SIKOMJARU_Phantom_Edukasi_RJP"
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                    <YoutubeIcon />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    @SIKOMJARU_Phantom_Edukasi_RJP
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Logo Partners</h3>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {logoPartners.map((logo, index) => (
                  <div key={index} className="relative group">
                    <ClickableImage
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
                    sikomjaru.official@gmail.com
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

      {/* Image Modal */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
