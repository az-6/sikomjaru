"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClickableImage } from "@/components/ui/ClickableImage";
import { useReviewData } from "@/hooks/use-review-data";
import { Heart } from "lucide-react";

interface SpecialContent {
  icon: string;
  text: string;
  background: string;
}

interface ReviewItem {
  type: "image" | "special";
  url: string;
  title: string;
  description: string;
  special_content?: SpecialContent;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Heart":
      return Heart;
    default:
      return Heart;
  }
};

const getBackgroundClasses = (background: string) => {
  switch (background) {
    case "from-blue-50 to-blue-100":
      return "bg-gradient-to-br from-blue-50 to-blue-100";
    case "from-green-50 to-green-100":
      return "bg-gradient-to-br from-green-50 to-green-100";
    case "from-purple-50 to-purple-100":
      return "bg-gradient-to-br from-purple-50 to-purple-100";
    default:
      return "bg-gradient-to-br from-blue-50 to-blue-100";
  }
};

export default function ReviewSection() {
  const { data, loading, error } = useReviewData();

  if (loading) {
    return (
      <section id="review" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat data review...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="review" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-600">
              Error: {error || "Data tidak ditemukan"}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="review" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {data.subtitle}
          </p>
        </div>

        {/* Review Photos Carousel - Horizontal Layout */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {data.photos_title}
          </h3>
          <div className="relative px-6 sm:px-12">
            <Carousel className="w-full">
              <CarouselContent className="ml-0">
                {data.review_items.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        {item.type === "image" ? (
                          <ClickableImage
                            src={item.url || "/placeholder.svg"}
                            alt={item.title}
                            className="rounded-lg w-full h-36 sm:h-48 object-cover"
                          />
                        ) : (
                          <div
                            className={`${getBackgroundClasses(
                              item.special_content?.background ||
                                "from-blue-50 to-blue-100"
                            )} rounded-lg h-36 sm:h-48 flex items-center justify-center p-6`}
                          >
                            <div className="text-center">
                              {(() => {
                                const IconComponent = getIconComponent(
                                  item.special_content?.icon || "Heart"
                                );
                                return (
                                  <IconComponent className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                );
                              })()}
                              <p className="text-sm font-semibold text-blue-800">
                                {item.special_content?.text || "Kepuasan 100%"}
                              </p>
                            </div>
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
                {data.review_items.length === 0 && (
                  <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="bg-gray-100 rounded-lg h-36 sm:h-48 flex items-center justify-center">
                          <p className="text-gray-500">Belum ada review</p>
                        </div>
                        <div className="p-3 sm:p-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                            Belum Ada Review
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Review akan ditampilkan di sini
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )}
              </CarouselContent>
              {data.review_items.length > 1 && (
                <>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
