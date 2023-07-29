require("dotenv").config();
// get the client
const mysql = require("mysql2");
//test connection
// create the connection to database(dùng cách này sẽ bị quá tải)
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || 3307,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME,
});
module.exports = connection;
