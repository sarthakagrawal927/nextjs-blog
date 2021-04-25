module.exports = {
  amp: true,
  images: {
    domains: ["preview.redd.it", "external-preview.redd.it"],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
