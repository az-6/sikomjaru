"use client";

import { Inter } from "next/font/google";
import { AuthProvider } from "@/lib/auth/AuthContext";
import AdminNavigation from "@/components/admin/AdminNavigation";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen bg-gray-100">
            <AdminNavigation />
            <main>{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
