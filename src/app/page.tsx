'use client';

import Image from 'next/image';
import { awards, galleryImages, newsItems, notifications, testimonials } from '../constants/homeData';
import { Solutions } from '../components/common/Solutions';
import { useHomeData } from '../hooks';
import { LoadingSpinner, ErrorMessage } from '../components/common';
import { SliderItem, Notice, Event, GalleryItem } from '../types/api';
import GallerySection from '../components/common/GallerySection';

// Import our new components
import {
  HeroSection,
  AdmissionsBanner,
  AboutSection,
  AwardsSection,
  NewsSection,
  // ContactSection,
  ChitrasantheBanner
} from '../components/common';
import { API_BASE_URL } from '../config/api.config';

// Fallback slides in case API fails
const fallbackSlides = [
  {
    title: 'Master the Art of Drawing',
    description: 'Develop your drawing skills with expert guidance and practice',
    variant: 'primary',
    heroTitle: 'Master the Art of Drawing',
    heroDescription: 'Develop your drawing skills with expert guidance and practice',
    imageUrl: 'https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg',
    circleContent: (
      <div className="w-[200px] sm:w-[250px] md:w-[320px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] 2xl:h-[550px] 2xl:w-[550px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/05/Psittaciformes-1.png"
              alt="Art"
              fill
              className="object-cover p-4 lg:p-6"
              priority
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Explore Sculpture',
    description: 'Create three-dimensional masterpieces with our sculpture program',
    variant: 'secondary',
    heroTitle: 'Explore Sculpture',
    heroDescription: 'Create three-dimensional masterpieces with our sculpture program',
    imageUrl: 'https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg',
    circleContent: (
      <div className="w-[200px] sm:w-[250px] md:w-[320px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] 2xl:h-[550px] 2xl:w-[550px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/Psittaciformes.png"
              alt="Sculpture"
              fill
              className="object-cover p-4 lg:p-6"
              priority
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Digital Art & Animation',
    description: 'Learn modern digital art techniques and animation',
    variant: 'tertiary',
    heroTitle: 'Digital Art & Animation',
    heroDescription: 'Learn modern digital art techniques and animation',
    imageUrl: 'https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg',
    circleContent: (
      <div className="w-[200px] sm:w-[250px] md:w-[320px] lg:w-[450px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] 2xl:h-[550px] 2xl:w-[550px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/05/Psittaciformes-2.png"
              alt="Digital Art"
              fill
              className="object-cover p-4 lg:p-6"
              priority
            />
          </div>
        </div>
      </div>
    )
  }
];

// Convert API slider items to our slide format
const convertSliderToSlides = (sliderItems: SliderItem[]) => {
  return sliderItems.map((item, index) => ({
    title: item.title,
    description: item.description,
    variant: index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'tertiary',
    heroTitle: item.title,
    heroDescription: item.description,
    buttonLink: item.link,
    buttonText: item.button,
    imageUrl: 'https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg', // Fallback image
    circleContent: (
      <div className="w-[235px] sm:w-[250px] md:w-[375px] lg:w-[530px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[450px] 2xl:h-[550px] 2xl:w-[660px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover p-4 lg:p-6"
              priority
            />
          </div>
        </div>
      </div>
    )
  }));
};

// Convert API notices to our notification format
const convertNoticesToNotifications = (notices: Notice[]) => {
  return notices.map(notice => ({
    title: notice.title,
    content: notice.short_description,
    date: notice.date,
    link: notice.link
  }));
};

// Convert API events to our news items format
const convertEventsToNewsItems = (events: Event[]) => {
  return events.map(event => ({
    title: event.title,
    description: event.snippet,
    date: event.date,
    link: `/events`,
    category: event.category,
    time: event.time,
    venue: event.venue,
    thumbImg: event.thumbImg,
    featuredImg: event.featuredImg,
  }));
};

// Convert API gallery items to our gallery images format
const convertGalleryToGalleryImages = (galleryItems: GalleryItem[]) => {
  return galleryItems.map((item, index) => ({
    id: index + 1,
    title: item.title,
    category: item.category,
    imageUrl: item.largeImg,
    thumbnailUrl: item.thumbImg
  }));
};

// Add custom scrollbar styles to your global CSS
const styles = `
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #e2e8f0 #ffffff;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #ffffff;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #e2e8f0;
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #cbd5e1;
  }
`;

export default function HomePage() {
  const { data: homeData, isLoading, error, refetch } = useHomeData();
  
  // Use API data or fallback to static data
  const slides = homeData ? convertSliderToSlides(homeData.slider) : fallbackSlides;
  const apiNotifications = homeData ? convertNoticesToNotifications(homeData.notices) : notifications;
  const apiNewsItems = homeData ? convertEventsToNewsItems(homeData.events) : newsItems;
  const apiGalleryImages = homeData ? convertGalleryToGalleryImages(homeData.gallery) : galleryImages;
  const section_1 = homeData?.section_1 || undefined;
  const academic_structure = homeData?.academic_structure || undefined;
  const departments_activities = homeData?.departments_activities || undefined;
  const section_2 = homeData?.section_2 || undefined;
  const apiTestimonials = homeData?.testimonials || [];
  
  // Convert API testimonials to the format expected by AwardsSection
  const convertedTestimonials = apiTestimonials.map(testimonial => ({
    quote: testimonial.content,
    author: testimonial.name,
    position: testimonial.designation,
    organization: "", // Empty string as requested
    rating: 5 // Always 5 as requested
  }));
  
  // Use API testimonials if available, otherwise use fallback testimonials
  const finalTestimonials = apiTestimonials.length > 0 ? convertedTestimonials : testimonials;
  
  // If loading, show a loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" color="#963B25" />
      </div>
    );
  }

  // If there's an error, show an error message with a retry button
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorMessage error={error} retry={refetch} />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDF6E9]">
      <style jsx global>{styles}</style>
      <div className="relative">
        {/* Hero Section */}
        <HeroSection slides={slides} />

        {/* Admissions Banner Section */}
        <AdmissionsBanner />

        {/* About Section */}
        <AboutSection 
          notifications={apiNotifications} 
          section_1={section_1} 
          academic_structure={academic_structure}
          departments_activities={departments_activities}
        />

       

        {/* Section 2 Content */}
        {section_2 && (
          <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            {/* Section Header with new design */}
            <div className="mb-16 text-center">
              <div className="inline-block">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                  <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                    Our Heritage
                  </span>
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  A Legacy of Artistic Excellence
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
              </div>
            </div>
            
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image with Founder Info */}
                <div className="flex flex-col items-center">
                  {section_2.image && (
                    <div className="relative mb-8">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-lg z-0"></div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                      <img 
                        src={`${API_BASE_URL}/${section_2.image}`} 
                        alt="College of Fine Arts Heritage" 
                        className="max-w-full h-auto rounded-lg shadow-xl relative z-10 border-4 border-white"
                      />
                    </div>
                  )}
                  
                  {/* Founder Info - Simple Design */}
                  <div className="text-center max-w-md">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mb-4">
                      <span className="text-white font-medium">Founder</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Prof. M. S. Nanjunda Rao
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      Founder Secretary
                    </p>
                    <p className="text-gray-600">
                      Karnataka Chitrakala Parishath
                    </p>
                  </div>
                </div>
                
                {/* Right Side - Content */}
                <div className="prose prose-lg max-w-none">
                  {section_2.content && (
                    <div 
                      className="text-gray-600 space-y-6"
                      dangerouslySetInnerHTML={{ 
                        __html: section_2.content.replace(/<\/p>/g, '</p><div class="h-4"></div>') 
                      }} 
                    />
                  )}
                  
                  <div className="mt-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-1 bg-gradient-to-b from-blue-600 to-amber-500 rounded-full"></div>
                      <p className="text-blue-800 font-medium italic">
                        &ldquo;Art is not what you see, but what you make others see.&rdquo; - Edgar Degas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Solutions Section */}
        <Solutions departments={homeData?.departments} />

        {/* News & Updates Section */}
        <NewsSection newsItems={apiNewsItems} />

        {/* Gallery Section */}
        <GallerySection images={apiGalleryImages} />
        
        {/* Admissions Banner Section */}
        <AdmissionsBanner />
      </div>
    </main>
  );
}