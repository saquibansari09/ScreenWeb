import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataSource } from "./Database.js";
// import sqlite3 from "sqlite3";
const app = express();

// var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
dataSource.initialize().then(() => console.log("connected"));

app.use(cors());
app.use(bodyParser.json());

app.get("/getData", (req, res) => {
  res.send("Hello world");
});

app.listen(5000, () => console.log("app is running"));

app.post("/storeAlter", function (req, res) {
  console.log("store api is called: ------");
  console.log(req.body);
  //   let data = { name: req.body.cname };
  //   console.log(data);
  res.send(JSON.stringify({ status: 201, error: null }));
});
