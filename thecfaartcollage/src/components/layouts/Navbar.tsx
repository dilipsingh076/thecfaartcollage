'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import Button from '../common/Button';
import { navLinks } from './constant';
import DropdownIcon from '../common/svg/DropdownIcon';
import SearchIcon from '../common/svg/SearchIcon';
import LoginIcon from '../common/svg/LoginIcon';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };



  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 shadow-lg'
          : 'py-4 border-b border-gray-100 dark:border-gray-800'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Logo />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">College of Fine Arts</h1>
              <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                <p>Affiliated to Bangalore University</p>
                <p>Karnataka Chitrakala Parishath</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group">
              <Link 
                href={link.href} 
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === link.href.replace('/', '') 
                    ? `${link.color} bg-gray-100 dark:bg-gray-800` 
                    : `${link.color} hover:bg-gray-50 dark:hover:bg-gray-800`
                }`}
                onMouseEnter={() => link.dropdownItems.length > 0 ? setActiveDropdown(index) : undefined}
                onMouseLeave={() => link.dropdownItems.length > 0 ? setActiveDropdown(null) : undefined}
              >
                <span className="flex items-center">
                  {link.name}
                  {link.dropdownItems.length > 0 && (
                   <DropdownIcon/>
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
                      className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden z-50 border border-gray-100 dark:border-gray-700"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:${link.color} transition-colors duration-200`}
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
          
          {/* Apply Now Button */}
          <Button 
            href="/admission/apply" 
            className="ml-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center"
          >
            Apply Now
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </Button>
        </div>

        {/* Search and Login Icons */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            <SearchIcon/>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
            <LoginIcon/>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-transform"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-opacity mt-1.5 mb-1.5"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-gray-800 dark:bg-gray-200 block transition-transform"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link, index) => (
                <div key={link.name} className="border-b border-gray-100 dark:border-gray-800">
                  <div
                    className="flex items-center justify-between py-3 cursor-pointer"
                    onClick={() => link.dropdownItems.length > 0 ? handleDropdownToggle(index) : setIsOpen(false)}
                  >
                    <Link
                      href={link.dropdownItems.length > 0 ? '#' : link.href}
                      className={`text-base font-medium ${link.color}`}
                      onClick={(e) => {
                        if (link.dropdownItems.length > 0) {
                          e.preventDefault();
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {link.name}
                    </Link>
                    {link.dropdownItems.length > 0 && (
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={link.color}
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </motion.svg>
                    )}
                  </div>
                  
                  {/* Mobile dropdown items */}
                  {link.dropdownItems.length > 0 && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 pb-2"
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`block py-2 text-gray-600 dark:text-gray-300 hover:${link.color} text-sm`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  href="/admission/apply" 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2"
                  >
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Button>
                
                <div className="flex items-center justify-between py-3 space-x-2">
                  <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300 flex items-center justify-center">
                    <SearchIcon className="mr-2" />
                    Search
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300 flex items-center justify-center">
                    <LoginIcon className="mr-2" />
                    Login
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}