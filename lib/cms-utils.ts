/**
 * Utility functions for CMS data handling
 */

// Format social media URLs
export const formatSocialUrl = (platform: string, handle: string): string => {
  if (!handle) return "#";

  const cleanHandle = handle.replace("@", "");

  const baseUrls: Record<string, string> = {
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/@",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/company/",
  };

  return baseUrls[platform] ? baseUrls[platform] + cleanHandle : "#";
};

// Format phone number for WhatsApp
export const formatWhatsAppUrl = (phone: string): string => {
  if (!phone) return "#";

  // Remove all non-numeric characters except +
  const cleanPhone = phone.replace(/[^\d+]/g, "");

  // Add country code if missing
  const phoneWithCountry = cleanPhone.startsWith("+")
    ? cleanPhone
    : "+62" + cleanPhone.replace(/^0/, "");

  return `https://wa.me/${phoneWithCountry.replace("+", "")}`;
};

// Extract content from JSON field
export const extractContentField = (
  content: any,
  field: string,
  defaultValue: string = ""
): string => {
  if (!content || typeof content !== "object") {
    return defaultValue;
  }

  return content[field] || defaultValue;
};

// Parse and format price
export const formatPrice = (price: string | number): string => {
  if (!price) return "Contact us";

  if (typeof price === "number") {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  }

  return price.toString();
};

// Validate image URL
export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return ["http:", "https:", "data:"].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

// Generate placeholder image URL
export const generatePlaceholder = (
  width: number = 400,
  height: number = 300,
  text: string = "No Image"
): string => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f3f4f6'/%3E%3Ctext x='${
    width / 2
  }' y='${
    height / 2
  }' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='0.3em'%3E${encodeURIComponent(
    text
  )}%3C/text%3E%3C/svg%3E`;
};

// Sanitize HTML content
export const sanitizeHtml = (html: string): string => {
  // Basic HTML sanitization - in production use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "");
};

// Format date for display
export const formatDate = (dateString: string): string => {
  if (!dateString) return "";

  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
};

// Debounce function for search/filtering
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// File size formatter
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
};

// Slug generator
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

// Color palette for dynamic theming
export const getColorFromString = (str: string): string => {
  const colors = [
    "#3B82F6",
    "#EF4444",
    "#10B981",
    "#F59E0B",
    "#8B5CF6",
    "#F97316",
    "#06B6D4",
    "#84CC16",
  ];

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};
