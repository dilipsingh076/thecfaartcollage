import React from 'react';

interface SectionTitleProps {
  boldCaption: string;
  boldTitle: string;
  description?: string;
  captionColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  lineColor?: string;
  gradientFromColor?: string;
  gradientToColor?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  boldCaption,
  boldTitle,
  description,
  captionColor = '#0066FF',
  titleColor = '#121212',
  descriptionColor = '#4B5563',
  lineColor = '#0066FF',
  gradientFromColor = '#0066FF',
  gradientToColor = '#F59E0B',
  className = '',
}) => {
  return (
    <div className={`max-w-[800px] mx-auto ${className}`}>
      <div className="mb-16 text-center">
        <div className="inline-block">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-[1px] w-12" style={{ backgroundColor: lineColor }}></div>
            <span 
              className="font-medium uppercase tracking-wider text-sm"
              style={{ color: captionColor }}
            >
              {boldCaption}
            </span>
            <div className="h-[1px] w-12" style={{ backgroundColor: lineColor }}></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: titleColor }}
          >
            {boldTitle}
          </h2>
          <div 
            className="h-1 w-32 mx-auto rounded-full"
            style={{ 
              background: `linear-gradient(to right, ${gradientFromColor}, ${gradientToColor})` 
            }}
          ></div>
        </div>
      </div>
      
      {description && (
        <p 
          className="text-base sm:text-lg font-normal leading-relaxed text-center"
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;