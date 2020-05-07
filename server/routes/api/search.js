const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

// load Queue model
const Queue = require("../../models/Queue");
const User = require("../../models/User");

router.get("/queue", async (req, res) => {
  let { keyword } = req.query;
  try {
    const sanitizedQuery = keyword
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/, "");
    const queryTokens = sanitizedQuery.split(/\s+/);

    const options = {
      where: {
        [Op.and]: queryTokens.map((token) =>
          Sequelize.where(
            Sequelize.fn("lower", Sequelize.col("name")),
            "LIKE",
            `%${token}%`
          )
        ),
      },
    };
    const results = await Queue.findAll(options);
    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

router.get("/user", async (req, res) => {
  try {
    const sanitizedQuery = req.query.keyword
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/, "");

    const queryTokens = sanitizedQuery.split(/\s+/);

    const options = {
      where: {
        [Op.and]: queryTokens.map((token) =>
          Sequelize.where(
            Sequelize.fn("lower", Sequelize.col("username")),
            "LIKE",
            `%${token}%`
          )
        ),
      },
    };
    const results = await User.findAll(options);
    res.json(results);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
