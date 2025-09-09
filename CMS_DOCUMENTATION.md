# SIKOMJARU CMS Documentation

## Overview

Sistem CMS (Content Management System) untuk website SIKOMJARU yang terintegrasi dengan Supabase dan dapat di-deploy di Vercel.

## Setup Instructions

### 1. Database Setup (Supabase)

1. Buat project baru di [Supabase](https://supabase.com)
2. Jalankan SQL schema yang tersedia di `supabase-schema.sql` di SQL Editor Supabase
3. Buat bucket storage dengan nama `media` untuk upload gambar:
   ```sql
   insert into storage.buckets (id, name, public) values ('media', 'media', true);
   ```
4. Set policy untuk bucket media:
   ```sql
   CREATE POLICY "Allow public read access" ON storage.objects FOR SELECT USING (bucket_id = 'media');
   CREATE POLICY "Allow authenticated uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media');
   ```

### 2. Environment Variables

Update file `.env.local` dengan konfigurasi Supabase Anda:

```env
# Supabase Configuration (sudah ada)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Admin Configuration
ADMIN_EMAIL=admin@sikomjaru.com
ADMIN_PASSWORD=your_secure_password
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
```

### 3. Deployment di Vercel

1. Push code ke GitHub repository
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy

## Struktur CMS

### Content Sections

- **hero**: Bagian utama halaman depan
- **product**: Informasi produk SIKOMJARU
- **profile**: Profil tim dan visi misi
- **certification**: Sertifikasi dan legalitas
- **research**: Penelitian dan implementasi
- **shopping**: Informasi pembelian
- **reviews**: Review dan testimoni

### Site Settings

- **contact_phone**: Nomor telepon kontak
- **contact_email**: Email kontak
- **social_instagram**: Handle Instagram
- **social_tiktok**: Handle TikTok
- **social_facebook**: Halaman Facebook
- **social_youtube**: Channel YouTube

### Media Files

- Upload dan manage gambar/file
- Auto-resize dan optimasi
- CDN melalui Supabase Storage

## Cara Menggunakan

### 1. Akses Admin Dashboard

Kunjungi `/admin` untuk mengakses dashboard admin.

### 2. Mengedit Konten

1. Pilih tab "Content Sections"
2. Pilih section yang ingin diedit
3. Update title, description, atau content
4. Klik "Save Changes"

### 3. Upload Media

1. Pilih tab "Media Library"
2. Pilih file yang ingin diupload
3. Tambahkan alt text dan caption
4. Klik "Upload File"

### 4. Update Settings

1. Pilih tab "Site Settings"
2. Edit setting yang diinginkan
3. Klik tombol save di sebelah input

## Komponen CMS

### CMSText

Menampilkan teks dari CMS:

```tsx
<CMSText
  sectionName="hero"
  field="title"
  defaultText="Default Title"
  className="text-2xl font-bold"
  as="h1"
/>
```

### CMSImage

Menampilkan gambar dari CMS:

```tsx
<CMSImage
  sectionName="hero"
  imageIndex={0}
  alt="Hero Image"
  className="w-full h-auto"
  onClick={handleImageClick}
/>
```

### CMSContent

Akses penuh ke data section:

```tsx
<CMSContent sectionName="hero" fallback={<div>Loading...</div>}>
  {(section) => (
    <div>
      <h1>{section.title}</h1>
      <p>{section.description}</p>
    </div>
  )}
</CMSContent>
```

## Real-time Updates

CMS menggunakan Supabase real-time subscriptions, sehingga perubahan akan langsung terlihat di website tanpa perlu refresh.

## Security

- Row Level Security (RLS) enabled di Supabase
- Admin authentication untuk edit konten
- Public read access untuk konten aktif
- Media files dengan public access untuk performa

## Troubleshooting

### Error "Failed to fetch"

- Pastikan environment variables sudah benar
- Check koneksi ke Supabase
- Pastikan RLS policies sudah diatur dengan benar

### Upload gagal

- Check storage bucket sudah dibuat
- Pastikan policies untuk storage sudah diatur
- Check ukuran file (max 50MB)

### Konten tidak muncul

- Pastikan content section sudah diset `is_active = true`
- Check order_index untuk urutan konten
- Pastikan section_name sesuai dengan yang dipanggil di komponen

## API Endpoints

- `GET /api/cms/content` - Fetch all content sections
- `PUT /api/cms/content/[id]` - Update content section
- `POST /api/cms/media` - Upload media file
- `GET /api/cms/media` - Fetch media files
- `PUT /api/cms/settings` - Update site settings

## Future Enhancements

1. **Authentication System**: Implement proper admin login
2. **Image Optimization**: Auto-resize dan WebP conversion
3. **SEO Management**: Meta tags dan sitemap generator
4. **Backup System**: Regular backup ke cloud storage
5. **Version Control**: Track changes dan rollback
6. **Multi-language**: Support bahasa Indonesia dan Inggris
7. **Analytics**: Track konten performance
8. **Push Notifications**: Notifikasi update konten
