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
import HomeSection from "@/components/sections/HomeSection";
import ProdukSection from "@/components/sections/ProdukSection";
import ProfilSection from "@/components/sections/ProfilSection";
import SertifikasiSection from "@/components/sections/SertifikasiSection";
import PenelitianSection from "@/components/sections/PenelitianSection";
import BelanjaSection from "@/components/sections/BelanjaSection";
import ReviewSection from "@/components/sections/ReviewSection";
import FooterSection from "@/components/sections/FooterSection";
import MainHeader from "@/components/MainHeader";
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

  // Logo Partners data - matching HomeSection
  const logoPartners = [
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
      {/* Main Header */}
      <MainHeader />

      <main className="pt-14 sm:pt-16 lg:pt-20">
        {/* Section Home - Dynamic dari CMS */}
        <HomeSection />

        {/* Section Produk - Dynamic dari CMS */}
        <ProdukSection />

        {/* Section Profil - Dynamic dari CMS */}
        <ProfilSection />

        {/* Section Sertifikasi & Legalitas - Dynamic dari CMS */}
        <SertifikasiSection />

        {/* Section Penelitian - Dynamic dari CMS */}
        <PenelitianSection />

        {/* Section Belanja - Dynamic dari CMS */}
        <BelanjaSection />

        {/* Section Review & Testimoni - Dynamic dari CMS */}
        <ReviewSection />
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

      {/* Section Footer - Dynamic dari CMS */}
      <FooterSection
        logoPartners={logoPartners}
        ClickableImage={ClickableImage}
      />

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
