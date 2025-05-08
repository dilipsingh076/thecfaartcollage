'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import DropdownIcon from '../common/svg/DropdownIcon';
import PhoneIcon from '../common/svg/PhoneIcon';
import ClockIcon from '../common/svg/ClockIcon';
import LocationIcon from '../common/svg/LocationIcon';
import FacebookIcon from '../common/svg/FacebookIcon';
import YoutubeIcon from '../common/svg/YoutubeIcon';
import InstagramIcon from '../common/svg/InstagramIcon';
import TwitterIcon from '../common/svg/TwitterIcon';
import { usePathname } from 'next/navigation';
import SkeletonLoader from '../common/SkeletonLoader';

// Define types for the menu data
interface DropdownItem {
  name: string;
  href: string;
}

interface MenuItem {
  name: string;
  href: string;
  color: string | null;
  dropdownItems: DropdownItem[];
}

interface NavbarProps {
  menuItems: MenuItem[];
  secondaryMenuItems: MenuItem[];
  isLoading: boolean;
  error: string | null;
}

export default function Navbar({ menuItems, secondaryMenuItems, isLoading, error }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuSections, setMobileMenuSections] = useState({
    institutional: false,
    main: false
  });
  const pathname = usePathname();
  const isHomePage = pathname === '/';

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

  const toggleSection = (section: 'institutional' | 'main') => {
    setMobileMenuSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <header className={`fixed w-full transition-all duration-300 ${
      scrolled ? ' top-0 left-0 right-0 z-40' : ' top-0 left-0 right-0 z-40'
    }`}>
      {/* Add padding to account for fixed institutional navbar */}
      <div className="h-[40px] lg:block hidden"></div>

      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-300 ${
        scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2 text-red-500" />
                <span className={scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`}>+91 63649 17676</span>
              </div>
              <div className="flex items-center">
                <LocationIcon className="w-4 h-4 mr-2 text-red-500" />
                <span className={scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`}>Bengaluru, Karnataka</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className={`${scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`} hover:text-red-500 transition-colors`}>
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className={`${scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`} hover:text-red-500 transition-colors`}>
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className={`${scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`} hover:text-red-500 transition-colors`}>
                <YoutubeIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className={`${scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`} hover:text-red-500 transition-colors`}>
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/95 backdrop-blur-sm shadow-sm' : 'py-2'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {isLoading ? (
                <SkeletonLoader type="navbar" count={5} />
              ) : error ? (
                <div className="text-red-500">Error loading menu</div>
              ) : (
                menuItems.map((link, index) => (
                  <div key={link.name} className="relative group">
                    <Link 
                      href={link.href}
                      className={`text-base font-medium transition-colors duration-300 ${
                        scrolled ? 'text-gray-800' : `${isHomePage ? 'text-gray-800' : 'text-white'}`
                      } hover:text-red-500 ${link.color || ''}`}
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
                ))
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
              className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-2">
                  {/* Institutional Section */}
                  <div className="border-b border-gray-200 pb-2">
                    <button
                      onClick={() => toggleSection('institutional')}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>INSTITUTIONAL</span>
                      <DropdownIcon 
                        className={`w-4 h-4 transform transition-transform ${
                          mobileMenuSections.institutional ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileMenuSections.institutional && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isLoading ? (
                            <div className="px-4 py-2">
                              <SkeletonLoader type="menu-item" count={3} />
                            </div>
                          ) : error ? (
                            <div className="px-4 py-2 text-sm text-red-500">Error loading menu</div>
                          ) : (
                            secondaryMenuItems.map((link) => (
                              <div key={link.name} className="mt-1">
                                <Link
                                  href={link.href}
                                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 ${link.color || ''}`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.name}
                                </Link>
                                {link.dropdownItems.length > 0 && (
                                  <div className="pl-6 ml-2 space-y-1 border-l border-gray-200">
                                    {link.dropdownItems.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Main Menu Section */}
                  <div>
                    <button
                      onClick={() => toggleSection('main')}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>MAIN MENU</span>
                      <DropdownIcon 
                        className={`w-4 h-4 transform transition-transform ${
                          mobileMenuSections.main ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {mobileMenuSections.main && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {isLoading ? (
                            <div className="px-4 py-2">
                              <SkeletonLoader type="menu-item" count={4} />
                            </div>
                          ) : error ? (
                            <div className="px-4 py-2 text-sm text-red-500">Error loading menu</div>
                          ) : (
                            menuItems.map((link) => (
                              <div key={link.name} className="mt-1">
                                <Link
                                  href={link.href}
                                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 ${link.color || ''}`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {link.name}
                                </Link>
                                {link.dropdownItems.length > 0 && (
                                  <div className="pl-6 ml-2 space-y-1 border-l border-gray-200">
                                    {link.dropdownItems.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500"
                                        onClick={() => setIsOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}