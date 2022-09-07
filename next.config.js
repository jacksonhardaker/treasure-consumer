const withTM = require("next-transpile-modules")(["treasure-chest"]);
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = withTM({
  webpack: (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];
    return config;
  },
});
