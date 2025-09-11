import { useState, useEffect } from "react";

interface MediaItem {
  type: "image" | "video" | "special";
  url: string;
  title?: string;
  description?: string;
}

interface PenelitianSection {
  id?: string;
  title: string;
  description: string;
  implementation_title: string;
  carousel_items: MediaItem[];
}

export function usePenelitianData() {
  const [penelitianData, setPenelitianData] =
    useState<PenelitianSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPenelitianData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cms/penelitian");

      if (!response.ok) {
        throw new Error("Failed to fetch penelitian data");
      }

      const data = await response.json();
      setPenelitianData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPenelitianData();
  }, []);

  return {
    penelitianData,
    loading,
    error,
    refetch: fetchPenelitianData,
  };
}
