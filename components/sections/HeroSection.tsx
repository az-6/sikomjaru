"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { HeroSection } from "@/lib/supabase";

interface HeroSectionComponentProps {
  data: HeroSection | null;
}

export default function HeroSectionComponent({
  data,
}: HeroSectionComponentProps) {
  // Fallback data if no CMS data available
  const heroData = data || {
    title: "Kuasai RJP, Selamatkan Nyawa",
    subtitle: "SIKOMJARU",
    description:
      "SIKOMJARU adalah manekin pelatihan RJP inovatif yang merevolusi pendidikan penyelamatan jiwa. Rasakan pelatihan realistis dengan teknologi umpan balik canggih.",
    image_url:
      "https://placehold.co/600x500/e0f2fe/0ea5e9?text=Manekin+Pelatihan+RJP+SIKOMJARU",
    cta_primary_text: "Jelajahi Produk",
    cta_primary_link: "#produk",
    cta_secondary_text: "Daftar Pelatihan",
    cta_secondary_link: "#penelitian",
  };

  return (
    <section
      id="beranda"
      className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroData.title.split(",")[0]},
                <span className="text-teal-600">
                  {" "}
                  {heroData.title.split(",")[1]}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {heroData.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <a href={heroData.cta_primary_link}>
                  {heroData.cta_primary_text}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-3 bg-transparent"
              >
                <a href={heroData.cta_secondary_link}>
                  {heroData.cta_secondary_text}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroData.image_url || "/placeholder.svg"}
              alt="Manekin Pelatihan RJP SIKOMJARU"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
