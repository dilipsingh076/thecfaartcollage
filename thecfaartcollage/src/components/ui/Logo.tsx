'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <Link href="/">
      <motion.div 
        className="font-display font-bold text-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        CFA
      </motion.div>
    </Link>
  );
}