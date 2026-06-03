/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/skills',
        destination: '/what-i-do',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
