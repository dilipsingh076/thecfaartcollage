/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack
  experimental: {
    turbo: false
  },
  images: {
    domains: ['thecfa.art', 'images.unsplash.com', 'ik.imagekit.io', 'tabula.bold-themes.com', 'karnatakaindustries.in', 'ui-avatars.com'], // Added ui-avatars.com
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
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;