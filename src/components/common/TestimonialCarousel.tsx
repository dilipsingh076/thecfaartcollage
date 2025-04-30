'use client';

import { useState, useEffect, useCallback } from 'react';
import { QuoteIcon } from '../../Images/Icons';

interface TestimonialCarouselProps {
  testimonials: {
    quote: string;
    author: string;
    position: string;
    organization: string;
  }[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg relative h-[400px] border border-gray-100">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
      <div className="mb-6 text-gray-400">
        <QuoteIcon />
      </div>
      
      <div className="h-[280px] flex flex-col justify-between relative">
        <div>
          <blockquote 
            className="text-lg text-gray-600 mb-6 transition-all duration-500"
            key={currentIndex}
          >
            {testimonials[currentIndex].quote}
          </blockquote>
        </div>
        
        <div className="mt-auto relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentIndex].author[0]}
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].organization}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 