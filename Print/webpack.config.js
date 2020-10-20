/* eslint-disable no-undef */
const path = require('path');
const plugin = {
  entry: {
    'Print' : path.resolve('Print/source/index.jsx'),
    'config' : path.resolve('Print/source/js/config.jsx'),
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    alias: {
      '@js': path.resolve(__dirname, 'source/js/'),
      '@css': path.resolve(__dirname, 'source/css/'),
      '@components': path.resolve(__dirname, 'source/js/components'),
    },
  },
  output: {
    path: path.resolve('Print/dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 10000000,
    maxAssetSize: 10000000,
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    plugin.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    // .....
  }
  return plugin;
};
