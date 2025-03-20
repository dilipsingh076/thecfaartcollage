'use client';

import { newsItems } from '@/src/constants/content';
import Link from 'next/link';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Events & Exhibitions
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Stay updated with our latest events, exhibitions, and student showcases
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-[#FFD700] font-semibold mb-2">{item.category}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <div className="text-gray-600 mb-6">{item.date}</div>
                <Link 
                  href={`/events/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="text-[#FFD700] font-semibold mb-2">Exhibition</div>
              <h3 className="text-xl font-bold mb-4">Annual Student Exhibition 2023</h3>
              <div className="text-gray-600 mb-6">December 15, 2023</div>
              <Link 
                href="/events/annual-student-exhibition-2023"
                className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
              >
                View Gallery
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="text-[#FFD700] font-semibold mb-2">Workshop</div>
              <h3 className="text-xl font-bold mb-4">Digital Art Workshop</h3>
              <div className="text-gray-600 mb-6">November 20, 2023</div>
              <Link 
                href="/events/digital-art-workshop"
                className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
              >
                View Details
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <div className="text-[#FFD700] font-semibold mb-2">Lecture Series</div>
              <h3 className="text-xl font-bold mb-4">Contemporary Art Trends</h3>
              <div className="text-gray-600 mb-6">October 10, 2023</div>
              <Link 
                href="/events/contemporary-art-trends"
                className="inline-block px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
              >
                Watch Recording
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates about upcoming events
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