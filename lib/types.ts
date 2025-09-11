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

export interface ProductSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  product_images: string[];
  created_at: string;
  updated_at: string;
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProfileSection {
  id: string;
  title: string;
  description: string;
  vision: string;
  mission: string;
  values: string[];
  team_members: TeamMember[];
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image_url: string;
  social_links: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}
