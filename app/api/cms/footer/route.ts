import { NextRequest, NextResponse } from "next/server";
import {
  getSupabaseServiceClient,
  getSupabaseAuthClient,
} from "@/lib/supabase/api";

interface SupportedByLink {
  name: string;
  url: string;
}

interface SocialMediaLink {
  platform: string;
  url: string;
  display_text: string;
  icon: string;
}

interface FooterSection {
  id?: number;
  company_name: string;
  company_description: string;
  supported_by_links: SupportedByLink[];
  social_media_links: SocialMediaLink[];
  contact_email: string;
  contact_location: string;
  copyright_text: string;
}

export async function GET() {
  try {
    const supabase = getSupabaseServiceClient();
    const { data, error } = await supabase
      .from("footer_sections")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetching footer data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in footer GET:", error);
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
    const body: FooterSection = await request.json();

    // Delete any existing data first to ensure only one row exists
    await supabase.from("footer_sections").delete().neq("id", 0);

    // Insert new data
    const { data, error } = await supabase
      .from("footer_sections")
      .insert([
        {
          company_name: body.company_name,
          company_description: body.company_description,
          supported_by_links: body.supported_by_links,
          social_media_links: body.social_media_links,
          contact_email: body.contact_email,
          contact_location: body.contact_location,
          copyright_text: body.copyright_text,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error saving footer data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in footer PUT:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
