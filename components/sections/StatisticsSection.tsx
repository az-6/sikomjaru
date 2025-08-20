"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { Statistic } from "@/lib/supabase";

interface StatisticsComponentProps {
  statistics: Statistic[];
}

// Color mapping for Tailwind classes
const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    teal: "text-teal-600",
    blue: "text-blue-600",
    green: "text-green-600",
    orange: "text-orange-600",
    purple: "text-purple-600",
    red: "text-red-600",
    gray: "text-gray-600",
  };
  return colorMap[color] || "text-teal-600";
};

export default function StatisticsComponent({
  statistics,
}: StatisticsComponentProps) {
  // Fallback data if no CMS data available
  const defaultStats: Statistic[] = [
    {
      id: "1",
      label: "Orang Terlatih",
      value: "500+",
      color: "teal",
      display_order: 1,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "2",
      label: "Institusi Mitra",
      value: "50+",
      color: "blue",
      display_order: 2,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "3",
      label: "Tingkat Kepuasan",
      value: "95%",
      color: "green",
      display_order: 3,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
    {
      id: "4",
      label: "Tahun Keunggulan",
      value: "2+",
      color: "orange",
      display_order: 4,
      is_active: true,
      created_at: "",
      updated_at: "",
    },
  ];

  const stats = statistics.length > 0 ? statistics : defaultStats;

  if (stats.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pencapaian Kami
          </h2>
          <p className="text-xl text-gray-600">
            Dampak nyata SIKOMJARU dalam pendidikan penyelamatan jiwa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card
              key={stat.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <CardContent className="p-8">
                <div
                  className={`text-4xl font-bold ${getColorClasses(
                    stat.color
                  )} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Add call-to-action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Bergabunglah dengan ribuan profesional kesehatan yang telah
            mempercayai SIKOMJARU
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produk"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Lihat Produk
            </a>
            <a
              href="#kontak"
              className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
