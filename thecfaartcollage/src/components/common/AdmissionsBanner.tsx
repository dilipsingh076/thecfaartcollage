'use client';

import Link from 'next/link';

const AdmissionsBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
              Admissions Open 2025-2026
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg">
              Join our prestigious art programs
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
            <Link
              href="/admission"
              className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-xs sm:text-sm md:text-base w-full sm:w-auto"
            >
             Click Here to Download BVA Prospectus & Application Form
            </Link>
            <div className="hidden md:flex flex-col items-center bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-8 grid-rows-8 gap-0.5 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                {Array(64).fill(null).map((_, index) => (
                  <div
                    key={index}
                    className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 ${
                      Math.random() > 0.5 ? 'bg-blue-900' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-blue-900 font-medium">Scan QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsBanner; 