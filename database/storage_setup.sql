-- Setup Supabase Storage untuk CMS SIKOMJARU
-- Jalankan di Supabase SQL Editor

-- Buat bucket untuk gambar CMS
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-images', 'cms-images', true);

-- Policy untuk upload gambar (authenticated users)
CREATE POLICY "Allow authenticated users to upload images" ON storage.objects FOR INSERT WITH CHECK (
    bucket_id = 'cms-images' AND
    auth.role() = 'authenticated'
);

-- Policy untuk read gambar (public access)
CREATE POLICY "Allow public access to images" ON storage.objects FOR SELECT USING (bucket_id = 'cms-images');

-- Policy untuk delete gambar (authenticated users)
CREATE POLICY "Allow authenticated users to delete images" ON storage.objects FOR DELETE USING (
    bucket_id = 'cms-images' AND
    auth.role() = 'authenticated'
);

-- Policy untuk update gambar (authenticated users) 
CREATE POLICY "Allow authenticated users to update images" ON storage.objects FOR UPDATE USING (
    bucket_id = 'cms-images' AND
    auth.role() = 'authenticated'
);

-- Untuk development/testing, kita bisa allow semua operasi tanpa auth
-- HATI-HATI: Untuk production sebaiknya gunakan proper authentication

-- Allow all operations for development (REMOVE IN PRODUCTION)
CREATE POLICY "Allow all operations for development" ON storage.objects FOR ALL USING (bucket_id = 'cms-images');
