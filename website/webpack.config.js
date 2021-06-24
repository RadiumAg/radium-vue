const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV,
  entry: resolve(__dirname, 'main.ts'),
  output: {
    filename: '[name].js',
    path: resolve(__dirname + '../../' + 'website-dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, '../tsconfig.json'),
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(s)+css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'scss-loader',
            options: {
              indentedSyntax: true,
              // sass-loader version >= 8
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
          'vue-style-loader',
        ],
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
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
  ],
  devServer: {
    port: 9000,
    hot: true,
  },
};
