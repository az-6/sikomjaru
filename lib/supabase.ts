import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our CMS content
export interface ContentSection {
  id: string;
  section_name: string;
  title: string;
  description: string;
  content: any; // JSON field for flexible content
  images: string[]; // Array of image URLs
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  file_path: string;
  file_type: string;
  file_size: number;
  alt_text?: string;
  caption?: string;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  setting_key: string;
  setting_value: any;
  description?: string;
  updated_at: string;
}
