"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Phone } from "lucide-react";
import type { EcommercePlatform, SocialMedia } from "@/lib/supabase";

interface EcommerceSocialSectionProps {
  ecommercePlatforms: EcommercePlatform[];
  socialMedia: SocialMedia[];
}

// Icon mapping for social media platforms
const SocialIcons: Record<string, React.ReactNode> = {
  WhatsApp: <Phone className="w-6 h-6" />,
  Instagram: (
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
  ),
  TikTok: (
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  ),
  Facebook: (
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
  ),
  YouTube: (
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
  ),
};

// Color mapping for Tailwind classes
const getColorClasses = (
  color: string,
  type: "bg" | "text" | "border" | "hover-bg"
) => {
  const colorMap: Record<string, Record<string, string>> = {
    orange: {
      bg: "bg-orange-500",
      text: "text-orange-600",
      border: "border-orange-500",
      "hover-bg": "hover:bg-orange-600",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      border: "border-green-500",
      "hover-bg": "hover:bg-green-600",
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-600",
      border: "border-blue-500",
      "hover-bg": "hover:bg-blue-600",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-pink-600",
      border: "border-pink-500",
      "hover-bg": "hover:bg-pink-600",
    },
    gray: {
      bg: "bg-gray-800",
      text: "text-gray-600",
      border: "border-gray-800",
      "hover-bg": "hover:bg-gray-900",
    },
    red: {
      bg: "bg-red-600",
      text: "text-red-600",
      border: "border-red-600",
      "hover-bg": "hover:bg-red-700",
    },
    teal: {
      bg: "bg-teal-600",
      text: "text-teal-600",
      border: "border-teal-600",
      "hover-bg": "hover:bg-teal-700",
    },
  };

  return colorMap[color]?.[type] || colorMap.blue[type];
};

export default function EcommerceSocialSection({
  ecommercePlatforms,
  socialMedia,
}: EcommerceSocialSectionProps) {
  return (
    <section
      id="kontak"
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Temukan SIKOMJARU di Platform Favorit Anda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan produk SIKOMJARU melalui e-commerce terpercaya dan ikuti
            perkembangan terbaru di media sosial kami
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* E-Commerce Section */}
          {ecommercePlatforms.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                🛒 Belanja di E-Commerce
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {ecommercePlatforms.map((platform) => (
                  <Card
                    key={platform.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 ${getColorClasses(
                          platform.icon_color,
                          "text"
                        )
                          .replace("text-", "bg-")
                          .replace(
                            "-600",
                            "-100"
                          )} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <ShoppingBag
                          className={`w-8 h-8 ${getColorClasses(
                            platform.icon_color,
                            "text"
                          )}`}
                        />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {platform.name}
                      </h4>
                      <p className="text-gray-600 mb-4 text-sm">
                        {platform.description}
                      </p>
                      <Button
                        className={`w-full ${getColorClasses(
                          platform.button_color,
                          "bg"
                        )} ${getColorClasses(
                          platform.button_color,
                          "hover-bg"
                        )} text-white`}
                      >
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Beli di {platform.name}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Media Sosial Section */}
          {socialMedia.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                📱 Ikuti Kami di Media Sosial
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {socialMedia.map((social) => (
                  <Card
                    key={social.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-12 h-12 ${getColorClasses(
                          social.icon_color,
                          "text"
                        )
                          .replace("text-", "bg-")
                          .replace(
                            "-600",
                            "-100"
                          )} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        {SocialIcons[social.platform] || (
                          <ShoppingBag className="w-6 h-6" />
                        )}
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">
                        {social.platform}
                      </h5>
                      <Button
                        size="sm"
                        className={`w-full ${getColorClasses(
                          social.button_color,
                          "bg"
                        )} ${getColorClasses(
                          social.button_color,
                          "hover-bg"
                        )} text-white`}
                      >
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.platform === "WhatsApp"
                            ? "Chat"
                            : social.platform === "YouTube"
                            ? "Subscribe"
                            : social.platform === "Facebook"
                            ? "Like"
                            : "Follow"}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-500 to-blue-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Siap Bergabung dengan Komunitas SIKOMJARU?
                </h3>
                <p className="text-teal-100 mb-6">
                  Dapatkan update terbaru, promo eksklusif, dan konten edukatif
                  seputar pelatihan RJP
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-teal-600 hover:bg-gray-100"
                  >
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Belanja Sekarang
                  </Button>
                  <Button
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Kami
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
