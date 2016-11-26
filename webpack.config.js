const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist')
};

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: PATHS.app,
  entry: './App.js',
  output: {
    path: PATHS.build,
    publicPath: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  devServer: {
    inline: true
  }
};
