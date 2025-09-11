import { supabase } from "./supabaseClient";

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export async function uploadImage(
  file: File,
  folder: string = "carousel"
): Promise<UploadResult> {
  try {
    // Validasi file
    if (!file.type.startsWith("image/")) {
      return { success: false, error: "File harus berupa gambar" };
    }

    // Batasi ukuran file (5MB)
    if (file.size > 5 * 1024 * 1024) {
      return {
        success: false,
        error: "Ukuran file tidak boleh lebih dari 5MB",
      };
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${timestamp}_${randomString}.${fileExt}`;

    // Upload file
    const { data, error } = await supabase.storage
      .from("cms-images")
      .upload(fileName, file);

    if (error) {
      console.error("Upload error:", error);
      return { success: false, error: error.message };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("cms-images")
      .getPublicUrl(data.path);

    return {
      success: true,
      url: urlData.publicUrl,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat upload",
    };
  }
}

export async function deleteImage(url: string): Promise<boolean> {
  try {
    // Extract file path from URL
    const urlParts = url.split("/storage/v1/object/public/cms-images/");
    if (urlParts.length !== 2) {
      console.error("Invalid URL format");
      return false;
    }

    const filePath = urlParts[1];

    const { error } = await supabase.storage
      .from("cms-images")
      .remove([filePath]);

    if (error) {
      console.error("Delete error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Delete error:", error);
    return false;
  }
}
