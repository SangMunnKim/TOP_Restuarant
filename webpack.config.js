const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins : [
    new HTMLWebpackPlugin({
        title: 'main.[contenthash].js',
        template: 'src/index.html',
    }),
  ], 
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};