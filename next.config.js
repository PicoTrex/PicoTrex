/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/PicoTrex',
  assetPrefix: '/PicoTrex',
  // basePath: '.',
  // assetPrefix: '/.',
  // reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
