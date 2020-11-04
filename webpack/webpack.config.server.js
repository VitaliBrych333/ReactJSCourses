const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: isDevMod
    ? './src/serverRenderer.js'
    : {
        serverRenderer: './src/serverRenderer.js',
        StartPage: './src/pages/StartPage/StartPage',
        DetailsPage: './src/pages/DetailsPage/DetailsPage',
        IncorrectPath: './src/pages/NotFoundPage/IncorrectPath',
      },

  output: {
    filename: isDevMod ? 'js/serverRenderer.js' : undefined,
    libraryTarget: 'commonjs2',
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader/locals', // It doesn't embed CSS but only exports the identifier mappings.
            options: {
              modules: true,
              localIdentName: '[name]-[hash:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: !isDevMod ? [new LoadablePlugin()] : undefined,
});
