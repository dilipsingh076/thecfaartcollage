import { API_ENDPOINTS, API_CACHE_CONFIG } from '../../config/api.config';
import { fetchApi } from '../../utils/api.utils';
import { AboutUsData } from '../../types/api';

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
 * Fetch about us page data from API
 * @param useCache Whether to use cache (default: true)
 * @returns About us page data
 */
export const getAboutUsData = async (useCache: boolean = true): Promise<AboutUsData> => {
  const cacheKey = 'about-us-data';
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<AboutUsData>(cacheKey, API_CACHE_CONFIG.aboutUsData);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const response = await fetchApi<AboutUsData>(API_ENDPOINTS.ABOUT_US);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Clear about us data cache
 */
export const clearAboutUsDataCache = (): void => {
  cache.delete('about-us-data');
}; 