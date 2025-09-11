-- Fix RLS Policy untuk Profil Sections
-- Jalankan di Supabase SQL Editor untuk memperbaiki policy yang terlalu ketat

-- Drop policy lama yang terlalu ketat
DROP POLICY IF EXISTS "Allow authenticated users to manage profil sections" ON profil_sections;

-- Buat policy baru yang lebih permisif untuk development
CREATE POLICY "Allow all operations for profil sections" ON profil_sections FOR ALL USING (true);

-- Alternatif: jika ingin tetap menggunakan auth, pastikan user sudah authenticated
-- CREATE POLICY "Allow authenticated users to manage profil sections" ON profil_sections FOR ALL USING (auth.role() = 'authenticated');
