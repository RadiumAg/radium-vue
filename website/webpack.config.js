const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : false,
  mode: process.env.NODE_ENV,
  entry: resolve(__dirname, 'main.ts'),
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname + '../website-dist'),
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
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, '../tsconfig.json'),
            appendTsSuffixTo: [/\.vue$/, /\.md$/],
          },
        },
      },
      {
        test: /\.s(c|a)ss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/image',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/fonts',
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
      'markdone-vue-loader': resolve(__dirname + '/webpack-loader/md-loader'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    port: 4500,
    hot: true,
    hotOnly: true,
    open: true,
    publicPath: '/',
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: 'error',
    maxEntrypointSize: 400000,
    maxAssetSize: 300000,
  },
};
