/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jaroslaw-pieczonka.b-cdn.net', 's.lubimyczytac.pl', 'img.youtube.com', 'cdn.pixabay.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  productionBrowserSourceMaps: false,
  transpilePackages: ['@studio-freight/lenis'],
};

module.exports = nextConfig;
