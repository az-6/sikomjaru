-- SQL untuk membuat tabel produk_sections
-- Jalankan di Supabase SQL Editor

-- Create produk_sections table
CREATE TABLE IF NOT EXISTS produk_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL DEFAULT 'Produk Inovatif SIKOMJARU',
  subtitle TEXT NOT NULL DEFAULT 'Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.',
  benefits_title TEXT NOT NULL DEFAULT 'Manfaat dan Keunggulan',
  benefits_description TEXT NOT NULL DEFAULT 'SIKOMJARU mengatasi kelemahan produk komersial dengan harga yang jauh lebih terjangkau (hanya 15% dari harga pasar), material fiber yang kokoh, serta fitur edukatif yang ramah bagi pemula.',
  features_title TEXT NOT NULL DEFAULT 'Fitur Utama & Spesifikasi',
  carousel_items JSONB DEFAULT '[]'::jsonb,
  benefits JSONB DEFAULT '[]'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default data
INSERT INTO produk_sections (
  title,
  subtitle,
  benefits_title,
  benefits_description,
  features_title,
  carousel_items,
  benefits,
  features
) VALUES (
  'Produk Inovatif SIKOMJARU',
  'Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.',
  'Manfaat dan Keunggulan',
  'SIKOMJARU mengatasi kelemahan produk komersial dengan harga yang jauh lebih terjangkau (hanya 15% dari harga pasar), material fiber yang kokoh, serta fitur edukatif yang ramah bagi pemula.',
  'Fitur Utama & Spesifikasi',
  '[
    {
      "type": "image",
      "url": "https://placehold.co/600x500/e0f2fe/0ea5e9?text=Tampak+Produk+SIKOMJARU",
      "title": "Tampak Produk SIKOMJARU"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/d1fae5/34d399?text=Layar+LCD+Digital",
      "title": "Layar LCD Digital SIKOMJARU"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/fef3c7/d97706?text=Panduan+Suara+Speaker",
      "title": "Panduan Suara Speaker"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/ecfdf5/10b981?text=Indikator+Lampu+LED",
      "title": "Indikator Lampu LED"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/fecaca/991b1b?text=Material+Fiber+Berkualitas",
      "title": "Material Fiber Berkualitas"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/dbeafe/1e3a8a?text=Motif+Batik+Banyumasan",
      "title": "Motif Batik Banyumasan"
    }
  ]'::jsonb,
  '[
    {
      "title": "Harga Terjangkau",
      "description": "Memudahkan akses bagi sekolah, kader kesehatan, dan individu.",
      "icon": "CheckCircle"
    },
    {
      "title": "Desain Edukatif & Lokal",
      "description": "Motif Batik Banyumasan sebagai ikon budaya dan daya tarik edukatif.",
      "icon": "CheckCircle"
    },
    {
      "title": "Material Tahan Lama",
      "description": "Terbuat dari fiber yang kuat, tahan air, dan mudah diperbaiki.",
      "icon": "CheckCircle"
    }
  ]'::jsonb,
  '[
    {
      "title": "Indikator Lampu",
      "description": "Memberi tanda visual jika kedalaman kompresi sudah sesuai (5 cm) atau belum.",
      "icon": "Lightbulb",
      "color": "blue"
    },
    {
      "title": "Panduan Suara",
      "description": "Speaker memandu pengguna menekan dada sesuai ketukan standar (100-120 kali/menit).",
      "icon": "Mic",
      "color": "teal"
    },
    {
      "title": "Layar LCD Digital",
      "description": "Menampilkan jumlah kompresi, visualisasi EKG, dan indikator tekanan secara real-time.",
      "icon": "Monitor",
      "color": "orange"
    },
    {
      "title": "Adaptor Listrik",
      "description": "Lebih praktis dan hemat biaya, cocok untuk sesi pelatihan yang panjang dan berulang.",
      "icon": "Zap",
      "color": "green"
    }
  ]'::jsonb
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_produk_sections_carousel_items ON produk_sections USING GIN (carousel_items);
CREATE INDEX IF NOT EXISTS idx_produk_sections_benefits ON produk_sections USING GIN (benefits);
CREATE INDEX IF NOT EXISTS idx_produk_sections_features ON produk_sections USING GIN (features);

-- Enable RLS
ALTER TABLE produk_sections ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable read access for all users" ON produk_sections FOR SELECT USING (true);
CREATE POLICY "Enable all operations for authenticated users" ON produk_sections FOR ALL USING (auth.role() = 'authenticated');
