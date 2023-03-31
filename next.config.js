/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL ?? process.env.API_URL_PROD ?? 'https://localhost:8000/'
  }
}

module.exports = nextConfig
