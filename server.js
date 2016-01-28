var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();
var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');
var port = process.env.PORT || 8080;

app.use('/public', express.static(__dirname + '/public'))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).listen(port, function (err) {
    if (err) { console.log(err) };
    console.log('Production server listening on http://localhost:'+port+' 💯');
  });

if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Development server listening from http://localhost:3000 🌏');
  });
}
