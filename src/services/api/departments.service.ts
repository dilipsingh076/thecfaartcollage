import { API_ENDPOINTS, API_CACHE_CONFIG, API_BASE_URL } from '../../config/api.config';
import { fetchApi } from '../../utils/api.utils';
import { DepartmentsData, DepartmentDetailData } from '../../types/api';

/**
 * Cache for storing API responses
 */
const cache = new Map<string, { data: unknown; timestamp: number }>();

/**
 * Get data from cache if it exists and is not expired
 * @param key Cache key
 * @param ttl Time to live in seconds
 * @returns Cached data or null if not found or expired
 */
const getFromCache = <T>(key: string, ttl: number): T | null => {
  const cached = cache.get(key);
  
  if (!cached) {
    return null;
  }
  
  const now = Date.now();
  const isExpired = now - cached.timestamp > ttl * 1000;
  
  if (isExpired) {
    cache.delete(key);
    return null;
  }
  
  return cached.data as T;
};

/**
 * Set data in cache
 * @param key Cache key
 * @param data Data to cache
 */
const setInCache = <T>(key: string, data: T): void => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

/**
 * Fetch departments page data from API
 * @param useCache Whether to use cache (default: true)
 * @returns Departments page data
 */
export const getDepartmentsData = async (useCache: boolean = true): Promise<DepartmentsData> => {
  const cacheKey = 'departments-data';
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<DepartmentsData>(cacheKey, API_CACHE_CONFIG.departmentsData);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const response = await fetchApi<DepartmentsData>(API_ENDPOINTS.DEPARTMENTS);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Fetch department details by slug
 * @param slug Department slug
 * @param useCache Whether to use cache (default: true)
 * @returns Department details
 */
export const getDepartmentBySlug = async (slug: string, useCache: boolean = true): Promise<DepartmentDetailData> => {
  const cacheKey = `department-${slug}`;
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<DepartmentDetailData>(cacheKey, API_CACHE_CONFIG.departmentsData);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const departmentEndpoint = `${API_BASE_URL}/api/departments/${slug}`;
  const response = await fetchApi<DepartmentDetailData>(departmentEndpoint);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Clear departments data cache
 */
export const clearDepartmentsDataCache = (): void => {
  // Clear all department related caches
  for (const key of cache.keys()) {
    if (key.startsWith('department-') || key === 'departments-data') {
      cache.delete(key);
    }
  }
}; 