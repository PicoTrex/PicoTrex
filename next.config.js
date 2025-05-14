/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/PicoTrex/',
  assetPrefix: '/PicoTrex',

  reactStrictMode: true,
  experimental: {
    appDir: true,
  },

  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
