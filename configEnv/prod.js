const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(configDirs) {
  let prodConfig = Object.assign({}, require('../common')(configDirs));

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
