import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple basic auth for admin panel
// In production, you should implement proper authentication
export function middleware(request: NextRequest) {
  // Only apply to admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Skip authentication in development for now
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }

    const basicAuth = request.headers.get("authorization");
    const url = request.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      // Simple check against env vars
      if (
        user === process.env.ADMIN_EMAIL &&
        pwd === process.env.ADMIN_PASSWORD
      ) {
        return NextResponse.next();
      }
    }
    url.pathname = "/api/auth";

    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
