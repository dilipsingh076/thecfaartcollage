// components/DynamicComponent.tsx
import React from "react";
import styles from "./solutions.module.css"; // Import your CSS Module
import { Props } from "./type";
import Image from "next/image";
import { API_BASE_URL } from "@/src/config/api.config";
import { MDXProvider } from '@mdx-js/react';
// import Image from "next/image";
const SolutionsCard: React.FC<Props> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.conrainerData}>
        <h3 style={{fontWeight:"700", fontSize:"24px", color:"#FFFFFF"}} className={styles.title}>
          {title}
        </h3>
        <div className={styles.descriptionContainer}>
          <MDXProvider>
            <div 
              className={styles.description}
              style={{
                fontWeight: "400", 
                fontSize: "13px", 
                color: "#FFFFFF",
                lineHeight: "1.6",
                marginBottom: "20px",
                 textAlign: "justify"
                
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </MDXProvider>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Explore</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <Image 
    src={`${API_BASE_URL}/${images}`} 
    alt={title + ".jpg"} 
    className={styles.image}
    width={0}
    height={0}
    sizes="30vw"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
      </div>
    </div>
  );
};

export default SolutionsCard;
