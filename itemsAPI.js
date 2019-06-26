"use strict"

const express = require("express");
const items = express.Router();
const pool = require("./connection");

function getTutorialItems(res) {
  pool.query("select * from tutorialescapeitems order by id").then(result=>res.json(result.rows));
}

function getTutorialUnlockItems(res) {
  pool.query("select * from tutorialUnlockItems order by id").then(result=>res.json(result.rows));
}

function getRoomOneItems(res) {
  pool.query("select * from room1escapeitems order by id").then(result=>res.json(result.rows));
}

function getRoomOneUnlockItems(res) {
  pool.query("select * from room1UnlockItems order by id").then(result=>res.json(result.rows));
}

function getRoomTwoItems(res) {
  pool.query("select * from room2escapeitems order by id").then(result=>res.json(result.rows));
}

function getRoomTwoUnlockItems(res) {
  pool.query("select * from room2UnlockItems order by id").then(result=>res.json(result.rows));
}

function getRoomThreeItems(res) {
  pool.query("select * from room3escapeitems order by id").then(result=>res.json(result.rows));
}

function getRoomThreeUnlockItems(res) {
  pool.query("select * from room3UnlockItems order by id").then(result=>res.json(result.rows));
}

items.get("/tutorial-items", (req, res) => {
  getTutorialItems(res);
});

items.get("/tutorial-unlock-items", (req,res) => {
  getTutorialUnlockItems(res);
});

items.get("/room-1-items", (req, res) => {
  getRoomOneItems(res);
});

items.get("/room-1-unlock-items", (req,res) => {
  getRoomOneUnlockItems(res);
});

items.get("/room-2-items", (req, res) => {
  getRoomTwoItems(res);
});

items.get("/room-2-unlock-items", (req,res) => {
  getRoomTwoUnlockItems(res);
});

items.get("/room-3-items", (req, res) => {
  getRoomThreeItems(res);
});

items.get("/room-3-unlock-items", (req,res) => {
  getRoomThreeUnlockItems(res);
});


module.exports = items;



