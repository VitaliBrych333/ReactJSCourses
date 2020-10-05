/* eslint-disable no-console */
/* eslint-disable global-require */
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = (configDirs) => {
  let prodConfig = merge(
    { mode: 'production' },
    require('../common')(configDirs)
  );

  prodConfig.plugins.push(
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    })
  );

  console.log('\x1b[36m%s\x1b[0m", "Building for production ...');
  return prodConfig;
};
