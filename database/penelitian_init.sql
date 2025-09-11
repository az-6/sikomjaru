-- Create table for penelitian section
CREATE TABLE IF NOT EXISTS penelitian_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Penelitian',
  description TEXT NOT NULL DEFAULT 'Dokumentasi dari proses perancangan, pengujian, hingga sosialisasi produk kepada masyarakat dan institusi pendidikan. SIKOMJARU telah melalui serangkaian penelitian mendalam untuk memastikan efektivitas sebagai alat peraga RJP. Proses penelitian meliputi analisis kebutuhan, pengembangan prototype, pengujian fungsionalitas, hingga evaluasi dampak pembelajaran pada berbagai kelompok target termasuk siswa SMK, kader kesehatan masyarakat, dan tenaga medis profesional.',
  implementation_title TEXT NOT NULL DEFAULT 'Implementasi',
  
  -- Carousel items stored as JSONB
  carousel_items JSONB DEFAULT '[]',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default data
INSERT INTO penelitian_sections (
  title,
  description,
  implementation_title,
  carousel_items
) VALUES (
  'Penelitian',
  'Dokumentasi dari proses perancangan, pengujian, hingga sosialisasi produk kepada masyarakat dan institusi pendidikan. SIKOMJARU telah melalui serangkaian penelitian mendalam untuk memastikan efektivitas sebagai alat peraga RJP. Proses penelitian meliputi analisis kebutuhan, pengembangan prototype, pengujian fungsionalitas, hingga evaluasi dampak pembelajaran pada berbagai kelompok target termasuk siswa SMK, kader kesehatan masyarakat, dan tenaga medis profesional.',
  'Implementasi',
  '[
    {
      "type": "image",
      "url": "https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+SMA",
      "title": "Sosialisasi di SMA Muhammadiyah Tambak",
      "description": "Edukasi RJP untuk siswa SMK kesehatan"
    },
    {
      "type": "image", 
      "url": "https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+di+Desa",
      "title": "Sosialisasi di Desa Kalisaleh",
      "description": "Pelatihan RJP untuk masyarakat desa"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Instalasi",
      "title": "Proses Instalasi & Setup",
      "description": "Pemasangan dan konfigurasi perangkat"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/e5e7eb/4b5563?text=Sosialisasi+Kader",
      "title": "Pelatihan Kader Kesehatan",
      "description": "Edukasi untuk kader posyandu dan puskesmas"
    },
    {
      "type": "image",
      "url": "https://placehold.co/400x300/e5e7eb/4b5563?text=Proses+Perancangan",
      "title": "Proses Perancangan",
      "description": "Desain dan pengembangan prototype"
    },
    {
      "type": "special",
      "url": "",
      "title": "Penelitian Berkelanjutan",
      "description": "Evaluasi dan pengembangan lebih lanjut"
    }
  ]'
) ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE penelitian_sections ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (development)
CREATE POLICY "Enable all operations for development" ON penelitian_sections FOR ALL USING (true) WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_penelitian_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_penelitian_sections_updated_at
  BEFORE UPDATE ON penelitian_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_penelitian_sections_updated_at();
