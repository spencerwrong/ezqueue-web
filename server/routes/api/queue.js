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
  [auth, [check("name", "Queue name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, location, description } = req.body;

    try {
      // find user by id
      const userID = req.user.id;
      const user = await User.findOne({ where: { email: userID } });
      const username = user.username;

      const queue = await Queue.create({
        name,
        userID,
        username,
        description,
        location,
      });

      res.json(queue);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

// @route   Get api/queue/user
// @desc    Get current user's queues
// @access  Public
router.get("/user", [auth], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // find user by id
    const userID = req.user.id;
    const user = await User.findOne({ where: { email: userID } });
    const username = user.username;
    // find user queues by username
    const queues = await Queue.findAll({ where: { username: username } });

    res.json(queues);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const queues = await Queue.findAll();
    res.json(queues);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
