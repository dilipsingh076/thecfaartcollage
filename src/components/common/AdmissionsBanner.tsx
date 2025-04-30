'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AdmissionsBanner = () => {
  return (
    <div className="relative w-full bg-[#1A2B5F] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <div className="absolute right-0 h-full w-[45%] bg-[#40B5AD] transform skew-x-[-10deg] translate-x-[10%] hidden sm:block"></div>
        <div className="absolute right-0 h-full w-[2%] bg-[#FFA500] transform skew-x-[-10deg] translate-x-[200%] hidden sm:block"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-center gap-8 lg:gap-16">
          {/* Left side - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-8 sm:py-12 lg:py-20 pr-0 lg:pr-12 text-center lg:text-left"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-4"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    Admissions Open
                  </span>
                  <span className="block mt-2 sm:mt-3 text-[#FFA500]">2025-2026</span>
                </h2>
                <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Join our prestigious art programs
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pt-4 sm:pt-6"
              >
                <Link
                  href="https://karnatakaindustries.in/uploads/pdf/CFA_Admission_Form.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-[#FFA500] text-white text-base sm:text-lg md:text-xl font-semibold rounded-xl hover:bg-[#FF9000] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:translate-y-[-2px]"
                >
                  <span className="relative z-10">Download BVA Prospectus & Form</span>
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] grid grid-cols-12 gap-3 sm:gap-4 p-4"
          >
            {/* Main large image */}
            <div className="col-span-8 relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="https://karnatakaindustries.in/uploads/img/front_2.png"
                alt="Art Students"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Side images */}
            <div className="col-span-4 grid grid-rows-2 gap-3 sm:gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="https://karnatakaindustries.in/uploads/img/misc/SUN01343.jpg?q=80&w=2070"
                  alt="Student Working"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="https://karnatakaindustries.in/uploads/img/misc/SUN08145.JPG?q=150&w=1070"
                  alt="Creative Process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 30vw, 20vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-tl from-[#FFA500]/20 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default AdmissionsBanner; 