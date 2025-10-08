import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // build sırasında ESLint hatalarını yok say
  },
  typescript: {
    ignoreBuildErrors: true, // build sırasında TS hatalarını yok say
  },
};

export default nextConfig;
