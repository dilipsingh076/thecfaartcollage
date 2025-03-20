'use client';

import Link from 'next/link';

const footerLinks = {
  about: [
    { title: 'About Us', href: '/about' },
    { title: 'History', href: '/about#history' },
    { title: 'Mission & Vision', href: '/about#mission' },
    { title: 'Faculty', href: '/about#faculty' }
  ],
  programs: [
    { title: 'BVA Program', href: '/admission/bva' },
    { title: 'MVA Program', href: '/admission/mva' },
    { title: 'Short Term Courses', href: '/admission/short-term' },
    { title: 'Departments', href: '/departments' }
  ],
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
  ]
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6">College of Fine Arts</h3>
            <p className="text-gray-400 mb-6">
              Empowering artists since 1964. Join our creative community and shape your artistic future.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.about.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4">
              {footerLinks.programs.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-[#FFD700] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} College of Fine Arts. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 