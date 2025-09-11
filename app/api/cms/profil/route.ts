import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("profil_sections")
      .select("*")
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching profil section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Parse JSONB fields if data exists
    if (data) {
      try {
        data.team_carousel_items =
          typeof data.team_carousel_items === "string"
            ? JSON.parse(data.team_carousel_items)
            : data.team_carousel_items || [];
        data.team_members =
          typeof data.team_members === "string"
            ? JSON.parse(data.team_members)
            : data.team_members || [];
      } catch (parseError) {
        console.error("Error parsing JSONB fields:", parseError);
        // Set defaults if parsing fails
        data.team_carousel_items = [];
        data.team_members = [];
      }
    }

    return NextResponse.json({
      profilSection: data || {
        title: "Profil Tim SIKOMJARU",
        subtitle:
          "Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.",
        objective_title: "Tujuan Mulia Kami",
        objective_description:
          "Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.",
        objective_icon: "Target",
        vision_title: "Visi Kami",
        vision_description:
          "Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.",
        vision_icon: "Eye",
        team_title: "Sikomjaru Team",
        team_carousel_items: [],
        team_members: [],
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

export async function PUT(request: Request) {
  try {
    const data = await request.json();

    // Serialize arrays untuk JSONB
    const updateData = {
      ...data,
      team_carousel_items: JSON.stringify(data.team_carousel_items || []),
      team_members: JSON.stringify(data.team_members || []),
      updated_at: new Date().toISOString(),
    };

    // Hapus ID untuk upsert
    delete updateData.id;

    // Coba update dulu, jika tidak ada row yang diupdate, maka insert
    const { data: existing } = await supabase
      .from("profil_sections")
      .select("id")
      .limit(1)
      .single();

    let result;
    let error;

    if (existing) {
      // Update existing record
      const response = await supabase
        .from("profil_sections")
        .update(updateData)
        .eq("id", existing.id)
        .select()
        .single();
      result = response.data;
      error = response.error;
    } else {
      // Insert new record
      const response = await supabase
        .from("profil_sections")
        .insert(updateData)
        .select()
        .single();
      result = response.data;
      error = response.error;
    }

    if (error) {
      console.error("Error updating profil section:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      message: "Profil section berhasil diperbarui",
      data: result,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
