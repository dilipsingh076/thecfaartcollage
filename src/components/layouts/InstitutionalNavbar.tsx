'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownIcon from '../common/svg/DropdownIcon';
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

interface InstitutionalNavbarProps {
  menuItems: MenuItem[];
  isLoading: boolean;
  error: string | null;
}

export default function InstitutionalNavbar({ menuItems, isLoading, error }: InstitutionalNavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-500 text-white hidden lg:block z-50 h-[40px]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-center h-full">
          {isLoading ? (
            <SkeletonLoader type="institutional" count={8} />
          ) : error ? (
            <div className="text-white text-sm">Error loading menu</div>
          ) : (
            <div className="flex items-center space-x-1">
              {menuItems.map((link, index) => (
                <div key={link.name} className="relative group">
                  <Link 
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium hover:bg-orange-600 rounded-md transition-colors duration-200 whitespace-nowrap flex items-center"
                    onMouseEnter={() => link.dropdownItems.length > 0 ? setActiveDropdown(index) : undefined}
                    onMouseLeave={() => link.dropdownItems.length > 0 ? setActiveDropdown(null) : undefined}
                  >
                    {link.name}
                    {link.dropdownItems.length > 0 && (
                      <DropdownIcon className="ml-1 w-3 h-3 text-white" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors duration-200"
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
          )}
        </div>
      </div>
    </nav>
  );
} 