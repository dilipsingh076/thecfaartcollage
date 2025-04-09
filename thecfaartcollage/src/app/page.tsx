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

// const TestimonialCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   const prevTestimonial = useCallback(() => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextTestimonial();
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [nextTestimonial]);

//   return (
//     <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg relative h-[400px] border border-gray-100">
//       <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
//       <div className="mb-6 text-gray-400">
//         <QuoteIcon />
//       </div>
      
//       <div className="h-[280px] flex flex-col justify-between relative">
//         <div>
//           <blockquote 
//             className="text-lg text-gray-600 mb-6 transition-all duration-500"
//             key={currentIndex}
//           >
//             {testimonials[currentIndex].quote}
//           </blockquote>
//         </div>
        
//         <div className="mt-auto relative">
//           <div className="flex items-center gap-4">
//             <div className="flex-shrink-0">
//               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
//                 <span className="text-white font-bold text-lg">
//                   {testimonials[currentIndex].author[0]}
//                 </span>
//               </div>
//             </div>
//             <div>
//               <div className="font-semibold text-gray-900">
//                 {testimonials[currentIndex].author}
//               </div>
//               <div className="text-sm text-gray-500">
//                 {testimonials[currentIndex].position}, {testimonials[currentIndex].organization}
//               </div>
//               <div className="flex items-center gap-1 mt-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className="w-4 h-4 text-amber-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute bottom-8 right-8 flex gap-2">
//         <button 
//           onClick={prevTestimonial}
//           className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
//           aria-label="Previous testimonial"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <button 
//           onClick={nextTestimonial}
//           className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
//           aria-label="Next testimonial"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// interface DepartmentContent {
//   title: string;
//   subtitle: string;
//   description: string;
// }

// interface Department {
//   id: number;
//   title: string;
//   heading: string;
//   content: DepartmentContent;
//   icon: React.ReactNode;
// }


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
        <AboutSection notifications={apiNotifications} />

        {/* Awards & Achievements Section */}
        <AwardsSection awards={awards} testimonials={testimonials} />

        {/* Solutions Section */}
        <Solutions />

        {/* News & Updates Section */}
        <NewsSection newsItems={apiNewsItems} />

        {/* Gallery Section */}
        <GallerySection images={apiGalleryImages} />

        {/* Contact Section */}
        {/* <ContactSection /> */}
        
        {/* Chitrasanthe Welcome Banner */}
        <ChitrasantheBanner />
      </div>
    </main>
  );
}