import { useState, useEffect } from 'react';
import { getInfoData } from '../services/api/info.service';
import { InfoData } from '../types/api';

interface UseInfoDataResult {
  data: InfoData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching info page data
 * @param slug The slug for the info page
 * @param useCache Whether to use cache (default: true)
 * @returns Info data, loading state, error, and refetch function
 */
export const useInfoData = (slug: string, useCache: boolean = true): UseInfoDataResult => {
  const [data, setData] = useState<InfoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const infoData = await getInfoData(slug, useCache);
      console.log('Info data response:', infoData);
      setData(infoData);
    } catch (err) {
      console.error('Error fetching info data:', err);
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