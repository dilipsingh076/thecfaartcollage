'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InfoPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the homepage or appropriate page when accessing /info directly
    router.push('/');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Redirecting...</h2>
        <p className="text-gray-600">Please wait while we redirect you.</p>
      </div>
    </div>
  );
} 