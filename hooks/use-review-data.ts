import { useState, useEffect } from "react";

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

interface ReviewSection {
  id?: string;
  title: string;
  subtitle: string;
  photos_title: string;
  review_items: ReviewItem[];
}

export const useReviewData = () => {
  const [data, setData] = useState<ReviewSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/cms/review");
        if (!response.ok) {
          throw new Error("Failed to fetch review data");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error("Error fetching review data:", err);
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
