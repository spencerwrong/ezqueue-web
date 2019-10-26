const mysql = require("mysql");

// create database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// connect
db.connect(err => {
  if (err) throw err;
  console.log("MySQL AWS Connected...");
});

module.exports = db;
