"use client";

import React from "react";
import { useProfilData } from "@/hooks/use-profil-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, InstagramIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClickableImage } from "@/components/ui/ClickableImage";

// Helper function untuk get YouTube thumbnail
const getYouTubeThumbnail = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : url;
};

// Helper function untuk get icon component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Target":
      return Target;
    case "Eye":
      return Eye;
    default:
      return Target;
  }
};

export default function ProfilSection() {
  const { profilSection, loading, error } = useProfilData();

  if (loading) {
    return (
      <section id="profil" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !profilSection) {
    return (
      <section id="profil" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            Error loading profil section: {error}
          </div>
        </div>
      </section>
    );
  }

  const ObjectiveIcon = getIconComponent(profilSection.objective_icon);
  const VisionIcon = getIconComponent(profilSection.vision_icon);

  return (
    <section id="profil" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {profilSection.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {profilSection.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <ObjectiveIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {profilSection.objective_title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {profilSection.objective_description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <VisionIcon className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {profilSection.vision_title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {profilSection.vision_description}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {profilSection.team_title}
          </h3>
        </div>

        {/* Team Layout - Photo Carousel Left, Team Cards Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Left Side - Team Photo Carousel */}
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-2xl shadow-lg overflow-hidden bg-white max-w-md mx-auto lg:max-w-none">
              <Carousel className="w-full">
                <CarouselContent>
                  {profilSection.team_carousel_items.map((item, index) => (
                    <CarouselItem key={index}>
                      {item.type === "video" ? (
                        <div className="relative aspect-[6/5] bg-black rounded-lg overflow-hidden">
                          <img
                            src={getYouTubeThumbnail(item.url)}
                            alt={item.title || `Video ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0"
                          >
                            <span className="sr-only">
                              Play video: {item.title}
                            </span>
                          </a>
                        </div>
                      ) : (
                        <ClickableImage
                          src={item.url}
                          alt={item.title || `Foto Kelompok Tim ${index + 1}`}
                          className="w-full h-full object-cover aspect-[6/5]"
                        />
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
              </Carousel>
            </div>
          </div>

          {/* Right Side - Team Members */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            {/* Dosen Pembimbing */}
            {profilSection.team_members
              .filter((member) => member.type === "supervisor")
              .map((member, index) => (
                <div key={`supervisor-${index}`}>
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-center space-x-3">
                        <ClickableImage
                          src={member.avatar}
                          alt={member.name}
                          className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                            {member.name}
                          </h4>
                          <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                            {member.position}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Button
                            size="sm"
                            className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                          >
                            <a
                              href={member.instagram}
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
              ))}

            {/* Mahasiswa */}
            <div>
              <div className="space-y-2 sm:space-y-3">
                {profilSection.team_members
                  .filter((member) => member.type === "student")
                  .map((member, index) => (
                    <Card
                      key={`student-${index}`}
                      className="border-0 shadow-md"
                    >
                      <CardContent className="p-3 sm:p-4">
                        <div className="flex items-center space-x-3">
                          <ClickableImage
                            src={member.avatar}
                            alt={member.name}
                            className="w-12 h-12 sm:w-15 sm:h-15 rounded-lg shadow-sm flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                              {member.name}
                            </h4>
                            <p className="text-blue-600 font-semibold text-xs sm:text-sm">
                              {member.position}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="sm"
                              className="bg-pink-500 hover:bg-pink-600 text-white text-xs px-2 sm:px-3 py-1"
                            >
                              <a
                                href={member.instagram}
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
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
