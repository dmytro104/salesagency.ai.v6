import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",

  // Image optimization configuration
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compression (automatically enabled in production)
  compress: true,

  // Performance optimizations
  reactStrictMode: true,
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Note: Security headers are disabled for static export (GitHub Pages)
  // Configure these in your GitHub Pages settings or use a _headers file
  // if your hosting provider supports it
};

export default nextConfig;
