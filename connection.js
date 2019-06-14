"use strict"

const { Pool } = require("pg");

const credentials = {
  user: "postgres",
  password: "Market18!",
  host: "localhost",
  port: 5432,
  database: "EscapeRoom",
  ssl: false,
};


module.exports = new Pool(credentials);