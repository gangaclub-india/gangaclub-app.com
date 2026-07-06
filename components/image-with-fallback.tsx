'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string; // Default to /placeholder.svg
  fallbackQuery?: string; // Optional query for placeholder.svg
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg",
  fallbackQuery,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  // Determine the final source
  let finalSrc = src;
  if (imageError) {
    // For fill images, width/height might not be directly on props, use sensible defaults
    const placeholderWidth = props.width ? Number(props.width) : 300;
    const placeholderHeight = props.height ? Number(props.height) : 200;
    const query = fallbackQuery || alt || 'image placeholder';
    finalSrc = `${fallbackSrc}?height=${placeholderHeight}&width=${placeholderWidth}&query=${encodeURIComponent(query)}`;
  }

  return (
    <Image
      src={finalSrc || "/placeholder.svg"}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}
