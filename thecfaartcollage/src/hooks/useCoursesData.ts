import { useState, useEffect } from 'react';
import { getCoursesData } from '../services/api';
import { CoursesData } from '../types/api';

interface UseCoursesDataResult {
  data: CoursesData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching courses page data
 * @param useCache Whether to use cache (default: true)
 * @returns Courses data, loading state, error, and refetch function
 */
export const useCoursesData = (useCache: boolean = true): UseCoursesDataResult => {
  const [data, setData] = useState<CoursesData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const coursesData = await getCoursesData(useCache);
      setData(coursesData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Cleanup function
    return () => {
      // Any cleanup if needed
    };
  }, [useCache]); // Re-fetch if useCache changes

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}; 