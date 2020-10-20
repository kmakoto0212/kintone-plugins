/* eslint-disable no-undef */
const path = require('path');
const config = {
  entry: path.resolve('Print/source/index.jsx'),
  resolve: {
    extensions: ['.ts', '.jsx', '.js', '.css'],
    alias: {
      '@js': path.resolve(__dirname, 'source/js/'),
      '@css': path.resolve(__dirname, 'source/css/'),
      '@components': path.resolve(__dirname, 'source/js/components'),
    },
  },
  output: {
    path: path.resolve('Print/dist'),
    filename: 'Print.min.js',
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

const configPlugin = {
  entry: path.resolve('Print/source/js/config.jsx'),
  resolve: {
    extensions: ['.ts', '.jsx', '.js'],
    alias: {
      '@js': path.resolve(__dirname, 'source/js/'),
      '@css': path.resolve(__dirname, 'source/css/'),
      '@components': path.resolve(__dirname, 'source/js/components'),
    },
  },
  output: {
    path: path.resolve('Print/dist'),
    filename: 'config.min.js',
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
        use: ['style-loader', 'css-loader'],
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
    config.devtool = 'source-map';
    configPlugin.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    // .....
  }
  return [config, configPlugin];
};
