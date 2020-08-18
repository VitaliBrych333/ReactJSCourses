const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = function(configDirs) {
  let prodConfig = merge({ mode: 'production' }, require('../common')(configDirs));

  prodConfig.plugins.push(new UglifyJsPlugin({
    uglifyOptions: {
      warnings: false,
      ie8: false,
      output: {
        comments: false
      }
    }
  }));

  console.log('\x1b[36m%s\x1b[0m', 'Building for production ...');
  return prodConfig;
};
