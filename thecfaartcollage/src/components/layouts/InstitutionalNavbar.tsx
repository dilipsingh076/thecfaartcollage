'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownIcon from '../common/svg/DropdownIcon';

export const institutionalLinks = [
  { 
    name: 'Parishath Management', 
    href: '/parishath-management',
    dropdownItems: []
  },
  { 
    name: 'Governing Body', 
    href: '/governing-body',
    dropdownItems: []
  },
  { 
    name: 'Infrastructure', 
    href: '/infrastructure',
    dropdownItems: []
  },
  { 
    name: 'Exams', 
    href: '/exams',
    dropdownItems: []
  },
  { 
    name: 'Results', 
    href: '/results',
    dropdownItems: []
  },
  { 
    name: 'NAAC', 
    href: '/naac',
    dropdownItems: []
  },
  { 
    name: 'IQAC', 
    href: '/iqac',
    dropdownItems: []
  },
  { 
    name: 'Student Zone', 
    href: '/student-zone',
    dropdownItems: [
      { name: 'Student Guide Lines', href: '/studentZone/student-guide-lines' },
      { name: 'Anti Ragging Cell', href: '/studentZone/anti-ragging-cell' },
      { name: 'Women Empowerment Grievance Redressal Cell', href: '/studentZone/women-empowerment-grievance-redressal-cell' },
      { name: 'Drushyotsava 2025', href: '/studentZone/drushyotsava-2025' }
    ]
  },
  { 
    name: 'Alumni', 
    href: '/alumni',
    dropdownItems: []
  },
  { 
    name: 'Archives', 
    href: '/archives',
    dropdownItems: []
  },
  { 
    name: 'Admission', 
    href: '/admission',
    dropdownItems: []
  }
];

export default function InstitutionalNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-orange-500 text-white hidden lg:block z-50 h-[40px]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="flex items-center space-x-1">
            {institutionalLinks.map((link, index) => (
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
                        className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-50"
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
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
        </div>
      </div>
    </nav>
  );
} 