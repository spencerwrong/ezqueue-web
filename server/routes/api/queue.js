const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/create",
  [
    check("name", "Queue name is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, date, location, description } = req.body;
  }
);
