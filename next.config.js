const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // assetPrefix: "./",
  trailingSlash: true,

  //i18n,
};

module.exports = nextConfig;
