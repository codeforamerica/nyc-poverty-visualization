"use strict";

var pg = require('pg');

module.exports = function(app, dbConnectionString){
    app.get('/api/v1/household', function(req, res){
      let results = [];

      pg.connect(dbConnectionString, function(err, client, done){
        //Handle connection errors
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC");

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
        if(err){
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        client.query(
          `INSERT INTO households(
            in_nyc, residence_type, total_hh_income, num_kids) values($1, $2, $3, $4)`,
            [data.in_nyc, data.residence_type, data.total_hh_income, data.num_kids]
        );

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC");

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
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        for (var key in data){
          //Exclude the prototype properties in data & make sure the request didn't leave something blank
          if (data.hasOwnProperty(key) && data[key] !== undefined){
            client.query(`UPDATE households SET ${key}=($1) WHERE household_id=($2)`, [data[key], household_id]);
          }
        }

        let query = client.query("SELECT * FROM households ORDER BY household_id ASC");

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
