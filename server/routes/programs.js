"use strict";

var pg = require('pg');

module.exports = function(app, dbConnectionString){
    app.post('/api/v1/programs', function(req, res){
      console.log(req);
      let results = [];
      let data = {program_name: req.body.program_name, income: req.body.income};

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        client.query("INSERT INTO programs(program_name, income) values($1, $2)", [data.program_name, data.income]);

        let query = client.query("SELECT * FROM programs ORDER BY id ASC");

        query.on('row', function(row){
          results.push(row);
        });

        query.on('end', function(){
          done();
          return res.json(results);
        });

      });
    });
};
