import { StaticImageData } from "next/image";

// types.d.ts
export interface Feature {
  icon: string; // URL or class name for the icon
  caption: string;
}

export interface Props {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  images: StaticImageData;
}
