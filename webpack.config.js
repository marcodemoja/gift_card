const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const IS_PROD = (process.env.NODE_ENV === 'production')
const dirAssets = path.join(__dirname, '/src/css');

const extractCSS = new ExtractTextPlugin({
  filename: "style.css",
  allChunks: true
});


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [".js", ".scss", ".css"]
  },
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true
        }
      },
      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
        ]
      },

      // CSS / SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader', 'sass-loader'],
        }),
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    ],
    loaders: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        include: [
          path.resolve(__dirname, 'src')
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
  plugins: [
    extractCSS,
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(IS_PROD)
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  stats: {
    colors: true,
    reasons: true
  },
  cache: true,
  devtool: 'source-map'
}
