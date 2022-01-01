/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  //入口
  entry: {
    model: {
      import: "./src/js/model.js",
      dependOn: "shared",
    },
    controller: {
      import: "./src/js/controller.js",
      dependOn: "shared",
    },
    shared: "lodash",
  },
  //出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  //模式 development,production
  mode: "production",
  //loader
  module: {
    rules: [
      {
        test: /\.css$|\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  //插件
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new ImageminWebpWebpackPlugin(),
  ],

  devtool: "source-map",
};
