import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "192.168.0.193",
    "beam-tri-says-prohibited.trycloudflare.com",
  ],  
};

export default nextConfig;