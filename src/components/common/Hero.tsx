import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt = "Hero Banner"
}) => {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
      <div className="absolute inset-0 flex flex-col justify-center items-center container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl sm:max-w-3xl mx-auto px-4">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero; 