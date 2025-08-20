# SIKOMJARU CMS Setup Guide

Panduan lengkap untuk mengatur Content Management System (CMS) SIKOMJARU menggunakan Supabase sebagai backend.

## 🚀 Quick Start

### 1. Setup Supabase Project

1. **Buat account Supabase** di [supabase.com](https://supabase.com)
2. **Buat project baru**
3. **Catat URL dan Anon Key** dari project dashboard

### 2. Database Setup

1. **Buka SQL Editor** di dashboard Supabase
2. **Jalankan schema.sql** untuk membuat struktur database:
   ```sql
   -- Copy dan paste isi dari database/schema.sql
   ```
3. **Jalankan seed.sql** untuk data awal:
   ```sql
   -- Copy dan paste isi dari database/seed.sql
   ```

### 3. Environment Setup

1. **Copy file environment**:

   ```bash
   cp .env.example .env.local
   ```

2. **Isi kredensial Supabase** di `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

### 4. Install Dependencies

```bash
npm install @supabase/supabase-js
npm install
npm run dev
```

## 📊 Database Structure

### Core Tables

| Table                 | Purpose                    | Key Features                       |
| --------------------- | -------------------------- | ---------------------------------- |
| `hero_section`        | Hero section content       | Title, subtitle, CTAs, image       |
| `products`            | Product information        | Title, description, features       |
| `team_section`        | Team info & mission/vision | Mission, vision, team photo        |
| `team_members`        | Individual team members    | Name, role, photo, supervisor flag |
| `research_section`    | Research & development     | Research items, methodology        |
| `research_items`      | Research activities        | Title, description, icons          |
| `statistics`          | Homepage statistics        | Value, label, color                |
| `ecommerce_platforms` | E-commerce links           | Shopee, Tokopedia, Lazada          |
| `social_media`        | Social media links         | Instagram, TikTok, etc.            |
| `site_settings`       | Global settings            | Key-value pairs                    |

### Flexible Content

- `content_sections` - JSONB field untuk konten fleksibel
- `research_items` - Item penelitian & pengembangan

## 🛠 CMS Features

### 1. Hero Section Management

- ✅ Dynamic title & subtitle
- ✅ CTA button customization
- ✅ Image upload support
- ✅ Real-time preview

### 2. Team Management

- ✅ Supervisor vs student separation
- ✅ Photo management
- ✅ Role & description editing
- ✅ Display order control

### 3. Product Management

- ✅ Featured product highlighting
- ✅ Product features listing
- ✅ Icon & color customization

### 4. Research Management

- ✅ Research items listing
- ✅ Icon & color customization
- ✅ Display order control

### 5. E-commerce Integration

- ✅ Platform management (Shopee, Tokopedia, Lazada)
- ✅ Custom button colors
- ✅ Link management

### 6. Social Media Management

- ✅ Multi-platform support
- ✅ Custom icons & colors
- ✅ Action text customization

## 🔧 API Usage

### Fetching Data

```typescript
import { getPageData } from "@/lib/cms-api";

// Get all page data at once
const pageData = await getPageData();

// Or fetch specific sections
import { getHeroSection, getTeamMembers } from "@/lib/cms-api";

const heroData = await getHeroSection();
const teamMembers = await getTeamMembers();
```

### Component Integration

```tsx
import HeroSectionComponent from "@/components/sections/HeroSection";
import { getHeroSection } from "@/lib/cms-api";

export default async function HomePage() {
  const heroData = await getHeroSection();

  return <HeroSectionComponent data={heroData} />;
}
```

## 📱 Component Structure

### Available CMS Components

1. **HeroSectionComponent** - `/components/sections/HeroSection.tsx`
2. **TeamSectionComponent** - `/components/sections/TeamSection.tsx`
3. **EcommerceSocialSection** - `/components/sections/EcommerceSocialSection.tsx`

### Creating New CMS Components

```tsx
"use client";

interface MyComponentProps {
  data: MyDataType | null;
}

export default function MyComponent({ data }: MyComponentProps) {
  // Fallback data for when CMS is not available
  const fallbackData = {
    title: "Default Title",
    description: "Default Description",
  };

  const content = data || fallbackData;

  return (
    <section>
      <h2>{content.title}</h2>
      <p>{content.description}</p>
    </section>
  );
}
```

## 🔒 Security & Permissions

### Row Level Security (RLS)

- ✅ Public read access untuk semua content
- ✅ Admin-only write access
- ✅ Automatic timestamp updates

### Authentication Setup (Optional)

Untuk admin panel, tambahkan authentication:

```typescript
// lib/auth.ts
import { supabase } from "./supabase";

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}
```

## 📈 Performance Optimization

### Caching Strategy

```typescript
// app/page.tsx
export const revalidate = 300; // 5 minutes

export default async function HomePage() {
  const data = await getPageData();
  // Component rendering
}
```

### Image Optimization

- Gunakan Supabase Storage untuk images
- Implement lazy loading
- Responsive image sizes

## 🚀 Deployment

### Vercel Deployment

1. Connect repository ke Vercel
2. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Deploy

### Environment Variables Setup

```bash
# Vercel CLI
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## 🛡 Best Practices

### 1. Data Validation

```typescript
// Validate data before rendering
if (!data || !data.title) {
  return <DefaultComponent />;
}
```

### 2. Error Handling

```typescript
try {
  const data = await getHeroSection();
  return data;
} catch (error) {
  console.error("Failed to fetch data:", error);
  return null;
}
```

### 3. TypeScript Safety

- Gunakan proper types untuk semua data
- Implement strict null checks
- Validate API responses

## 🔄 Migration & Updates

### Schema Updates

```sql
-- Add new column
ALTER TABLE hero_section ADD COLUMN new_field TEXT;

-- Update existing data
UPDATE hero_section SET new_field = 'default_value';
```

### Data Migration

```sql
-- Migrate old data to new structure
INSERT INTO new_table (field1, field2)
SELECT old_field1, old_field2 FROM old_table;
```

## 📞 Support

Untuk pertanyaan atau bantuan:

- 📧 Email: support@sikomjaru.com
- 📱 WhatsApp: +62 8XX-XXXX-XXXX
- 📖 Documentation: [Link to detailed docs]

---

## 🎯 Next Steps

1. **Setup admin panel** dengan Supabase Auth
2. **Implement file upload** untuk images
3. **Add content versioning** system
4. **Create backup & restore** functionality
5. **Add analytics** tracking

Struktur CMS ini dirancang untuk:

- ✅ **Mudah digunakan** oleh non-technical users
- ✅ **Scalable** untuk pertumbuhan konten
- ✅ **Maintainable** untuk developer
- ✅ **Cost-effective** dengan Supabase free tier
