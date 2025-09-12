"use client";

import { useSertifikasiData } from "@/hooks/use-sertifikasi-data";
import { Card, CardContent } from "@/components/ui/card";
import { ClickableImage } from "@/components/ui/ClickableImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SertifikasiSection() {
  const { sertifikasiData, loading, error } = useSertifikasiData();

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
            Error loading sertifikasi data: {error}
          </div>
        </div>
      </section>
    );
  }

  if (!sertifikasiData) {
    return null;
  }

  return (
    <section id="sertifikasi" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {sertifikasiData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {sertifikasiData.subtitle}
          </p>
        </div>

        {/* Sertifikasi Grid - 2 Items Centered with Carousels */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {sertifikasiData.documents_title}
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl w-full">
              {/* NIB */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  {sertifikasiData.nib_carousel_items &&
                  sertifikasiData.nib_carousel_items.length > 0 ? (
                    <div className="relative">
                      {sertifikasiData.nib_carousel_items.length === 1 ? (
                        // Single image - no carousel needed
                        <ClickableImage
                          src={sertifikasiData.nib_carousel_items[0].url}
                          alt={
                            sertifikasiData.nib_carousel_items[0].title ||
                            sertifikasiData.nib_title
                          }
                          className="rounded-t-lg w-full h-72 sm:h-80 lg:h-96 object-cover"
                        />
                      ) : (
                        // Multiple images - show carousel
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent>
                            {sertifikasiData.nib_carousel_items.map(
                              (item, index) => (
                                <CarouselItem key={index}>
                                  <ClickableImage
                                    src={item.url}
                                    alt={
                                      item.title ||
                                      `${sertifikasiData.nib_title} ${
                                        index + 1
                                      }`
                                    }
                                    className="rounded-t-lg w-full h-72 sm:h-80 lg:h-96 object-cover"
                                  />
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-100 rounded-t-lg h-72 sm:h-80 lg:h-96 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">
                        Foto NIB belum diupload
                      </p>
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {sertifikasiData.nib_title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {sertifikasiData.nib_description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* HKI */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  {sertifikasiData.hki_carousel_items &&
                  sertifikasiData.hki_carousel_items.length > 0 ? (
                    <div className="relative">
                      {sertifikasiData.hki_carousel_items.length === 1 ? (
                        // Single image - no carousel needed
                        <ClickableImage
                          src={sertifikasiData.hki_carousel_items[0].url}
                          alt={
                            sertifikasiData.hki_carousel_items[0].title ||
                            sertifikasiData.hki_title
                          }
                          className="rounded-t-lg w-full h-72 sm:h-80 lg:h-96 object-cover"
                        />
                      ) : (
                        // Multiple images - show carousel
                        <Carousel
                          opts={{
                            align: "start",
                            loop: true,
                          }}
                          className="w-full"
                        >
                          <CarouselContent>
                            {sertifikasiData.hki_carousel_items.map(
                              (item, index) => (
                                <CarouselItem key={index}>
                                  <ClickableImage
                                    src={item.url}
                                    alt={
                                      item.title ||
                                      `${sertifikasiData.hki_title} ${
                                        index + 1
                                      }`
                                    }
                                    className="rounded-t-lg w-full h-72 sm:h-80 lg:h-96 object-cover"
                                  />
                                </CarouselItem>
                              )
                            )}
                          </CarouselContent>
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-100 rounded-t-lg h-72 sm:h-80 lg:h-96 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">
                        Foto HKI belum diupload
                      </p>
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {sertifikasiData.hki_title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {sertifikasiData.hki_description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
