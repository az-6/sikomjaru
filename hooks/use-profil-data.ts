import { useState, useEffect } from "react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
}

interface TeamMember {
  name: string;
  position: string;
  avatar: string;
  instagram: string;
  type: "supervisor" | "student";
}

interface ProfilSection {
  id?: string;
  title: string;
  subtitle: string;
  objective_title: string;
  objective_description: string;
  objective_icon: string;
  vision_title: string;
  vision_description: string;
  vision_icon: string;
  team_title: string;
  team_carousel_items: MediaItem[];
  team_members: TeamMember[];
}

export function useProfilData() {
  const [profilSection, setProfilSection] = useState<ProfilSection | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfilData = async () => {
      try {
        const response = await fetch("/api/cms/profil");
        if (!response.ok) {
          throw new Error("Failed to fetch profil data");
        }
        const data = await response.json();
        setProfilSection(data.profilSection);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProfilData();
  }, []);

  return { profilSection, loading, error };
}
