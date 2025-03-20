'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold text-[#FFD700] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track to explore our art programs.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
} 