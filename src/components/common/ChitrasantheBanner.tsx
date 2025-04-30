'use client';

import Link from 'next/link';

const ChitrasantheBanner = () => {
  return (
    <section className="py-12 bg-[#963B25] relative mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center text-white space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              Welcomes you to 22nd chitrasanthe, to be held on{' '}
              <span className="block mt-1">
                Sunday, 05.01.2025
              </span>
            </h2>
          </div>
          
          <Link
            href="/registration"
            className="inline-block px-6 py-3 bg-[#FFC107] text-black font-bold text-lg rounded-lg hover:bg-[#FFD54F] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Artist Registration
          </Link>
        </div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </section>
  );
};

export default ChitrasantheBanner; 