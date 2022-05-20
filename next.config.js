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
        source: "/marvelguessr",
        destination: `${'https://marvel-guessing-game-git-dev-igorjung.vercel.app/'}/marvelguessr`,
      },
      {
        source: "/marvelguessr/:path*",
        destination: `${'https://marvel-guessing-game-git-dev-igorjung.vercel.app/'}/marvelguessr/:path*`,
      },
    ];
  },
  reactStrictMode: true,
}

module.exports = nextConfig
