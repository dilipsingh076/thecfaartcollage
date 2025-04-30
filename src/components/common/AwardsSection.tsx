'use client';

import { AwardLeafIcon } from '../../Images/Icons';
import TestimonialCarousel from './TestimonialCarousel';

interface Award {
  year: string;
  title: string;
  provider: string;
}

interface AwardsSectionProps {
  awards: Award[];
  testimonials: {
    quote: string;
    author: string;
    position: string;
    organization: string;
  }[];
}

const AwardsSection = ({ awards, testimonials }: AwardsSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header with new design */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-12 bg-blue-600"></div>
              <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                Dates to Remember
              </span>
              <div className="h-[1px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notice Board
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Awards Grid - 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group border border-gray-100"
              >
                <div className="absolute top-6 right-6 text-amber-500 transform group-hover:rotate-12 transition-transform duration-300">
                  <AwardLeafIcon />
                </div>
                <div className="pr-12">
                  <div className="text-sm text-blue-600 font-medium mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-500">{award.provider}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-amber-500 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel - 5 columns */}
          <div className="lg:col-span-5">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection; 