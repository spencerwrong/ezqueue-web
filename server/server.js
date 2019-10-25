const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
