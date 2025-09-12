import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// For client-side usage
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

// Legacy client for backward compatibility
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Types for CMS data
export interface HomeSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background_image: string;
  video_url?: string;
  carousel_images: string[];
  logo_partners: LogoPartner[];
  created_at: string;
  updated_at: string;
}

export interface LogoPartner {
  id: string;
  name: string;
  image_url: string;
  alt_text: string;
  order: number;
}
