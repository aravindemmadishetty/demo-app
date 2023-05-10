/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
