// components/DynamicComponent.tsx
import React from "react";
import styles from "./solutions.module.css"; // Import your CSS Module
import { Props } from "./type";
import Image from "next/image";
// import Image from "next/image";
const SolutionsCard: React.FC<Props> = ({
  title,
  subtitle,
  description,
  images,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.conrainerData}>
        <h3 style={{fontWeight:"700", fontSize:"24px", color:"#FFFFFF"}} className={styles.title}>
          {title}
        </h3>
        <h5 style={{fontWeight:"500", fontSize:"16px", color:"#FFFFFF"}} className={styles.subtitle}>
          {subtitle}
        </h5>
        <p style={{fontWeight:"500", fontSize:"16px", color:"#FFFFFF"}} className={styles.description}>
          {description}
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Explore</button>
          {/* <Image
            width={34}
            height={34}
            src={ArrowIcon}
            alt={"arrow-icon.jpg"}
          /> */}
        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image 
    src={images} 
    alt={title + ".jpg"} 
    className={styles.image}
    width={0}
    height={0}
    sizes="30vw"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
        {/* <Image width={900} height={900} src={images} alt={title + ".jpg"} /> */}
      </div>
    </div>
  );
};

export default SolutionsCard;
