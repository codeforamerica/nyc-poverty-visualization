"use strict";

const
  pg = require('pg'),
  connectionString = require('../../database.config.js');

const client = new pg.Client(connectionString);

client.connect();

const query = client.query(
  `CREATE TABLE households(
      household_id          SERIAL PRIMARY KEY,
      in_nyc                BOOLEAN NOT NULL,
      residence_type        VARCHAR(40),
      total_hh_income       INTEGER,
      num_kids              INTEGER
  );

  CREATE TABLE people(
      person_id             SERIAL PRIMARY KEY,
      household             SERIAL references households(household_id) ON DELETE CASCADE,
      age                   INTEGER,
      blind                 BOOLEAN,
      disabled              BOOLEAN
  );

  CREATE TABLE programs(
      program_id            SERIAL PRIMARY KEY,
      program_name          VARCHAR(40) NOT NULL,
      income                INTEGER
  );`
);

query.on('end', function() { client.end(); });
