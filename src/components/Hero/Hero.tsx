import React from 'react';
import TriangleCarousel from './TriangleCarousel';
import styles from './hero.module.css'; // Import CSS module

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>College of Fine Arts</h1>
        <p>Inspiring the Design Future</p>
      </div>
      <TriangleCarousel />
    </section>
  );
};

export default Hero;