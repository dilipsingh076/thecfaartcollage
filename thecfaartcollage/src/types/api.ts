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