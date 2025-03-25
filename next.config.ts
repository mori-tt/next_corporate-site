import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/next_corporate-site" : "",
  assetPrefix: isProd ? "/next_corporate-site/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
export default nextConfig;
