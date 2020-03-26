const {smart} = require('webpack-merge')
const base  = require('./webpack.base.config')

const webpack = require('webpack')

module.exports = smart(base, {
  mode: 'development',
  devServer: {
    port: '8888',
    hot:true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEV: JSON.stringify('development'),
      FLAG:'true',
    })
  ]
})