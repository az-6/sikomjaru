"use client";

import { useEffect, useState } from "react";
import HeroSectionComponent from "@/components/sections/HeroSection";
import TeamSectionComponent from "@/components/sections/TeamSection";
import StatisticsComponent from "@/components/sections/StatisticsSection";
import EcommerceSocialSection from "@/components/sections/EcommerceSocialSection";
import { getPageData } from "@/lib/cms-api";
import { hasValidCredentials } from "@/lib/supabase";
import type {
  HeroSection,
  TeamSection,
  TeamMember,
  Statistic,
  EcommercePlatform,
  SocialMedia,
} from "@/lib/supabase";

interface PageData {
  heroSection: HeroSection | null;
  teamSection: TeamSection | null;
  teamMembers: TeamMember[];
  statistics: Statistic[];
  ecommercePlatforms: EcommercePlatform[];
  socialMedia: SocialMedia[];
}

export default function CMSPageExample() {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!hasValidCredentials) {
        setError("Supabase configuration not found");
        setLoading(false);
        return;
      }

      try {
        const data = await getPageData();
        if (data) {
          setPageData({
            heroSection: data.heroSection,
            teamSection: data.teamSection,
            teamMembers: data.teamMembers,
            statistics: data.statistics,
            ecommercePlatforms: data.ecommercePlatforms,
            socialMedia: data.socialMedia,
          });
        }
      } catch (err) {
        setError("Failed to load page data");
        console.error("Error fetching page data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header - You can also make this CMS-managed */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                SIKOMJARU
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#beranda"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Beranda
              </a>
              <a
                href="#profil"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Profil Tim
              </a>
              <a
                href="#kontak"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Kontak
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* CMS-Managed Sections */}
      <main>
        <HeroSectionComponent data={pageData?.heroSection || null} />

        <TeamSectionComponent
          teamData={pageData?.teamSection || null}
          teamMembers={pageData?.teamMembers || []}
        />

        <StatisticsComponent statistics={pageData?.statistics || []} />

        <EcommerceSocialSection
          ecommercePlatforms={pageData?.ecommercePlatforms || []}
          socialMedia={pageData?.socialMedia || []}
        />
      </main>

      {/* Footer - Can also be CMS-managed */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">SIKOMJARU</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Manekin pelatihan RJP inovatif yang merevolusi pendidikan
                penyelamatan jiwa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Tautan Cepat</h3>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#beranda"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </a>
                <a
                  href="#profil"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Profil Tim
                </a>
                <a
                  href="#kontak"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </a>
              </nav>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Media Sosial</h3>
              <div className="text-gray-400 space-y-2">
                {pageData?.socialMedia.map((social) => (
                  <p key={social.id}>{social.platform}: @sikomjaru.official</p>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">E-Commerce</h3>
              <div className="text-gray-400 space-y-2">
                {pageData?.ecommercePlatforms.map((platform) => (
                  <p key={platform.id}>{platform.name}: SIKOMJARU Official</p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} SIKOMJARU. Hak cipta dilindungi
              undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
