# Vercel Environment Variables Configuration Guide

## Required Environment Variables

To deploy SIKOMJARU to Vercel successfully, you need to configure the following environment variables in your Vercel project dashboard.

### Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these variables:

| Variable Name                   | Description                        | Example Value                             |
| ------------------------------- | ---------------------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL          | `https://your-project-ref.supabase.co`    |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |

### How to Get These Values:

1. **Go to your Supabase project dashboard**

   - Visit [supabase.com](https://supabase.com)
   - Select your project

2. **Find Project Settings**

   - Click on the Settings icon (gear) in the left sidebar
   - Go to "API" section

3. **Copy the values:**
   - **Project URL** → Use for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Setting Up in Vercel:

1. **Open Vercel Dashboard**
2. **Go to your project → Settings → Environment Variables**
3. **Add New Variable** for each of the above
4. **Set Environment:** All (Production, Preview, Development)
5. **Save and redeploy**

### Alternative: Vercel CLI

You can also set these via CLI:

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### After Setting Environment Variables:

1. **Redeploy your project**
2. **Database setup:** Make sure you've run the SQL scripts in your Supabase project:
   - `database/schema.sql` (creates tables)
   - `database/seed.sql` (adds sample data)

### Testing:

- Visit `/admin` to test the CMS admin panel
- Visit `/cms-example` to see the CMS-driven page
- Both should work without errors once environment variables are configured

## Note

Without these environment variables:

- The build will now complete successfully ✅
- But CMS features will show setup instructions
- Static content (main landing page) will work normally
