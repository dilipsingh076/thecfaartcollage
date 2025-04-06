import { useState, useEffect } from 'react';
import { getHomeData } from '../services/api';
import { HomeData } from '../types/api';

interface UseHomeDataResult {
  data: HomeData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching home page data
 * @param useCache Whether to use cache (default: true)
 * @returns Home data, loading state, error, and refetch function
 */
export const useHomeData = (useCache: boolean = true): UseHomeDataResult => {
  const [data, setData] = useState<HomeData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const homeData = await getHomeData(useCache);
      setData(homeData);
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