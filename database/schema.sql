-- SIKOMJARU CMS Database Schema for Supabase
-- Run this in Supabase SQL Editor

-- Enable RLS (Row Level Security)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===========================
-- 1. HERO SECTION TABLE
-- ===========================
CREATE TABLE hero_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  cta_primary_text TEXT NOT NULL DEFAULT 'Jelajahi Produk',
  cta_primary_link TEXT NOT NULL DEFAULT '#product',
  cta_secondary_text TEXT NOT NULL DEFAULT 'Daftar Pelatihan',
  cta_secondary_link TEXT NOT NULL DEFAULT '#training',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 2. PRODUCTS SECTION
-- ===========================
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE product_features (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  icon_name TEXT NOT NULL, -- lucide icon name
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 3. TEAM PROFILE SECTION
-- ===========================
CREATE TABLE team_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Profil Tim SIKOMJARU',
  subtitle TEXT NOT NULL,
  mission_title TEXT NOT NULL DEFAULT 'Tujuan Mulia Kami',
  mission_description TEXT NOT NULL,
  vision_title TEXT NOT NULL DEFAULT 'Visi Kami',
  vision_description TEXT NOT NULL,
  team_photo_url TEXT, -- URL for group photo
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  description TEXT,
  photo_url TEXT,
  is_supervisor BOOLEAN DEFAULT false, -- true for dosen pembimbing
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 4. RESEARCH SECTION
-- ===========================
CREATE TABLE research_section (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  main_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE research_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL,
  icon_color TEXT DEFAULT 'blue',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 5. STATISTICS SECTION
-- ===========================
CREATE TABLE statistics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  label TEXT NOT NULL,
  value TEXT NOT NULL, -- e.g., "500+", "95%"
  color TEXT DEFAULT 'teal', -- tailwind color
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 6. E-COMMERCE & SOCIAL MEDIA
-- ===========================
CREATE TABLE ecommerce_platforms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL, -- Shopee, Tokopedia, Lazada
  description TEXT NOT NULL,
  url TEXT NOT NULL,
  icon_color TEXT DEFAULT 'orange',
  button_color TEXT DEFAULT 'orange',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE TABLE social_media (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platform TEXT NOT NULL, -- WhatsApp, Instagram, TikTok, Facebook, YouTube
  url TEXT NOT NULL,
  icon_color TEXT DEFAULT 'blue',
  button_color TEXT DEFAULT 'blue',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 7. GENERAL SETTINGS
-- ===========================
CREATE TABLE site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT NOT NULL,
  setting_type TEXT DEFAULT 'text', -- text, number, boolean, json
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- 8. CONTENT SECTIONS (FLEXIBLE)
-- ===========================
CREATE TABLE content_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT UNIQUE NOT NULL, -- hero, products, team, etc.
  title TEXT NOT NULL,
  subtitle TEXT,
  content JSONB, -- flexible content structure
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ===========================
-- ROW LEVEL SECURITY POLICIES
-- ===========================

-- Enable RLS on all tables
ALTER TABLE hero_section ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_section ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_section ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE statistics ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecommerce_platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;

-- Public read access (anyone can read)
CREATE POLICY "Public read access" ON hero_section FOR SELECT USING (true);
CREATE POLICY "Public read access" ON products FOR SELECT USING (true);
CREATE POLICY "Public read access" ON product_features FOR SELECT USING (true);
CREATE POLICY "Public read access" ON team_section FOR SELECT USING (true);
CREATE POLICY "Public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public read access" ON research_section FOR SELECT USING (true);
CREATE POLICY "Public read access" ON research_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON statistics FOR SELECT USING (true);
CREATE POLICY "Public read access" ON ecommerce_platforms FOR SELECT USING (true);
CREATE POLICY "Public read access" ON social_media FOR SELECT USING (true);
CREATE POLICY "Public read access" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON content_sections FOR SELECT USING (true);

-- Admin write access (authenticated users can modify)
-- Note: You'll need to create proper authentication policies based on your admin setup

-- ===========================
-- TRIGGER FOR UPDATED_AT
-- ===========================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to all tables with updated_at column
CREATE TRIGGER update_hero_section_updated_at BEFORE UPDATE ON hero_section 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_team_section_updated_at BEFORE UPDATE ON team_section 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_research_section_updated_at BEFORE UPDATE ON research_section 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_statistics_updated_at BEFORE UPDATE ON statistics 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ecommerce_platforms_updated_at BEFORE UPDATE ON ecommerce_platforms 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_social_media_updated_at BEFORE UPDATE ON social_media 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_content_sections_updated_at BEFORE UPDATE ON content_sections 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
