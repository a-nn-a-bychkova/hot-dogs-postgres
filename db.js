const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  password: "asdf67oiuy",
  host: "localhost",
  port: 5432,
  database: "hotdogsmenu",
});

module.exports = pool;
