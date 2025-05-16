import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
