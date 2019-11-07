const express = require("express");
const router = express.Router();

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("User Route"));

// @route   GET api/users/test
// @desc    Test route
// @access  Public
router.get("/test", (req, res) => {
  let sql = "SELECT * FROM test";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
