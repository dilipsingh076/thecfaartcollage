import React from 'react';
import styles from './hero.module.css';

interface HeroCarouselItemProps {
  item: { image: string; alt: string };
  index: number;
  currentIndex: number;
}

const HeroCarouselItem: React.FC<HeroCarouselItemProps> = ({
  item,
  index,
  currentIndex,
}) => {
  const isActive = index === currentIndex;

  return (
    <div
      className={`${styles.carouselItem} ${isActive ? styles.active : ''}`}
    >
      <img src={item.image} alt={item.alt} />
    </div>
  );
};

export default HeroCarouselItem;