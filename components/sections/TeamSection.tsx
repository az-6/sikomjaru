"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import type { TeamSection, TeamMember } from "@/lib/supabase";

interface TeamSectionComponentProps {
  teamData: TeamSection | null;
  teamMembers: TeamMember[];
}

export default function TeamSectionComponent({
  teamData,
  teamMembers,
}: TeamSectionComponentProps) {
  // Fallback data
  const defaultTeamData: TeamSection = {
    id: "",
    title: "Profil Tim SIKOMJARU",
    subtitle:
      "Inovasi yang lahir dari kepedulian, dedikasi, dan kolaborasi untuk meningkatkan kesiapan masyarakat dalam menghadapi kondisi darurat jantung.",
    mission_title: "Tujuan Mulia Kami",
    mission_description:
      "Fokus kami adalah mengatasi tingginya angka kematian akibat henti jantung dengan menyediakan alat edukasi RJP yang terjangkau. Kami ingin memberdayakan masyarakat awam, kader kesehatan, hingga siswa untuk menjadi penolong pertama yang kompeten dan percaya diri.",
    vision_title: "Visi Kami",
    vision_description:
      "Menjadi pelopor dalam penyediaan alat edukasi kesehatan yang inovatif, ekonomis, dan berakar pada kearifan lokal, serta memperluas akses pelatihan RJP yang efektif dan menyeluruh ke seluruh lapisan masyarakat Indonesia.",
    team_photo_url:
      "https://placehold.co/600x400/e0f2fe/0ea5e9?text=Foto+Kelompok+Tim+Mahasiswa+P2MW",
    is_active: true,
    created_at: "",
    updated_at: "",
  };

  const team = teamData || defaultTeamData;
  const supervisor = teamMembers.find((member) => member.is_supervisor);
  const students = teamMembers.filter((member) => !member.is_supervisor);

  return (
    <section id="profil" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {team.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {team.subtitle}
          </p>
        </div>

        {/* Misi & Visi */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {team.mission_title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {team.mission_description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {team.vision_title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {team.vision_description}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tim Inovator */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900">
            Tim Inovator Kami
          </h3>
        </div>

        {/* Dosen Pembimbing */}
        {supervisor && (
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                  <Image
                    src={supervisor.photo_url || "/placeholder.svg"}
                    alt={supervisor.name}
                    width={150}
                    height={150}
                    className="rounded-lg shadow-md flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {supervisor.name}
                    </h4>
                    <p className="text-blue-600 font-semibold">
                      {supervisor.role}
                    </p>
                    <p className="text-gray-600 mt-2">
                      {supervisor.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Foto Kelompok Mahasiswa */}
        {team.team_photo_url && (
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tim Mahasiswa P2MW
            </h3>
            <div className="max-w-3xl mx-auto mb-8">
              <Image
                src={team.team_photo_url}
                alt="Foto Kelompok Tim Mahasiswa P2MW"
                width={600}
                height={400}
                className="rounded-xl shadow-lg mx-auto"
              />
              <p className="text-gray-600 mt-4 text-sm">
                Tim mahasiswa P2MW SIKOMJARU: 4 inovator muda yang berdedikasi
                untuk mengembangkan teknologi pelatihan RJP
              </p>
            </div>
          </div>
        )}

        {/* Profil Mahasiswa */}
        {students.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {students.map((member) => (
              <Card key={member.id} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <Image
                    src={member.photo_url || "/placeholder.svg"}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                  {member.description && (
                    <p className="text-gray-600 mt-2 text-sm">
                      {member.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
