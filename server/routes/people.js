"use strict";

const
  pg = require('pg'),
  errorHandler = require('../models/dberrorhandler');


module.exports = function(app, dbConnectionString){
    app.get('/api/v1/people', function(req, res){
      let results = [];

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        let query = client.query("SELECT * FROM people ORDER BY person_id ASC", function(err){
          if(errorHandler(err, client, req, res, done)) { return; }
        });

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
        if(errorHandler(err, client, req, res, done)) { return; }

        client.query("INSERT INTO people(household, age, blind, disabled) values($1, $2, $3, $4)", [data.household, data.age, data.blind, data.disabled], function(err){
          if(errorHandler(err, client, req, res, done)) { return; }
          let query = client.query("SELECT * FROM people ORDER BY person_id ASC", function(err){
            if(errorHandler(err, client, req, res, done)) { return; }

            query.on('row', function(row){
              results.push(row);
            });

            query.on('end', function(){
              done();
              return res.json(results);
            });
          });
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
        if(errorHandler(err, client, req, res, done)) { return; }

        for (var key in data){
          //Exclude the prototype properties in data & make sure the request didn't leave something blank
          if (data.hasOwnProperty(key) && data[key] !== undefined){
            client.query(`UPDATE people SET ${key}=($1) WHERE person_id=($2)`, [data[key], person_id], function(err){
              if(errorHandler(err, client, req, res, done)) { return; }
            });
          }
        }

        let query = client.query("SELECT * FROM people ORDER BY person_id ASC", function(err){
          if(errorHandler(err, client, req, res, done)) { return; }
        });

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
          //Handle connection error
          if(errorHandler(err, client, req, res, done)) { return; }

          client.query(`DELETE FROM people WHERE person_id=($1)`, [person_id], function(err){
            if(errorHandler(err, client, req, res, done)) { return; }

            let query = client.query(`SELECT * FROM people ORDER BY person_id ASC`, function(){
              if(errorHandler(err, client, req, res, done)) { return; }

              query.on('row', function(row){
                results.push(row);
              });

              query.on('end', function(){
                done();
                return res.json(results);
              });
            });
          });
        });
    });
};
