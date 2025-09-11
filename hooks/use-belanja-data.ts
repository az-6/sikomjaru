import { useState, useEffect } from "react";

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

interface BelanjaSection {
  id?: string;
  title: string;
  subtitle: string;
  product_name: string;
  product_description: string;
  product_price: string;
  platforms_title: string;
  carousel_items: MediaItem[];
  platforms: Platform[];
}

export const useBelanjaData = () => {
  const [data, setData] = useState<BelanjaSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/cms/belanja");
        if (!response.ok) {
          throw new Error("Failed to fetch belanja data");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error("Error fetching belanja data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
