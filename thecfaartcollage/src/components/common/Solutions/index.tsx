
import React from "react";
import styles from "./solutions.module.css";
import { Tabs } from "../Tab";
import { 
  Palette, 
  Brush, 
  Laptop, 
  Shapes, 
  Camera, 
  BookOpen, 
  Hammer, 
  Compass, 
  ArrowBigDown
} from 'lucide-react';
import SectionTitle from "../SectionTitle/SectionTitle";
import MobileAccordion from "./MobileAccordion/MobileAccordion";


export const SolutionsTabs = [
  {
    key: 1,
    icon: (
      <Palette 
        className="w-6 h-6 text-[#FF6B6B]" 
        strokeWidth={1.5}
      />
    ),
    title: "Bachelor of Fine Arts (BFA)",
    heading: "01",
  },
  {
    key: 2,
    icon: (
      <Brush 
        className="w-6 h-6 text-[#4ECDC4]" 
        strokeWidth={1.5}
      />
    ),
    title: "Visual Arts & Painting",
    heading: "02",
  },
  {
    key: 3,
    icon: (
      <Laptop 
        className="w-6 h-6 text-[#45B7D1]" 
        strokeWidth={1.5}
      />
    ),
    title: "Digital Arts & Design",
    heading: "03",
  },
  {
    key: 4,
    icon: (
      <Shapes 
        className="w-6 h-6 text-[#96CEB4]" 
        strokeWidth={1.5}
      />
    ),
    title: "Sculpture & Installation",
    heading: "04",
  },
  {
    key: 5,
    icon: (
      <Camera 
        className="w-6 h-6 text-[#7F7FD5]" 
        strokeWidth={1.5}
      />
    ),
    title: "Photography & Media Arts",
    heading: "05",
  },
  {
    key: 6,
    icon: (
      <BookOpen 
        className="w-6 h-6 text-[#FFB347]" 
        strokeWidth={1.5}
      />
    ),
    title: "Art History & Criticism",
    heading: "06",
  },
  {
    key: 7,
    icon: (
      <Hammer 
        className="w-6 h-6 text-[#E77F67]" 
        strokeWidth={1.5}
      />
    ),
    title: "Ceramics & Crafts",
    heading: "07",
  },
  {
    key: 8,
    icon: (
      <Compass 
        className="w-6 h-6 text-[#786FA6]" 
        strokeWidth={1.5}
      />
    ),
    title: "Foundation Studies",
    heading: "08",
  },
];
const Solutionsfeatures = [
  { icon: ArrowBigDown, caption: "Industry Research" },
  { icon: ArrowBigDown, caption: "Business Plan" },
  { icon: ArrowBigDown, caption: "UI/UX Designing" },
  {
    icon: ArrowBigDown,
    caption: "Prototyping & Wireframing",
  },
];

export const SolutionsTabsContent = [
  {
    key: 1,
    title: "Bachelor of Fine Arts (BFA)",
    subtitle: "Comprehensive Four-Year Undergraduate Program in Fine Arts",
    description:
      "Our BFA program offers intensive studio practice and theoretical study, preparing students for professional careers in art. Students develop technical skills, creative thinking, and artistic vision through hands-on experience in state-of-the-art facilities.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 2,
    title: "Visual Arts & Painting",
    subtitle: "Master Traditional and Contemporary Painting Techniques",
    description:
      "The Visual Arts department provides comprehensive training in drawing, painting, and mixed media. Students explore various artistic mediums while developing their unique creative voice through intensive studio practice, art history studies, and contemporary art theory.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 3,
    title: "Digital Arts & Design",
    subtitle: "Innovative Digital Media and Graphic Design Program",
    description:
      "Our Digital Arts program combines traditional artistic principles with cutting-edge technology. Students master industry-standard software, digital illustration, web design, and motion graphics while developing a strong foundation in visual communication.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 4,
    title: "Sculpture & Installation",
    subtitle: "Explore Three-Dimensional Art and Spatial Design",
    description:
      "The Sculpture department focuses on both traditional and contemporary approaches to three-dimensional art. Students work with various materials including clay, metal, wood, and digital fabrication tools, preparing them for diverse artistic practices.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1638186824584-6d6367254927?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 5,
    title: "Photography & Media Arts",
    subtitle: "Contemporary Photography and Digital Imaging",
    description:
      "Our Photography program combines traditional darkroom techniques with digital innovation. Students learn professional photography, video production, and post-production skills while developing their artistic vision and narrative storytelling abilities.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 6,
    title: "Art History & Criticism",
    subtitle: "Theoretical Studies in Art History and Contemporary Art",
    description:
      "The Art History program provides a comprehensive study of visual culture across different periods and societies. Students develop critical thinking, research skills, and curatorial expertise while exploring art theory and contemporary criticism.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 7,
    title: "Ceramics & Crafts",
    subtitle: "Traditional and Contemporary Approaches to Craft",
    description:
      "Our Ceramics program offers extensive training in both functional and sculptural ceramics. Students master wheel throwing, hand building, glazing techniques, and kiln operations while exploring contemporary approaches to craft-based art.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=800&h=1000&fit=crop",
  },
  {
    key: 8,
    title: "Foundation Studies",
    subtitle: "Essential First-Year Program for All Art Students",
    description:
      "The Foundation year provides crucial fundamental skills in drawing, design, color theory, and digital tools. This program ensures all students develop strong technical and conceptual foundations before specializing in their chosen field.",
    features: Solutionsfeatures,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&h=1000&fit=crop",
  },
];
export const Solutions = () => {
  return (
    <div className="p-20 bg-gradient-to-br from-[#F6F8FD] via-[#F1F5FF] to-[#FAFAFF] dark:from-[#1A1F35] dark:via-[#1E2338] dark:to-[#1A1F35]" >
      <SectionTitle
        boldCaption={"Departments"}
        boldTitle={"Build your Future with us!"}
        description={"Comprehensive Solutions to Drive Your Digital Success"}
      />

      <MobileAccordion />

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

