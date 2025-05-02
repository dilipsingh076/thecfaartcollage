import { API_BASE_URL, API_CACHE_CONFIG } from '../../config/api.config';
import { fetchApi } from '../../utils/api.utils';
import { InfoData } from '../../types/api';

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
 * Fetch info page data from API by slug
 * @param slug The slug to fetch data for
 * @param useCache Whether to use cache (default: true)
 * @returns Info page data
 */
export const getInfoData = async (slug: string, useCache: boolean = true): Promise<InfoData> => {
  const cacheKey = `info-data-${slug}`;
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<InfoData>(cacheKey, API_CACHE_CONFIG.infoData || 300);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const url = `${API_BASE_URL}/api/info/${slug}`;
  const response = await fetchApi<InfoData>(url);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Clear info data cache for a specific slug
 * @param slug The slug to clear cache for
 */
export const clearInfoDataCache = (slug: string): void => {
  cache.delete(`info-data-${slug}`);
};

/**
 * Clear all info data caches
 */
export const clearAllInfoDataCache = (): void => {
  for (const key of cache.keys()) {
    if (key.startsWith('info-data-')) {
      cache.delete(key);
    }
  }
}; 