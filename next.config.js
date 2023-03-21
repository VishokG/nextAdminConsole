/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value',
    MONGO_URL: "mongodb+srv://admin:admin123@cluster1.0c6iuwg.mongodb.net/next_users?retryWrites=true&w=majority"
  },
}

module.exports = nextConfig
