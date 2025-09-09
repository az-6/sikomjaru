# Setup Supabase untuk SIKOMJARU CMS

## 1. Buat Project Supabase

1. Kunjungi [supabase.com](https://supabase.com) dan buat akun
2. Klik "New Project"
3. Pilih organization dan beri nama "sikomjaru-cms"
4. Set password untuk database
5. Pilih region terdekat (Singapore untuk Indonesia)
6. Tunggu hingga project selesai dibuat

## 2. Setup Database Schema

1. Di dashboard Supabase, buka **SQL Editor**
2. Klik "New Query"
3. Copy paste seluruh isi dari file `supabase-schema.sql`
4. Klik "Run" untuk menjalankan query
5. Pastikan semua tabel berhasil dibuat

## 3. Setup Storage

1. Buka tab **Storage** di sidebar
2. Klik "Create a new bucket"
3. Beri nama: `media`
4. Set sebagai **Public bucket** (centang)
5. Klik "Save"

## 4. Setup Storage Policies

1. Di Storage, pilih bucket `media`
2. Klik tab **Policies**
3. Klik "Add Policy" untuk SELECT operation
4. Policy template: "Allow public read-only access"
5. Klik "Add Policy" lagi untuk INSERT operation
6. Policy template: "Allow authenticated users to upload"

## 5. Get API Keys

1. Buka **Settings** > **API**
2. Copy **Project URL**
3. Copy **Project API keys** > **anon/public**
4. Copy **Project API keys** > **service_role** (secret)

## 6. Update Environment Variables

Buka file `.env.local` dan update:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 7. Test Connection

1. Jalankan `npm run dev`
2. Buka `http://localhost:3000` - website harus bisa load
3. Buka `http://localhost:3000/admin` - admin panel harus bisa load
4. Di browser console, tidak boleh ada error koneksi Supabase

## 8. Seed Initial Data

Database schema sudah include INSERT statements untuk data awal:

- Content sections (hero, product, profile, dll)
- Site settings (email, social media, dll)

Data ini akan otomatis tersedia setelah menjalankan schema SQL.

## 9. Test CMS Functionality

1. Di admin panel (`/admin`), coba edit content di tab "Content Sections"
2. Kembali ke halaman utama dan refresh - perubahan harus terlihat
3. Test upload gambar di tab "Media Library"
4. Test update settings di tab "Site Settings"

## Troubleshooting

### Error: "Invalid API key"

- Double check API keys di `.env.local`
- Pastikan tidak ada spasi atau karakter tambahan
- Restart development server setelah update env

### Error: "Permission denied"

- Check RLS policies sudah disetup dengan benar
- Untuk development, bisa temporary disable RLS di tabel tertentu

### Error: "Bucket not found"

- Pastikan bucket `media` sudah dibuat
- Check bucket name exactly match dengan kode (case sensitive)

### Data tidak muncul

- Check di Supabase Table Editor apakah data sudah ada
- Pastikan `is_active = true` untuk content sections
- Check browser console untuk error JavaScript

## Production Setup

Untuk production:

1. Gunakan production database terpisah
2. Enable Row Level Security (RLS) yang lebih ketat
3. Setup backup otomatis di Supabase
4. Monitor usage di Supabase dashboard
