import { useState, useEffect } from "react";

export interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProdukSection {
  id?: string;
  title: string;
  subtitle: string;
  benefits_title: string;
  benefits_description: string;
  features_title: string;
  carousel_items: MediaItem[];
  benefits: Benefit[];
  features: Feature[];
}

export interface ProdukData {
  produkSection: ProdukSection | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProdukData = (): ProdukData => {
  const [produkSection, setProdukSection] = useState<ProdukSection | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/cms/produk");
      if (!response.ok) {
        throw new Error("Failed to fetch produk data");
      }

      const data = await response.json();

      if (data.produkSection) {
        setProdukSection(data.produkSection);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching produk data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {
    produkSection,
    loading,
    error,
    refetch,
  };
};
