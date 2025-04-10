/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['jaroslaw-pieczonka.b-cdn.net', 's.lubimyczytac.pl', 'img.youtube.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  transpilePackages: ['@studio-freight/lenis'],
};
