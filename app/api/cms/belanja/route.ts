import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseServiceClient,
  getSupabaseAuthClient,
} from "@/lib/supabase/api";

interface MediaItem {
  type: "image" | "video";
  url: string;
  title?: string;
  description?: string;
}

interface Platform {
  name: string;
  url: string;
  color: string;
  icon: string;
}

interface BelanjaSection {
  id?: string;
  title: string;
  subtitle: string;
  product_name: string;
  product_description: string;
  product_price: string;
  platforms_title: string;
  carousel_items: MediaItem[];
  platforms: Platform[];
}

export async function GET() {
  try {
    const supabase = getSupabaseServiceClient();
    const { data, error } = await supabase
      .from("belanja_sections")
      .select("*")
      .limit(1)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching belanja data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      // Return default data if no data exists
      const defaultData: BelanjaSection = {
        title: "Belanja Produk SIKOMJARU",
        subtitle:
          "Dapatkan alat peraga RJP inovatif kami dengan mudah melalui berbagai platform marketplace terpercaya di Indonesia.",
        product_name: "SIKOMJARU - Phantom Edukasi Kompresi Jantung Paru",
        product_description:
          "Alat peraga RJP inovatif dengan fitur lengkap: indikator lampu, panduan suara, dan layar LCD.",
        product_price: "Rp 660.000",
        platforms_title: "Tersedia di:",
        carousel_items: [],
        platforms: [],
      };
      return NextResponse.json(defaultData);
    }

    // Parse JSONB fields
    const parsedData: BelanjaSection = {
      ...data,
      carousel_items: Array.isArray(data.carousel_items)
        ? data.carousel_items
        : [],
      platforms: Array.isArray(data.platforms) ? data.platforms : [],
    };

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Error in GET /api/cms/belanja:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.split(" ")[1];
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const supabase = getSupabaseAuthClient(accessToken);
    const body = await request.json();
    const {
      title,
      subtitle,
      product_name,
      product_description,
      product_price,
      platforms_title,
      carousel_items,
      platforms,
    } = body as BelanjaSection;

    // Validate required fields
    if (!title || !subtitle || !product_name) {
      return NextResponse.json(
        { error: "Title, subtitle, and product name are required" },
        { status: 400 }
      );
    }

    // Check if data exists
    const { data: existingData } = await supabase
      .from("belanja_sections")
      .select("id")
      .limit(1)
      .single();

    let result;

    if (existingData) {
      // Update existing record
      const { data, error } = await supabase
        .from("belanja_sections")
        .update({
          title,
          subtitle,
          product_name,
          product_description,
          product_price,
          platforms_title,
          carousel_items: carousel_items || [],
          platforms: platforms || [],
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingData.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating belanja data:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
    } else {
      // Insert new record
      const { data, error } = await supabase
        .from("belanja_sections")
        .insert({
          title,
          subtitle,
          product_name,
          product_description,
          product_price,
          platforms_title,
          carousel_items: carousel_items || [],
          platforms: platforms || [],
        })
        .select()
        .single();

      if (error) {
        console.error("Error inserting belanja data:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
    }

    return NextResponse.json({
      message: "Belanja section updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in PUT /api/cms/belanja:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
