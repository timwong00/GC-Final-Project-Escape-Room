const express = require("express");
const app = express();
const routes = require("./itemsAPI");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/dist"));
app.use("/", routes);

let port = process.env.PORT || 5000;
app.listen(port, _ => console.log(`Server running on port: ${port}`));
