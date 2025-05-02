'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { LoadingSpinner, ErrorMessage } from '../../../components/common';
import DepartmentDetail from './DepartmentDetail';
import { useEffect } from 'react';
import { useDepartmentData } from '@/src/hooks/useDepartmentData';

// Interface to extend the DepartmentDetailData type
interface ExtendedDepartmentData {
  faculty?: {
    name: string;
    designation: string;
    description: string;
    image_url: string;
  }[];
}

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.department as string;
  const { data, isLoading, error, refetch } = useDepartmentData(slug);
  
  // Update document title when SEO data changes
  useEffect(() => {
    if (data?.seo?.title) {
      document.title = data.seo.title;
    }
  }, [data?.seo]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
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

  if (!data || !data.department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <Link href="/departments" className="text-[#FFD700] hover:text-[#FFE55C] transition-colors">
            Return to Departments
          </Link>
        </div>
      </div>
    );
  }

  // Cast data to extended type to access faculty
  const extendedData = data as unknown as ExtendedDepartmentData;
  
  return (
    <DepartmentDetail 
      department={data.department} 
      faculty={extendedData.faculty || []} 
      banner={data.banner}
      seo={data.seo}
    />
  );
}