/* eslint-disable @typescript-eslint/no-var-requires*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const vueBundle =
  process.env.NODE_ENV === 'production'
    ? 'vue.esm-browser.prod.js'
    : 'vue.esm-browser.js';

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
  mode: process.env.NODE_ENV, // development 模式下有热更新作用
  entry: resolve(
    __dirname,
    process.env.MODE === 'bundle' ? './bundle.ts' : 'main.ts',
  ),
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname + '../../website-dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          'vue-loader',
          {
            loader: resolve(__dirname + '/webpack-loader/md-loader'),
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?(c|a)ss$/,
        use: [
          'vue-style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader', // 对@import 和 url()进行处理
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      vue: `vue/dist/${vueBundle}`,
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  devServer: {
    inline: true,
    port: 4500,
    hot: true,
    host: '0.0.0.0',
    hotOnly: true,
    // open: true,
    publicPath: '/',
    historyApiFallback: true,
    overlay: true,
    contentBase: __dirname,
    stats: 'minimal',
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
