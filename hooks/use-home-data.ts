import { useState, useEffect } from "react";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
}

export interface HomeSection {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  background_image: string;
  video_url?: string;
  carousel_images: string[];
  carousel_items?: MediaItem[];
}

export interface LogoPartner {
  src: string;
  alt: string;
  name: string;
}

export interface HomeData {
  homeSection: HomeSection | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useHomeData = (): HomeData => {
  const [homeSection, setHomeSection] = useState<HomeSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/cms/home");
      if (!response.ok) {
        throw new Error("Failed to fetch home data");
      }

      const data = await response.json();

      if (data.homeSection) {
        setHomeSection(data.homeSection);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching home data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    homeSection,
    loading,
    error,
    refetch: fetchData,
  };
};
