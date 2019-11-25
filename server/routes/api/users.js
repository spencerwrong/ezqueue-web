const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

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

// @route   Post api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("first_name", "First name is required")
      .not()
      .isEmpty(),
    check("last_name", "Last name is required")
      .not()
      .isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 min characters is required").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { email, first_name, last_name, password } = req.body;
    try {
      // see if user exists by email
      let sql = `SELECT * FROM users WHERE email = '${email}'`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length) {
          res.send(400).json({ errors: [{ msg: "User already exists" }] });
        }
      });

      // encrypt password
      const salt = await bcrypt.genSalt(10);

      password = await bcrypt.hash(password, salt);

      // add user to database
      sql = `INSERT INTO users (email, first_name, last_name, password) VALUES ('${email}','${first_name}','${last_name}','${password}')`;
      db.query(sql, (err, results) => {
        if (err) throw err;
        res.send("User registered");
      });
      // return jsonwebtoken
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }

    // console.log(req.body);
  }
);

module.exports = router;
