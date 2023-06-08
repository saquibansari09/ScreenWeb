const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "saquib12345",
  host: "localhost",
  port: 5432,
  database: "screenWeb",
});

module.exports = pool;
