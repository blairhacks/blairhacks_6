/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  loader: "imgix",
  path: "/",
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig
