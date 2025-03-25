import React from 'react';

interface SectionTitleProps {
  boldCaption: string;
  boldTitle: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  boldCaption,
  boldTitle,
  description,
}) => {
  return (
    <div className="max-w-[800px]">
      <div className="flex items-center gap-2">
        <h4 className="text-[#0066FF] text-base font-semibold tracking-wide">
          {boldCaption}
        </h4>
        <div className="w-8 h-[1px] bg-[#0066FF]"></div>
      </div>
      
      <h2 className="text-[40px] leading-[48px] font-bold text-[#121212] mt-5 mb-4">
        {boldTitle}
      </h2>
      
      <p className="text-[#4B5563] text-lg font-normal leading-7">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;