'use client';

import Link from 'next/link';

const departments = [
  {
    title: 'BVA Foundation',
    description: 'Foundation studies in visual arts for first-year students',
    link: '/departments/bva-foundation'
  },
  {
    title: 'Painting',
    description: 'Explore various painting techniques and styles',
    link: '/departments/painting'
  },
  {
    title: 'Sculpture',
    description: 'Learn three-dimensional art forms and techniques',
    link: '/departments/sculpture'
  },
  {
    title: 'Graphic Art',
    description: 'Digital and traditional graphic design',
    link: '/departments/graphic-art'
  },
  {
    title: 'Applied Art',
    description: 'Commercial and applied art practices',
    link: '/departments/applied-art'
  },
  {
    title: 'Art History',
    description: 'Study of art history and theory',
    link: '/departments/art-history'
  },
  {
    title: 'Animation',
    description: 'Digital animation and motion graphics',
    link: '/departments/animation'
  },
  {
    title: 'Ceramics',
    description: 'Ceramic art and pottery',
    link: '/departments/ceramics'
  }
];

export default function DepartmentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Our Departments
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Explore our diverse range of art departments and find your creative path
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department) => (
              <Link
                key={department.title}
                href={department.link}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors">
                  {department.title}
                </h2>
                <p className="text-gray-600">
                  {department.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in a Department?</h2>
            <p className="text-gray-600 mb-8">
              Contact us to learn more about our departments and programs
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#FFD700]">Phone:</span>
                <span>+91 63649 17676</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-[#FFD700]">Email:</span>
                <span>thecfaadmission@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 