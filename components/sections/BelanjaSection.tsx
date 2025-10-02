"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClickableImage } from "@/components/ui/ClickableImage";
import { useBelanjaData } from "@/hooks/use-belanja-data";
import { ShoppingBag, Phone } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
  description?: string;
}

interface Platform {
  name: string;
  url: string;
  color: string;
  icon: string;
}

interface Product {
  product_name: string;
  product_description: string;
  product_price: string;
  carousel_items: MediaItem[];
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "ShoppingBag":
      return ShoppingBag;
    case "Phone":
      return Phone;
    default:
      return ShoppingBag;
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "orange":
      return "bg-orange-500 hover:bg-orange-600";
    case "green":
      return "bg-green-500 hover:bg-green-600";
    case "green-600":
      return "bg-green-600 hover:bg-green-700";
    case "blue":
      return "bg-blue-500 hover:bg-blue-600";
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
};

export default function BelanjaSection() {
  const { data, loading, error } = useBelanjaData();

  if (loading) {
    return (
      <section id="belanja" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Memuat data belanja...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="belanja" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
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
    <section id="belanja" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {data.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {data.products && data.products.length > 0 ? (
              data.products.map((product, productIndex) => (
                <Card
                  key={productIndex}
                  className="border-0 shadow-xl overflow-hidden"
                >
                  <div className="flex flex-col">
                    {/* Product Image Carousel */}
                    <div className="relative">
                      <div className="relative rounded-t-xl overflow-hidden bg-white">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {product.carousel_items.map((item, index) => (
                              <CarouselItem key={index}>
                                {item.type === "image" ? (
                                  <ClickableImage
                                    src={item.url || "/placeholder.svg"}
                                    alt={
                                      item.title ||
                                      `${product.product_name} ${index + 1}`
                                    }
                                    className="w-full h-full object-cover aspect-square"
                                  />
                                ) : (
                                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                                    <p className="text-gray-500">
                                      Video tidak didukung di carousel belanja
                                    </p>
                                  </div>
                                )}
                              </CarouselItem>
                            ))}
                            {product.carousel_items.length === 0 && (
                              <CarouselItem>
                                <div className="w-full aspect-square bg-gray-100 flex items-center justify-center">
                                  <p className="text-gray-500">
                                    Belum ada gambar produk
                                  </p>
                                </div>
                              </CarouselItem>
                            )}
                          </CarouselContent>

                          {/* Navigation Buttons */}
                          {product.carousel_items.length > 1 && (
                            <>
                              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />
                              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 text-gray-800 hover:bg-white/90" />

                              {/* Slide indicators */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {product.carousel_items.map((_, index) => (
                                  <div
                                    key={index}
                                    className="w-2 h-2 bg-white/60 rounded-full"
                                  ></div>
                                ))}
                              </div>
                            </>
                          )}
                        </Carousel>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {product.product_name}
                      </h3>
                      <p className="text-gray-600 mt-2 mb-4 text-sm sm:text-base">
                        {product.product_description}
                      </p>
                      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">
                        {product.product_price}
                      </div>

                      {/* Show platforms on every product */}
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {data.platforms_title}
                        </h4>
                        <div className="flex flex-col space-y-2 sm:space-y-3">
                          {data.platforms.map((platform, index) => {
                            const IconComponent = getIconComponent(
                              platform.icon
                            );
                            return (
                              <Button
                                key={index}
                                size="lg"
                                className={`w-full ${getColorClasses(
                                  platform.color
                                )} text-white justify-start text-sm sm:text-base`}
                                asChild
                              >
                                <a
                                  href={platform.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                                  <span className="ml-2 sm:ml-3">
                                    {platform.name === "WhatsApp"
                                      ? "Pesan via WhatsApp"
                                      : `Beli di ${platform.name}`}
                                  </span>
                                </a>
                              </Button>
                            );
                          })}
                          {data.platforms.length === 0 && (
                            <p className="text-gray-500 text-center py-4">
                              Belum ada platform yang tersedia
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-gray-500">Belum ada produk yang tersedia</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
