var path = require('path');
var webpack = require('webpack');
var bourbon = require('bourbon').includePaths;

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015&presets[]=react',
        include: path.join(__dirname, 'src')
      },
      { test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon},
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  }
}
