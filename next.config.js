const { PHASE_PRODUCTION_BUILD } = require("next/constants");

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  output: phase === PHASE_PRODUCTION_BUILD ? "export" : undefined,
  reactStrictMode: true,
  trailingSlash: phase !== PHASE_PRODUCTION_BUILD,
});
