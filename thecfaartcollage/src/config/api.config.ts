/**
 * API Configuration
 * 
 * This file contains configuration for API endpoints and settings.
 * It uses environment variables for flexibility across different environments.
 */

// API Base URL
export const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}` || 'http://karnatakaindustries.in';

// API Endpoints
export const API_ENDPOINTS = {
  HOME: `${API_BASE_URL}/api/home`,
  // Add more endpoints as needed
};

// API Request Timeout (in milliseconds)
export const API_TIMEOUT = 10000;

// API Retry Configuration
export const API_RETRY_CONFIG = {
  maxRetries: 3,
  retryDelay: 1000, // milliseconds
};

// API Cache Configuration
export const API_CACHE_CONFIG = {
  // Cache time in seconds
  homeData: 60 * 5, // 5 minutes
}; 