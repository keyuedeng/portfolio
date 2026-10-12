import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old routes from the previous version of the site
  async redirects() {
    return [
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/blog/:id", destination: "/writing/:id", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
