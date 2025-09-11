"use client";

import { usePenelitianData } from "@/hooks/use-penelitian-data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClickableImage } from "@/components/ui/ClickableImage";
import { FlaskConical } from "lucide-react";

export default function PenelitianSection() {
  const { penelitianData, loading, error } = usePenelitianData();

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            Error loading penelitian data: {error}
          </div>
        </div>
      </section>
    );
  }

  if (!penelitianData) {
    return null;
  }

  return (
    <section id="penelitian" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {penelitianData.title}
          </h2>
          {/* Text Box untuk deskripsi penelitian */}
          <div className="max-w-4xl mx-auto mb-12 lg:mb-16">
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 border border-gray-200">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {penelitianData.description}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {penelitianData.implementation_title}
          </h3>
          <div className="relative px-6 sm:px-12">
            <Carousel className="w-full">
              <CarouselContent className="ml-0">
                {penelitianData.carousel_items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        {item.type === "special" ? (
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg h-36 sm:h-48 flex items-center justify-center p-6">
                            <div className="text-center">
                              <FlaskConical className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                              <p className="text-blue-800 font-semibold text-lg">
                                Dan banyak kegiatan penelitian lainnya
                              </p>
                            </div>
                          </div>
                        ) : item.type === "video" ? (
                          <div className="relative rounded-lg overflow-hidden h-36 sm:h-48">
                            <iframe
                              src={`https://www.youtube.com/embed/${item.url
                                .split("/")
                                .pop()}`}
                              title={item.title}
                              className="w-full h-full"
                              allowFullScreen
                            />
                          </div>
                        ) : item.url && item.url.trim() !== "" ? (
                          <ClickableImage
                            src={item.url}
                            alt={item.title || "Penelitian image"}
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                        ) : (
                          <div className="bg-gray-100 rounded-lg h-36 sm:h-48 flex items-center justify-center">
                            <p className="text-gray-500 text-sm">
                              Foto belum diupload
                            </p>
                          </div>
                        )}
                        <div className="p-3 sm:p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
