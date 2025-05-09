import { useState, useEffect } from 'react';
import { getAboutUsData } from '../services/api';
import { AboutUsData } from '../types/api';

interface UseAboutDataResult {
  data: AboutUsData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching about page data
 * @param useCache Whether to use cache (default: true)
 * @returns About data, loading state, error, and refetch function
 */
export const useGoverningbodyData = (useCache: boolean = true): UseAboutDataResult => {
  const [data, setData] = useState<AboutUsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const aboutData = await getAboutUsData(useCache);
      setData(aboutData);
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