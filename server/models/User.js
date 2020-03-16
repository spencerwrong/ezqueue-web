const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define(
  "user",
  {
    email: {
      type: Sequelize.STRING
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
    tableName: "users"
  }

  // ,
  // {
  //   timestamps: false
  // }
);

module.exports = User;
