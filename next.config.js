/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ 告诉 Next.js 导出静态站点（配合 yarn next build，不再需要 next export）
  output: 'export',

  // ✅ 如果你使用的是 app/ 路由结构，必须显式启用
  experimental: {
    appDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.getlifegard.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.valuemetrix.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github-production-user-asset-6210df.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'buttons-animations-kv.vercel.app',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
