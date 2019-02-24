const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //   loaders: {
        //     scss: ['vue-style-loader', 'css-loader', 'sass-loader']
        //   }
        // }
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } },
      //   ]
      // },
      {
        test: /\.scss$/,
            use: [
                { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../dist' } },
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'resolve-url-loader'},
                { loader: 'sass-loader', options: { sourceMap: true } }
            ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "../css/[name].css"
        // chunkFilename: "[id].css"
      }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
}
