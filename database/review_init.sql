-- Database initialization for Review section
-- Run this SQL in your Supabase SQL editor

-- Drop table if exists (for clean re-creation)
DROP TABLE IF EXISTS review_sections;

-- Create table for review_sections
CREATE TABLE review_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Review & Testimoni',
  subtitle TEXT NOT NULL DEFAULT 'Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai institusi pendidikan, rumah sakit, dan komunitas kesehatan di seluruh Indonesia.',
  photos_title TEXT NOT NULL DEFAULT 'Foto Review Pengguna',
  review_items JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Delete any existing data to prevent duplicates
DELETE FROM review_sections;

-- Insert default data (only one row should exist)
INSERT INTO review_sections (
  title,
  subtitle,
  photos_title,
  review_items
) VALUES (
  'Review & Testimoni',
  'Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai institusi pendidikan, rumah sakit, dan komunitas kesehatan di seluruh Indonesia.',
  'Foto Review Pengguna',
  '[
    {
      "type": "image",
      "url": "https://placehold.co/400x300/e0f2fe/0ea5e9?text=Review+Mahasiswa+Keperawatan",
      "title": "Testimoni Mahasiswa Keperawatan",
      "description": "Feedback positif dari mahasiswa program studi keperawatan"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/d1fae5/34d399?text=Review+Tenaga+Medis+RS",
      "title": "Testimoni Tenaga Medis Rumah Sakit", 
      "description": "Apresiasi dari dokter dan perawat profesional"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/fef3c7/d97706?text=Review+Guru+SMK+Kesehatan",
      "title": "Testimoni Guru SMK Kesehatan",
      "description": "Pengalaman menggunakan SIKOMJARU dalam pembelajaran"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/dbeafe/1e3a8a?text=Review+Kader+Posyandu",
      "title": "Testimoni Kader Posyandu",
      "description": "Manfaat SIKOMJARU untuk pelatihan masyarakat"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/ecfdf5/10b981?text=Review+Organisasi+Mahasiswa",
      "title": "Testimoni Organisasi Mahasiswa",
      "description": "Penggunaan untuk pelatihan BHD di kampus"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/fed7aa/9a3412?text=Review+Puskesmas+Daerah",
      "title": "Testimoni Puskesmas Daerah",
      "description": "Implementasi untuk program kesehatan masyarakat"
    },
    {
      "type": "special",
      "url": "",
      "title": "Tingkat Kepuasan Tinggi",
      "description": "Testimoni dan review positif dari seluruh pengguna",
      "special_content": {
        "icon": "Heart",
        "text": "Kepuasan 100%",
        "background": "from-blue-50 to-blue-100"
      }
    }
  ]'
);

-- Set up Row Level Security (RLS)
ALTER TABLE review_sections ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow all operations on review_sections for development" ON review_sections;

-- Create policies for development (allow all operations)
-- In production, you should restrict these policies
CREATE POLICY "Allow all operations on review_sections for development" ON review_sections
  FOR ALL USING (true) WITH CHECK (true);

-- Drop existing trigger and function if they exist
DROP TRIGGER IF EXISTS update_review_sections_updated_at ON review_sections;
DROP FUNCTION IF EXISTS update_review_sections_updated_at();

-- Add update trigger
CREATE OR REPLACE FUNCTION update_review_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_review_sections_updated_at
  BEFORE UPDATE ON review_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_review_sections_updated_at();

-- Verify the table was created and populated
SELECT count(*) as total_rows FROM review_sections;
SELECT * FROM review_sections;
