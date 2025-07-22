import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Tentang SIKOMJARU
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Dari inovasi mahasiswa hingga teknologi penyelamat jiwa - temukan
              kisah di balik phantom pelatihan CPR revolusioner Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Perjalanan Inovasi Kami
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SIKOMJARU dimulai sebagai proyek inovasi mahasiswa yang
                  terobosan di bawah program P2MW (Program Mahasiswa Wirausaha),
                  dimana mahasiswa yang bersemangat menyadari kebutuhan kritis
                  akan peralatan pelatihan CPR yang mudah diakses dan
                  berkualitas tinggi di Indonesia.
                </p>
                <p>
                  Yang dimulai sebagai proyek akademik telah berkembang menjadi
                  solusi siap pasar yang menjembatani kesenjangan antara
                  pengetahuan teoritis dan keterampilan penyelamat jiwa praktis.
                  Tim kami menggabungkan keahlian teknik dengan pengetahuan
                  medis untuk menciptakan phantom pelatihan yang memberikan
                  pendidikan CPR yang realistis dan efektif.
                </p>
                <p>
                  Hari ini, SIKOMJARU berdiri sebagai bukti inovasi Indonesia
                  dalam teknologi pendidikan medis, dipercaya oleh institusi
                  kesehatan dan pusat pelatihan di seluruh Indonesia.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Kisah Inovasi SIKOMJARU"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mendemokratisasi pendidikan penyelamat jiwa dengan menyediakan
                  solusi pelatihan CPR yang inovatif, mudah diakses, dan efektif
                  yang memberdayakan individu dan organisasi untuk merespons
                  dengan percaya diri dalam situasi darurat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visi Kami
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi penyedia terdepan teknologi pelatihan CPR di Asia
                  Tenggara, menciptakan dunia dimana setiap orang memiliki
                  pengetahuan dan kepercayaan diri untuk menyelamatkan jiwa
                  melalui solusi pendidikan yang inovatif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Kenali Tim Pendiri Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pikiran inovatif di balik SIKOMJARU, menggabungkan keunggulan
              teknik dengan keahlian medis untuk merevolusi pelatihan CPR
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Anggota Tim"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dr. Ahmad Rizki
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  Co-Founder & CEO
                </p>
                <p className="text-gray-600 text-sm">
                  Lulusan Teknik Biomedis dengan keahlian dalam pengembangan
                  perangkat medis dan inovasi kesehatan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Anggota Tim"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Dr. Sari Indrawati
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  Co-Founder & Direktur Medis
                </p>
                <p className="text-gray-600 text-sm">
                  Spesialis kedokteran darurat dengan pengalaman luas dalam
                  pelatihan CPR dan pengembangan kurikulum pendidikan medis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Anggota Tim"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Budi Santoso
                </h3>
                <p className="text-teal-600 font-medium mb-4">
                  Co-Founder & CTO
                </p>
                <p className="text-gray-600 text-sm">
                  Ahli teknik mesin yang mengkhususkan diri dalam teknologi
                  sensor dan sistem umpan balik untuk peralatan pelatihan medis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Prinsip-prinsip yang memandu misi kami untuk menyelamatkan jiwa
              melalui inovasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Inovasi</h3>
              <p className="text-teal-100">
                Terus mendorong batas untuk menciptakan solusi pelatihan yang
                lebih baik
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Keunggulan
              </h3>
              <p className="text-teal-100">
                Mempertahankan standar tertinggi dalam kualitas produk dan
                layanan
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Dampak</h3>
              <p className="text-teal-100">
                Fokus pada solusi yang membuat perbedaan nyata dalam
                menyelamatkan jiwa
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Aksesibilitas
              </h3>
              <p className="text-teal-100">
                Membuat pendidikan penyelamat jiwa tersedia untuk semua orang,
                di mana saja
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
