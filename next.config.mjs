/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    serverActions: true,
  },
};

// domains: ["shopimagesrc.s3.us-east-2.amazonaws.com"],

module.exports = nextConfig;
