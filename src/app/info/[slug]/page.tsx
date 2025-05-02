'use client';

import { useParams } from 'next/navigation';
import { useInfoData } from '@/src/hooks';
import { ErrorMessage, LoadingSpinner } from '@/src/components/common';
import { API_BASE_URL } from '@/src/config/api.config';
import { processMarkdownContent } from '@/src/utils/content.utils';
import { MDXProvider } from '@mdx-js/react';

// Define a type for banner data
interface BannerData {
  id?: number;
  name?: string;
  slug?: string;
  caption?: string;
  snippet?: string;
  description?: string;
  banner_img?: string;
  banner_txt?: string | null;
}

export default function InfoPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: infoData, isLoading, error, refetch } = useInfoData(slug);
  
  console.log('Page component received infoData:', infoData);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" color="#963B25" />
      </div>
    );
  }
  
  if (error) {
    console.error('Error in info page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <ErrorMessage error={error} retry={refetch} />
        </div>
      </div>
    );
  }

  if (!infoData) {
    console.log('No info data received');
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Information Not Found</h2>
          <p className="text-gray-600">The requested information could not be found.</p>
        </div>
      </div>
    );
  }

  // Try to access banner data regardless of the exact structure
  let bannerData: BannerData = {};
  
  // Scenario 1: If infoData.data.banner exists
  if (infoData.data?.banner) {
    console.log('Found banner in infoData.data.banner');
    bannerData = infoData.data.banner as BannerData;
  }
  // Scenario 2: If infoData.data is the banner itself
  else if (infoData.data && typeof infoData.data === 'object' && ('description' in infoData.data || 'snippet' in infoData.data || 'caption' in infoData.data)) {
    console.log('infoData.data appears to be the banner itself');
    bannerData = infoData.data as unknown as BannerData;
  }
  // Scenario 3: If infoData contains banner directly
  else if (infoData && typeof infoData === 'object' && 'banner' in infoData) {
    console.log('Found banner in infoData.banner');
    bannerData = (infoData as Record<string, unknown>).banner as BannerData;
  }
  // Scenario 4: If the entire infoData is the banner
  else if (infoData && typeof infoData === 'object' && ('description' in infoData || 'snippet' in infoData || 'caption' in infoData)) {
    console.log('infoData appears to be the banner itself');
    bannerData = infoData as unknown as BannerData;
  }
  
  if (!bannerData || Object.keys(bannerData).length === 0) {
    console.log('Could not find banner data in any expected location');
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Content Not Available</h2>
          <p className="text-gray-600">The requested content could not be loaded.</p>
        </div>
      </div>
    );
  }
  
  // Now extract the needed fields from bannerData, with fallbacks
  const heroTitle = bannerData.name || 'Information';
  const heroSubtitle = bannerData.caption || bannerData.snippet || '';
  const heroImage = bannerData.banner_img ? `${API_BASE_URL}/${bannerData.banner_img}` : '/images/default-banner.jpg';
  
  // Get content from various fields
  const description = bannerData.description || '';
  const caption = bannerData.caption || '';
  const snippet = bannerData.snippet || '';

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
        <img
          src={heroImage}
          alt={heroTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-center items-center container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 text-center">
            {heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl sm:max-w-3xl mx-auto px-4">
            {heroSubtitle}
          </p>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6 md:p-10">
              {/* Display snippet if available */}
              {snippet && (
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
                  <MDXProvider>
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(snippet) }} />
                  </MDXProvider>
                </div>
              )}
              
              {/* Display caption if available and different from snippet */}
              {caption && caption !== snippet && (
                <div className="prose prose-lg max-w-none mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summary</h2>
                  <MDXProvider>
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(caption) }} />
                  </MDXProvider>
                </div>
              )}
              
              {/* Display description as main content */}
              {description && (
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
                  <MDXProvider>
                    <div dangerouslySetInnerHTML={{ __html: processMarkdownContent(description) }} />
                  </MDXProvider>
                </div>
              )}
              
              {/* Show a message if no content is available */}
              {!description && !caption && !snippet && (
                <p className="text-gray-600">No content available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 