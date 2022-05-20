/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com','cdn.jsdelivr.net'],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blog",
        destination: `${'https://marvelguessr.vercel.app'}/marvelguessr`,
      },
      {
        source: "/blog/:path*",
        destination: `${'https://marvelguessr.vercel.app'}/marvelguessr/:path*`,
      },
    ];
  },
  reactStrictMode: true,
}

module.exports = nextConfig
