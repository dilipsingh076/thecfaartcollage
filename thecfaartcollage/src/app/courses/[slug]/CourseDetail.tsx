import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { processMarkdownContent } from '@/src/utils/content.utils';
import { API_BASE_URL } from '@/src/config/api.config';

// Helper function to safely construct API image URL
const getApiImageUrl = (path: string | null | undefined): string | null => {
  if (!path || !API_BASE_URL) return null;
  return `${API_BASE_URL}/${path}`;
};

interface CourseDetailProps {
  course: {
    name: string;
    slug: string;
    image_url?: string;
    duration?: string;
    snippet?: string;
    content?: string;
    description?: string;
    eligibility?: string;
    specializations: string[];
    highlights: string[];
  };
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  // Get course image URL
  const courseImageUrl = course.image_url 
    ? (getApiImageUrl(course.image_url) ?? "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop")
    : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Course Hero - Simplified */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={courseImageUrl}
            alt={course.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {course.name}
            </h1>
            <div className="flex items-center gap-4">
              <div className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-semibold shadow-lg">
                {course.duration || "2 Years"}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Course Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Course Overview</h2>
                <div className="prose prose-lg max-w-none">
                  {course.description ? (
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(course.description) }} />
                  ) : course.snippet ? (
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(course.snippet) }} />
                  ) : (
                    <p className="text-gray-600">No description available for this course.</p>
                  )}
                </div>
              </motion.div>

              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.specializations.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      </div>
                      <span className="text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Eligibility */}
              {course.eligibility && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Eligibility Criteria</h2>
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(course.eligibility) }} />
                  </div>
                </motion.div>
              )}

              {/* Course Highlights */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Course Highlights</h2>
                <div className="grid grid-cols-1 gap-4">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">Interested in {course.name}?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact us to learn more about our programs and admission process
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="text-[#FFD700] font-semibold">Phone:</span>
                <span className="text-gray-700">+91 63649 17676</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-lg">
                <span className="text-[#FFD700] font-semibold">Email:</span>
                <span className="text-gray-700">thecfaadmission@gmail.com</span>
              </div>
            </div>
            <div className="mt-12">
              <Link 
                href="/courses"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Back to All Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetail; 