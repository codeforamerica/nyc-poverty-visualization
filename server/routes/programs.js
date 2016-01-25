"use strict";

const
  pg = require('pg'),
  errorHandler = require('../models/dberrorhandler');

module.exports = function(app, dbConnectionString){
    app.get('/api/v1/programs', function(req, res){

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        let query = client.query("SELECT * FROM programs ORDER BY program_id ASC", function(err){

          if(errorHandler(err, client, req, res, done)) { return; }
          let results = [];

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

    app.post('/api/v1/programs', function(req, res){
      let results = [];
      let data = {
        program_name: req.body.program_name,
        income: req.body.income
      };

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        client.query("INSERT INTO programs(program_name, income) values($1, $2)", [data.program_name, data.income], function(err){
          //Handle query errors
          if(errorHandler(err, client, req, res, done)) { return; }

          let query = client.query("SELECT * FROM programs ORDER BY program_id ASC", function(err){
            //Handle query errors
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

    app.put('/api/v1/programs/:program_id', function(req, res){
      let
        results = [],
        program_id = req.params.program_id,
        data = {
          program_name: req.body.program_name,
          income: req.body.income
        };

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        for (var key in data){
          //Exclude the prototype properties in data & make sure the request didn't leave something blank
          if (data.hasOwnProperty(key) && data[key] !== undefined){
            client.query(`UPDATE programs SET ${key}=($1) WHERE program_id=($2)`, [data[key], program_id], function(err){
              if(errorHandler(err, client, req, res, done)) { return; }
            });
          }
        }

        let query = client.query("SELECT * FROM programs ORDER BY program_id ASC", function(err){

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

    app.delete('/api/v1/programs/:program_id', function(req, res){
      let
        results = [],
        program_id = req.params.program_id;

        pg.connect(dbConnectionString, function(err, client, done){
          //Handle database connection errors
          if(errorHandler(err, client, req, res, done)) { return; }

          client.query(`DELETE FROM programs WHERE program_id=($1)`, [program_id], function(err){

            if(errorHandler(err, client, req, res, done)) { return; }

            let query = client.query(`SELECT * FROM programs ORDER BY program_id ASC`, function(err){
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
