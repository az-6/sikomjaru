-- SQL script untuk membuat tabel CMS SIKOMJARU - SECTION HOME ONLY
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

-- Enable Row Level Security (RLS)
ALTER TABLE home_sections ENABLE ROW LEVEL SECURITY;

-- Create policies untuk read access (public)
CREATE POLICY "Allow public read access" ON home_sections FOR SELECT USING (true);

-- Create policies untuk admin access (insert, update, delete)
-- Note: Untuk production, sebaiknya gunakan proper authentication
CREATE POLICY "Allow admin full access" ON home_sections FOR ALL USING (true);

-- Function untuk update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers untuk auto-update timestamp
CREATE TRIGGER update_home_sections_updated_at 
    BEFORE UPDATE ON home_sections 
    FOR EACH ROW 
    EXECUTE PROCEDURE update_updated_at_column();
