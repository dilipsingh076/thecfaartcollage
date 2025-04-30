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
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={department.image}
            alt={department.title}
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
              {department.title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 line-clamp-3">
              {department.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-[#FFD700] font-semibold">Duration:</span>
                <span className="text-white ml-2">{department.details.duration}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-[#FFD700] font-semibold">Level:</span>
                <span className="text-white ml-2">{department.details.level}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-[#FFD700] font-semibold">Courses:</span>
                <span className="text-white ml-2">{department.details.courses.length}</span>
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
              {/* Courses */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Courses Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {department.details.courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full"></span>
                      </div>
                      <span className="text-gray-600">{course}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {department.details.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{facility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Career Options */}
              {department.details.careerOptions && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Career Options</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {department.details.careerOptions.map((career, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-8 h-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{career}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Faculty */}
              {department.details.faculty && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Faculty</h2>
                  <div className="space-y-4">
                    {department.details.faculty.map((faculty, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{faculty.name}</h3>
                        <p className="text-gray-600 font-medium mb-2">{faculty.position}</p>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{faculty.bio}</p>
                        {faculty.email && (
                          <a href={`mailto:${faculty.email}`} className="text-[#FFD700] hover:text-[#FFE55C] transition-colors text-sm">
                            {faculty.email}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Workshops & Events */}
      {(department.details.workshops || department.details.events) && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Workshops */}
              {department.details.workshops && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Workshops</h2>
                  <div className="space-y-4">
                    {department.details.workshops.map((workshop, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{workshop.title}</h3>
                        <p className="text-gray-600 mb-2">{workshop.date}</p>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{workshop.description}</p>
                        {workshop.participants && (
                          <p className="text-gray-600 text-sm">Participants: {workshop.participants}</p>
                        )}
                        {workshop.faculty && (
                          <div className="mt-3">
                            <p className="text-gray-600 text-sm font-medium">Faculty:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm">
                              {workshop.faculty.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Events */}
              {department.details.events && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Events</h2>
                  <div className="space-y-4">
                    {department.details.events.map((event, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
                        <h3 className="text-xl font-semibold text-[#FFD700] mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.date}</p>
                        <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

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