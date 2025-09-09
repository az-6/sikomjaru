import { NextRequest, NextResponse } from "next/server";

// Simple admin authentication
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Simple hardcoded admin credentials for now
    // In production, this should check against database with hashed passwords
    const adminEmail = process.env.ADMIN_EMAIL || "admin@sikomjaru.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "sikomjaru2024!";

    if (email === adminEmail && password === adminPassword) {
      const user = {
        id: "1",
        email: adminEmail,
        name: "Admin SIKOMJARU",
        role: "admin",
      };

      return NextResponse.json({
        success: true,
        user,
        message: "Login successful",
      });
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    );
  }
}
