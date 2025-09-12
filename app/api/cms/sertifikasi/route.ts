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

interface SertifikasiSection {
  id?: string;
  title: string;
  subtitle: string;
  documents_title: string;
  nib_title: string;
  nib_description: string;
  nib_carousel_items: MediaItem[];
  hki_title: string;
  hki_description: string;
  hki_carousel_items: MediaItem[];
}

export async function GET() {
  try {
    const supabase = getSupabaseServiceClient();
    const { data, error } = await supabase
      .from("sertifikasi_sections")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    if (error) {
      console.error("Error fetching sertifikasi section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
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
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.split(" ")[1];
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const supabase = getSupabaseAuthClient(accessToken);
    const body: SertifikasiSection = await request.json();
    const { data: existingData } = await supabase
      .from("sertifikasi_sections")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1)
      .single();
    let result;
    if (existingData) {
      const { data, error } = await supabase
        .from("sertifikasi_sections")
        .update({
          title: body.title,
          subtitle: body.subtitle,
          documents_title: body.documents_title,
          nib_title: body.nib_title,
          nib_description: body.nib_description,
          nib_carousel_items: body.nib_carousel_items,
          hki_title: body.hki_title,
          hki_description: body.hki_description,
          hki_carousel_items: body.hki_carousel_items,
        })
        .eq("id", existingData.id)
        .select()
        .single();
      if (error) {
        console.error("Error updating sertifikasi section:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
    } else {
      const { data, error } = await supabase
        .from("sertifikasi_sections")
        .insert([
          {
            title: body.title,
            subtitle: body.subtitle,
            documents_title: body.documents_title,
            nib_title: body.nib_title,
            nib_description: body.nib_description,
            nib_carousel_items: body.nib_carousel_items,
            hki_title: body.hki_title,
            hki_description: body.hki_description,
            hki_carousel_items: body.hki_carousel_items,
          },
        ])
        .select()
        .single();
      if (error) {
        console.error("Error creating sertifikasi section:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      result = data;
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
