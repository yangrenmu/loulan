const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 清理 dist 中重复的文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 识别 webpack 错误，清理一些无用的打包信息
const FirendlyErrorWebpackPlugin = require('friendly-errors-webpack-plugin')

// 编译完成后，打开浏览器
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const config = require('../config')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'loulan.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }),
    new CleanWebpackPlugin(),
    new FirendlyErrorWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`huha: http://${config.host}:${config.port}`]
      },
      clearConsole: true
    }),
    new OpenBrowserPlugin({
      url: `http://${config.host}:${config.port}`
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 2020,
    publicPath: '/',
    hot: true,
    stats: 'errors-only'
  }
}
