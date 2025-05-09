import { API_ENDPOINTS, API_CACHE_CONFIG } from '../../config/api.config';
import { fetchApi } from '../../utils/api.utils';

export interface ContactResponse {
  success: boolean;
    seo: {
      title: string;
      keywords: string;
      description: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_image: string;
    };
    banner: {
      name: string;
      banner_img: string;
      banner_txt: string;
    };
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    name: string;
    email: string;
    mobile: string;
    message: string;
    created_at: string;
  };
}

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
 * Fetch contact page data from API
 * @param useCache Whether to use cache (default: true)
 * @returns Contact page data
 */
export const getContactData = async (useCache: boolean = true): Promise<ContactResponse> => {
  const cacheKey = 'contact-data';
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<ContactResponse>(cacheKey, API_CACHE_CONFIG.contactData);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const response = await fetchApi<ContactResponse>(API_ENDPOINTS.CONTACT);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Submit contact form data to API
 * @param formData Contact form data
 * @returns API response
 */
export const submitContactForm = async (formData: ContactFormData): Promise<ContactFormResponse> => {
  const response = await fetchApi<ContactFormResponse>(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
  
  return response.data;
};

/**
 * Clear contact data cache
 */
export const clearContactDataCache = (): void => {
  cache.delete('contact-data');
}; 