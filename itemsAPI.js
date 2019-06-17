"use strict"

const express = require("express");
const items = express.Router();
const pool = require("./connection");

function getItems(res) {
  pool.query("select * from EscapeItems").then(result=>res.json(result.rows));
}

items.get("/items", (req, res) => {
  getItems(res);
});

module.exports = items;



