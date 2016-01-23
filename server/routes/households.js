"use strict";

const
  pg = require('pg'),
  errorHandler = require('../models/dberrorhandler');

module.exports = function(app, dbConnectionString){
    app.get('/api/v1/household', function(req, res){
      let results = [];

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC", function(err){
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

    app.post('/api/v1/household', function(req, res){
      let results = [];

      let data = {
        in_nyc: req.body.in_nyc,
        residence_type: req.body.residence_type,
        total_hh_income: req.body.total_hh_income,
        num_kids: req.body.num_kids
      };

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(errorHandler(err, client, req, res, done)) { return; }

        client.query(
          `INSERT INTO households(
            in_nyc, residence_type, total_hh_income, num_kids) values($1, $2, $3, $4)`,
            [data.in_nyc, data.residence_type, data.total_hh_income, data.num_kids], function(err){
              if(errorHandler(err, client, req, res, done)) { return; }
            }
        );

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC", function(err){
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

    app.put('/api/v1/household/:household_id', function(req, res){
      let
        results = [],
        household_id = req.params.household_id,
        data = {
          in_nyc: req.body.in_nyc,
          residence_type: req.body.residence_type,
          total_hh_income: req.body.total_hh_income,
          num_kids: req.body.num_kids
        };

      pg.connect(dbConnectionString, function(err, client, done){
        if(errorHandler(err, client, req, res, done)) { return; }

        for (var key in data){
          //Exclude the prototype properties in data & make sure the request didn't leave something blank
          if (data.hasOwnProperty(key) && data[key] !== undefined){
            client.query(`UPDATE households SET ${key}=($1) WHERE household_id=($2)`, [data[key], household_id], function(err){
              if(errorHandler(err, client, req, res, done)) { return; }
            });
          }
        }

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC", function(err){
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

    app.delete('/api/v1/household/:household_id', function(req, res){
      let
        results = [],
        household_id = req.params.household_id;

        pg.connect(dbConnectionString, function(err, client, done){
          //Handle connection error
          if(errorHandler(err, client, req, res, done)) { return; }

          client.query(`DELETE FROM households WHERE household_id=($1)`, [household_id], function(err){
            if(errorHandler(err, client, req, res, done)) { return; }
          });

          let query = client.query(`SELECT * FROM households ORDER BY household_id ASC`, function(err){
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
};
