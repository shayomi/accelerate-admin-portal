/* eslint-disable indent */
/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  distDir: build,
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: "",
  assetPrefix: "",
  images: {
    loader: "imgix",
    path: "/",
  },
};

module.exports = nextConfig;
