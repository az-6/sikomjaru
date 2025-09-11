"use client";

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ClickableImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ClickableImage({
  src,
  alt,
  className = "",
}: ClickableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Don't render if src is empty
  if (!src || src.trim() === "") {
    return null;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`cursor-pointer transition-all hover:opacity-80 ${className}`}
        onClick={() => setIsOpen(true)}
      />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
