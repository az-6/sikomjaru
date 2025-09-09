-- SQL Schema for SIKOMJARU CMS

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Content sections table
CREATE TABLE content_sections (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  section_name VARCHAR(100) NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  content JSONB DEFAULT '{}'::jsonb,
  images TEXT[] DEFAULT ARRAY[]::TEXT[],
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media files table
CREATE TABLE media_files (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  file_path TEXT NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  file_size INTEGER NOT NULL,
  alt_text TEXT,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site settings table
CREATE TABLE site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin users table
CREATE TABLE admin_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_content_sections_section_name ON content_sections(section_name);
CREATE INDEX idx_content_sections_active ON content_sections(is_active);
CREATE INDEX idx_content_sections_order ON content_sections(order_index);
CREATE INDEX idx_media_files_type ON media_files(file_type);
CREATE INDEX idx_site_settings_key ON site_settings(setting_key);
CREATE INDEX idx_admin_users_email ON admin_users(email);

-- Insert default content sections
INSERT INTO content_sections (section_name, title, description, content, order_index) VALUES
('hero', 'SIKOMJARU: Solusi Inovatif Pelatihan Selamatkan Nyawa', 'Tingkatkan keterampilan Bantuan Hidup Dasar (BHD) dengan alat peraga yang akurat, terjangkau, dan mudah digunakan. Selamatkan nyawa dengan persiapan yang tepat.', '{"subtitle": "Solusi Inovatif Pelatihan", "highlight": "Selamatkan Nyawa"}', 1),
('product', 'Produk Inovatif SIKOMJARU', 'Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.', '{"price": "Rp 660.000", "features": ["Indikator Lampu", "Panduan Suara", "Layar LCD Digital", "Adaptor Listrik"]}', 2),
('profile', 'Profil Tim SIKOMJARU', 'Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.', '{"vision": "Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif", "mission": "Mengatasi tingginya angka kematian akibat henti jantung"}', 3),
('certification', 'Sertifikasi & Legalitas', 'SIKOMJARU telah memiliki legalitas dan sertifikasi resmi sebagai produk inovasi yang terdaftar dan diakui secara hukum.', '{"documents": ["NIB", "HKI"]}', 4),
('research', 'Penelitian', 'Dokumentasi dari proses perancangan, pengujian, hingga sosialisasi produk kepada masyarakat dan institusi pendidikan.', '{"process": "Analisis kebutuhan, pengembangan prototype, pengujian fungsionalitas"}', 5),
('shopping', 'Belanja Produk SIKOMJARU', 'Dapatkan alat peraga RJP inovatif kami dengan mudah melalui berbagai platform marketplace terpercaya di Indonesia.', '{"platforms": ["Shopee", "Tokopedia", "Lazada"]}', 6),
('reviews', 'Review & Testimoni', 'Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai institusi pendidikan, rumah sakit, dan komunitas kesehatan di seluruh Indonesia.', '{"testimonials": []}', 7);

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, description) VALUES
('site_title', '"SIKOMJARU"', 'Website title'),
('site_description', '"Solusi Inovatif Pelatihan Selamatkan Nyawa"', 'Website description'),
('contact_phone', '"+62 822-3484-5084"', 'Contact phone number'),
('contact_email', '"sikomjaru.official@gmail.com"', 'Contact email'),
('social_instagram', '"@sikomjaru.official"', 'Instagram handle'),
('social_tiktok', '"@sikomjaru.official"', 'TikTok handle'),
('social_facebook', '"Sikomjaru.official"', 'Facebook page'),
('social_youtube', '"@SIKOMJARU_Phantom_Edukasi_RJP"', 'YouTube channel');

-- Create update trigger for updated_at columns
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_content_sections_updated_at BEFORE UPDATE ON content_sections FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow anonymous read access for content
CREATE POLICY "Allow anonymous read access" ON content_sections FOR SELECT USING (is_active = true);
CREATE POLICY "Allow anonymous read access" ON media_files FOR SELECT USING (true);
CREATE POLICY "Allow anonymous read access" ON site_settings FOR SELECT USING (true);

-- Restrict admin table access
CREATE POLICY "Admin users can read their own data" ON admin_users FOR SELECT USING (auth.uid()::text = id::text);
