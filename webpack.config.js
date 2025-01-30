const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.pug$/,
            loader: 'pug-loader',
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'template.pug'),
      filename: 'index.html',
    }),
    new FileManagerPlugin({
        events: {
            onStart: {
                delete: ['dist'],
            },
        },
    }),
  ],
  stats: {
    children: true
},
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
};