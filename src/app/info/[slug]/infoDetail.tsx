import React from 'react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '@/src/config/api.config';
import { SeoData } from '@/src/types/api';
import { processMarkdownContent } from '@/src/utils/content.utils';
// Next.js App Router doesn't use Head component
import { useEffect } from 'react';
import { ChitrasantheBanner } from '@/src/components/common';

// Helper function to get complete image URL
const getApiImageUrl = (path: string | null | undefined): string => {
  if (!path) return '/vercel.svg';
  return path.startsWith('http') ? path : `${API_BASE_URL}/${path}`;
};

interface InfoBanner {
  id?: number;
  name?: string;
  slug?: string;
  caption?: string;
  snippet?: string;
  category?: string;
  author?: string | null;
  description?: string;
  banner_img?: string;
  banner_txt?: string | null;
  status?: string;
  views?: number | null;
  seo_id?: number;
  user_id?: number;
  created_at?: string | null;
  updated_at?: string | null;
}

interface InfoDetailProps {
  banner: InfoBanner | undefined;
  seo?: SeoData;
}

const InfoDetail: React.FC<InfoDetailProps> = ({ banner, seo }) => {
  // Debug output directly in the component
  console.log('InfoDetail received banner:', banner);
  console.log('InfoDetail received seo:', seo);
  
  // If banner is undefined, provide default values
  const safeData = banner || {
    name: 'Information',
    category: 'Pages',
    description: 'No content available'
  };
  
  // Extract fields with fallbacks
  const title = safeData.name || 'Information';
  const subtitle = safeData.caption || safeData.snippet || '';
  const description = safeData.description || '';
  
  // Format image URL
  const bannerImageUrl = getApiImageUrl(safeData.banner_img);
  
  // Set document title instead of using Head component in app router
  useEffect(() => {
    if (seo?.title) {
      document.title = seo.title;
    } else {
      document.title = `${title} - CFA Bangalore`;
    }
  }, [seo, title]);
  
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <img
            src={bannerImageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/vercel.svg';
              e.currentTarget.classList.add('bg-gray-700');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>

            {subtitle && (
              <p className="text-xl text-gray-200 mb-8">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{title} Details</h2>
              {description ? (
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: processMarkdownContent ? processMarkdownContent(description) : description }} />
                </div>
              ) : (
                <p className="text-gray-600">No content available.</p>
              )}
            </motion.div>
            
            {/* Snippet Section (if different from description) */}
            {safeData.snippet && safeData.snippet !== subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#963B25]/10 to-[#722D1C]/10 rounded-2xl p-8 shadow-lg border-l-4 border-[#963B25]"
              >
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: processMarkdownContent ? processMarkdownContent(safeData.snippet) : safeData.snippet }} />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <ChitrasantheBanner />
    </main>
  );
};

export default InfoDetail; 