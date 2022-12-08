const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  reactStrictMode: true,
  trailingSlash: phase !== PHASE_DEVELOPMENT_SERVER,
});
