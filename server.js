"use strict";
const
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config'),

  express = require('express'),
  bodyParser = require('body-parser'),
  proxy = require('proxy-middleware'),
  url = require('url'),
  dbConnectionString = require('./database.config.js'),
  app = express();



app.use(config.output.publicPath, proxy(url.parse('http://localhost:8081/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/*API Routes*/
/*households*/
require('./server/routes/households.js')(app, dbConnectionString);

/*people model*/
require('./server/routes/people.js')(app, dbConnectionString);

/*programs*/
require('./server/routes/programs.js')(app, dbConnectionString);


const server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  publicPath: config.output.publicPath,
  quiet: false,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});

server.listen(8081, "localhost", function(){});
app.listen(8080, "localhost", function(){
  console.log("Server listening on port 8080");
});
