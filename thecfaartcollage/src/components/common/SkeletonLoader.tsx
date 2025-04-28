import React from 'react';

interface SkeletonLoaderProps {
  type: 'navbar' | 'institutional' | 'menu-item' | 'dropdown';
  count?: number;
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type, 
  count = 1, 
  className = '' 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'navbar':
        return (
          <div className={`flex items-center space-x-6 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        );
      
      case 'institutional':
        return (
          <div className={`flex items-center space-x-1 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-6 bg-orange-400 rounded w-16"></div>
              </div>
            ))}
          </div>
        );
      
      case 'menu-item':
        return (
          <div className={`space-y-2 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                {index === 0 && (
                  <div className="pl-6 ml-2 mt-2 space-y-2 border-l border-gray-200">
                    <div className="h-5 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'dropdown':
        return (
          <div className={`pl-6 ml-2 space-y-2 border-l border-gray-200 ${className}`}>
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader; 