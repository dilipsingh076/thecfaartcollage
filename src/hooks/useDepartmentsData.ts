import { useState, useEffect } from 'react';
import { DepartmentsData } from '../types/api';
import { getDepartmentsData } from '../services/api/departments.service';

interface UseDepartmentsDataResult {
  data: DepartmentsData | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching departments list data
 * @param useCache Whether to use cache (default: true)
 * @returns Departments data, loading state, error, and refetch function
 */
export const useDepartmentsData = (useCache: boolean = true): UseDepartmentsDataResult => {
  const [data, setData] = useState<DepartmentsData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setIsLoading(true);
      setError(null);
      
      const departmentsData = await getDepartmentsData(useCache);
      setData(departmentsData);
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