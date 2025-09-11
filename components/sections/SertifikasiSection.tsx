"use client";

import { useSertifikasiData } from "@/hooks/use-sertifikasi-data";
import { Card, CardContent } from "@/components/ui/card";
import { ClickableImage } from "@/components/ui/ClickableImage";

export default function SertifikasiSection() {
  const { sertifikasiData, loading, error } = useSertifikasiData();

  if (loading) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-600">
            Error loading sertifikasi data: {error}
          </div>
        </div>
      </section>
    );
  }

  if (!sertifikasiData) {
    return null;
  }

  return (
    <section id="sertifikasi" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {sertifikasiData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {sertifikasiData.subtitle}
          </p>
        </div>

        {/* Sertifikasi Grid - 2 Items Centered */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {sertifikasiData.documents_title}
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
              {/* NIB */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  {sertifikasiData.nib_image &&
                  sertifikasiData.nib_image.trim() !== "" ? (
                    <ClickableImage
                      src={sertifikasiData.nib_image}
                      alt={sertifikasiData.nib_title}
                      className="rounded-lg w-full h-36 sm:h-48 object-cover"
                    />
                  ) : (
                    <div className="bg-gray-100 rounded-lg h-36 sm:h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">
                        Foto NIB belum diupload
                      </p>
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {sertifikasiData.nib_title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {sertifikasiData.nib_description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* HKI */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  {sertifikasiData.hki_image &&
                  sertifikasiData.hki_image.trim() !== "" ? (
                    <ClickableImage
                      src={sertifikasiData.hki_image}
                      alt={sertifikasiData.hki_title}
                      className="rounded-lg w-full h-36 sm:h-48 object-cover"
                    />
                  ) : (
                    <div className="bg-gray-100 rounded-lg h-36 sm:h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">
                        Foto HKI belum diupload
                      </p>
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {sertifikasiData.hki_title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {sertifikasiData.hki_description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
