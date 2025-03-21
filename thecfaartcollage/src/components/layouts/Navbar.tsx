'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import { navLinks } from './constant';
import DropdownIcon from '../common/svg/DropdownIcon';
import PhoneIcon from '../common/svg/PhoneIcon';
import ClockIcon from '../common/svg/ClockIcon';
import LocationIcon from '../common/svg/LocationIcon';
import FacebookIcon from '../common/svg/FacebookIcon';
import YoutubeIcon from '../common/svg/YoutubeIcon';
import InstagramIcon from '../common/svg/InstagramIcon';
import TwitterIcon from '../common/svg/TwitterIcon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className={`transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2 text-red-500" />
                <span className={scrolled ? 'text-gray-800' : 'text-white'}>Mon - Fri 8 AM - 5 PM</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2 text-red-500" />
                <span className={scrolled ? 'text-gray-800' : 'text-white'}>+2342 5446 67</span>
              </div>
              <div className="flex items-center">
                <LocationIcon className="w-4 h-4 mr-2 text-red-500" />
                <span className={scrolled ? 'text-gray-800' : 'text-white'}>Greenpoint, Brooklyn</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="#" 
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-red-500 transition-colors`}
              >
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-red-500 transition-colors`}
              >
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-red-500 transition-colors`}
              >
                <YoutubeIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className={`${
                  scrolled ? 'text-gray-800' : 'text-white'
                } hover:text-red-500 transition-colors`}
              >
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled ? 'py-1 bg-white/95 backdrop-blur-sm shadow-sm' : 'py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative group">
                  <Link 
                    href={link.href} 
                    className={`text-base font-medium transition-colors duration-300 ${
                      scrolled 
                        ? 'text-gray-800' 
                        : 'text-gray-800'
                    } hover:text-red-500`}
                    onMouseEnter={() => link.dropdownItems.length > 0 ? setActiveDropdown(index) : undefined}
                    onMouseLeave={() => link.dropdownItems.length > 0 ? setActiveDropdown(null) : undefined}
                  >
                    <span className="flex items-center">
                      {link.name}
                      {link.dropdownItems.length > 0 && (
                        <DropdownIcon className={`ml-1 w-4 h-4 text-gray-800`} />
                      )}
                    </span>
                  </Link>
                  
                  {/* Dropdown menu */}
                  {link.dropdownItems.length > 0 && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50"
                          onMouseEnter={() => setActiveDropdown(index)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-2">
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-500 transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-red-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}