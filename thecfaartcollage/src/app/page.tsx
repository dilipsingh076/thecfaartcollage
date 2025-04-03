'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { awards, galleryImages,  newsItems, notifications, testimonials } from '../constants/homeData';
import { Solutions } from '../components/common/Solutions';

const slides = [
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






const SixtyYearsLogo = () => (
  <svg viewBox="0 0 80 60" className="w-32 mb-8">
    <g>
      {/* Outer Arc - Yellow */}
      <path
        d="M 12 48 A 32 32 0 0 1 64 28"
        fill="none"
        stroke="#F7D675"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Middle Arc - Orange */}
      <path
        d="M 18 50 A 28 28 0 0 1 58 34"
        fill="none"
        stroke="#F4A261"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Inner Arc - Light Blue */}
      <path
        d="M 24 52 A 24 24 0 0 1 52 38"
        fill="none"
        stroke="#90CDF4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Number 60 */}
      <text
        x="38"
        y="44"
        fontSize="18"
        fontWeight="bold"
        fill="#4A5568"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        60
      </text>
      
      {/* Small "YEARS" text */}
      <text
        x="52"
        y="44"
        fontSize="5"
        fill="#4A5568"
      >
        YEARS
      </text>
    </g>
  </svg>
);

const AwardLeafIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="M12 2L9 7L12 9L15 7L12 2Z"
      fill="#F4A261"
      stroke="#F4A261"
    />
    <path
      d="M12 9V20M12 9L6 11M12 9L18 11"
      stroke="#F7D675"
      strokeLinecap="round"
    />
    <path
      d="M6 11C4 14 3 17 3 20H9M18 11C20 14 21 17 21 20H15"
      stroke="#90CDF4"
      strokeLinecap="round"
    />
  </svg>
);

const QuoteIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-12 h-12 opacity-20"
    fill="currentColor"
  >
    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
  </svg>
);

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg relative h-[400px] border border-gray-100">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
      <div className="mb-6 text-gray-400">
        <QuoteIcon />
      </div>
      
      <div className="h-[280px] flex flex-col justify-between relative">
        <div>
          <blockquote 
            className="text-lg text-gray-600 mb-6 transition-all duration-500"
            key={currentIndex}
          >
            {testimonials[currentIndex].quote}
          </blockquote>
        </div>
        
        <div className="mt-auto relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {testimonials[currentIndex].author[0]}
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {testimonials[currentIndex].author}
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[currentIndex].position}, {testimonials[currentIndex].organization}
              </div>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // const handleScroll = () => {
    //   setScrolled(window.scrollY > 50);
    // };

    // window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#FDF6E9]">
      <style jsx global>{styles}</style>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen lg:h-[90vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image without dark overlay */}
              <div className="flex relative h-full">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Content section - removed dark overlay div */}
                <div className="relative z-10 h-full w-full flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center justify-around">
                      {/* Left Content */}
                      <div className="max-w-xl text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                          {slide.heroTitle}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-medium mb-6">
                          {slide.heroDescription}
                        </p>
                        <div className="mt-8">
                          <button className="bg-[#963B25] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#7b2e1d] transition-colors duration-300 text-sm sm:text-base">
                            Learn More
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Content - Circle Image */}
                      <div className="relative flex items-center justify-center lg:justify-end mt-[25px] lg:mt-0">
                        {slide.circleContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Admissions Banner Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-4 sm:py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  Admissions Open 2024-2025
                </h2>
                <p className="text-white/90 text-sm sm:text-base md:text-lg">
                  Join our prestigious art programs
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                <Link
                  href="/admission"
                  className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 font-semibold rounded-full hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center text-xs sm:text-sm md:text-base w-full sm:w-auto"
                >
                  Download BVA Prospectus & Application Form
                </Link>
                <div className="hidden md:flex flex-col items-center bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-8 grid-rows-8 gap-0.5 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                    {Array(64).fill(null).map((_, index) => (
                      <div
                        key={index}
                        className={`w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 ${
                          Math.random() > 0.5 ? 'bg-blue-900' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-blue-900 font-medium">Scan QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* After Admissions Banner Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Logo and Content */}
              <div>
                <div className="flex gap-6 mb-8">
                  <SixtyYearsLogo />
                  <div className="space-y-1 self-center">
                    <h2 className="text-2xl font-bold text-[#38B2AC]">
                      ARTISTIC EXCELLENCE
                    </h2>
                    <p className="text-lg text-[#38B2AC] font-medium tracking-wide">
                      CULTIVATING STUDENT CREATIVITY
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <div className="text-justify space-y-4">
                    <p>
                      The College of Fine Arts has a rich history dating back to 1964 when it was initially established as Chitrakala Vidyalaya under the guidance of Karnataka Chitrakala Parishath. It owes its establishment to Sri M Aryamurthy the Founder President, and led by the visionary leadership of Prof. M.S. Nanjunda Rao, appointed as the Founder Secretary and first Principal. Sri S. S Kukke briefly assumed the role of Principal during the early stages.
                    </p>
                    <p>
                      In 1983, CFA was elevated to the status of a degree college, offering undergraduate programs. It further expanded its offerings in 1990 to include postgraduate and post-diploma courses. Today, College of Fine Arts stands as a testament to the enduring legacy of its founders and its vibrant community of faculty, staff, students, and alumni in shaping the institution into a renowned center of Artistic excellence.
                    </p>
                    <p>
                      The College of Fine Arts, Karnataka Chitrakala Parishath, is affiliated with Bangalore University and offers undergraduate and postgraduate programs in Visual Arts. The Bachelor of Visual Arts (BVA) is a comprehensive 4-year program spanning 8 semesters, including 2 semesters of foundational studies and 6 semesters of specialization. The Master of Visual Arts (MVA) is a 2-year program divided into 4 semesters, designed for advanced study and research in Visual arts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Notifications Slider */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-[600px]">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 px-6 z-10">
                  <h3 className="text-2xl font-bold">Latest Updates</h3>
                </div>
                
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white z-[5]"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white z-[5]"></div>
                
                <div className="pt-20 pb-6 px-6 h-full overflow-hidden">
                  <div className="space-y-4 animate-scroll">
                    {[...notifications, ...notifications].map((notification, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 rounded-lg border-l-4 border-amber-500 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-lg text-gray-900">
                            {notification.title}
                          </h4>
                          <span className="text-sm text-blue-600 font-medium">
                            {notification.date}
                          </span>
                        </div>
                        <p className="text-gray-600">{notification.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Structure and Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Academic Structure</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>B.V.A - 4 years (8 semesters)
                    <ul className="pl-6 mt-1 space-y-1 text-gray-500">
                      <li>• 2 Semesters of Foundation</li>
                      <li>• 6 Semesters of Specialization</li>
                    </ul>
                  </li>
                  <li>M.V.A - 2 years (4 semesters)</li>
                  <li>Certificate Courses - 6 months
                    <ul className="pl-6 mt-1 space-y-1 text-gray-500">
                      <li>• Drawing</li>
                      <li>• Painting</li>
                      <li>• Sculpture</li>
                      <li>• Printmaking</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Departments & Activities</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600">
                      <li>• Painting</li>
                      <li>• Printmaking</li>
                      <li>• Art History</li>
                      <li>• Animation</li>
                    </ul>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Sculpture</li>
                      <li>• Applied Art</li>
                      <li>• Ceramics</li>
                    </ul>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Each department organizes frequent educational excursions that encompass visits to historical monuments, art galleries, museums and industries/corporate sectors. Additionally, students undertake project assignments for internal assessment and internships as part of their academic experience.
                  </p>
                  <p className="text-gray-600">
                    Distinguished visiting scholars, artists and industry experts are regularly invited to engage with students, sharing their insights and expertise through lectures, demonstrations and workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Achievements Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background Design Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            {/* Section Header with new design */}
            <div className="mb-16 text-center">
              <div className="inline-block">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                  <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                    Digital Experience
                  </span>
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Awards & Achievements
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Awards Grid - 7 columns */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group border border-gray-100"
                  >
                    <div className="absolute top-6 right-6 text-amber-500 transform group-hover:rotate-12 transition-transform duration-300">
                      <AwardLeafIcon />
                    </div>
                    <div className="pr-12">
                      <div className="text-sm text-blue-600 font-medium mb-2">{award.year}</div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {award.title}
                      </h3>
                      <p className="text-sm text-gray-500">{award.provider}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-amber-500 group-hover:w-full transition-all duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Testimonial Carousel - 5 columns */}
              <div className="lg:col-span-5">
                <TestimonialCarousel />
              </div>
            </div>
          </div>
        </section>



        <Solutions/>

        {/* Features Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose CFA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Departments Section */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((department) => (
                <Link
                  key={department.title}
                  href={department.link}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors">
                    {department.title}
                  </h3>
                  <p className="text-gray-600">{department.description}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/departments"
                className="inline-block px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
              >
                View All Departments
              </Link>
            </div>
          </div>
        </section> */}

        {/* News & Updates Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news) => (
                <div key={news.title} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold mb-4">{news.title}</h3>
                  <p className="text-gray-600 mb-6">{news.description}</p>
                  <Link
                    href={news.link}
                    className="text-[#FFD700] font-semibold hover:text-[#FFC000] transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Gallery Section */}
<section className="py-20 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <div className="mb-16 text-center">
      <div className="inline-block">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="h-[1px] w-12 bg-blue-600"></div>
          <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
            Our Gallery
          </span>
          <div className="h-[1px] w-12 bg-blue-600"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Campus Life & Activities
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
      </div>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryImages.map((image) => (
        <div 
          key={image.id}
          className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="relative w-full h-full">
            <Image
              src={image.imageUrl}
              alt={image.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority={image.id <= 3} // Prioritize loading first 3 images
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block px-3 py-1 bg-amber-400/90 text-black text-sm font-medium rounded-full mb-3">
                {image.category}
              </span>
              <h3 className="text-white text-xl font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="text-center mt-12">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
      >
        View Full Gallery
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </Link>
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-12">
                Have questions about our programs? Our admission team is here to help.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">Phone:</span> +91 1234567890
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span> admission@thecfa.art
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Address:</span> 123 Art Street, Creative City, 12345
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Chitrasanthe Welcome Banner */}
        <section className="py-12 bg-[#963B25] relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center text-white space-y-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  Welcomes you to 22nd chitrasanthe, to be held on{' '}
                  <span className="block mt-1">
                    Sunday, 05.01.2025
                  </span>
                </h2>
              </div>
              
              <Link
                href="/registration"
                className="inline-block px-6 py-3 bg-[#FFC107] text-black font-bold text-lg rounded-lg hover:bg-[#FFD54F] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Artist Registration
              </Link>
            </div>
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}></div>
          </div>
        </section>
      </div>
    </main>
  );
}