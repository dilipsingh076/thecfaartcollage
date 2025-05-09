import { API_ENDPOINTS, API_CACHE_CONFIG, API_BASE_URL } from '../../config/api.config';
import { fetchApi } from '../../utils/api.utils';

export interface Event {
  title: string;
  slug: string;
  snippet: string;
  description: string;
  date: string;
  category: string;
  time: string;
  venue: string;
  thumbImg: string;
  featuredImg: string;
}

export interface EventsSEO {
  title: string;
  keywords: string;
  description: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_image: string;
}

export interface EventsBanner {
  name: string;
  banner_img: string;
  banner_txt: string;
}

export interface EventsData {
  seo: EventsSEO;
  banner: EventsBanner;
  events: Event[];
}

export interface EventDetailData {
  seo: EventsSEO;
  banner: EventsBanner;
  events: Event;
}

export interface EventDetailResponse {
  success: boolean;
  data: EventDetailData;
  message: string;
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
    console.log('No cached data found for key:', key);
    return null;
  }
  
  const now = Date.now();
  const isExpired = now - cached.timestamp > ttl * 1000;
  
  if (isExpired) {
    console.log('Cache expired for key:', key);
    cache.delete(key);
    return null;
  }
  
  console.log('Found valid cached data for key:', key);
  return cached.data as T;
};

/**
 * Set data in cache
 * @param key Cache key
 * @param data Data to cache
 */
const setInCache = <T>(key: string, data: T): void => {
  console.log('Setting cache for key:', key);
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

/**
 * Fetch all events from API
 * @param useCache Whether to use cache (default: true)
 * @returns Events data
 */
export const getEventsData = async (useCache: boolean = true): Promise<EventsData> => {
  const cacheKey = 'events-data';
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<EventsData>(cacheKey, API_CACHE_CONFIG.eventsData);
    
    if (cachedData) {
      return cachedData;
    }
  }
  
  // Fetch data from API
  const response = await fetchApi<EventsData>(API_ENDPOINTS.EVENTS);
  
  // Cache the response if caching is enabled
  if (useCache) {
    setInCache(cacheKey, response.data);
  }
  
  return response.data;
};

/**
 * Fetch event details by slug
 * @param slug Event slug
 * @param useCache Whether to use cache (default: true)
 * @returns Event details with banner data
 */
export const getEventBySlug = async (slug: string, useCache: boolean = true): Promise<EventDetailData> => {
  const cacheKey = `event-${slug}`;
  
  // Try to get data from cache if caching is enabled
  if (useCache) {
    const cachedData = getFromCache<EventDetailData>(cacheKey, API_CACHE_CONFIG.eventsData);
    
    if (cachedData) {
      console.log('Returning cached data for event:', slug);
      return cachedData;
    }
  }
  
  // Fetch data from API
  const eventEndpoint = `${API_BASE_URL}/api/events/${slug}`;
  const response = await fetchApi<EventDetailResponse>(eventEndpoint);
  
  if (!response.success || !response.data) {
    throw new Error(response.message || 'Failed to fetch event details');
  }

  const eventDetailData: EventDetailData = {
    seo: response.data.data.seo,
    banner: response.data.data.banner,
    events: response.data.data.events
  };
  
  // Cache the response if caching is enabled
  if (useCache) {
    console.log('Caching new data for event:', slug);
    setInCache(cacheKey, eventDetailData);
  }
  
  return eventDetailData;
}; 