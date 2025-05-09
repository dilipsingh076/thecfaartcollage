'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInfoData } from '@/src/hooks/useInfoData';
import { LoadingSpinner, ErrorMessage } from '@/src/components/common';
import InfoDetail from './infoDetail';
export default function InfoPage() {
  const params = useParams();
  const infoSlug = params.slug as string;
  const { data: infoData, isLoading, error, refetch } = useInfoData(infoSlug);
  
  // Update document title when SEO data changes
  console.log('infoData here', infoData);
  useEffect(() => {
    if (infoData?.seo?.title) {
      document.title = infoData.seo.title;
    } else if (infoData?.banner?.name) {
      document.title = `${infoData.banner.name} - CFA Bangalore`;
    }
  }, [infoData?.seo, infoData?.banner]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" color="#963B25" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorMessage error={error} retry={refetch} />
        </div>
      </div>
    );
  }

  // Check if data is present at all
  if (!infoData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Information Not Found</h1>
          <Link href="/info" className="text-[#963B25] hover:text-[#722D1C] transition-colors">
            Return to Information Pages
          </Link>
        </div>
      </div>
    );
  }

  // We pass the banner and seo data to the detail component, which handles the case if they're undefined
  return (
    <InfoDetail 
      banner={infoData?.banner} 
      seo={infoData?.seo}
    />
  );
} 