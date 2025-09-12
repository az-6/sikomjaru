-- Database initialization for Belanja section
-- Run this SQL in your Supabase SQL editor

-- Drop table if exists (for clean re-creation)
DROP TABLE IF EXISTS belanja_sections;

-- Create table for belanja_sections
CREATE TABLE belanja_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Belanja Produk SIKOMJARU',
  subtitle TEXT NOT NULL DEFAULT 'Dapatkan alat peraga RJP inovatif kami dengan mudah melalui berbagai platform marketplace terpercaya di Indonesia.',
  product_name TEXT NOT NULL DEFAULT 'SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru',
  product_description TEXT NOT NULL DEFAULT 'Alat peraga RJP inovatif dengan fitur lengkap: indikator lampu, panduan suara, dan layar LCD.',
  product_price TEXT NOT NULL DEFAULT 'Rp 660.000',
  platforms_title TEXT NOT NULL DEFAULT 'Tersedia di:',
  carousel_items JSONB DEFAULT '[]'::jsonb,
  platforms JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Delete any existing data to prevent duplicates
DELETE FROM belanja_sections;

-- Insert default data (only one row should exist)
INSERT INTO belanja_sections (
  title,
  subtitle,
  product_name,
  product_description,
  product_price,
  platforms_title,
  carousel_items,
  platforms
) VALUES (
  'Belanja Produk SIKOMJARU',
  'Dapatkan alat peraga RJP inovatif kami dengan mudah melalui berbagai platform marketplace terpercaya di Indonesia.',
  'SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru',
  'Alat peraga RJP inovatif dengan fitur lengkap: indikator lampu, panduan suara, dan layar LCD.',
  'Rp 660.000',
  'Tersedia di:',
  '[
    {
      "type": "image",
      "url": "https://placehold.co/600x600/dbeafe/1e3a8a?text=SIKOMJARU+Produk+Utama",
      "title": "Produk SIKOMJARU Tampak Utama"
    },
    {
      "type": "image", 
      "url": "https://placehold.co/600x600/e0f2fe/0ea5e9?text=SIKOMJARU+Tampak+Samping",
      "title": "Produk SIKOMJARU Tampak Samping"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x600/d1fae5/34d399?text=Fitur+LCD+SIKOMJARU", 
      "title": "Fitur LCD Digital SIKOMJARU"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x600/fef3c7/d97706?text=Detail+Komponen+SIKOMJARU",
      "title": "Detail Komponen SIKOMJARU"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x600/ecfdf5/10b981?text=Motif+Batik+Banyumasan",
      "title": "Motif Batik Banyumasan SIKOMJARU"
    }
  ]',
  '[
    {
      "name": "Shopee",
      "url": "https://id.shp.ee/xPVSBVK",
      "color": "orange",
      "icon": "ShoppingBag"
    },
    {
      "name": "Tokopedia", 
      "url": "https://tk.tokopedia.com/ZSAC9y2ch/",
      "color": "green",
      "icon": "ShoppingBag"
    },
    {
      "name": "WhatsApp",
      "url": "https://wa.me/6282234845084",
      "color": "green-600",
      "icon": "Phone"
    }
  ]'
);

-- Set up Row Level Security (RLS)
ALTER TABLE belanja_sections ENABLE ROW LEVEL SECURITY;


-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow all operations on belanja_sections for development" ON belanja_sections;
DROP POLICY IF EXISTS "Allow public read access on belanja_sections" ON belanja_sections;
DROP POLICY IF EXISTS "Allow authenticated modify access on belanja_sections" ON belanja_sections;

-- Allow public read access
CREATE POLICY "Allow public read access on belanja_sections" ON belanja_sections
  FOR SELECT USING (true);

-- Allow only authenticated users to insert, update, or delete
CREATE POLICY "Allow authenticated modify access on belanja_sections" ON belanja_sections
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Drop existing trigger and function if they exist
DROP TRIGGER IF EXISTS update_belanja_sections_updated_at ON belanja_sections;
DROP FUNCTION IF EXISTS update_belanja_sections_updated_at();

-- Add update trigger
CREATE OR REPLACE FUNCTION update_belanja_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_belanja_sections_updated_at
  BEFORE UPDATE ON belanja_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_belanja_sections_updated_at();

-- Verify the table was created and populated
SELECT count(*) as total_rows FROM belanja_sections;
SELECT * FROM belanja_sections;
