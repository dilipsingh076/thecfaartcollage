'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AdmissionsBanner, ErrorMessage, LoadingSpinner } from '@/src/components/common';
import { API_BASE_URL } from '@/src/config/api.config';
import { useCoursesData } from '@/src/hooks';
import { MDXProvider } from '@mdx-js/react';
import { processMarkdownContent } from '@/src/utils/content.utils';

// Helper function to safely construct API image URL
const getApiImageUrl = (path: string | null | undefined): string | null => {
  if (!path || !API_BASE_URL) return null;
  return `${API_BASE_URL}/${path}`;
};

export default function CoursesPage() {
  const { data: coursesData, isLoading, error, refetch } = useCoursesData();
  
  // Use API data if available, otherwise show loading or error state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </main>
    );
  }
  
  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage 
          error={error}
          retry={refetch}
        />
      </main>
    );
  }
  
  if (!coursesData) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <ErrorMessage 
          error={new Error("No courses data available")}
          retry={refetch}
        />
      </main>
    );
  }
  
  // Get banner image URL
  const bannerImageUrl = getApiImageUrl(coursesData.banner.banner_img) || 
    "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
  
  return (
    <MDXProvider>
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={bannerImageUrl}
              alt="Art Courses Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
                {coursesData.banner.name || "Transform Your Creative Journey"}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl sm:max-w-3xl mx-auto px-4">
              {coursesData.banner.banner_txt || "Discover our comprehensive range of art programs designed to nurture your artistic talent and develop professional skills"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Welcome to Excellence
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Welcome to Our Art Programs
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 text-xl text-gray-700 leading-relaxed"
              >
                {coursesData.section_1?.content && (
                  <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(coursesData.section_1.content) }} />
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-block">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                  <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                    Our Offerings
                  </span>
                  <div className="h-[1px] w-12 bg-blue-600"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Programs
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
              </div>
            </motion.div>
            <div className="space-y-40">
              {coursesData.courses.map((course, index) => {
                // Get course image URL
                const courseImageUrl = getApiImageUrl(course?.image_url) || 
                  "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80";
                return (
                  <motion.div
                    key={course.slug}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-[#FFD700]/5 transition-all duration-500 shadow-xl hover:shadow-2xl`}
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative h-full min-h-[500px] overflow-hidden">
                        <img
                          src={courseImageUrl}
                          alt={course.name}
                          className="object-cover w-full h-full"
                        />
                        {/* Duration Badge */}
                        <div className="absolute top-6 right-6 bg-[#FFD700] text-black px-4 py-2 rounded-full font-semibold shadow-lg">
                          {course.duration || "Duration: 2 Years"}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 p-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/10 flex items-center justify-center">
                            <span className="text-2xl font-bold text-[#FFD700]">{index + 1}</span>
                          </div>
                          <h2 className="text-4xl font-bold text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors duration-300">
                            {course.name}
                          </h2>
                        </div>
                        <div className="text-gray-600 leading-relaxed text-xl mb-6">
                          {course.snippet ? (
                            <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(course.snippet) }} />
                          ) : (
                            <p>No description available for this course.</p>
                          )}
                        </div>
                        <div className="space-y-6 mb-8">
                          <div>
                            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Specializations</h3>
                            <ul className="grid grid-cols-2 gap-3">
                              {course.specializations.map((spec, idx) => (
                                <li key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                  <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                                  <span className="text-gray-700">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Highlights</h3>
                            <ul className="grid grid-cols-2 gap-3">
                              {course.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                                  <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="text-gray-700">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href={`/courses/${course.slug}`}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            Learn More
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="text-center mb-20">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Get in Touch
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Interested in Our Programs?
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <p className="text-2xl text-gray-600 mb-16">
                Contact us to learn more about our courses and admission process
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-[#FFD700] font-semibold text-xl">Phone</span>
                  </div>
                  <span className="text-gray-700 text-xl">+91 63649 17676</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[#FFD700] font-semibold text-xl">Email</span>
                  </div>
                  <span className="text-gray-700 text-xl">thecfaadmission@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AdmissionsBanner Welcome Banner */}
        <AdmissionsBanner />
      </main>
    </MDXProvider>
  );
} 