const HtmlWebpackPlugin = require('html-webpack-plugin');

function buildConfig(configDirs) {
  return {
    entry: configDirs.APP_DIR + '/src/index.js',
    output: {
      path: configDirs.BUILD_DIR,
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
                {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: ['babel-loader']
                },
                {
                  test: /\.html$/,
                  use: {
                         loader: 'html-loader',
                       },
                },
                {
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader']
                },
                {
                  test: /\.(png|svg|jpg|gif)$/,
                  use: [{
                          loader: 'file-loader',
                  }],
                },
                {
                  test: /\.(woff|woff2|eot|ttf|otf)$/,
                  use: [
                         'file-loader',
                       ],
                  },
              ]
    },
    devServer: {
      historyApiFallback: true
    },
    performance: {
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: configDirs.APP_DIR + '/index.html'
      })
    ]
  };
};

module.exports = buildConfig;
