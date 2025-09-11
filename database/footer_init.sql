-- Footer Section Table
CREATE TABLE IF NOT EXISTS footer_sections (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(100) NOT NULL DEFAULT 'SIKOMJARU',
  company_description TEXT NOT NULL DEFAULT 'Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga kesehatan.',
  supported_by_links JSONB DEFAULT '[]',
  social_media_links JSONB DEFAULT '[]',
  contact_email VARCHAR(255) NOT NULL DEFAULT 'sikomjaru.official@gmail.com',
  contact_location VARCHAR(255) NOT NULL DEFAULT 'Purwokerto, Indonesia',
  copyright_text TEXT NOT NULL DEFAULT 'Hak cipta dilindungi undang-undang.',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Delete any existing data to ensure clean state
DELETE FROM footer_sections;

-- Insert default data
INSERT INTO footer_sections (
  company_name,
  company_description,
  supported_by_links,
  social_media_links,
  contact_email,
  contact_location,
  copyright_text
) VALUES (
  'SIKOMJARU',
  'Inovasi pelatihan RJP untuk memberdayakan masyarakat dan tenaga kesehatan.',
  '[
    {
      "name": "UMP",
      "url": "https://www.instagram.com/ump.ac.id?igsh=dXRvazl2NGpsM3dn"
    },
    {
      "name": "Kemahasiswaan Dikti",
      "url": "https://www.instagram.com/kemahasiswaan.dikti?igsh=MWJhdmpuY3E5NXRvaw=="
    },
    {
      "name": "Belmawa Dikti",
      "url": "#"
    }
  ]',
  '[
    {
      "platform": "whatsapp",
      "url": "https://wa.me/6282234845084",
      "display_text": "+62 822-3484-5084",
      "icon": "phone"
    },
    {
      "platform": "instagram",
      "url": "https://www.instagram.com/sikomjaru.official?igsh=MWZ5c3lvdjd1M252bA==",
      "display_text": "@sikomjaru.official",
      "icon": "instagram"
    },
    {
      "platform": "tiktok",
      "url": "https://www.tiktok.com/@sikomjaru?_t=ZS-8z4z1yF59rF&_r=1",
      "display_text": "@sikomjaru.official",
      "icon": "tiktok"
    },
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/profile.php?id=61579365418597",
      "display_text": "Sikomjaru.official",
      "icon": "facebook"
    },
    {
      "platform": "youtube",
      "url": "https://www.youtube.com/@SIKOMJARU_Phantom_Edukasi_RJP",
      "display_text": "@SIKOMJARU_Phantom_Edukasi_RJP",
      "icon": "youtube"
    }
  ]',
  'sikomjaru.official@gmail.com',
  'Purwokerto, Indonesia',
  'Hak cipta dilindungi undang-undang.'
);

-- RLS Policies
ALTER TABLE footer_sections ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on footer_sections" ON footer_sections
  FOR SELECT USING (true);

-- Allow public update access (temporary for development)
CREATE POLICY "Allow public update access on footer_sections" ON footer_sections
  FOR UPDATE USING (true);

-- Allow public insert access (temporary for development)
CREATE POLICY "Allow public insert access on footer_sections" ON footer_sections
  FOR INSERT WITH CHECK (true);

-- Allow public delete access (temporary for development)
CREATE POLICY "Allow public delete access on footer_sections" ON footer_sections
  FOR DELETE USING (true);

-- Update trigger for updated_at
CREATE OR REPLACE FUNCTION update_footer_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_footer_sections_updated_at
  BEFORE UPDATE ON footer_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_footer_sections_updated_at();
