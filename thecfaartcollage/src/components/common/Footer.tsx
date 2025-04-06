'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Phone, ExternalLink } from 'lucide-react';

const footerLinks = {
  about: [
    { title: 'About Us', href: '/about' },
    { title: 'History', href: '/about#history' },
    { title: 'Mission & Vision', href: '/about#mission' },
    { title: 'Faculty', href: '/about#faculty' }
  ],
  // Commented out programs section as requested
  /* programs: [
    { title: 'BVA Program', href: '/admission/bva' },
    { title: 'MVA Program', href: '/admission/mva' },
    { title: 'Short Term Courses', href: '/admission/short-term' },
    { title: 'Departments', href: '/departments' }
  ], */
  resources: [
    { title: 'Events', href: '/events' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'News & Updates', href: '/news' },
    { title: 'Contact Us', href: '/contact' }
  ],
  support: [
    { title: 'Admission Help', href: '/admission#help' },
    { title: 'FAQs', href: '/faqs' },
    { title: 'Student Portal', href: '/portal' },
    { title: 'Alumni', href: '/alumni' }
  ],
  contact: {
    name: 'College of Fine Arts',
    address: '123 Art Avenue, Creative District',
    city: 'City, State 12345',
    phone: '(123) 456-7890',
    email: 'info@collegeoffinearts.edu',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1511819430982'
  },
  social: [
    { name: 'Facebook', Icon: Facebook, url: 'https://facebook.com' },
    { name: 'Instagram', Icon: Instagram, url: 'https://instagram.com' },
    { name: 'YouTube', Icon: Youtube, url: 'https://youtube.com' },
    { name: 'Twitter', Icon: Twitter, url: 'https://twitter.com' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Section: About & Quick Links */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* About Section */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 relative pb-2">
                College of Fine Arts
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></span>
              </h3>
              <div className="text-gray-400 text-sm sm:text-base mb-4">
                <p>{footerLinks.contact.address}</p>
                <p>{footerLinks.contact.city}</p>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Empowering artists since 1964. Join our creative community and shape your artistic future.
              </p>
              <div className="text-gray-400 space-y-4 text-sm sm:text-base mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="text-[#FFD700] flex-shrink-0 h-5 w-5" />
                  <p>{footerLinks.contact.phone}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                {footerLinks.social.map(({ name, Icon, url }) => (
                  <a 
                    key={name}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition-all duration-300 bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] transform hover:scale-110"
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 relative pb-2">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></span>
              </h3>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base">
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Contact & Resources */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Map Section */}
            <div className="space-y-6 sm:col-span-2">
              <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg border border-gray-800">
                <iframe 
                  src={footerLinks.contact.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College of Fine Arts Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 relative pb-2">
                Resources
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500]"></span>
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group text-sm sm:text-base">
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} College of Fine Arts. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm">
                Sitemap
              </Link>
              <a 
                href="https://samvridhi.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-all duration-300 text-xs sm:text-sm flex items-center group"
              >
                Powered by <span className="font-semibold ml-1 group-hover:text-[#FFD700]">Samvridhi</span>
                <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 