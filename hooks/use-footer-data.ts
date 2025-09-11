"use client";

import { useState, useEffect } from "react";

export interface SupportedByLink {
  name: string;
  url: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  display_text: string;
  icon: string;
}

export interface FooterSection {
  id?: number;
  company_name: string;
  company_description: string;
  supported_by_links: SupportedByLink[];
  social_media_links: SocialMediaLink[];
  contact_email: string;
  contact_location: string;
  copyright_text: string;
}

export function useFooterData() {
  const [footerSection, setFooterSection] = useState<FooterSection>({
    company_name: "SIKOMJARU",
    company_description:
      "Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga kesehatan.",
    supported_by_links: [],
    social_media_links: [],
    contact_email: "sikomjaru.official@gmail.com",
    contact_location: "Purwokerto, Indonesia",
    copyright_text: "Hak cipta dilindungi undang-undang.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFooterData();
  }, []);

  const fetchFooterData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cms/footer");

      if (!response.ok) {
        throw new Error("Failed to fetch footer data");
      }

      const data = await response.json();
      setFooterSection(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching footer data:", err);
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { footerSection, loading, error, refetch: fetchFooterData };
}
