import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseServiceClient,
  getSupabaseAuthClient,
} from "@/lib/supabase/api";

interface SpecialContent {
  icon: string;
  text: string;
  background: string;
}

interface ReviewItem {
  type: "image" | "special";
  url: string;
  title: string;
  description: string;
  special_content?: SpecialContent;
}

interface ReviewSection {
  id?: string;
  title: string;
  subtitle: string;
  photos_title: string;
  review_items: ReviewItem[];
}

export async function GET() {
  try {
    const supabase = getSupabaseServiceClient();
    const { data, error } = await supabase
      .from("review_sections")
      .select("*")
      .limit(1)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching review data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      // Return default data if no data exists
      const defaultData: ReviewSection = {
        title: "Review & Testimoni",
        subtitle:
          "Kepuasan dan testimoni dari pengguna SIKOMJARU di berbagai institusi pendidikan, rumah sakit, dan komunitas kesehatan di seluruh Indonesia.",
        photos_title: "Foto Review Pengguna",
        review_items: [],
      };
      return NextResponse.json(defaultData);
    }

    // Parse JSONB fields
    const parsedData: ReviewSection = {
      ...data,
      review_items: Array.isArray(data.review_items) ? data.review_items : [],
    };

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Error in GET /api/cms/review:", error);
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
    const { title, subtitle, photos_title, review_items } =
      body as ReviewSection;

    // Validate required fields
    if (!title || !subtitle || !photos_title) {
      return NextResponse.json(
        { error: "Title, subtitle, and photos title are required" },
        { status: 400 }
      );
    }

    // Check if data exists
    const { data: existingData } = await supabase
      .from("review_sections")
      .select("id")
      .limit(1)
      .single();

    let result;

    if (existingData) {
      // Update existing record
      const { data, error } = await supabase
        .from("review_sections")
        .update({
          title,
          subtitle,
          photos_title,
          review_items: review_items || [],
          updated_at: new Date().toISOString(),
        })
        .eq("id", existingData.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating review data:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
    } else {
      // Insert new record
      const { data, error } = await supabase
        .from("review_sections")
        .insert({
          title,
          subtitle,
          photos_title,
          review_items: review_items || [],
        })
        .select()
        .single();

      if (error) {
        console.error("Error inserting review data:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
    }

    return NextResponse.json({
      message: "Review section updated successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in PUT /api/cms/review:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
