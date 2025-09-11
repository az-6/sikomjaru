-- SQL script untuk membuat tabel CMS SIKOMJARU
-- Jalankan di Supabase SQL Editor

-- 1. Tabel untuk Section Home
CREATE TABLE IF NOT EXISTS home_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    background_image TEXT,
    video_url TEXT,
    carousel_images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Tabel untuk Logo Partners
CREATE TABLE IF NOT EXISTS logo_partners (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    alt_text TEXT,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabel untuk Section Produk
CREATE TABLE IF NOT EXISTS product_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    product_images JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabel untuk Product Features
CREATE TABLE IF NOT EXISTS product_features (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabel untuk Section Profil
CREATE TABLE IF NOT EXISTS profile_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    vision TEXT,
    mission TEXT,
    values JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Tabel untuk Team Members
CREATE TABLE IF NOT EXISTS team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT,
    bio TEXT,
    image_url TEXT,
    social_links JSONB DEFAULT '[]'::jsonb,
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Tabel untuk Section Sertifikasi & Legalitas
CREATE TABLE IF NOT EXISTS certification_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    certifications JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Tabel untuk Section Penelitian
CREATE TABLE IF NOT EXISTS research_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    research_items JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. Tabel untuk Section Belanja
CREATE TABLE IF NOT EXISTS shopping_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    shop_links JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Tabel untuk Section Review & Testimoni
CREATE TABLE IF NOT EXISTS review_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    reviews JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 11. Tabel untuk Section Footer
CREATE TABLE IF NOT EXISTS footer_sections (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    company_name TEXT NOT NULL,
    description TEXT,
    contact_info JSONB DEFAULT '{}'::jsonb,
    social_links JSONB DEFAULT '[]'::jsonb,
    quick_links JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert data default untuk Home Section
INSERT INTO home_sections (title, subtitle, description, background_image, carousel_images) VALUES 
(
    'SIKOMJARU: Solusi Inovatif Pelatihan Selamatkan Nyawa',
    'Tingkatkan keterampilan Bantuan Hidup Dasar (BHD) dengan alat peraga yang akurat, terjangkau, dan mudah digunakan. Selamatkan nyawa dengan persiapan yang tepat.',
    'Produk inovatif untuk pelatihan RJP yang efektif dan terjangkau.',
    'https://placehold.co/1920x1080/f0f9ff/1e40af?text=Medical+Training+CPR+Healthcare+Professional+Background',
    '[
        "https://placehold.co/600x450/e0f2fe/0ea5e9?text=Produk+SIKOMJARU+Tampak+Depan",
        "https://placehold.co/600x450/d1fae5/34d399?text=Fitur+LCD+dan+Speaker",
        "https://placehold.co/600x450/fef3c7/d97706?text=SIKOMJARU+dalam+Pelatihan",
        "https://placehold.co/600x450/ecfdf5/10b981?text=Detail+Komponen+SIKOMJARU"
    ]'::jsonb
);

-- Insert data default untuk Logo Partners
INSERT INTO logo_partners (name, image_url, alt_text, order_index) VALUES 
('Universitas Muhammadiyah Purwokerto', '/ump.png', 'UMP Logo', 1),
('Fakultas Ilmu Kesehatan', '/fikes.png', 'FIKES Logo', 2),
('Program Pemberdayaan Masyarakat Wirausaha', '/p2mw.png', 'P2MW Logo', 3),
('Official Logo', '/logo.png', 'Official Logo', 4),
('Islamic Student Business Incubator', '/isbi.jpg', 'ISBI Logo', 5);

-- Enable Row Level Security (RLS)
ALTER TABLE home_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE logo_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE certification_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE shopping_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE review_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_sections ENABLE ROW LEVEL SECURITY;

-- Create policies untuk read access (public)
CREATE POLICY "Allow public read access" ON home_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON logo_partners FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON product_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON product_features FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON profile_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON certification_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON research_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON shopping_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON review_sections FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON footer_sections FOR SELECT USING (true);

-- Create policies untuk admin access (insert, update, delete)
-- Note: Ganti dengan user authentication yang sesuai
CREATE POLICY "Allow admin full access" ON home_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON logo_partners FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON product_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON product_features FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON profile_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON team_members FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON certification_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON research_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON shopping_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON review_sections FOR ALL USING (true);
CREATE POLICY "Allow admin full access" ON footer_sections FOR ALL USING (true);

-- Function untuk update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers untuk auto-update timestamp
CREATE TRIGGER update_home_sections_updated_at BEFORE UPDATE ON home_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_logo_partners_updated_at BEFORE UPDATE ON logo_partners FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_product_sections_updated_at BEFORE UPDATE ON product_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_product_features_updated_at BEFORE UPDATE ON product_features FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_profile_sections_updated_at BEFORE UPDATE ON profile_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_certification_sections_updated_at BEFORE UPDATE ON certification_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_research_sections_updated_at BEFORE UPDATE ON research_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_shopping_sections_updated_at BEFORE UPDATE ON shopping_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_review_sections_updated_at BEFORE UPDATE ON review_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_footer_sections_updated_at BEFORE UPDATE ON footer_sections FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
