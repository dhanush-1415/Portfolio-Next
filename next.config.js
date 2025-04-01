/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    domains: ['fonts.gstatic.com', 'images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' 
      ? { exclude: ['error', 'warn'] } 
      : false,
    // Enable styledComponents for better CSS-in-JS support
    styledComponents: true,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize bundle size with granular chunks
  experimental: {
    optimizeCss: true, // CSS optimization
    scrollRestoration: true, // Restore scroll position on navigation
  },
  
  // Configure webpack for additional optimizations
  webpack: (config, { isServer }) => {
    // Optimize SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  
  // Enable gzip compression
  compress: true,
  
  // Set security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;