var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './client/src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.min.js'
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, 'client/src')
        ],
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
