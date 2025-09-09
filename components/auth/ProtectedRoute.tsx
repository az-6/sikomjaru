"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth/AuthContext";
import { LoadingSpinner } from "@/components/ui/loading-states";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({
  children,
  fallback,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't redirect on login page
    if (pathname === "/admin/login") {
      return;
    }

    // Redirect to login if not authenticated and not loading
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <p className="text-gray-600">Checking authentication...</p>
          </div>
        </div>
      )
    );
  }

  // Don't render if not authenticated and not on login page
  if (!isAuthenticated && pathname !== "/admin/login") {
    return null;
  }

  return <>{children}</>;
}
