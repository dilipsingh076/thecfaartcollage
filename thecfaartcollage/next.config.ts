/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack
  experimental: {
    turbo: false
  },
  images: {
    domains: ['thecfa.art', 'images.unsplash.com', 'ik.imagekit.io', 'tabula.bold-themes.com', 'karnatakaindustries.in'], // Corrected domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'karnatakaindustries.in',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'karnatakaindustries.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thecfa.art',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;