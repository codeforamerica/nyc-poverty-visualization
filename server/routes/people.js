"use strict";

var pg = require('pg');

module.exports = function(app, dbConnectionString){
    app.post('/api/v1/people', function(req, res){
      let results = [];

      let data = {
        household: req.body.household,
        age: req.body.age,
        blind: req.body.blind,
        disabled: req.body.disabled
      };

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        client.query("INSERT INTO people(household, age, blind, disabled) values($1, $2, $3, $4)", [data.household, data.age, data.blind, data.disabled]);

        let query = client.query("SELECT * FROM people ORDER BY person_id ASC");

        query.on('row', function(row){
          results.push(row);
        });

        query.on('end', function(){
          done();
          return res.json(results);
        });
      });
    });

    app.get('/api/v1/people', function(req, res){
      let results = [];

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }
        
        let query = client.query("SELECT * FROM people ORDER BY person_id ASC");

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
