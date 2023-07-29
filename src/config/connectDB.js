require("dotenv").config();
// get the client
const mysql = require("mysql2/promise");
//test connection
// create the connection to database(dùng cách này sẽ bị quá tải)
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   user: process.env.DB_USER || "root",
//   port: process.env.DB_PORT || 3307,
//   password: process.env.DB_PASSWORD || null,
//   database: process.env.DB_NAME,
// });

// create the connection to database(dùng cách này sẽ bị quá tải)
const connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || 3307,
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
