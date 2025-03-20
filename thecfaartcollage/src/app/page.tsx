'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import TriangleCarousel from '../components/common/TriangleCarousel';
import ArtImage from '../components/common/ArtImage';


const slides = [
  {
    title: 'Master the Art of Drawing',
    description: 'Develop your drawing skills with expert guidance and practice',
    variant: 'primary',
    heroTitle: 'Master the Art of Drawing',
    heroDescription: 'Develop your drawing skills with expert guidance and practice',
    imageUrl: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Explore Sculpture',
    description: 'Create three-dimensional masterpieces with our sculpture program',
    variant: 'secondary',
    heroTitle: 'Explore Sculpture',
    heroDescription: 'Create three-dimensional masterpieces with our sculpture program',
    imageUrl: 'https://tabula.bold-themes.com/sunny/wp-content/uploads/sites/2/2019/03/hero_home_01.jpg'
  },
  {
    title: 'Digital Art & Animation',
    description: 'Learn modern digital art techniques and animation',
    variant: 'tertiary',
    heroTitle: 'Digital Art & Animation',
    heroDescription: 'Learn modern digital art techniques and animation',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2070&auto=format&fit=crop'
  }
];

const features = [
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced artists and educators who are leaders in their fields',
    icon: '🎨'
  },
  {
    title: 'Modern Facilities',
    description: 'Access state-of-the-art studios, workshops, and digital labs',
    icon: '🏛️'
  },
  {
    title: 'Industry Connections',
    description: 'Connect with art galleries, museums, and creative industries',
    icon: '🤝'
  },
  {
    title: 'Creative Environment',
    description: 'Immerse yourself in a vibrant artistic community',
    icon: '✨'
  }
];

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
  }
];

const newsItems = [
  {
    title: 'Admissions Open for 2024-25',
    date: 'March 15, 2024',
    description: 'Apply now for our BVA and MVA programs. Limited seats available.',
    link: '/admission'
  },
  {
    title: 'Annual Art Exhibition',
    date: 'April 5, 2024',
    description: 'Join us for our annual student art exhibition showcasing creative excellence.',
    link: '/events'
  },
  {
    title: 'New Digital Art Lab',
    date: 'March 1, 2024',
    description: 'State-of-the-art digital art lab now open for students.',
    link: '/departments/graphic-art'
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <ArtImage
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {slides[currentSlide].heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {slides[currentSlide].heroDescription}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/admission"
                  className="px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/departments"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Explore Programs
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <TriangleCarousel currentSlide={currentSlide} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose CFA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department) => (
              <Link
                key={department.title}
                href={department.link}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-[#FFD700] transition-colors">
                  {department.title}
                </h3>
                <p className="text-gray-600">{department.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/departments"
              className="inline-block px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-full hover:bg-[#FFC000] transition-colors"
            >
              View All Departments
            </Link>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">News & Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div key={news.title} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="text-xl font-bold mb-4">{news.title}</h3>
                <p className="text-gray-600 mb-6">{news.description}</p>
                <Link
                  href={news.link}
                  className="text-[#FFD700] font-semibold hover:text-[#FFC000] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              Have questions about our programs? Our admission team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Phone:</span> +91 1234567890
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span> admission@thecfa.art
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Address:</span> 123 Art Street, Creative City, 12345
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Sunday:</span> Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}