/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // For static export to Hostinger public_html/catalogue folder
  output: 'export',
}

module.exports = nextConfig

