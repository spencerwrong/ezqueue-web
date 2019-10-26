const express = require("express");
const router = express.Router();
const db = require("../../database"); // database connection

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("User Route"));

// @route   GET api/users
// @desc    Route template
// @access  Public
// router.get("/", (req, res) => {
//   let sql = "";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Success Message...");
//   });
// });

module.exports = router;
