'use client';

import Image from 'next/image';

interface ArtImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ArtImage({ src, alt, className = '' }: ArtImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={1920}
      height={1080}
      priority
    />
  );
} 