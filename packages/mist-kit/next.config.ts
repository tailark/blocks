import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
        },
    ],
  },
};

export default nextConfig;
