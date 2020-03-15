const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

require("dotenv").config(); // scans for .env items

const app = express();

app.use(cors());

// database
const db = require("./database");

// test db
db.authenticate()
  .then(() => console.log("MySQL AWS Connected..."))
  .catch(err => console.log(err));

// Init middleware
app.use(express.json({ extended: false }));

// api routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
