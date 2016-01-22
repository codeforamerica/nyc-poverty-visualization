"use strict";
const
  connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/januaryproject';

module.exports = connectionString;
