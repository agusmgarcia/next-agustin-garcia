const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  eslint: { dirs: ["pages", "public", "src"] },
  reactStrictMode: true,
  trailingSlash: phase !== PHASE_DEVELOPMENT_SERVER,
});
