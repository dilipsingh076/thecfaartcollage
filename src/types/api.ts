// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

// Menu Data Types
export interface DropdownItem {
  name: string;
  href: string;
}

export interface MenuItem {
  name: string;
  href: string;
  color: string | null;
  dropdownItems: DropdownItem[];
}

export interface MenuData {
  primary: MenuItem[];
  secondary: MenuItem[];
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

// Banner Type
export interface Banner {
  name: string;
  banner_img: string;
  banner_txt: string;
}

// About Us Page Data Types
export interface AboutUsData {
  seo: SeoData;
  banner: Banner;
  section_1: {
    content: string;
    image: string;
  };
  section_1_img?: {
    content: string;
    image: string;
  }[];
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

// Courses Page Data Types
export interface Course {
  name: string;
  slug: string;
  description: string;
  duration: string;
  eligibility: string;
  specializations: string[];
  highlights: string[];
  image_url: string;
  snippet: string;
}

export interface CoursesData {
  seo: SeoData;
  banner: Banner;
  section_1: {
    content: string;
    image: string | null;
  };
  courses: Course[];
}

// Course Detail Page Data Type
export interface CourseDetailData {
  seo: SeoData;
  banner: Banner;
  courses: Course;
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

// Department Page Data Types
export interface Department {
  name: string;
  slug: string;
  description: string;
  duration: string | null;
  eligibility: string | null;
  image: string | null;
  snippet: string;
}

export interface Faculty {
  name: string;
  designation: string;
  description: string;
  image_url: string;
}

export interface DepartmentData {
  name: string;
  slug: string;
  description: string;
  duration: string | null;
  eligibility: string | null;
  image_url: string | null;
  snippet: string;
  faculty: Faculty[];
}

export interface DepartmentsData {
  seo: SeoData;
  banner: Banner;
  section_1?: {
    content: string;
    image: string | null;
  };
  departments: Department[];
}

export interface DepartmentDetailData {
  seo: SeoData;
  banner: Banner;
  department: DepartmentData;
}

// Info Page Data Types
export interface InfoData {
  success: boolean;
  data: {
    seo?: SeoData;
    banner?: {
      id?: number;
      name?: string;
      slug?: string;
      caption?: string;
      snippet?: string;
      category?: string;
      author?: string | null;
      description?: string;
      banner_img?: string;
      banner_txt?: string | null;
      status?: string;
      views?: number | null;
      seo_id?: number;
      user_id?: number;
      created_at?: string | null;
      updated_at?: string | null;
    }
  };
  message: string;
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