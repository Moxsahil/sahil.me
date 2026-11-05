import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      { source: "/projectspage", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
