/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'https://sondage-api.herokuapp.com/'
  }
}

module.exports = nextConfig
