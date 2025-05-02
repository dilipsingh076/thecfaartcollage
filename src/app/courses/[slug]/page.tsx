'use client';

import { useParams } from 'next/navigation';
import { useCourseData } from '@/src/hooks/useCourseData';
import { LoadingSpinner } from '@/src/components/common';
import CourseDetail from './CourseDetail';
import { useEffect } from 'react';
import Link from 'next/link';

export default function CourseSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  // Use the courseData hook to fetch the course data by slug
  const { 
    data: courseData, 
    isLoading, 
    error
  } = useCourseData(slug as string);
  
  // Update document title when SEO data changes
  useEffect(() => {
    if (courseData?.seo?.title) {
      document.title = courseData.seo.title;
    }
  }, [courseData?.seo]);
  
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </main>
    );
  }
  
  if (error || !courseData) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The course you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </main>
    );
  }
  
  // Pass the course data and banner to the CourseDetail component
  return <CourseDetail course={courseData.courses} banner={courseData.banner} />;
} 