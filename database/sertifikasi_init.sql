-- Create table for sertifikasi section
CREATE TABLE IF NOT EXISTS sertifikasi_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Sertifikasi & Legalitas',
  subtitle TEXT NOT NULL DEFAULT 'SIKOMJARU telah memiliki legalitas dan sertifikasi resmi sebagai produk inovasi yang terdaftar dan diakui secara hukum.',
  documents_title TEXT NOT NULL DEFAULT 'Dokumen Resmi',
  
  -- NIB Document
  nib_title TEXT NOT NULL DEFAULT 'Surat NIB (Nomor Induk Berusaha)',
  nib_description TEXT NOT NULL DEFAULT 'Legalitas usaha resmi dari pemerintah Indonesia',
  nib_image TEXT DEFAULT 'https://placehold.co/400x300/dbeafe/1e3a8a?text=Surat+NIB+SIKOMJARU',
  
  -- HKI Document  
  hki_title TEXT NOT NULL DEFAULT 'Sertifikat HKI (Hak Kekayaan Intelektual)',
  hki_description TEXT NOT NULL DEFAULT 'Perlindungan hukum atas inovasi produk SIKOMJARU',
  hki_image TEXT DEFAULT 'https://placehold.co/400x300/ecfdf5/10b981?text=Sertifikat+HKI+SIKOMJARU',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default data
INSERT INTO sertifikasi_sections (
  title,
  subtitle,
  documents_title,
  nib_title,
  nib_description,
  nib_image,
  hki_title,
  hki_description,
  hki_image
) VALUES (
  'Sertifikasi & Legalitas',
  'SIKOMJARU telah memiliki legalitas dan sertifikasi resmi sebagai produk inovasi yang terdaftar dan diakui secara hukum.',
  'Dokumen Resmi',
  'Surat NIB (Nomor Induk Berusaha)',
  'Legalitas usaha resmi dari pemerintah Indonesia',
  'https://placehold.co/400x300/dbeafe/1e3a8a?text=Surat+NIB+SIKOMJARU',
  'Sertifikat HKI (Hak Kekayaan Intelektual)',
  'Perlindungan hukum atas inovasi produk SIKOMJARU',
  'https://placehold.co/400x300/ecfdf5/10b981?text=Sertifikat+HKI+SIKOMJARU'
) ON CONFLICT DO NOTHING;

-- Enable RLS
ALTER TABLE sertifikasi_sections ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (development)
CREATE POLICY "Enable all operations for development" ON sertifikasi_sections FOR ALL USING (true) WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_sertifikasi_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_sertifikasi_sections_updated_at
  BEFORE UPDATE ON sertifikasi_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_sertifikasi_sections_updated_at();
