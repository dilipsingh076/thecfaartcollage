'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { departmentData } from '@/src/constants/homeData';

const InteractiveContentSection: React.FC = () => {
  const [activeBox, setActiveBox] = useState(1);
  const [isRightSideSticky, setIsRightSideSticky] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mainSectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainSectionRef.current) return;

      const mainSectionRect = mainSectionRef.current.getBoundingClientRect();
      setIsRightSideSticky(mainSectionRect.top <= 0);

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveBox(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={mainSectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our comprehensive range of digital solutions
        </p>
        
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side - Service Cards */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {departmentData.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => sectionRefs.current[index] = el}
                  onClick={() => setActiveBox(service.id)}
                  className={`
                    cursor-pointer transform transition-all duration-300
                    h-[180px] w-[400px] rounded-2xl p-8
                    ${activeBox === service.id 
                      ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] shadow-lg scale-105' 
                      : 'bg-white hover:shadow-md'}
                  `}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl p-2.5 mb-4">
                        <div className="w-full h-full bg-white/60 rounded-lg"></div>
                      </div>
                      <h3 className={`text-2xl font-bold mb-2 
                        ${activeBox === service.id ? 'text-white' : 'text-gray-800'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <div className={`flex items-center 
                      ${activeBox === service.id ? 'text-white' : 'text-[#FFD700]'}`}>
                      <span className="mr-2">Learn More</span>
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content Display */}
          <div className={`lg:col-span-7 ${isRightSideSticky ? 'lg:sticky lg:top-0' : ''}`}>
            <div className="bg-gradient-to-br from-[#002B5B] to-[#1B4B79] rounded-2xl p-8 shadow-lg text-white">
              <div className="aspect-w-16 aspect-h-9 relative rounded-xl overflow-hidden mb-8">
                <Image
                  src={`https://ik.imagekit.io/demo/img/default-image.jpg?tr=w-1200,h-800`}
                  alt={departmentData[activeBox - 1].title}
                  fill
                  className="object-cover opacity-20"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {departmentData[activeBox - 1].content.title}
              </h3>
              <h4 className="text-xl text-blue-200 mb-4">
                {departmentData[activeBox - 1].content.subtitle}
              </h4>
              <p className="text-blue-50/90 mb-8 text-lg leading-relaxed">
                {departmentData[activeBox - 1].content.description}
              </p>
              <button className="px-6 py-3 bg-white text-[#002B5B] font-semibold rounded-full hover:bg-blue-50 transition-colors">
                Explore Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentSection; 