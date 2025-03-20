'use client';

interface TriangleCarouselProps {
  currentSlide: number;
}

export default function TriangleCarousel({ currentSlide }: TriangleCarouselProps) {
  return (
    <div className="relative w-full aspect-square">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 transform rotate-45 bg-white/10 backdrop-blur-sm">
          <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Slide {currentSlide + 1}</h3>
              <p className="text-sm opacity-80">of {3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 