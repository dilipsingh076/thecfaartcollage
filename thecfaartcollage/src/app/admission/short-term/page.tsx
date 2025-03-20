'use client';

import Link from 'next/link';

const courses = [
  {
    title: 'Drawing Fundamentals',
    description: 'Learn the basics of drawing with focus on perspective, shading, and composition',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹15,000',
    link: '/admission/short-term/drawing'
  },
  {
    title: 'Painting Techniques',
    description: 'Explore various painting mediums including watercolor, acrylic, and oil',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹20,000',
    link: '/admission/short-term/painting'
  },
  {
    title: 'Sculpture Basics',
    description: 'Introduction to three-dimensional art with clay modeling and basic sculpting',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹25,000',
    link: '/admission/short-term/sculpture'
  },
  {
    title: 'Digital Art',
    description: 'Learn digital art creation using industry-standard software',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹30,000',
    link: '/admission/short-term/digital-art'
  },
  {
    title: 'Printmaking',
    description: 'Explore various printmaking techniques including etching and screen printing',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹25,000',
    link: '/admission/short-term/printmaking'
  },
  {
    title: 'Art History',
    description: 'Comprehensive overview of art history from ancient to contemporary times',
    duration: '3 months',
    schedule: 'Weekends',
    fee: '₹15,000',
    link: '/admission/short-term/art-history'
  }
];

export default function ShortTermCoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Short Term Courses
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Enhance your artistic skills with our specialized short-term courses
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.title} className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Duration:</span> {course.duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Schedule:</span> {course.schedule}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Fee:</span> {course.fee}
                  </p>
                </div>
                <Link
                  href={course.link}
                  className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
            <p className="text-gray-600 mb-8">
              Contact us for more information about our short-term courses and enrollment process.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91 1234567890
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> courses@thecfa.art
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 