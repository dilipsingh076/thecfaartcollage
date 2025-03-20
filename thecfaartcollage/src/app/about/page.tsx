'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            About College of Fine Arts
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Established in 1964, we are a premier institution for visual arts education in Bangalore
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Our History</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The College of Fine Arts was established in 1964 under the Karnataka Chitrakala Parishath, 
                  with a vision to provide quality education in visual arts.
                </p>
                <p>
                  Over the years, we have grown into one of the most prestigious art institutions in India, 
                  producing numerous successful artists and professionals in the field of visual arts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To provide comprehensive education in visual arts, fostering creativity, innovation, 
                  and artistic excellence while preserving traditional art forms.
                </p>
                <p>
                  We aim to create an environment that nurtures artistic talent and prepares students 
                  for successful careers in the visual arts industry.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  To be a leading institution in visual arts education, recognized globally for our 
                  commitment to artistic excellence and innovation.
                </p>
                <p>
                  We strive to create a vibrant artistic community that contributes significantly to 
                  the cultural landscape of India and beyond.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFD700]">Address:</span>
                    <span>College of Fine Arts, Karnataka Chitrakala Parishath</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFD700]">Phone:</span>
                    <span>+91 63649 17676</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#FFD700]">Email:</span>
                    <span>thecfaadmission@gmail.com</span>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="block w-full px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 