import React from "react";
import styles from "./solutions.module.css";
import { Tabs } from "../Tab";
import { ArrowBigDown } from 'lucide-react';
import SectionTitle from "../SectionTitle/SectionTitle";
import MobileAccordion from "./MobileAccordion/MobileAccordion";

interface Department {
  name: string;
  slug: string;
  snippet: string;
  image: string;
  icon: string;
  bg_color?: string;
}

interface SolutionsProps {
  departments?: Department[];
}

const Solutionsfeatures = [
  { icon: ArrowBigDown, caption: "Industry Research" },
  { icon: ArrowBigDown, caption: "Business Plan" },
  { icon: ArrowBigDown, caption: "UI/UX Designing" },
  { icon: ArrowBigDown, caption: "Prototyping & Wireframing" },
];

export const Solutions: React.FC<SolutionsProps> = ({ departments = [] }) => {
  // Get the first department's bg_color or use a default

  // Function to convert color to light shade
  const getLightColor = (color: string) => {
    // If no color provided, return a default light color
    if (!color) return '#f0f4f8';
    
    // If it's a hex color, convert to light shade
    if (color.startsWith('#')) {
      // Add 60% opacity for a balanced shade
      return color + '99'; // Adding 60% opacity (99 in hex)
    }
    
    return color; // Return original color if not hex
  };

  const SolutionsTabs = departments.map((dept, index) => ({
    key: index + 1,
    icon: (
      <div 
        className="w-6 h-6" 
        style={{ color: dept.bg_color || '#FF6B6B' }}
        dangerouslySetInnerHTML={{ __html: dept.icon }}
      />
    ),
    bgColor: getLightColor(dept.bg_color || ''),
    title: dept.name,
    heading: String(index + 1).padStart(2, '0'),
  }));

  const SolutionsTabsContent = departments.map((dept, index) => ({
    key: index + 1,
    title: dept.name,
    description: dept.snippet,
    features: Solutionsfeatures,
    bgColor: dept.bg_color,
    image: dept.image,
  }));

  return (
    <div className="p-20 bg-gradient-to-br from-[#F6F8FD] via-[#F1F5FF] to-[#FAFAFF] dark:from-[#1A1F35] dark:via-[#1E2338] dark:to-[#1A1F35]" >
      <SectionTitle
        boldCaption={"Departments"}
        boldTitle={"Build your Future with us!"}
        description={"Holistic pedagogical framework for Visual Arts education"}
      />

      <MobileAccordion departments={departments} />

      <Tabs
        className={{
          container: `${styles.tabContainer}`,
          headerClass: `${styles.tabHeader}`,
          contentClass: `${styles.tabContent}`,
          tab: `${styles.tab}`,
          active: `${styles.active}`,
        }}
        tabs={SolutionsTabs}
        content={SolutionsTabsContent}
      />
    </div>
  );
};

