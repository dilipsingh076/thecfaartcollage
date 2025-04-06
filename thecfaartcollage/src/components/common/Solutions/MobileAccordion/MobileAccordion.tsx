import { useState } from "react";
import styles from "./MobileAccordion.module.css";
import { accordionItems } from "./constant";

import { ArrowBigDown, ArrowBigUp } from "lucide-react";
const MobileAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.accordionItem} ${
            activeIndex === index ? styles.active : styles.close
          }`}
        >
          <div
            className={styles.accordionTitle}
            onClick={() => handleClick(index)}
          >
            <div className={styles.iconContainer}>
              <span>{item.icon}</span>
              <h6 
                className={styles.title}
              >
                {" "}
                {item.title}
              </h6>
            </div>
            <div className={styles.arrow}>
              {activeIndex === index ? <ArrowBigUp /> : <ArrowBigDown />}
            </div>
          </div>
          <div
            className={styles.accordionContent}
            style={{ maxHeight: activeIndex === index ? "420px" : "0" }}
          >
            <p className={styles.content}>
              {" "}
              {item.content}
            </p>
            <div className={styles.explore}>
              <h6 className={styles.exploreContent}>
                Explore
              </h6>
              {/* <Image src={ArrowUpIcon} alt={"arrowIcon.jpeg"} /> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileAccordion;
