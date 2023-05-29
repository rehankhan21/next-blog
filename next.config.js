/** @type {import('next').NextConfig} */
const { Module } = require("module");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "krehanjs",
        mongodb_password: "5QCuf9RwiulfZE31",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "krehanjs",
      mongodb_password: "5QCuf9RwiulfZE31",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

module.exports = nextConfig;
