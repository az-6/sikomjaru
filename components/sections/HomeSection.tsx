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
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useHomeData, type MediaItem } from "@/hooks/use-home-data";

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

export default function HomeSection() {
  const { homeSection, loading, error } = useHomeData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Helper function to get YouTube embed URL
  const getYouTubeEmbedUrl = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  // Logo partners hardcoded
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

  if (loading) {
    return (
      <section
        id="home"
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/75 via-teal-800/70 to-blue-800/75"></div>
        <div className="relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <p>Memuat konten...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !homeSection) {
    return (
      <section
        id="home"
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://placehold.co/1920x1080/f0f9ff/1e40af?text=Medical+Training+CPR+Healthcare+Professional+Background')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-teal-800/70 to-blue-800/75"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">
              SIKOMJARU: Solusi Inovatif Pelatihan Selamatkan Nyawa
            </h1>
            <p className="text-lg">
              Tingkatkan keterampilan Bantuan Hidup Dasar (BHD) dengan alat
              peraga yang akurat, terjangkau, dan mudah digunakan.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="home"
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${homeSection.background_image}')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-teal-800/70 to-blue-800/75"></div>
        </div>

        {/* Content with relative positioning */}
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Mobile-first: Logo Partners, then Text, then Carousel */}
              <div className="flex flex-col order-1 lg:order-1 w-full">
                {/* Logo Partners */}
                {logoPartners.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:justify-start mb-4">
                    {logoPartners.map((logo, index) => (
                      <div key={index} className="relative group flex-shrink-0">
                        <ClickableImage
                          src={logo.src}
                          alt={logo.alt}
                          className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:opacity-80 transition-opacity duration-300 max-w-[60px] sm:max-w-[80px]"
                          onClick={() => setSelectedImage(logo.src)}
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
                )}
                {/* Text */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  {homeSection.title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed">
                  {homeSection.subtitle}
                </p>
              </div>

              {/* Carousel: order-2 on mobile, order-2 on desktop */}
              <div className="relative order-2 lg:order-2 w-full">
                {/* Instagram-style Media Carousel */}
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
                  <Carousel
                    className="w-full"
                    opts={{ align: "start", loop: true }}
                  >
                    <CarouselContent className="-ml-1">
                      {/* Video Slide */}
                      {homeSection.video_url && (
                        <CarouselItem className="pl-1">
                          <div className="relative aspect-[16/9] bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center rounded-lg">
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
                          </div>
                        </CarouselItem>
                      )}

                      {/* Carousel Items (Images and YouTube Videos) */}
                      {homeSection.carousel_items?.map(
                        (item: MediaItem, index: number) => (
                          <CarouselItem key={index} className="pl-1">
                            {item.type === "video" ? (
                              // YouTube Video Embed
                              <div className="relative aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-lg">
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
                              <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                                <ClickableImage
                                  src={item.url}
                                  alt={
                                    item.title || `SIKOMJARU Image ${index + 1}`
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

                      {/* Fallback for old carousel_images (backward compatibility) */}
                      {!homeSection.carousel_items &&
                        homeSection.carousel_images?.map((image, index) => (
                          <CarouselItem
                            key={`legacy-${index}`}
                            className="pl-1"
                          >
                            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                              <ClickableImage
                                src={image}
                                alt={`SIKOMJARU Image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedImage(image)}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {Array.from({
                        length:
                          (homeSection.carousel_items?.length ||
                            homeSection.carousel_images?.length ||
                            0) + (homeSection.video_url ? 1 : 0),
                      }).map((_, index) => (
                        <div
                          key={index}
                          className="w-2 h-2 bg-white/60 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
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
            <DialogTitle>Preview Gambar</DialogTitle>
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
