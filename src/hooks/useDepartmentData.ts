import { useState, useEffect } from 'react';
import { DepartmentDetailData } from '../types/api';
import { getDepartmentBySlug } from '../services/api/departments.service';

interface UseDepartmentDataResult {
  data: DepartmentDetailData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching a single department's data by slug
 * @param slug Department slug
 * @param useCache Whether to use cache (default: true)
 * @returns Department data, loading state, error, and refetch function
 */
export const useDepartmentData = (slug: string, useCache: boolean = true): UseDepartmentDataResult => {
  const [data, setData] = useState<DepartmentDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const departmentData = await getDepartmentBySlug(slug, useCache);
      setData(departmentData);
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