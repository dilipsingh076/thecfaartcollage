import React from 'react';

interface IconProps {
  className?: string;
}

const DropdownIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={`ml-1 transition-transform duration-300 group-hover:translate-y-1 ${className}`}
  >
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default DropdownIcon;