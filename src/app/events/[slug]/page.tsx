'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { getEventBySlug, EventDetailData } from '@/src/services/api/events.service';
import { API_BASE_URL } from '@/src/config/api.config';
import { LoadingSpinner } from '@/src/components/common';

export default function EventDetailPage() {
  const params = useParams();
  const [eventData, setEventData] = useState<EventDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const slug = params.slug as string;
        const response = await getEventBySlug(slug, false);
        console.log("Fetched fresh event data:", response);
        setEventData(response);
      } catch (err: unknown) {
        console.error("Error fetching event details:", err);
        setError('Error fetching event details');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchEventDetails();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </main>
    );
  }

  if (error || !eventData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error || 'Event not found'}</div>
      </div>
    );
  }

  const { banner, events: event } = eventData;
  const heroImage = `${API_BASE_URL}/${banner.banner_img}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
        <Image
          src={heroImage}
          alt={banner.name}
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
            <div className="inline-block px-4 py-1 bg-[#FFD700] text-black font-semibold rounded-full text-sm mb-6">
              {event.category}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {event.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              {event.snippet}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Event Details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Date & Time</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-gray-600 mt-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{event.time}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Venue</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-full rounded-2xl overflow-hidden">
                  <Image
                    src={event.thumbImg}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Event</h2>
                <div className="text-gray-600 space-y-4">
                  {event.description.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 