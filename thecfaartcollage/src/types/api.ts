// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Home Page Data Types
export interface SeoData {
  title: string;
  keywords: string;
  description: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_image: string;
}

// About Us Page Data Types
export interface AboutUsData {
  seo: SeoData;
  banner: {
    name: string;
    banner_img: string;
    banner_txt: string;
  };
  section_1: {
    content: string;
    image: string;
  };
  president_message: {
    content: string;
    image: string;
  };
  "Executive Members": {
    name: string;
    image: string | null;
    designation: string;
    category: string;
    message: string | null;
  }[];
  "Committee Members": {
    name: string;
    image: string | null;
    designation: string;
    category: string;
    message: string | null;
  }[];
  "Governing Body": {
    name: string;
    image: string | null;
    designation: string;
    category: string;
    message: string | null;
  }[];
  departments: {
    name: string;
    slug: string;
    snippet: string;
    image: string;
    icon: string;
  }[];
  gallery: {
    title: string;
    category: string;
    thumbImg: string;
    largeImg: string;
  }[];
}

export interface SliderItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Notice {
  title: string;
  short_description: string;
  link: string;
  date: string;
}

export interface Event {
  title: string;
  slug: string;
  snippet: string;
  date: string;
  category: string;
  time: string;
  venue: string;
  thumbImg: string;
  featuredImg: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  thumbImg: string;
  largeImg: string;
}

export interface HomeData {
  seo: SeoData;
  slider: SliderItem[];
  notices: Notice[];
  events: Event[];
  gallery: GalleryItem[];
  section_1?: {
    title?: string;
    subtitle?: string;
    content?: string;
  };
  academic_structure?: {
    image?: string | null;
    content?: string;
  };
  departments_activities?: {
    image?: string | null;
    content?: string;
  };
  section_2?: {
    title?: string;
    content?: string;
    image?: string | null;
  };
  testimonials?: {
    name: string;
    designation: string;
    content: string;
    image_link: string | null;
  }[];
  departments?: {
    name: string;
    slug: string;
    snippet: string;
    image: string;
    icon: string;
  }[];
}

// API Error Types
export interface ApiError {
  success: false;
  message: string;
  error?: {
    code: string;
    details?: string;
  };
} 