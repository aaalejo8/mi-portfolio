import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, trusted placeholder screenshots for Projects ship as SVG until
    // real captures replace them.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
