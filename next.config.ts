import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['perenual.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'perenual.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
