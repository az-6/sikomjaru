import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET - Fetch site settings
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_settings")
      .select("*")
      .order("setting_key");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update site settings (Admin only)
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { setting_key, setting_value } = body;

    const { data, error } = await supabase
      .from("site_settings")
      .upsert({
        setting_key,
        setting_value,
        updated_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
