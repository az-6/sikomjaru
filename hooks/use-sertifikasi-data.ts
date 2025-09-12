import { useState, useEffect } from "react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
  description?: string;
}

interface SertifikasiSection {
  id?: string;
  title: string;
  subtitle: string;
  documents_title: string;
  nib_title: string;
  nib_description: string;
  nib_carousel_items: MediaItem[];
  hki_title: string;
  hki_description: string;
  hki_carousel_items: MediaItem[];
}

export function useSertifikasiData() {
  const [sertifikasiData, setSertifikasiData] =
    useState<SertifikasiSection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSertifikasiData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/cms/sertifikasi");

      if (!response.ok) {
        throw new Error("Failed to fetch sertifikasi data");
      }

      const data = await response.json();
      setSertifikasiData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSertifikasiData();
  }, []);

  return {
    sertifikasiData,
    loading,
    error,
    refetch: fetchSertifikasiData,
  };
}
