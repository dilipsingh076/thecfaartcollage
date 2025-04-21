import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImageViewer from './ImageViewer';

interface GalleryImage {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
}

export default function GallerySection({ images }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Get unique categories from images
  const categories = ['All', ...new Set(images.map(img => img.category))];

  // Handle image click to open full-screen viewer
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  // Close the full-screen viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-12 bg-blue-600"></div>
              <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                Our Gallery
              </span>
              <div className="h-[1px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Campus Life & Activities
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Gallery Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category === 'All' ? null : category)}
                className={`px-4 cursor-pointer py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  (category === 'All' && activeCategory === null) || activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images
            .filter(image => !activeCategory || image.category === activeCategory)
            .map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => handleImageClick(image)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={image.id <= 3} // Prioritize loading first 3 images
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View Full Gallery
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Full-Screen Image Viewer */}
      <ImageViewer
        isOpen={!!selectedImage}
        onClose={closeImageViewer}
        imageUrl={selectedImage?.imageUrl || ''}
        imageAlt={selectedImage?.title || ''}
        imageTitle={selectedImage?.title || ''}
        imageCategory={selectedImage?.category || ''}
      />
    </section>
  );
} 