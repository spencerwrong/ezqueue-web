const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

// load user model
const User = require("../../models/User");

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get("/", (req, res) => res.send("User Route"));

// @route   Post api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    check("username", "Username is required")
      .not()
      .isEmpty(),
    check("fullname", "Full name is required")
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

    let { email, username, fullname, password } = req.body;

    try {
      // if user already exists
      const user = await User.findOne({ where: { email } });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // encrypt password
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      // create and store new user
      await User.create({
        email,
        username,
        fullname,
        password
      });

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
