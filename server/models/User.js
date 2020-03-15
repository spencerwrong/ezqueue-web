const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    fullname: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

module.exports = User;
