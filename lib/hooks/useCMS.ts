"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface ContentSection {
  id: string;
  section_name: string;
  title: string;
  description: string;
  content: any;
  images: string[];
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: any;
  description?: string;
  updated_at: string;
}

export function useContentSections() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSections() {
      try {
        const { data, error } = await supabase
          .from("content_sections")
          .select("*")
          .eq("is_active", true)
          .order("order_index", { ascending: true });

        if (error) throw error;
        setSections(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch content"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchSections();

    // Set up real-time subscription
    const channel = supabase
      .channel("content_sections")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "content_sections",
        },
        () => {
          fetchSections();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getSectionByName = (name: string) => {
    return sections.find((section) => section.section_name === name);
  };

  return { sections, loading, error, getSectionByName };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const { data, error } = await supabase
          .from("site_settings")
          .select("*");

        if (error) throw error;

        const settingsMap = (data || []).reduce((acc, setting) => {
          acc[setting.setting_key] = setting.setting_value;
          return acc;
        }, {} as Record<string, any>);

        setSettings(settingsMap);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch settings"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchSettings();

    // Set up real-time subscription
    const channel = supabase
      .channel("site_settings")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "site_settings",
        },
        () => {
          fetchSettings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getSetting = (key: string, defaultValue: any = null) => {
    const value = settings[key];
    if (
      typeof value === "string" &&
      value.startsWith('"') &&
      value.endsWith('"')
    ) {
      return value.slice(1, -1); // Remove quotes
    }
    return value || defaultValue;
  };

  return { settings, loading, error, getSetting };
}

export function useMediaFiles() {
  const [mediaFiles, setMediaFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMediaFiles() {
      try {
        const { data, error } = await supabase
          .from("media_files")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setMediaFiles(data || []);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch media files"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchMediaFiles();

    // Set up real-time subscription
    const channel = supabase
      .channel("media_files")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "media_files",
        },
        () => {
          fetchMediaFiles();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { mediaFiles, loading, error };
}
