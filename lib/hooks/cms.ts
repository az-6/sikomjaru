"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import type { ContentSection, MediaFile, SiteSettings } from "@/lib/supabase";

// Hook untuk mengelola Content Sections
export function useContentSections() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSections = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("content_sections")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      console.error("Error fetching content sections:", err);
      setError("Failed to fetch content sections");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addSection = useCallback(async (section: Partial<ContentSection>) => {
    setError(null);

    try {
      const { data, error } = await supabase
        .from("content_sections")
        .insert([section])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setSections((prev) => [...prev, data[0]]);
      }
    } catch (err) {
      console.error("Error adding content section:", err);
      setError("Failed to add content section");
      throw err;
    }
  }, []);

  const updateSection = useCallback(
    async (id: string, updates: Partial<ContentSection>) => {
      setError(null);

      try {
        const { data, error } = await supabase
          .from("content_sections")
          .update(updates)
          .eq("id", id)
          .select();

        if (error) throw error;

        if (data && data.length > 0) {
          setSections((prev) =>
            prev.map((section) =>
              section.id === id ? { ...section, ...data[0] } : section
            )
          );
        }
      } catch (err) {
        console.error("Error updating content section:", err);
        setError("Failed to update content section");
        throw err;
      }
    },
    []
  );

  const deleteSection = useCallback(async (id: string) => {
    setError(null);

    try {
      const { error } = await supabase
        .from("content_sections")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSections((prev) => prev.filter((section) => section.id !== id));
    } catch (err) {
      console.error("Error deleting content section:", err);
      setError("Failed to delete content section");
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchSections();
  }, [fetchSections]);

  return {
    sections,
    isLoading,
    error,
    fetchSections,
    addSection,
    updateSection,
    deleteSection,
  };
}

// Hook untuk mengelola Site Settings
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*")
        .order("setting_key", { ascending: true });

      if (error) throw error;
      setSettings(data || []);
    } catch (err) {
      console.error("Error fetching site settings:", err);
      setError("Failed to fetch site settings");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateSetting = useCallback(
    async (key: string, value: string) => {
      setError(null);

      try {
        const { data, error } = await supabase
          .from("site_settings")
          .upsert(
            {
              setting_key: key,
              setting_value: value,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "setting_key" }
          )
          .select();

        if (error) throw error;

        // Refresh settings after update
        await fetchSettings();
      } catch (err) {
        console.error("Error updating site setting:", err);
        setError("Failed to update site setting");
        throw err;
      }
    },
    [fetchSettings]
  );

  const getSetting = useCallback(
    (key: string): string | null => {
      const setting = settings.find((s) => s.setting_key === key);
      return setting ? setting.setting_value : null;
    },
    [settings]
  );

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    isLoading,
    error,
    fetchSettings,
    updateSetting,
    getSetting,
  };
}

// Hook untuk mengelola Media Files
export function useMediaFiles() {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMediaFiles = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("media_files")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMediaFiles(data || []);
    } catch (err) {
      console.error("Error fetching media files:", err);
      setError("Failed to fetch media files");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const uploadFile = useCallback(
    async (file: File, altText?: string, caption?: string) => {
      setError(null);

      try {
        // Upload file to Supabase Storage
        const fileExt = file.name.split(".").pop();
        const fileName = `${Date.now()}_${Math.random()
          .toString(36)
          .substring(2)}.${fileExt}`;
        const filePath = `media/${fileName}`;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("media")
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        // Get public URL
        const {
          data: { publicUrl },
        } = supabase.storage.from("media").getPublicUrl(filePath);

        // Save file info to database
        const { data, error: dbError } = await supabase
          .from("media_files")
          .insert([
            {
              original_name: file.name,
              file_name: fileName,
              file_path: filePath,
              file_url: publicUrl,
              file_type: file.type,
              file_size: file.size,
              alt_text: altText || null,
              caption: caption || null,
            },
          ])
          .select();

        if (dbError) throw dbError;

        if (data && data.length > 0) {
          setMediaFiles((prev) => [data[0], ...prev]);
        }

        return data?.[0];
      } catch (err) {
        console.error("Error uploading file:", err);
        setError("Failed to upload file");
        throw err;
      }
    },
    []
  );

  const deleteFile = useCallback(async (id: string, filePath: string) => {
    setError(null);

    try {
      // Delete file from storage
      const { error: storageError } = await supabase.storage
        .from("media")
        .remove([filePath]);

      if (storageError) {
        console.error("Storage deletion error:", storageError);
        // Continue with database deletion even if storage deletion fails
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from("media_files")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      setMediaFiles((prev) => prev.filter((file) => file.id !== id));
    } catch (err) {
      console.error("Error deleting file:", err);
      setError("Failed to delete file");
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchMediaFiles();
  }, [fetchMediaFiles]);

  return {
    mediaFiles,
    isLoading,
    error,
    fetchMediaFiles,
    uploadFile,
    deleteFile,
  };
}

// Utility hook untuk mengelola loading states
export function useLoadingState(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const withLoading = useCallback(
    async <T>(asyncOperation: () => Promise<T>): Promise<T> => {
      setIsLoading(true);
      try {
        const result = await asyncOperation();
        return result;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return {
    isLoading,
    setIsLoading,
    withLoading,
  };
}
