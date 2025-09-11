-- Inisialisasi tabel untuk Section Profil
-- Jalankan di Supabase SQL Editor

-- Buat tabel profil_sections
CREATE TABLE IF NOT EXISTS profil_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL DEFAULT 'Profil Tim SIKOMJARU',
  subtitle TEXT NOT NULL DEFAULT 'Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.',
  
  -- Tujuan Section
  objective_title TEXT NOT NULL DEFAULT 'Tujuan Mulia Kami',
  objective_description TEXT NOT NULL DEFAULT 'Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.',
  objective_icon TEXT NOT NULL DEFAULT 'Target',
  
  -- Visi Section
  vision_title TEXT NOT NULL DEFAULT 'Visi Kami',
  vision_description TEXT NOT NULL DEFAULT 'Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.',
  vision_icon TEXT NOT NULL DEFAULT 'Eye',
  
  -- Team Section
  team_title TEXT NOT NULL DEFAULT 'Sikomjaru Team',
  
  -- Carousel gambar tim (JSONB array)
  team_carousel_items JSONB DEFAULT '[]'::jsonb,
  
  -- Team members (JSONB array)
  team_members JSONB DEFAULT '[]'::jsonb,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Buat atau update function untuk auto-update timestamp
CREATE OR REPLACE FUNCTION update_profil_sections_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Buat trigger untuk auto-update timestamp
DROP TRIGGER IF EXISTS profil_sections_updated_at ON profil_sections;
CREATE TRIGGER profil_sections_updated_at
  BEFORE UPDATE ON profil_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_profil_sections_updated_at();

-- Insert data default jika belum ada
INSERT INTO profil_sections (
  title,
  subtitle,
  objective_title,
  objective_description,
  objective_icon,
  vision_title,
  vision_description,
  vision_icon,
  team_title,
  team_carousel_items,
  team_members
) 
SELECT 
  'Profil Tim SIKOMJARU',
  'Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.',
  'Tujuan Mulia Kami',
  'Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.',
  'Target',
  'Visi Kami',
  'Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.',
  'Eye',
  'Sikomjaru Team',
  '[
    {
      "type": "image",
      "url": "https://placehold.co/600x500/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+1",
      "title": "Foto Kelompok Tim Mahasiswa P2MW - 1"
    },
    {
      "type": "image", 
      "url": "https://placehold.co/600x500/fef3c7/d97706?text=Foto+Kelompok+Tim+2",
      "title": "Foto Kelompok Tim Mahasiswa P2MW - 2"
    },
    {
      "type": "image",
      "url": "https://placehold.co/600x500/ecfdf5/10b981?text=Foto+Kelompok+Tim+3", 
      "title": "Foto Kelompok Tim Mahasiswa P2MW - 3"
    }
  ]'::jsonb,
  '[
    {
      "name": "Ns. M. Hanif Prasetya Adhi, S.Kep., M.Kep",
      "position": "COO",
      "avatar": "https://placehold.co/60x60/99f6e4/115e59?text=HP",
      "instagram": "https://www.instagram.com/hanif_prasetyaadhi?igsh=MTBhdjhtM2J0dmZiNA==",
      "type": "supervisor"
    },
    {
      "name": "Vieki Diva Ksatria",
      "position": "CEO", 
      "avatar": "https://placehold.co/60x60/bfdbfe/1e40af?text=VD",
      "instagram": "https://www.instagram.com/vieki.divaks_?igsh=cHd4d2ZrZGp2MmFu",
      "type": "student"
    },
    {
      "name": "Ruliyanti",
      "position": "Finance",
      "avatar": "https://placehold.co/60x60/fecaca/991b1b?text=R", 
      "instagram": "https://www.instagram.com/rulliyyn?igsh=OWplazBmdG80eXo1",
      "type": "student"
    },
    {
      "name": "Ilham Saifullah Yusup",
      "position": "Procurement",
      "avatar": "https://placehold.co/60x60/fed7aa/9a3412?text=ISY",
      "instagram": "https://www.instagram.com/hmsy14_?igsh=MTdlMDh3bjlkZWl4Zw==",
      "type": "student"
    },
    {
      "name": "Diva Bagus Kurniawan", 
      "position": "Publication",
      "avatar": "https://placehold.co/60x60/d8b4fe/581c87?text=DBK",
      "instagram": "https://www.instagram.com/divabagus74?igsh=ZGt0bTVrMmV3YnAx",
      "type": "student"
    }
  ]'::jsonb
WHERE NOT EXISTS (SELECT 1 FROM profil_sections LIMIT 1);

-- Enable RLS
ALTER TABLE profil_sections ENABLE ROW LEVEL SECURITY;

-- Policy untuk read (public access)
CREATE POLICY "Allow public read access to profil sections" ON profil_sections FOR SELECT USING (true);

-- Policy untuk insert/update/delete (authenticated users only - untuk admin)
CREATE POLICY "Allow authenticated users to manage profil sections" ON profil_sections FOR ALL USING (true);

-- Untuk development, bisa juga allow semua operasi tanpa auth
-- CREATE POLICY "Allow all operations for development" ON profil_sections FOR ALL USING (true);
