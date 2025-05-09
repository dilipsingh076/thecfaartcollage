import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '../components/common/Footer';
import { API_ENDPOINTS } from '../config/api.config';
import { SeoData } from '../types/api';
import Header from '../components/layouts/Header';
import NProgressProvider from "./providers/nprogress-provider";
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Function to fetch SEO data from API
async function getSeoData(): Promise<SeoData> {
  try {
    const response = await fetch(API_ENDPOINTS.HOME, { next: { revalidate: 3600 } });
    const data = await response.json();
    return data.data.seo;
  } catch (error) {
    console.error('Error fetching SEO data:', error);
    // Return default SEO data if API fails
    return {
      title: 'College of Fine Arts',
      keywords: 'Fine Arts, College, Bangalore, Art Education',
      description: 'Premier institution for visual arts education in Bangalore',
      og_title: 'College of Fine Arts',
      og_description: 'Premier institution for visual arts education in Bangalore',
      og_url: 'https://thecfa.art',
      og_image: 'https://thecfa.art/wp-content/uploads/2024/04/logo-2.png'
    };
  }
}

// Generate metadata using the SEO data
export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoData();
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.og_title,
      description: seoData.og_description,
      url: seoData.og_url,
      images: [
        {
          url: seoData.og_image,
          width: 1200,
          height: 630,
          alt: seoData.og_title,
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {/* <Navbar/> */}
         <NProgressProvider />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}