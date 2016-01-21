"use strict";
const
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),

  express = require('express'),
  proxy = require('proxy-middleware'),
  url = require('url');

const app = express();
app.use(config.output.publicPath, proxy(url.parse('http://localhost:8081/')));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

const server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  publicPath: config.output.publicPath,
  quiet: false,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});

server.listen(8081, "localhost", function(){});
app.listen(8080);
