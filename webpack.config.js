var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'],
      include: path.join(__dirname, 'src')
    },
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
    },
    { test: /\.css$/, loader: "style-loader!css-loader" }]
  }
};
