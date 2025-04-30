'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NewsItem {
  title: string;
  description: string;
  date: string;
  link: string;
  category?: string;
  time?: string;
  venue?: string;
  thumbImg?: string;
  featuredImg?: string;
}

interface NewsSectionProps {
  newsItems: NewsItem[];
}

const NewsSection = ({ newsItems }: NewsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    switch (screenSize) {
      case 'mobile': return 1;
      case 'tablet': return 2;
      default: return 3;
    }
  };
  
  const itemsPerPage = getItemsPerPage();
  const isCarousel = newsItems.length > itemsPerPage;

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    
    // Set initial screen size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isCarousel) return;
    
    const interval = setInterval(() => {
      // One-way scroll: always move forward
      setCurrentIndex((prevIndex) => {
        // If we're at the end, go back to the beginning
        if (prevIndex + itemsPerPage >= newsItems.length) {
          return 0;
        }
        // Otherwise, move forward by one item
        return prevIndex + 1;
      });
    }, 5000); // Rotate every 5 seconds
    
    return () => clearInterval(interval);
  }, [isCarousel, itemsPerPage, newsItems.length]);

  // Get visible items for the current view
  const getVisibleItems = () => {
    // If we have fewer items than the page size, just return all items
    if (newsItems.length <= itemsPerPage) {
      return newsItems;
    }
    
    // Calculate how many items to show
    const visibleCount = Math.min(itemsPerPage, newsItems.length);
    
    // Get the items for the current view
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const itemIndex = (currentIndex + i) % newsItems.length;
      items.push(newsItems[itemIndex]);
    }
    
    return items;
  };

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the end, go back to the beginning
      if (prevIndex + itemsPerPage >= newsItems.length) {
        return 0;
      }
      // Otherwise, move forward by one item
      return prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      // If we're at the beginning, go to the end
      if (prevIndex === 0) {
        return Math.max(0, newsItems.length - itemsPerPage);
      }
      // Otherwise, move backward by one item
      return prevIndex - 1;
    });
  };

  // Calculate total number of possible positions
  const totalPositions = Math.max(1, newsItems.length - itemsPerPage + 1);
  const currentPosition = Math.min(currentIndex, totalPositions - 1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <div className="h-[1px] w-12 bg-blue-600"></div>
              <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                Latest Updates
              </span>
              <div className="h-[1px] w-12 bg-blue-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Events and Exhibitions
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleItems().map((news, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <Link
                  href={news.link}
                  className="group block bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="relative w-full sm:w-2/5 h-48 sm:h-auto min-h-[200px]">
                      <Image
                        src={news.featuredImg || "https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg"}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent sm:bg-gradient-to-r" />
                    </div>
                    <div className="relative flex-1 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <div className="inline-block px-4 py-1 bg-[#FFD700] text-black font-semibold rounded-full text-sm mb-4">
                          {news.category || "Event"}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#FFD700] transition-colors">
                          {news.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{news.description}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">{news.date}</span>
                        </div>
                        {news.time && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm">{news.time}</span>
                          </div>
                        )}
                        {news.venue && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-sm">{news.venue}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Carousel Navigation */}
          {isCarousel && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={goToPrev}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPositions }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPosition === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={goToNext}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 