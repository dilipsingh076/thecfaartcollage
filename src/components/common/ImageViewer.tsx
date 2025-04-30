import { useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt?: string;
  imageTitle?: string;
  imageCategory?: string;
}

export default function ImageViewer({
  isOpen,
  onClose,
  imageUrl,
  imageAlt = '',
  imageTitle,
  imageCategory
}: ImageViewerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 w-screen h-screen bg-black/90 z-[999999] flex items-center justify-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onClick={onClose}
    >
      <div 
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image container */}
        <div className="w-full h-[80vh] flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* Image info */}
        <div className="mt-4 text-center text-white">
          {imageCategory && (
            <span className="inline-block px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full mb-2">
              {imageCategory}
            </span>
          )}
          {imageTitle && (
            <h3 id="image-viewer-title" className="text-2xl font-bold">
              {imageTitle}
            </h3>
          )}
        </div>
      </div>
    </div>
  );

  // Use createPortal to render the modal at the document root
  return createPortal(modalContent, document.body);
} 