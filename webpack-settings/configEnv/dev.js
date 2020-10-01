const { merge } = require("webpack-merge");

module.exports = function (configDirs) {
  const devConfig = merge(
    { mode: "development", devtool: "inline-source-map" },
    require("../common")(configDirs)
  );

  console.log("\x1b[36m%s\x1b[0m", "Building for development...");

  return devConfig;
};
