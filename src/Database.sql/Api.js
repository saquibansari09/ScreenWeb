const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "screenWeb",
  password: "saquib12345",
  port: 5432,
});

client.connect();

client.query(`Select * from users`, (err, res) => {
  if (!err) {
    console.log(res, rows);
  } else {
    console.log(err.message);
  }
  client.end;
});
