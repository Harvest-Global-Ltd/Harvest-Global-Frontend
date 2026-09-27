import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "192.168.0.193",
    "beam-tri-says-prohibited.trycloudflare.com",
  ],
  headers: async () => [
    {
      // Static media in /public is treated as immutable: rename the file
      // (new URL) whenever its content changes so browsers never serve stale
      // bytes. HTML and API responses are intentionally not matched here.
      source: "/videos/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/images/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/svg/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
};

export default nextConfig;
