"use client";

import { useContentSections, useSiteSettings } from "@/lib/hooks/useCMS";
import { LoadingSkeleton, ErrorState } from "@/components/ui/loading-states";

interface CMSTextProps {
  sectionName?: string;
  settingKey?: string;
  field?: "title" | "description" | "content";
  defaultText?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function CMSText({
  sectionName,
  settingKey,
  field = "title",
  defaultText = "",
  className = "",
  as: Component = "div",
}: CMSTextProps) {
  const {
    getSectionByName,
    loading: sectionsLoading,
    error: sectionsError,
  } = useContentSections();
  const {
    getSetting,
    loading: settingsLoading,
    error: settingsError,
  } = useSiteSettings();

  // Show loading state
  if (sectionsLoading || settingsLoading) {
    return <LoadingSkeleton className={`${className} h-6`} />;
  }

  // Show error state - fallback to default text
  if (sectionsError || settingsError) {
    return <Component className={className}>{defaultText}</Component>;
  }

  let text = defaultText;

  if (sectionName && field) {
    const section = getSectionByName(sectionName);
    if (section) {
      if (field === "content" && typeof section.content === "object") {
        // Handle JSON content - extract meaningful text
        try {
          const content = section.content;
          // Try to extract a string value from content
          text =
            content?.text ||
            content?.subtitle ||
            content?.description ||
            JSON.stringify(content);
        } catch {
          text = defaultText;
        }
      } else {
        text = section[field] || defaultText;
      }
    }
  } else if (settingKey) {
    text = getSetting(settingKey, defaultText);
  }

  return <Component className={className}>{text}</Component>;
}

interface CMSImageProps {
  sectionName?: string;
  imageIndex?: number;
  src?: string;
  alt?: string;
  className?: string;
  onClick?: (src: string) => void;
}

export function CMSImage({
  sectionName,
  imageIndex = 0,
  src,
  alt,
  className = "",
  onClick,
}: CMSImageProps) {
  const { getSectionByName, loading, error } = useContentSections();

  if (loading) {
    return <LoadingSkeleton className={`${className} bg-gray-200`} />;
  }

  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  let imageSrc = src;
  let imageAlt = alt;

  if (sectionName) {
    const section = getSectionByName(sectionName);
    if (section && section.images && section.images[imageIndex]) {
      imageSrc = section.images[imageIndex];
      imageAlt = imageAlt || section.title;
    }
  }

  if (!imageSrc) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500 text-sm">No image</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={imageAlt || ""}
      className={className}
      onClick={() => onClick && onClick(imageSrc)}
      onError={(e) => {
        // Fallback to placeholder on error
        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' fill='%236b7280' text-anchor='middle' dy='0.3em'%3EImage not found%3C/text%3E%3C/svg%3E`;
      }}
    />
  );
}

interface CMSContentProps {
  sectionName: string;
  children: (section: any) => React.ReactNode;
  fallback?: React.ReactNode;
  showError?: boolean;
}

export function CMSContent({
  sectionName,
  children,
  fallback,
  showError = false,
}: CMSContentProps) {
  const { getSectionByName, loading, error } = useContentSections();

  if (loading) {
    return fallback || <LoadingSkeleton className="h-20 rounded" />;
  }

  if (error && showError) {
    return <ErrorState message="Failed to load content" />;
  }

  if (error && !showError) {
    return fallback || null;
  }

  const section = getSectionByName(sectionName);

  if (!section) {
    return fallback || null;
  }

  return <>{children(section)}</>;
}
