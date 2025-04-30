import React from 'react';

interface IconProps {
    className?: string;
  }
  const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`text-gray-600 dark:text-gray-300 ${className}`}
    >
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );
  
  export default SearchIcon;