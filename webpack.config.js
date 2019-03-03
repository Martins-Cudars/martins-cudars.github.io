const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.js'
  },
  mode: 'production',
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
                { loader: 'css-loader', options: { url: false, sourceMap: false } },
                { loader: 'resolve-url-loader'},
                { loader: 'sass-loader', options: { sourceMap: false } }
            ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.min.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "../css/[name].css",
        publicPath: '../../'
        // chunkFilename: "[id].css"
      }),
      new BundleAnalyzerPlugin(),
      // new OptimizeCssAssetsPlugin({
      //   assetNameRegExp: /\.css$/g,
      //   cssProcessor: require('cssnano'),
      //   cssProcessorPluginOptions: {
      //   preset: ['default', { discardComments: { removeAll: true } }],
      // },
      //   canPrint: true
      // })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
}
