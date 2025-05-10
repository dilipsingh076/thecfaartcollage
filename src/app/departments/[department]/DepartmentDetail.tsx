import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/src/config/api.config';
import { Banner } from '@/src/types/api';
import { AdmissionsBanner, Hero } from '@/src/components/common';

// Helper function to get complete image URL
const getApiImageUrl = (path: string | null | undefined): string | null => {
  if (!path) return null;
  return path.startsWith('http') ? path : `${API_BASE_URL}/${path}`;
};

interface Faculty {
  name: string;
  designation: string;
  description: string;
  image_url: string;
}

interface DepartmentDetailProps {
  department: {
    name: string;
    slug: string;
    description: string;
    duration: string | null;
    eligibility: string | null;
    image_url: string | null;
    snippet: string;
  };
  faculty?: Faculty[];
  banner?: Banner;
  seo?: {
    title: string;
    keywords: string;
    description: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_image: string;
  };
}

const DepartmentDetail: React.FC<DepartmentDetailProps> = ({
  department,
  banner,
  faculty = []
}) => {
  // Get department image URL
  const departmentImageUrl = department.image_url
    ? (getApiImageUrl(department.image_url) ?? "/images/placeholder-department.jpg")
    : "/images/placeholder-department.jpg";

  // Get banner image URL if available
  const bannerImageUrl = banner?.banner_img
    ? (getApiImageUrl(banner.banner_img) ?? departmentImageUrl)
    : departmentImageUrl;

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero 
        title={department.name}
        imageUrl={bannerImageUrl}
        imageAlt={department.name}
      />

      {/* Main Content */}
     <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mx-auto">
            {/* Department Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
             <div className="mb-16 text-center">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                    <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                      Department
                    </span>
                    <div className="h-[1px] w-12 bg-blue-600"></div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {department.name} Department Overview
                  </h2>
                  <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
                </div>
              </div>   
               
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: department.description }} />
              </div>
            </motion.div>

            {/* Eligibility Section (if available) */}
            {department.eligibility && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Eligibility Criteria</h2>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: department.eligibility }} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>


      
      {/* Faculty Section */}
{faculty.length > 0 && (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">Our Faculty</h2>
        <p className="text-xl text-gray-600">Meet our expert instructors who will guide you through your learning journey</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {faculty.map((member, index) => (
         <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
>
  {/* Image */}
  <div className="w-full h-[400px]">
    <img
      src={getApiImageUrl(member.image_url) || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop'}
      alt={member.name}
      className="object-cover object-top w-full h-full"
    />
  </div>

  {/* Overlay Text */}
  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-4">
    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1 leading-tight">{member.name}</h3>
    <p className="text-[#FFD700] text-sm font-medium mb-1 leading-snug">{member.designation}</p>
    <p className="text-gray-700 text-sm">
      <a href="/faculty/details" className="text-blue-600 hover:underline">Read More</a>
    </p>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  </section>
)}


      {/* Contact Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">Interested in {department.name}?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Contact us to learn more about our programs and admission process
            </p>
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-12 space-y-6 sm:space-y-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-4 text-lg bg-gray-50 py-4 px-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Phone</p>
                    <p className="text-gray-700 font-semibold">+91 63649 17676</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-4 text-lg bg-gray-50 py-4 px-6 rounded-xl"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <p className="text-gray-700 font-semibold">thecfaadmission@gmail.com</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/departments"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore All Departments
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
        
         {/* Admissions Banner Section */}
        <AdmissionsBanner />
      </section>
    </main>
  );
};

export default DepartmentDetail; 