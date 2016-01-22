"use strict";

var pg = require('pg');

module.exports = function(app, dbConnectionString){
    app.get('/api/v1/programs', function(req, res){
      let results = [];

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

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

    app.post('/api/v1/programs', function(req, res){
      let results = [];
      let data = {
        program_name: req.body.program_name,
        income: req.body.income
      };

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

    app.put('/api/v1/programs/:program_id', function(req, res){
      let
        results = [],
        program_id = req.params.program_id,
        data = {
          program_name: req.body.program_name,
          income: req.body.income
        };

      pg.connect(dbConnectionString, function(err, client, done){
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        for (var key in data){
          //Exclude the prototype properties in data & make sure the request didn't leave something blank
          if (data.hasOwnProperty(key) && data[key] !== undefined){
            client.query(`UPDATE programs SET ${key}=($1) WHERE id=($2)`, [data[key], program_id]);
          }
        }

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
