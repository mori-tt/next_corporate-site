import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/next_corporate-site",
  assetPrefix: "/next_corporate-site/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    GOOGLE_FORM_URL: process.env.GOOGLE_FORM_URL,
  },
};

export default nextConfig;
