# SIKOMJARU Website with CMS

Website resmi SIKOMJARU dengan sistem Content Management System (CMS) terintegrasi menggunakan Next.js, Supabase, dan Vercel.

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone <repository-url>
cd sikomjaru-website
npm install
```

### 2. Setup Database (Supabase)

1. Buat project baru di [Supabase](https://supabase.com)
2. Copy URL dan API Keys dari Settings > API
3. Jalankan SQL dari file `supabase-schema.sql` di SQL Editor
4. Buat storage bucket bernama `media`

### 3. Environment Setup

Update `.env.local` dengan kredensial Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

### 4. Run Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`
Admin dashboard di `http://localhost:3000/admin`

## 📁 Project Structure

```
├── app/
│   ├── admin/           # CMS Admin Dashboard
│   ├── api/cms/         # CMS API Routes
│   └── page.tsx         # Main website page
├── components/
│   ├── cms/             # CMS Components
│   └── ui/              # UI Components
├── lib/
│   ├── hooks/           # Custom hooks
│   └── supabase.ts      # Supabase client
├── supabase-schema.sql  # Database schema
└── CMS_DOCUMENTATION.md # Detailed CMS docs
```

## 🎯 Features

### Website Features

- ✅ Responsive design untuk semua device
- ✅ Interactive carousel untuk gambar produk
- ✅ Modal untuk preview gambar
- ✅ Integrasi social media
- ✅ WhatsApp floating button
- ✅ SEO optimized

### CMS Features

- ✅ Content management untuk semua section
- ✅ Media library dengan upload gambar
- ✅ Site settings management
- ✅ Real-time updates
- ✅ Responsive admin dashboard

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Deployment**: Vercel
- **UI Components**: Radix UI, Lucide Icons

## 📝 Content Management

### Sections yang dapat diedit:

1. **Hero Section** - Judul dan deskripsi utama
2. **Product Section** - Info produk dan fitur
3. **Profile Section** - Profil tim dan visi misi
4. **Certification** - Sertifikasi dan legalitas
5. **Research** - Penelitian dan implementasi
6. **Shopping** - Info pembelian
7. **Reviews** - Testimoni pengguna

### Site Settings:

- Informasi kontak (email, phone)
- Social media handles
- Meta information

## 🚀 Deployment

### Vercel Deployment

1. Push ke GitHub repository
2. Connect repository ke Vercel
3. Set environment variables di Vercel
4. Deploy

### Environment Variables untuk Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_key
NEXTAUTH_URL=https://your-domain.vercel.app
```

## 📚 Usage

### Menggunakan CMS Components

```tsx
import { CMSText, CMSImage, CMSContent } from '@/components/cms/CMSComponents';

// Teks dari CMS
<CMSText
  sectionName="hero"
  field="title"
  defaultText="Fallback title"
  className="text-2xl font-bold"
/>

// Gambar dari CMS
<CMSImage
  sectionName="hero"
  imageIndex={0}
  className="w-full h-auto"
/>
```

### Custom Hooks

```tsx
import { useContentSections, useSiteSettings } from "@/lib/hooks/useCMS";

const { sections, loading } = useContentSections();
const { getSetting } = useSiteSettings();
```

## 🔧 Development

### Run tests

```bash
npm run test
```

### Build for production

```bash
npm run build
```

### Lint code

```bash
npm run lint
```

## 📖 Documentation

Untuk dokumentasi lengkap tentang CMS, lihat [CMS_DOCUMENTATION.md](./CMS_DOCUMENTATION.md)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

Untuk pertanyaan dan support:

- Email: sikomjaru.official@gmail.com
- WhatsApp: +62 822-3484-5084

## 📄 License

© 2024 SIKOMJARU. Hak cipta dilindungi undang-undang.
