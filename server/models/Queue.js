const Sequelize = require("sequelize");
const db = require("../database");

const Queue = db.define("queue", {
  name: {
    type: Sequelize.STRING
  },
  userID: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  }
});

module.exports = Queue;
