import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseServiceClient,
  getSupabaseAuthClient,
} from "@/lib/supabase/api";

export async function GET() {
  try {
    const supabase = getSupabaseServiceClient();
    const { data, error } = await supabase
      .from("produk_sections")
      .select("*")
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching produk section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Parse JSONB fields if data exists
    if (data) {
      try {
        data.carousel_items =
          typeof data.carousel_items === "string"
            ? JSON.parse(data.carousel_items)
            : data.carousel_items || [];
        data.benefits =
          typeof data.benefits === "string"
            ? JSON.parse(data.benefits)
            : data.benefits || [];
        data.features =
          typeof data.features === "string"
            ? JSON.parse(data.features)
            : data.features || [];
      } catch (parseError) {
        console.error("Error parsing JSONB fields:", parseError);
        // Set defaults if parsing fails
        data.carousel_items = [];
        data.benefits = [];
        data.features = [];
      }
    }

    return NextResponse.json({
      produkSection: data || {
        title: "Produk Inovatif SIKOMJARU",
        subtitle:
          "Dirancang untuk edukasi RJP yang efektif, SIKOMJARU hadir dengan fitur canggih untuk simulasi yang realistis dan terjangkau.",
        benefits_title: "Manfaat dan Keunggulan",
        benefits_description:
          "SIKOMJARU mengatasi kelemahan produk komersial dengan harga yang jauh lebih terjangkau (hanya 15% dari harga pasar), material fiber yang kokoh, serta fitur edukatif yang ramah bagi pemula.",
        features_title: "Fitur Utama & Spesifikasi",
        carousel_items: [],
        benefits: [],
        features: [],
      },
    });
  } catch (error) {
    console.error("Unexpected error:", error);
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
      benefits_title,
      benefits_description,
      features_title,
      carousel_items,
      benefits,
      features,
    } = body;

    // Check if record exists
    const { data: existing } = await supabase
      .from("produk_sections")
      .select("id")
      .single();

    let result;
    if (existing) {
      // Update existing record
      result = await supabase
        .from("produk_sections")
        .update({
          title,
          subtitle,
          benefits_title,
          benefits_description,
          features_title,
          carousel_items: JSON.stringify(carousel_items),
          benefits: JSON.stringify(benefits),
          features: JSON.stringify(features),
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id)
        .select()
        .single();
    } else {
      // Insert new record
      result = await supabase
        .from("produk_sections")
        .insert({
          title,
          subtitle,
          benefits_title,
          benefits_description,
          features_title,
          carousel_items: JSON.stringify(carousel_items),
          benefits: JSON.stringify(benefits),
          features: JSON.stringify(features),
        })
        .select()
        .single();
    }

    if (result.error) {
      console.error("Error saving produk section:", result.error);
      return NextResponse.json(
        { error: result.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      produkSection: result.data,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
