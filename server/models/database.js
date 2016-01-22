"use strict";

const
  pg = require('pg'),
  connectionString = require('../../database.config.js');

const client = new pg.Client(connectionString);

client.connect();

const query = client.query(
  'CREATE TABLE families(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, num_kids INTEGER);' +
  'CREATE TABLE programs(id SERIAL PRIMARY KEY, program_name VARCHAR(40) not null, income INTEGER);'
);

query.on('end', function() { client.end(); });
