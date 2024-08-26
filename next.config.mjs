/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shopimagesrc.s3.us-east-2.amazonaws.com",
      "fsw-store.s3.sa-east-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
