import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone', // Helps in serverless deployment
  trailingSlash: true,
};

export default nextConfig;
