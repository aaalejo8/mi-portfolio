import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local, trusted placeholder screenshots for Projects ship as SVG until
    // real captures replace them.
    dangerouslyAllowSVG: true,
    // AVIF is ~20% smaller than WebP for these screenshots; WebP stays as the
    // fallback for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Credential files aren't fingerprinted, so cache them for a day and
        // revalidate in the background rather than forever.
        source: "/credentials/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },
};

export default nextConfig;
