'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { slides } from '@/src/constants/homeData';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex relative h-full">
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                    {slide.heroTitle}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">
                    {slide.heroDescription}
                  </p>
                  <div className="mt-8">
                    <button className="bg-[#963B25] text-white px-8 py-3 rounded-lg hover:bg-[#7b2e1d] transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="absolute right-8 w-[700px] h-[700px]">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-[#FDF6E9] shadow-lg overflow-hidden">
                    <div className="w-full h-full relative">
                      <Image
                        src={slide.circleContent.imageUrl}
                        alt={slide.circleContent.alt}
                        fill
                        className="object-cover"
                      />
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