/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  loader: "custom",
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
