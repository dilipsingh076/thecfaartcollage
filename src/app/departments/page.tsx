'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AdmissionsBanner, LoadingSpinner, ErrorMessage, Hero } from '@/src/components/common';
import { MDXProvider } from '@mdx-js/react';
import { processMarkdownContent } from '@/src/utils/content.utils';
import { API_BASE_URL } from '@/src/config/api.config';
import { useDepartmentsData } from '@/src/hooks/useDepartmentsData';

// Helper function to get complete image URL
const getApiImageUrl = (path: string | null | undefined): string | null => {
  if (!path) return null;
  return path.startsWith('http') ? path : `${API_BASE_URL}/${path}`;
};

export default function DepartmentsPage() {
  // Use the departments hook to fetch data from /departments endpoint
  const { data, isLoading, error, refetch } = useDepartmentsData();
  console.log("check deparmetnds data", data);

  // If loading, show a loading spinner
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
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
  // const heroImage = `${API_BASE_URL}/${aboutData?.banner?.banner_img}`

  return (
    <MDXProvider>
      <main className="min-h-screen bg-gray-50">
        <Hero 
          title={data?.banner?.name}
          subtitle={data?.banner?.banner_txt}
          imageUrl={`${API_BASE_URL}/${data?.banner?.banner_img}`}
          imageAlt="Art Department Hero"
        />

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
                <div className="mb-16 text-center">
                  <div className="inline-block">
                    <div className="flex items-center gap-3 mb-4 justify-center">
                      <div className="h-[1px] w-12 bg-blue-600"></div>
                      <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                        Welcome
                      </span>
                      <div className="h-[1px] w-12 bg-blue-600"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                     Shaping the Future of Creative Practice
                    </h2>
                    <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8 text-gray-700 leading-relaxed"
              >
                  <p>
                    The College Of Fine Art has a leading reputation internationally attracting students from all over the world. The departments of The college of fine arts pioneers in new approaches to fine art teaching and practice-based research. The cosmopolitan nature of the student body and the thriving intellectual culture of the department together provide many and various opportunities to develop cross-cultural collaborations within the field.
                  </p>
                <p>
                  In addition to taught programmes at undergraduate and postgraduate level, the department continues to develop a thriving PhD programme. We promote the making and understanding of contemporary art through practical and critical engagement between staff, students and the professional art world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section id="departments" className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Discover
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our Departments
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
            </motion.div>
            
            {data?.departments && (
              <div className="space-y-40">
                {data.departments.map((department, index) => {
                  // Get department image URL
                  const departmentImageUrl = 'image' in department && department.image ? (getApiImageUrl(department?.image) ?? "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop")
                    : "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop";
                  console.log("check department image", departmentImageUrl);
                  return (
                    <motion.div
                      key={department.name}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                      className={`flex flex-col ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-white to-[#FFD700]/5 transition-all duration-500`}
                    >
                      {/* Image Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] overflow-hidden">
                          <img
                            src={departmentImageUrl}
                            alt={department.name}
                            className="object-cover w-full h-full brightness-100 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                              {department.name}
                            </h2>
                          </div>
                          <div className="text-gray-600 leading-relaxed mb-10">
                            {department.snippet ? (
                              <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(department.snippet) }} />
                            ) : (
                              <p>No description available for this department.</p>
                            )}
                          </div>
                          <Link
                            href={`/departments/${department.slug}`}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            More Details
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
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
              <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Get in Touch
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Interested in a Department?
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>
              <p className="text-2xl text-gray-600 mb-16">
                Contact us to learn more about our departments and programs
              </p>
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 text-xl"
                >
                  <span className="text-[#FFD700] font-semibold">Phone:</span>
                  <span className="text-gray-700">+91 63649 17676</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-6 text-xl"
                >
                  <span className="text-[#FFD700] font-semibold">Email:</span>
                  <span className="text-gray-700">thecfaadmission@gmail.com</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
       {/* Admissions Banner Section */}
        <AdmissionsBanner />
      </main>
    </MDXProvider>
  );
} 