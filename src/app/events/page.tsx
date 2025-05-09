'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChitrasantheBanner, LoadingSpinner } from '@/src/components/common';
import { getEventsData, EventsData } from '@/src/services/api/events.service';
import { API_BASE_URL } from '@/src/config/api.config';

export default function EventsPage() {
  const [eventsData, setEventsData] = useState<EventsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getEventsData();
        setEventsData(response);
      } catch (err: unknown) {
        console.error("Error fetching events:", err);
        setError('Error fetching events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </main>
    );
  }

  if (error || !eventsData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error || 'Failed to load events'}</div>
      </div>
    );
  }
  const heroImage = `${API_BASE_URL}/${eventsData?.banner?.banner_img}`


  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
          <Image
            src={heroImage}
            alt={eventsData?.banner?.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/40 via-black/60 to-black/80" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full flex items-center justify-center px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                {eventsData?.banner?.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
                {eventsData?.banner?.banner_txt}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full text-sm mb-4">
                Our Events
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Upcoming & Past Events
              </h2>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {eventsData?.events?.map((event, index) => (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={event.thumbImg}
                        alt={event.title}
                        fill
                        className="object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="inline-block px-4 py-1 bg-[#FFD700] text-black font-semibold rounded-full text-sm">
                          {event.category}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#FFD700] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.snippet}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {event.date}
                        </div>
                        {event.time && (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {event.time}
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.venue}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-12">
                Subscribe to our newsletter to receive updates about upcoming events
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD700] transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-all duration-300 transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Chitrasanthe Welcome Banner */}
        <ChitrasantheBanner />
      </main>
    </>
  );
}