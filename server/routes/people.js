"use strict";

var pg = require('pg');

module.exports = function(app, dbConnectionString){
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

    app.put('/api/v1/people/:person_id', function(req, res){
      let
        results = [],
        person_id = req.params.person_id,
        data = {
          household: req.body.household,
          age: req.body.age,
          blind: req.body.blind,
          disabled: req.body.disabled
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
            client.query(`UPDATE people SET ${key}=($1) WHERE person_id=($2)`, [data[key], person_id]);
          }
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

    app.delete('/api/v1/people/:person_id', function(req, res){
      let
        results = [],
        person_id = req.params.person_id;

        pg.connect(dbConnectionString, function(err, client, done){
          if(err) {
            done();
            console.log(err);
            return res.status(500).json({ success: false, data: err});
          }

          client.query(`DELETE FROM people WHERE person_id=($1)`, [person_id]);

          let query = client.query(`SELECT * FROM people ORDER BY person_id ASC`);

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
