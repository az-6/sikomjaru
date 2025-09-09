import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { AuthProvider } from "@/lib/auth/AuthContext";

export const metadata: Metadata = {
  title: "SIKOMJARU - Solusi Inovatif Pelatihan Selamatkan Nyawa",
  description:
    "Alat peraga RJP inovatif yang terjangkau untuk pelatihan Bantuan Hidup Dasar (BHD)",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
