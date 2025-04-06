import { API_TIMEOUT, API_RETRY_CONFIG } from '../config/api.config';
import { ApiError, ApiResponse } from '../types/api';

/**
 * Custom error class for API errors
 */
export class ApiRequestError extends Error {
  status?: number;
  code?: string;
  details?: string;

  constructor(message: string, status?: number, code?: string, details?: string) {
    super(message);
    this.name = 'ApiRequestError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

/**
 * Creates an AbortController with a timeout
 * @param timeoutMs Timeout in milliseconds
 * @returns AbortController
 */
export const createTimeoutController = (timeoutMs: number = API_TIMEOUT): AbortController => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  
  // Clean up the timeout when the controller is aborted
  controller.signal.addEventListener('abort', () => clearTimeout(timeoutId));
  
  return controller;
};

/**
 * Retry a function with exponential backoff
 * @param fn Function to retry
 * @param maxRetries Maximum number of retries
 * @param retryDelay Initial retry delay in milliseconds
 * @returns Promise with the function result
 */
export const retryWithBackoff = async <T>(
  fn: () => Promise<T>,
  maxRetries: number = API_RETRY_CONFIG.maxRetries,
  retryDelay: number = API_RETRY_CONFIG.retryDelay
): Promise<T> => {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      // Don't retry if we've reached the maximum number of retries
      if (attempt === maxRetries) {
        break;
      }
      
      // Calculate delay with exponential backoff
      const delay = retryDelay * Math.pow(2, attempt);
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
};

/**
 * Parse API error response
 * @param response Response from fetch
 * @returns Parsed error
 */
export const parseApiError = async (response: Response): Promise<ApiError> => {
  try {
    const errorData = await response.json();
    return errorData as ApiError;
  } catch (error) {
    // If we can't parse the error response, create a generic error
    return {
      success: false,
      message: `API Error: ${response.status} ${response.statusText}`,
    };
  }
};

/**
 * Fetch data from API with timeout and retry logic
 * @param url API URL
 * @param options Fetch options
 * @returns Parsed API response
 */
export const fetchApi = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  const controller = createTimeoutController();
  
  const fetchWithRetry = async () => {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    
    if (!response.ok) {
      const errorData = await parseApiError(response);
      throw new ApiRequestError(
        errorData.message,
        response.status,
        errorData.error?.code,
        errorData.error?.details
      );
    }
    
    return response.json();
  };
  
  try {
    return await retryWithBackoff(fetchWithRetry);
  } catch (error) {
    if (error instanceof ApiRequestError) {
      throw error;
    }
    
    // Handle other errors (like network errors)
    throw new ApiRequestError(
      error instanceof Error ? error.message : 'Unknown API error',
      0
    );
  }
}; 