import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  env: {
    GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL,
  },
};

export default nextConfig;
