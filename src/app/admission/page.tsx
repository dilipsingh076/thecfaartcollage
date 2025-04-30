'use client';

import Link from 'next/link';

const programs = [
  {
    title: 'Bachelor of Visual Arts (BVA)',
    description: 'A comprehensive 4-year program in visual arts',
    link: '/admission/bva',
    duration: '4 years',
    eligibility: '10+2 or equivalent'
  },
  {
    title: 'Master of Visual Arts (MVA)',
    description: 'Advanced studies in visual arts and research',
    link: '/admission/mva',
    duration: '2 years',
    eligibility: 'BVA or equivalent'
  },
  {
    title: 'Short Term Courses',
    description: 'Specialized courses for skill development',
    link: '/admission/short-term',
    duration: '3-6 months',
    eligibility: 'Open to all'
  }
];

export default function AdmissionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Admission 2024-25
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Join our creative community and begin your artistic journey
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Duration:</span> {program.duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Eligibility:</span> {program.eligibility}
                  </p>
                </div>
                <Link
                  href={program.link}
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
              Our admission team is here to help you with any questions about our programs.
              Contact us for assistance with the application process.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +91 1234567890
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> admission@thecfa.art
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 