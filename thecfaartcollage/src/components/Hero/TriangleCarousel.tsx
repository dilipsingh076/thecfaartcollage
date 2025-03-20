"use client";
import React, { useState, useEffect } from 'react';
import styles from './hero.module.css'; // Import CSS module
import HeroCarouselItem from './HeroCarouselItem';

const TriangleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      image: '/images/painting1.jpg', // Replace with your image paths
      alt: 'Painting 1',
    },
    {
      image: '/images/sculpture1.jpg',
      alt: 'Sculpture 1',
    },
    // ... more items
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.triangleCarousel}>
        {items.map((item, index) => (
          <HeroCarouselItem
            key={index}
            item={item}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default TriangleCarousel;