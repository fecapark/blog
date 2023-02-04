/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  basePath: isDev ? process.env.NEXT_PUBLIC_DEV_PATH : "",
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
