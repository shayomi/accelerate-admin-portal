/**@type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: '',
  assetPrefix: '',
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = nextConfig;
