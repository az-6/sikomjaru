import { supabase } from "./supabase";
import type {
  HeroSection,
  Product,
  ProductFeature,
  TeamSection,
  TeamMember,
  ResearchSection,
  ResearchItem,
  Statistic,
  EcommercePlatform,
  SocialMedia,
  SiteSetting,
  ContentSection,
} from "./supabase";

// ===========================
// HERO SECTION API
// ===========================
export async function getHeroSection(): Promise<HeroSection | null> {
  const { data, error } = await supabase
    .from("hero_section")
    .select("*")
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }

  return data;
}

// ===========================
// PRODUCTS API
// ===========================
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data || [];
}

export async function getFeaturedProduct(): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_featured", true)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching featured product:", error);
    return null;
  }

  return data;
}

export async function getProductFeatures(
  productId: string
): Promise<ProductFeature[]> {
  const { data, error } = await supabase
    .from("product_features")
    .select("*")
    .eq("product_id", productId)
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching product features:", error);
    return [];
  }

  return data || [];
}

// ===========================
// TEAM SECTION API
// ===========================
export async function getTeamSection(): Promise<TeamSection | null> {
  const { data, error } = await supabase
    .from("team_section")
    .select("*")
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching team section:", error);
    return null;
  }

  return data;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching team members:", error);
    return [];
  }

  return data || [];
}

export async function getSupervisor(): Promise<TeamMember | null> {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("is_supervisor", true)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching supervisor:", error);
    return null;
  }

  return data;
}

export async function getStudentMembers(): Promise<TeamMember[]> {
  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("is_supervisor", false)
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching student members:", error);
    return [];
  }

  return data || [];
}

// ===========================
// RESEARCH SECTION API
// ===========================
export async function getResearchSection(): Promise<ResearchSection | null> {
  const { data, error } = await supabase
    .from("research_section")
    .select("*")
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching research section:", error);
    return null;
  }

  return data;
}

export async function getResearchItems(): Promise<ResearchItem[]> {
  const { data, error } = await supabase
    .from("research_items")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching research items:", error);
    return [];
  }

  return data || [];
}

// ===========================
// STATISTICS API
// ===========================
export async function getStatistics(): Promise<Statistic[]> {
  const { data, error } = await supabase
    .from("statistics")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching statistics:", error);
    return [];
  }

  return data || [];
}

// ===========================
// E-COMMERCE & SOCIAL MEDIA API
// ===========================
export async function getEcommercePlatforms(): Promise<EcommercePlatform[]> {
  const { data, error } = await supabase
    .from("ecommerce_platforms")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching ecommerce platforms:", error);
    return [];
  }

  return data || [];
}

export async function getSocialMedia(): Promise<SocialMedia[]> {
  const { data, error } = await supabase
    .from("social_media")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching social media:", error);
    return [];
  }

  return data || [];
}

// ===========================
// SITE SETTINGS API
// ===========================
export async function getSiteSetting(key: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("site_settings")
    .select("setting_value")
    .eq("setting_key", key)
    .single();

  if (error) {
    console.error(`Error fetching site setting ${key}:`, error);
    return null;
  }

  return data?.setting_value || null;
}

export async function getAllSiteSettings(): Promise<Record<string, string>> {
  const { data, error } = await supabase
    .from("site_settings")
    .select("setting_key, setting_value");

  if (error) {
    console.error("Error fetching site settings:", error);
    return {};
  }

  const settings: Record<string, string> = {};
  data?.forEach((setting) => {
    settings[setting.setting_key] = setting.setting_value;
  });

  return settings;
}

// ===========================
// CONTENT SECTIONS API (FLEXIBLE)
// ===========================
export async function getContentSection(
  sectionKey: string
): Promise<ContentSection | null> {
  const { data, error } = await supabase
    .from("content_sections")
    .select("*")
    .eq("section_key", sectionKey)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error(`Error fetching content section ${sectionKey}:`, error);
    return null;
  }

  return data;
}

export async function getAllContentSections(): Promise<ContentSection[]> {
  const { data, error } = await supabase
    .from("content_sections")
    .select("*")
    .eq("is_active", true)
    .order("display_order");

  if (error) {
    console.error("Error fetching content sections:", error);
    return [];
  }

  return data || [];
}

// ===========================
// COMBINED DATA FETCHERS
// ===========================
export async function getPageData() {
  try {
    const [
      heroSection,
      featuredProduct,
      teamSection,
      teamMembers,
      researchSection,
      researchItems,
      statistics,
      ecommercePlatforms,
      socialMedia,
      siteSettings,
    ] = await Promise.all([
      getHeroSection(),
      getFeaturedProduct(),
      getTeamSection(),
      getTeamMembers(),
      getResearchSection(),
      getResearchItems(),
      getStatistics(),
      getEcommercePlatforms(),
      getSocialMedia(),
      getAllSiteSettings(),
    ]);

    return {
      heroSection,
      featuredProduct,
      teamSection,
      teamMembers,
      researchSection,
      researchItems,
      statistics,
      ecommercePlatforms,
      socialMedia,
      siteSettings,
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}
