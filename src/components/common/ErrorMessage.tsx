import React from 'react';
import { ApiRequestError } from '../../utils/api.utils';

interface ErrorMessageProps {
  error: Error | null;
  className?: string;
  retry?: () => void;
}

/**
 * Error Message Component
 * 
 * A reusable error message component that displays error information
 * and optionally a retry button.
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  className = '',
  retry,
}) => {
  if (!error) {
    return null;
  }

  // Check if it's an API error
  const isApiError = error instanceof ApiRequestError;
  const statusCode = isApiError ? error.status : undefined;
  const errorCode = isApiError ? error.code : undefined;
  const errorDetails = isApiError ? error.details : undefined;

  return (
    <div className={`bg-red-50 border-l-4 border-red-500 p-4 rounded-md ${className}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            {isApiError ? 'API Error' : 'Error'}
            {statusCode && ` (${statusCode})`}
            {errorCode && ` - ${errorCode}`}
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <p>{error.message}</p>
            {errorDetails && (
              <p className="mt-1 text-xs">{errorDetails}</p>
            )}
          </div>
          {retry && (
            <div className="mt-4">
              <button
                type="button"
                onClick={retry}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage; 