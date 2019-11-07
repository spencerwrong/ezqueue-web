const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

require("dotenv").config(); // scans for .env items

const app = express();

app.use(cors());

// to access database use global db
global.db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// database connection
db.connect(err => {
  if (err) throw err;
  console.log("MySQL AWS Connected...");
});

// api routes
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
