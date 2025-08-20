import { createClient } from "@supabase/supabase-js";

// Fallback values for build time (when env vars might not be available)
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Check if we have real credentials (not placeholders)
export const hasValidCredentials =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co" &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Type definitions for our database
export interface HeroSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url?: string;
  cta_primary_text: string;
  cta_primary_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image_url?: string;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductFeature {
  id: string;
  product_id: string;
  icon_name: string;
  title: string;
  description: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface TeamSection {
  id: string;
  title: string;
  subtitle: string;
  mission_title: string;
  mission_description: string;
  vision_title: string;
  vision_description: string;
  team_photo_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  photo_url?: string;
  is_supervisor: boolean;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ResearchSection {
  id: string;
  title: string;
  subtitle: string;
  main_image_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  icon_color: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  color: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface EcommercePlatform {
  id: string;
  name: string;
  description: string;
  url: string;
  icon_color: string;
  button_color: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SocialMedia {
  id: string;
  platform: string;
  url: string;
  icon_color: string;
  button_color: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: string;
  setting_type: string;
  description?: string;
  updated_at: string;
}

export interface ContentSection {
  id: string;
  section_key: string;
  title: string;
  subtitle?: string;
  content: any; // JSONB field
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
