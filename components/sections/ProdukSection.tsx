"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { CheckCircle, Lightbulb, Mic, Monitor, Zap } from "lucide-react";
import { useProdukData, type MediaItem } from "@/hooks/use-produk-data";

// Icon mapping for features
const iconMap = {
  CheckCircle,
  Lightbulb,
  Mic,
  Monitor,
  Zap,
};

// Color mapping for features
const colorMap = {
  blue: "bg-blue-100 text-blue-600",
  teal: "bg-teal-100 text-teal-600",
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  purple: "bg-purple-100 text-purple-600",
};

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const ClickableImage = ({
  src,
  alt,
  className,
  onClick,
  onError,
}: ClickableImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`cursor-pointer hover:opacity-90 transition-opacity ${
      className || ""
    }`}
    onClick={onClick}
    onError={onError}
  />
);

export default function ProdukSection() {
  const { produkSection, loading, error } = useProdukData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  if (loading) {
    return (
      <section id="produk" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Memuat data produk...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !produkSection) {
    return (
      <section id="produk" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-600 mb-4">
                Error: {error || "Data tidak ditemukan"}
              </p>
              <Button onClick={() => window.location.reload()}>
                Coba Lagi
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="produk" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {produkSection.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {produkSection.subtitle}
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Carousel: order-1 on mobile, order-1 on desktop */}
            <div className="relative order-1 lg:order-1 w-full">
              {/* Product Features Carousel */}
              <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
                <Carousel
                  className="w-full"
                  opts={{ align: "start", loop: true }}
                >
                  <CarouselContent className="-ml-1">
                    {produkSection.carousel_items?.map(
                      (item: MediaItem, index: number) => (
                        <CarouselItem key={index} className="pl-1">
                          {item.type === "video" ? (
                            // YouTube Video Embed
                            <div className="relative aspect-[6/5] bg-black rounded-lg overflow-hidden shadow-lg">
                              <iframe
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                                  item.url
                                )}?rel=0&modestbranding=1`}
                                title={item.title || `Video ${index + 1}`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                              {item.title && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                                  <p className="text-sm font-medium">
                                    {item.title}
                                  </p>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Image
                            <div className="relative aspect-[6/5] rounded-lg overflow-hidden shadow-lg">
                              <ClickableImage
                                src={item.url}
                                alt={
                                  item.title || `Produk SIKOMJARU ${index + 1}`
                                }
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedImage(item.url)}
                              />
                              {item.title && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                                  <p className="text-sm font-medium">
                                    {item.title}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </CarouselItem>
                      )
                    )}
                  </CarouselContent>

                  {/* Navigation Buttons */}
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                  {/* Slide indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {produkSection.carousel_items?.map((_, index) => (
                      <div
                        key={index}
                        className="w-2 h-2 bg-white/60 rounded-full"
                      ></div>
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
            {/* Benefits: order-2 on mobile, order-2 on desktop */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                {produkSection.benefits_title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {produkSection.benefits_description}
              </p>
              <div className="space-y-3 sm:space-y-4">
                {produkSection.benefits?.map((benefit, index) => {
                  const IconComponent =
                    iconMap[benefit.icon as keyof typeof iconMap] ||
                    CheckCircle;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4"
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-center mb-8 lg:mb-12 mt-16 lg:mt-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {produkSection.features_title}
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {produkSection.features?.map((feature, index) => {
              const IconComponent =
                iconMap[feature.icon as keyof typeof iconMap] || Lightbulb;
              const colorClass =
                colorMap[feature.color as keyof typeof colorMap] ||
                "bg-blue-100 text-blue-600";

              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <VisuallyHidden>
            <DialogTitle>Preview Gambar Produk</DialogTitle>
          </VisuallyHidden>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
