const http = require("http");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const socketio = require("socket.io");

require("dotenv").config(); // scans for .env items

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());

// database
const db = require("./database");

// test db
db.authenticate()
  .then(() => console.log("MySQL AWS Connected..."))
  .catch((err) => console.log(err));

// Init middleware
app.use(express.json({ extended: false }));

// api routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/queue", require("./routes/api/queue"));

const Queue = require("./models/Queue");
const { QueryTypes } = require("sequelize");

// Run when client connects
io.on("connection", (socket) => {
  console.log("New WS Connection...");
  // socket.emit("queue", "queue connected");

  // Active Check
  socket.on("isActive", (data) => {
    console.log(data);
    isActive(data);
  });

  const isActive = async (data) => {
    console.log("isActive:");
    // console.log(data);
    // check active table
    const queue = await db.query(`SELECT * FROM active WHERE id = ${data.id}`, {
      type: QueryTypes.SELECT,
    });
    console.log(queue);
    if (queue.length == 0) {
      const message = {
        id: data.id,
        isActive: false,
      };
      console.log(message);
      socket.emit("active", message);
    } else {
      const message = {
        id: data.id,
        isActive: true,
      };
      socket.emit("active", message);
    }
  };

  // Start Queue
  socket.on("start", (data) => {
    console.log(data);
    start(data);
  });

  const start = async (data) => {
    console.log("start: ");
    console.log(data);
    const queue = data;
    const date = new Date();
    const time = date.getTime();
    await db.query(
      `INSERT INTO active (id, startedAt) VALUES (${queue}, ${time})`,
      { type: QueryTypes.INSERT }
    );
    socket.broadcast.emit("active", { id: queue, isActive: true });
  };

  // End Queue
  socket.on("end", (data) => {
    end(data);
  });

  const end = async (data) => {
    // get queue id and time started
    const queue = await db.query(`SELECT * FROM active WHERE id = ${data.id}`, {
      type: QueryTypes.SELECT,
    });

    // remove queue from active queues
    await db.query(`DELETE FROM active WHERE id = ${data.id}`, {
      type: QueryTypes.DELETE,
    });

    // remove all occupants still in queue
    await db.query(`DELETE FROM occupants WHERE queueID = ${data.id}`, {
      type: QueryTypes.DELETE,
    });

    // get end time
    const date = new Date();
    const time = date.getTime();

    // add queue to past queues
    await db.query(
      `INSERT INTO inactive (id, startedAt, endAt) VALUES (${queue[0].id}, ${time}, ${time})`,
      { type: QueryTypes.INSERT }
    );

    socket.broadcast.emit("active", { id: data.id, isActive: false });
    socket.broadcast.emit("occupants", { id: data.id, count: 0 });
  };

  // Join Queue
  socket.on("join", (data) => {
    join(data);
  });

  const join = async (data) => {
    const date = new Date();
    const time = date.getTime();

    await db.query(
      `INSERT INTO occupants VALUES (${data.queueID}, ${data.username}, ${time})`,
      { type: QueryTypes.INSERT }
    );

    socket.emit("isOccupant", {
      queueID: data.queueID,
      username: data.username,
      isOccupant: true,
    });
    count({ id: queueID }); // update queue occupant count to all clients
  };

  // Leave Queue
  socket.on("leave", (data) => {
    remove(data);
  });

  const remove = async (data) => {
    // get user occupant info
    const user = await db.query(
      `SELECT * FROM occupant WHERE username = ${data.username} AND queueID=${data.queueID}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    // remove user from occupants table
    await db.query(
      `DELETE FROM active WHERE username = ${data.username} AND queueID=${data.queueID}`,
      {
        type: QueryTypes.DELETE,
      }
    );

    // time at when user left
    const date = new Date();
    const time = date.getTime();

    // insert user into past occupants
    await db.query(
      `INSERT INTO pastOccupants (queueID, username, joinedAt, leftAt) VALUES (${user[0].queueID}, ${user[0].username}, ${time}, ${time})`,
      { type: QueryTypes.INSERT }
    );

    socket.broadcast.emit("isOccupant", {
      queueID: user[0].queueID,
      username: user[0].username,
      isOccupant: false,
    });
    count({ id: user[0].queueID }); // update count to clients
    // update positons
  };

  // Check if user is an occupant of a queue
  socket.on("isOccupant", (data) => {
    isOccupant(data);
  });

  const isOccupant = async (data) => {
    const user = await db.query(
      `SELECT * FROM occupant WHERE username = ${data.username} AND queueID=${data.queueID}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    if (user.length == 0) {
      socket.emit("isOccupant", {
        queueID: data.queueID,
        username: data.username,
        isOccupant: false,
      });
    } else {
      socket.emit("isOccupant", {
        queueID: data.queueID,
        username: data.username,
        isOccupant: true,
      });
    }
  };

  // Occupant position in queue
  socket.on("position", (data) => {
    position(data);
  });

  const position = (data) => {
    // get list of occupants in queue
    // find user
    // emit position
  };

  // Number of Queue Occupants
  socket.on("count", (data) => {
    count(data);
  });

  const count = async (data) => {
    const occupants = await db.query(
      `SELECT * FROM occupants WHERE queueID = ${data.id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    // update occupant count to all clients
    socket.broadcast.emit("occupants", {
      id: data.id,
      count: occupants.length,
    });
  };

  // Check in user
  socket.on("checkin", (data) => {
    remove(data);
  });
});

const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`));
server.listen(port, () => console.log(`Server started on port ${port}`));
