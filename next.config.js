const { PHASE_EXPORT } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  reactStrictMode: true,
  trailingSlash: phase !== PHASE_EXPORT,
});
