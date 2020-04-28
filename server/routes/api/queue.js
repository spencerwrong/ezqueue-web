const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// load Queue model
const Queue = require("../../models/Queue");
const User = require("../../models/User");

// @route   Post api/queue/create
// @desc    Create Queue
// @access  Public
router.post(
  "/create",
  [
    auth,
    [
      check("name", "Queue name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, location, description } = req.body;

    try {
      // find user by id
      const userID = req.user.id;
      const user = await User.findOne({ where: { id: userID } });

      const queue = await Queue.create({
        name,
        userID,
        description,
        location
      });

      res.json(queue);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);
