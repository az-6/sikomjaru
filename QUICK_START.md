# QUICK START GUIDE - SIKOMJARU CMS

## 🚀 Memulai Menggunakan CMS

### 1. Jalankan Development Server

```bash
cd sikomjaru-website
npm run dev
```

### 2. Akses Website

- Buka browser ke: `http://localhost:3000`
- Website SIKOMJARU akan terbuka

### 3. Akses Admin Panel

1. **Klik menu burger** (☰) di pojok kanan atas
2. **Klik "Admin Login"**
3. **Login** dengan kredensial admin Supabase
4. **Dashboard Admin** akan terbuka

### 4. Kelola Konten (Content Sections)

- **Tab "Content Sections"**: Kelola konten website
- **Pilih section** untuk edit
- **Edit**: Title, Description, Order, Status
- **Save**: Klik "Save Changes"

### 5. Upload Media (Media Library)

- **Tab "Media Library"**: Upload dan kelola file
- **Pilih file** dari komputer
- **Tambahkan**: Alt text dan caption
- **Upload**: Klik "Upload File"

### 6. Pengaturan Situs (Site Settings)

- **Tab "Site Settings"**: Konfigurasi website
- **Edit nilai** pengaturan
- **Save**: Klik tombol save

## 📱 Tips Penggunaan

### Burger Menu Features

- **Home**: Kembali ke halaman utama
- **About**: Tentang SIKOMJARU
- **Contact**: Informasi kontak
- **Admin Login**: Akses panel admin (jika belum login)
- **Dashboard**: Admin dashboard (jika sudah login)
- **Logout**: Keluar dari admin (jika sudah login)

### Content Management Tips

- **Order Index**: Angka kecil = tampil lebih atas
- **Active Status**: ON = konten tampil, OFF = konten tersembunyi
- **Auto Save**: Perubahan langsung tersimpan ke database

### Media Management Tips

- **Supported Formats**: JPG, PNG, GIF, PDF, etc
- **Alt Text**: Penting untuk SEO dan accessibility
- **File Size**: Disarankan < 2MB untuk performa optimal

## ⚡ Shortcut & Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Database (Supabase)

- Dashboard: `https://app.supabase.com`
- Tables: `content_sections`, `media_files`, `site_settings`, `admin_users`

## 🔧 Troubleshooting

### CMS tidak bisa diakses?

1. Pastikan development server berjalan
2. Cek koneksi Supabase di `.env.local`
3. Periksa console browser untuk error

### Login admin gagal?

1. Cek kredensial di tabel `admin_users`
2. Pastikan password ter-hash dengan benar
3. Cek network tab untuk error API

### Upload file gagal?

1. Cek ukuran file (max 2MB)
2. Pastikan Supabase storage bucket tersedia
3. Cek permissions storage bucket

## 📞 Need Help?

- **Documentation**: Baca `CMS_DOCUMENTATION.md`
- **Setup Guide**: Lihat `SUPABASE_SETUP.md`
- **Full Implementation**: Cek `IMPLEMENTASI_FINAL.md`

---

**🎯 Happy Managing Content with SIKOMJARU CMS!**
