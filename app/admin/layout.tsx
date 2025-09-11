import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel - SIKOMJARU CMS",
  description: "Content Management System untuk website SIKOMJARU",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
