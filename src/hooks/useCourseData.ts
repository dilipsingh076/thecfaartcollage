import { useState, useEffect } from 'react';
import { getCourseBySlug } from '../services/api/courses.service';
import { CourseDetailData } from '../types/api';

interface UseCourseDataResult {
  data: CourseDetailData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching a single course's data by slug
 * @param slug Course slug
 * @param useCache Whether to use cache (default: true)
 * @returns Course data, loading state, error, and refetch function
 */
export const useCourseData = (slug: string, useCache: boolean = true): UseCourseDataResult => {
  const [data, setData] = useState<CourseDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const courseData = await getCourseBySlug(slug, useCache);
      setData(courseData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchData();
    }
    
    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [slug, useCache]); // Re-fetch if slug or useCache changes

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}; 