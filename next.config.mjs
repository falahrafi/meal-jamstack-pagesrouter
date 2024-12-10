/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themealdb.com"], // Add the external hostname here
  },
};

export default nextConfig;
