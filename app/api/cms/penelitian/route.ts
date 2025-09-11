import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

interface MediaItem {
  type: "image" | "video" | "special";
  url: string;
  title?: string;
  description?: string;
}

interface PenelitianSection {
  id?: string;
  title: string;
  description: string;
  implementation_title: string;
  carousel_items: MediaItem[];
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("penelitian_sections")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error("Error fetching penelitian section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Parse JSONB carousel_items
    if (data && data.carousel_items) {
      try {
        data.carousel_items =
          typeof data.carousel_items === "string"
            ? JSON.parse(data.carousel_items)
            : data.carousel_items;
      } catch (parseError) {
        console.error("Error parsing carousel_items:", parseError);
        data.carousel_items = [];
      }
    }

    return NextResponse.json(data);
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
    const body: PenelitianSection = await request.json();

    // Get existing data first
    const { data: existingData } = await supabase
      .from("penelitian_sections")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    let result;

    if (existingData) {
      // Update existing record
      const { data, error } = await supabase
        .from("penelitian_sections")
        .update({
          title: body.title,
          description: body.description,
          implementation_title: body.implementation_title,
          carousel_items: JSON.stringify(body.carousel_items || []),
        })
        .eq("id", existingData.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating penelitian section:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      result = data;
    } else {
      // Create new record
      const { data, error } = await supabase
        .from("penelitian_sections")
        .insert([
          {
            title: body.title,
            description: body.description,
            implementation_title: body.implementation_title,
            carousel_items: JSON.stringify(body.carousel_items || []),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Error creating penelitian section:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      result = data;
    }

    // Parse JSONB for response
    if (result && result.carousel_items) {
      try {
        result.carousel_items =
          typeof result.carousel_items === "string"
            ? JSON.parse(result.carousel_items)
            : result.carousel_items;
      } catch (parseError) {
        console.error("Error parsing carousel_items:", parseError);
        result.carousel_items = [];
      }
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
