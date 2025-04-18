'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  slides: {
    title: string;
    description: string;
    variant: string;
    heroTitle: string;
    heroDescription: string;
    imageUrl: string;
    circleContent: React.ReactNode;
  }[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length, isPaused]);

  return (
    <section className="relative min-h-screen lg:h-[90vh]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image without dark overlay */}
          <div className="flex relative h-full">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Content section - removed dark overlay div */}
            <div className="relative z-10 h-full w-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center justify-around">
                  {/* Right Content - Circle Image - Now appears first on mobile/tablet */}
                  <div className="relative flex items-center justify-center lg:justify-end mt-[25px] lg:mt-0 order-1 lg:order-2">
                    {slide.circleContent}
                  </div>
                  
                  {/* Left Content - Now appears second on mobile/tablet */}
                  <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1 px-4 sm:px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                      {slide.heroTitle}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-6">
                      {slide.heroDescription}
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                      <button 
                        className="bg-[#95131D] cursor-pointer text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#8b2e1d] transition-colors duration-300 text-sm sm:text-base"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection; 