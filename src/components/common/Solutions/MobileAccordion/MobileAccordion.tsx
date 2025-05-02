import { useState } from "react";
import styles from "./MobileAccordion.module.css";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import { MDXProvider } from "@mdx-js/react";

interface Department {
  name: string;
  slug: string;
  snippet: string;
  image: string;
  icon: string;
  bg_color?: string;
}

interface MobileAccordionProps {
  departments?: Department[];
}

const MobileAccordion: React.FC<MobileAccordionProps> = ({ departments = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {departments.map((dept, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            activeIndex === index ? styles.active : styles.close
          }`}
        >
          <div
            className={styles.accordionTitle}
            onClick={() => handleClick(index)}
          >
            <div className={styles.iconContainer}>
              <div 
                className="w-6 h-6" 
                style={{ color: dept.bg_color || '#FF6B6B' }}
                dangerouslySetInnerHTML={{ __html: dept.icon }}
              />
              <h6 
                className={styles.title}
              >
                {" "}
                {dept.name}
              </h6>
            </div>
            <div className={styles.arrow}>
              {activeIndex === index ? <ArrowBigUp /> : <ArrowBigDown />}
            </div>
          </div>
          <div
            className={styles.accordionContent}
            style={{ maxHeight: activeIndex === index ? "9999px" : "0" }}
          >
            <MDXProvider>
              <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: dept.snippet }}
              />
            </MDXProvider>
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
