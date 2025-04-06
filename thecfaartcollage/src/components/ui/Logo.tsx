'use client';

import { motion } from 'framer-motion';
import logo from '@/src/Images/logo-2.png';

export default function Logo() {
  return (
    // <Link href="/">
    <motion.div
      className="font-display font-bold text-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      {/* Using img tag instead of Next.js Image as requested */}
      <img 
        src={logo.src} 
        alt="logo" 
        width={250} 
        height={80} 
        className="object-contain"
      />
     </motion.div>
    // </Link>
  );
}