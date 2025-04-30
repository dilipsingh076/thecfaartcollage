import React from "react";
import styles from "./solutionsTab.module.css";
import {ArrowBigRight } from "lucide-react";

interface SolutionTabProps {
  icon: React.ReactNode;
  title: string;
  heading: string;
  arrowIcon: React.ReactNode;
  index?: number;
  isActive: boolean;
}

const SolutionTab: React.FC<SolutionTabProps> = ({
  icon,
  title,
  heading,
  arrowIcon,
  isActive,
}) => {
  const arrowToDisplay = isActive ? <ArrowBigRight /> : arrowIcon;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h5
          className={styles.title}
        >
          {title}
        </h5>
        <div className={styles.heading}>{heading}</div>
      </div>
      <div className={styles.arrowIcon}>{arrowToDisplay}</div>
    </div>
  );
};

export default SolutionTab;
