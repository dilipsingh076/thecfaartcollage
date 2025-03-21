/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable Turbopack
  experimental: {
    turbo: false
  },
  images: {
    domains: ['images.unsplash.com','images.remotePatterns','tabula.bold-themes.com',"https://thecfa.art/wp-content/uploads/2024/04/logo-2.png"], // Add the domain here
  },

};

export default nextConfig;