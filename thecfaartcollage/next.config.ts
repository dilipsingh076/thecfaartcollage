/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack
  experimental: {
    turbo: false
  },
  images: {
    domains: ['https://thecfa.art/wp-content/uploads','https://thecfa.art','thecfa.art', 'images.unsplash.com', 'ik.imagekit.io', 'https://images.unsplash.com','images.remotePatterns','tabula.bold-themes.com',"https://thecfa.art/wp-content/uploads/2024/04/logo-2.png"], // Add the domain here
    remotePatterns: [
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