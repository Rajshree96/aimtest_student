/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'assets.codepen.io',
      'i.pravatar.cc',
      'images.unsplash.com',
      'picsum.photos',
    ],
  },
};

module.exports = nextConfig;
