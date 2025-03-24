'use client';

import Link from 'next/link';

const AdmissionsBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Admissions Open 2024-2025
            </h2>
            <p className="text-white/90 text-lg">
              Join our prestigious art programs
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Link
              href="/admission"
              className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-center"
            >
              Click Here to download BVA Prospectus and Application Form
            </Link>
            <div className="hidden md:flex flex-col items-center bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-8 grid-rows-8 gap-0.5 w-16 h-16">
                {Array(64).fill(null).map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 ${
                      Math.random() > 0.5 ? 'bg-blue-900' : 'bg-transparent'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs mt-2 text-blue-900 font-medium">Scan QR Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsBanner; 