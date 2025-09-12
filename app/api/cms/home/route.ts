import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// GET - Ambil data home section
export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: homeSection, error } = await supabase
      .from("home_sections")
      .select("*")
      .single();

    if (error) {
      console.error("Error fetching home section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Logo partners hardcoded
    const logoPartners = [
      {
        src: "/ump.png",
        alt: "UMP Logo",
        name: "Universitas Muhammadiyah Purwokerto",
      },
      { src: "/fikes.png", alt: "FIKES Logo", name: "Fakultas Ilmu Kesehatan" },
      {
        src: "/p2mw.png",
        alt: "P2MW Logo",
        name: "Program Pemberdayaan Masyarakat Wirausaha",
      },
      { src: "/logo.png", alt: "Official Logo", name: "Official Logo" },
      {
        src: "/isbi.jpg",
        alt: "ISBI Logo",
        name: "Islamic Student Business Incubator",
      },
    ];

    return NextResponse.json({
      homeSection,
      logoPartners,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT - Update data home section
export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const accessToken = authHeader?.split(" ")[1];
    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: `Bearer ${accessToken}` } } }
    );
    const body = await request.json();
    const { homeSection } = body;

    // Update home section
    if (homeSection) {
      const { error: updateError } = await supabase
        .from("home_sections")
        .update({
          title: homeSection.title,
          subtitle: homeSection.subtitle,
          description: homeSection.description,
          background_image: homeSection.background_image,
          video_url: homeSection.video_url,
          carousel_images: homeSection.carousel_images,
          carousel_items: homeSection.carousel_items,
        })
        .eq("id", homeSection.id);

      if (updateError) {
        console.error("Error updating home section:", updateError);
        return NextResponse.json(
          { error: updateError.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
