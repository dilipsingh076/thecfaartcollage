import { useState, useEffect } from 'react';
import { getAllInfoPages } from '../services/api/info.service';
import { InfoListData } from '../types/api';

interface UseInfoPagesResult {
  data: InfoListData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching all info pages
 * @param useCache Whether to use cache (default: true)
 * @returns Info pages list, loading state, error, and refetch function
 */
export const useInfoPages = (useCache: boolean = true): UseInfoPagesResult => {
  const [data, setData] = useState<InfoListData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const infoPages = await getAllInfoPages(useCache);
      console.log('Info pages response:', infoPages);
      setData(infoPages);
    } catch (err) {
      console.error('Error fetching info pages:', err);
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