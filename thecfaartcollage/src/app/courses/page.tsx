'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { courses } from './data';
import { ChitrasantheBanner } from '@/src/components/common';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4 sm:mb-6 lg:mb-8"
            >
              <span className="px-4 sm:px-6 py-2 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm sm:text-base lg:text-lg font-semibold backdrop-blur-sm">
                Discover Your Creative Path
              </span>
            </motion.div> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transform Your Creative Journey
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              Discover our comprehensive range of art programs designed to nurture your artistic talent and develop professional skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.a 
                href="#courses" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#FFD700] text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold hover:bg-[#FFE55C] transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg w-full sm:w-auto text-center"
              >
                Explore Programs
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link 
                  href="/admission" 
                  className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-sm sm:text-base lg:text-lg w-full sm:w-auto text-center"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
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
              <span className="text-[#FFD700] font-semibold text-lg mb-4 block">Welcome to Excellence</span>
              <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Welcome to Our Art Programs</h2>
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
                At The College of Fine Art, we offer a diverse range of programs designed to nurture artistic talent and develop professional skills. Our courses are structured to provide both theoretical knowledge and practical experience, preparing students for successful careers in the arts.
              </p>
              <p>
                Whether you&apos;re just starting your artistic journey or looking to advance your skills, we have a program that suits your needs. Our experienced faculty and state-of-the-art facilities ensure that you receive the best possible education in the visual arts.
              </p>
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
            <span className="text-[#FFD700] font-semibold text-lg mb-4 block">Our Offerings</span>
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Our Programs</h2>
            <div className="w-32 h-1 bg-[#FFD700] mx-auto"></div>
          </motion.div>
          <div className="space-y-40">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
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
                  <div className="relative h-[500px] overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-lg font-medium">Click to learn more about this program</p>
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
                        {course.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-xl mb-6">
                      {course.description}
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <span className="text-[#FFD700] font-semibold block mb-2">Duration</span>
                        <span className="text-gray-700">{course.details.duration}</span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <span className="text-[#FFD700] font-semibold block mb-2">Level</span>
                        <span className="text-gray-700">{course.details.level}</span>
                      </div>
                    </div>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1a1a1a] mb-4">Specializations</h3>
                        <ul className="grid grid-cols-2 gap-3">
                          {course.details.specializations.map((spec, idx) => (
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
                          {course.details.highlights.map((highlight, idx) => (
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
              <span className="text-[#FFD700] font-semibold text-lg mb-4 block">Get in Touch</span>
              <h2 className="text-5xl font-bold text-[#1a1a1a] mb-6">Interested in Our Programs?</h2>
              <div className="w-32 h-1 bg-[#FFD700] mx-auto"></div>
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

      {/* Chitrasanthe Welcome Banner */}
      <ChitrasantheBanner />
    </main>
  );
} 