/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["shopimagesrc.s3.us-east-2.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
