'use client';

import { motion } from 'framer-motion';
export default function Logo() {
  return (
    // <Link href="/">
    <motion.div
      className="font-display font-bold text-xl"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src="/Images/logo-2.png" alt="logo" width={150} height={50} />

      {/* <img 
        src={collagelogo}
        alt="logo" 
        width={150} 
        height={50} 
      /> */}
     </motion.div>
    // </Link>
  );
}