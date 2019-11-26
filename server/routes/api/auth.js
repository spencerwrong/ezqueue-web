const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get("/", auth, (req, res) => {
  try {
    let sql = `SELECT email, first_name, last_name FROM users WHERE email=${req.user.id}`;
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { email, password } = req.body;

    try {
      // see if user exists by email
      let sql = `SELECT * FROM users WHERE email = '${email}'`;
      db.query(sql, async (err, results) => {
        try {
          if (err) throw err;
          if (!results.length) {
            return res
              .status(400)
              .json({ errors: [{ msg: "Invalid Credentials" }] });
          }
          const isMatch = await bcrypt.compare(password, results[0].password);

          if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ msg: "Invalid Credentials" }] });
          }
        } catch (err) {
          console.log(err.message);
        }
      });

      //   const isMatch = await bcrypt.compare(password, resPass);

      //   if (!isMatch) {
      //     return res.send(400).json({ errors: [{ msg: "Invalid Credentials" }] });
      //   }

      // return jsonwebtoken
      const payload = {
        user: {
          id: email
        }
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

module.exports = router;
