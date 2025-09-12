import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";

// Helper function to validate environment variables
function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }

  return { supabaseUrl, supabaseAnonKey };
}

// Lazy initialization for client-side usage
export function getSupabaseBrowserClient() {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

// Lazy initialization for legacy client
export function getSupabaseClient() {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
  return createClient(supabaseUrl, supabaseAnonKey);
}

// For backward compatibility - but only initialize when actually used
let _supabase: any = null;
let _supabaseClient: any = null;

export const supabase = new Proxy({} as any, {
  get(target, prop) {
    if (!_supabase) {
      _supabase = getSupabaseBrowserClient();
    }
    return _supabase[prop];
  },
});

export const supabaseClient = new Proxy({} as any, {
  get(target, prop) {
    if (!_supabaseClient) {
      _supabaseClient = getSupabaseClient();
    }
    return _supabaseClient[prop];
  },
});

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
