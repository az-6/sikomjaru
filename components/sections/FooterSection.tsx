"use client";

import { useFooterData } from "@/hooks/use-footer-data";
import { Mail, Phone, MapPin } from "lucide-react";

// Komponen untuk ikon media sosial
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

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "whatsapp":
      return <Phone className="w-5 h-5" />;
    case "instagram":
      return <InstagramIcon />;
    case "tiktok":
      return <TiktokIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "youtube":
      return <YoutubeIcon />;
    default:
      return <Phone className="w-5 h-5" />;
  }
};

const getSocialColors = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "whatsapp":
      return "bg-green-500/10 border-green-500/30 text-green-500 group-hover:bg-green-500";
    case "instagram":
      return "bg-pink-500/10 border-pink-500/30 text-pink-500 group-hover:bg-pink-500";
    case "tiktok":
      return "bg-gray-700/40 border-gray-500/30 text-gray-200 group-hover:bg-gray-900";
    case "facebook":
      return "bg-blue-500/10 border-blue-500/30 text-blue-600 group-hover:bg-blue-600";
    case "youtube":
      return "bg-red-500/10 border-red-500/30 text-red-600 group-hover:bg-red-600";
    default:
      return "bg-gray-500/10 border-gray-500/30 text-gray-500 group-hover:bg-gray-500";
  }
};

interface FooterSectionProps {
  logoPartners?: Array<{
    src: string;
    alt: string;
    name: string;
  }>;
  ClickableImage?: React.ComponentType<{
    src: string;
    alt: string;
    className?: string;
    onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  }>;
}

export default function FooterSection({
  logoPartners,
  ClickableImage,
}: FooterSectionProps) {
  const { footerSection, loading, error } = useFooterData();

  if (loading) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="text-center text-gray-400">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mb-2"></div>
              <p>Memuat footer...</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (error) {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="text-center text-red-400">
            <p>Error loading footer: {error}</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">
                {footerSection.company_name}
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              {footerSection.company_description}
            </p>
          </div>

          {/* Supported By */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Supported By
            </h3>
            <nav className="flex flex-col space-y-2">
              {footerSection.supported_by_links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Platform & Sosial */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Platform & Sosial
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {footerSection.social_media_links.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group flex items-center space-x-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center group-hover:text-white transition ${getSocialColors(
                      social.platform
                    )}`}
                  >
                    {getSocialIcon(social.platform)}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {social.display_text}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Logo Partners - Only if provided */}
          {logoPartners && ClickableImage && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Logo Partners</h3>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {logoPartners.map((logo, index) => (
                  <div key={index} className="relative group">
                    <ClickableImage
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
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
            </div>
          )}

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">
                  {footerSection.contact_email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">
                  {footerSection.contact_location}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} {footerSection.company_name}.{" "}
            {footerSection.copyright_text}
          </p>
        </div>
      </div>
    </footer>
  );
}
