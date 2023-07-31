import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dataSource } from "./Database.js";
import { User } from "./Entity/user.js";
// import {} from "typeorm";

const app = express();
const UserRepository = dataSource.getRepository(User);

// var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
dataSource.initialize().then(() => console.log("connected"));

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(5000, () => console.log("app is running"));

app.post("/storeAlter/create", async function (req, res) {
  console.log("store api is called: ------");
  console.log(req.body);
  const user = await UserRepository.save(req?.body);
  res.send(JSON.stringify({ status: 201, error: null, user }));
console.log(user)
})

  app.get("/storeAlter", async function (req, res) {
    console.log("store api is called:-----");
    const data = await UserRepository.find();
    res.status(200).json(data);
    console.log(req.body);
  })

  
