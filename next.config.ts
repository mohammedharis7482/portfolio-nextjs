/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: false,
  },

  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
    ],
  },
};

module.exports = nextConfig;