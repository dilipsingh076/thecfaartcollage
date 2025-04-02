'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { departments } from './data';

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://thecfa.art/wp-content/uploads/2022/06/image-004-1080x675.jpg"
            alt="Art Department Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center h-full flex flex-col justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Our Departments
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Pioneering new approaches to fine art teaching and practice-based research
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a href="#departments" className="inline-block bg-[#FFD700] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FFE55C] transition-all duration-300 transform hover:scale-105">
              Explore Departments
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Welcome to The College of Fine Art</h2>
              <div className="w-32 h-1 bg-[#FFD700] mx-auto"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl text-gray-700 leading-relaxed"
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
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Our Departments</h2>
            <div className="w-32 h-1 bg-[#FFD700] mx-auto"></div>
          </motion.div>
          <div className="space-y-40">
            {departments.map((department, index) => (
              <motion.div
                key={department.title}
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
                    <Image
                      src={department.image}
                      alt={department.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                        {department.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xl mb-10">
                      {department.description}
                    </p>
                    <Link
                      href={`/departments/${department.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFE55C] text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Interested in a Department?</h2>
              <div className="w-32 h-1 bg-[#FFD700] mx-auto"></div>
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
    </main>
  );
} 