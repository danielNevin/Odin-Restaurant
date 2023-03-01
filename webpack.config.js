const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/entry.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Bounty of the Ocean',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'dist/',
          publicPath: '../',
          useRelativePaths: true
        }
      },
    ],
  },
};