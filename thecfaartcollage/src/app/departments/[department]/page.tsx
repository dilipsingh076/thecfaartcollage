'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { departments } from '../data';

export default function DepartmentPage() {
  const params = useParams();
  const department = departments.find(d => d.slug === params.department);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <Link href="/departments" className="text-[#FFD700] hover:text-[#FFE55C] transition-colors">
            Return to Departments
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Department Hero */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={department.image}
            alt={department.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            {department.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            {department.description}
          </motion.p>
        </div>
      </section>

      {/* Department Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Course Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Course Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Duration</h3>
                    <p className="text-gray-600">{department.details.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFD700] mb-2">Level</h3>
                    <p className="text-gray-600">{department.details.level}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#FFD700] mb-4">Courses Offered</h3>
                    <ul className="space-y-2">
                      {department.details.courses.map((course, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#FFD700]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h2 className="text-3xl font-bold mb-8 text-[#1a1a1a]">Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {department.details.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8">Interested in {department.title}?</h2>
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}