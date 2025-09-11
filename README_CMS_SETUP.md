# Setup CMS SIKOMJARU - Multiple Sections

Panduan untuk setup CMS SIKOMJARU dengan multiple sections.

## Sections Implemented

### ✅ Section Home (Completed)

- Database: `home_sections` table
- API: `/api/cms/home`
- Features: Edit konten utama, carousel dengan gambar/video YouTube, logo partners hardcoded

### ✅ Section Produk (Completed)

- Database: `produk_sections` table
- API: `/api/cms/produk`
- Features: Edit konten produk, carousel produk, manajemen benefits & features

### ✅ Section Profil (Completed)

- Database: `profil_sections` table
- API: `/api/cms/profil`
- Features: Edit konten profil tim, carousel foto tim, manajemen anggota tim

### ✅ Section Sertifikasi (Completed)

- Database: `sertifikasi_sections` table
- API: `/api/cms/sertifikasi`
- Features: Edit konten sertifikasi, upload/edit foto NIB dan HKI

### ✅ Section Penelitian (Completed)

- Database: `penelitian_sections` table
- API: `/api/cms/penelitian`
- Features: Edit konten penelitian, manajemen carousel gambar/video penelitian

### 🚧 Pending Sections

- Section Belanja, Review, Footer

## 1. Setup Database

### Jalankan SQL Script di Supabase

1. Buka dashboard Supabase Anda: https://supabase.com/dashboard
2. Pilih project Anda
3. Buka tab "SQL Editor"
4. Copy dan paste isi file `database/home_init.sql`
5. Copy dan paste isi file `database/produk_init.sql`
6. Copy dan paste isi file `database/profil_init.sql`
7. Copy dan paste isi file `database/sertifikasi_init.sql`
8. Copy dan paste isi file `database/penelitian_init.sql`
9. Klik "Run" untuk menjalankan script

Script akan membuat:

- Tabel `home_sections` untuk konten utama section home
- Tabel `produk_sections` untuk konten section produk
- Tabel `profil_sections` untuk konten section profil
- Tabel `sertifikasi_sections` untuk konten section sertifikasi
- Tabel `penelitian_sections` untuk konten section penelitian
- RLS policies untuk keamanan data
- Data default untuk testing

### Setup Supabase Storage

1. Di SQL Editor yang sama, jalankan script dari file `database/storage_setup.sql`
2. Script akan membuat:
   - Bucket `cms-images` untuk menyimpan gambar
   - Policies untuk upload, read, update, delete gambar
   - Public access untuk gambar yang diupload

### Logo Partners

Logo partners (UMP, FIKES, P2MW, ISBI, dll) sudah **hardcoded** di komponen dan tidak perlu dikelola melalui database. Logo-logo ini akan otomatis muncul di section Home.

### Environment Variables

File `.env.local` sudah berisi konfigurasi Supabase yang benar.

## 2. Testing CMS

### Mengakses Admin Panel

1. Jalankan development server: `npm run dev`
2. Buka browser ke `http://localhost:3000/admin`
3. Tab "Home" sudah aktif dan berfungsi
4. Tab lainnya masih disabled (akan dibuat selanjutnya)

### Fitur Admin Panel - Section Home:

- ✅ Edit judul utama
- ✅ Edit subtitle dan deskripsi
- ✅ Upload/edit background image
- ✅ Tambah/edit URL video
- ✅ **Upload gambar carousel ke Supabase Storage** ⭐ NEW!
- ✅ **Preview gambar carousel dengan thumbnail** ⭐ NEW!
- ✅ Kelola gambar carousel dari URL (untuk gambar eksternal)
- ✅ Auto-delete gambar dari storage saat dihapus
- ✅ Logo partners otomatis hardcoded (UMP, FIKES, P2MW, ISBI, dll)
- ✅ Preview dan simpan perubahan

### Testing Frontend

1. Buka `http://localhost:3000` untuk melihat homepage
2. Section Home akan mengambil data dari database
3. Perubahan di admin panel akan langsung terlihat di frontend

## 3. Struktur File yang Dibuat

```
app/
├── api/cms/home/route.ts          # API endpoint untuk CRUD Home data
├── api/upload/route.ts            # API endpoint untuk upload gambar
├── admin/page.tsx                 # Admin panel (fokus tab Home)
components/
├── sections/HomeSection.tsx       # Komponen Home section yang dynamic
hooks/
├── use-home-data.ts              # Custom hook untuk fetch Home data
lib/
├── types.ts                      # TypeScript interfaces
├── supabaseClient.ts             # Supabase client configuration
├── imageUpload.ts                # Utility functions untuk upload/delete gambar
database/
├── home_init.sql                 # SQL script untuk setup database
├── storage_setup.sql             # SQL script untuk setup Supabase Storage
```

## 4. Fitur yang Sudah Implementasi

### Backend:

- ✅ Supabase client setup
- ✅ Database tables dengan RLS
- ✅ **Supabase Storage bucket untuk gambar** ⭐ NEW!
- ✅ API routes untuk GET dan PUT data
- ✅ **Upload/delete gambar utilities** ⭐ NEW!
- ✅ TypeScript interfaces

### Frontend:

- ✅ Admin panel dengan form lengkap
- ✅ Real-time preview
- ✅ Dynamic home section component
- ✅ Loading states dan error handling
- ✅ Image modal untuk preview
- ✅ Responsive design

## 5. Next Steps

Setelah Section Home selesai dan berjalan dengan baik, kita bisa lanjut ke section berikutnya:

1. Section Produk
2. Section Profil
3. Section Sertifikasi & Legalitas
4. Section Penelitian
5. Section Belanja
6. Section Review & Testimoni
7. Section Footer

Setiap section akan mengikuti pola yang sama:

- Tabel database
- API routes
- Admin panel tab
- Frontend component
- Custom hooks

## 6. Troubleshooting

### Jika terjadi error:

1. Pastikan environment variables di `.env.local` sudah benar
2. Pastikan SQL script sudah dijalankan di Supabase
3. Check browser console untuk error details
4. Pastikan semua dependencies sudah terinstall dengan `npm install`

### Common Issues:

- **CORS errors**: Pastikan Supabase RLS policies sudah diaktifkan
- **404 API errors**: Pastikan file `app/api/cms/home/route.ts` sudah dibuat
- **TypeScript errors**: Run `npm run build` untuk check type issues
