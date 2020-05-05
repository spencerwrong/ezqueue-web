// Standard card just means the cards that will appear the most
import React, { useState, useEffect, Fragment } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FiUsers, FiMoreHorizontal, FiMapPin } from "react-icons/fi";
import { connect } from "react-redux";
import styled from "styled-components";
import socket from "../../websocket";

const QueueCard = (props) => {
  const [avatar, setAvatar] = useState(props.avatar);
  const [username, setUserName] = useState(props.username);
  const [currentUser, setCurrentUser] = useState(props.currentUser);
  const [name, setName] = useState(props.name);
  const [location, setLocation] = useState(props.location);
  const [isActive, setActiveState] = useState(false);
  const [isOccupant, setOccupantState] = useState(false);
  const [queue, setQueue] = useState(props.queue); // full queue object
  const [isHost, setHostState] = useState(props.isHost);
  const [count, setCount] = useState(0);
  const [buttonState, setButtonState] = useState({ text: "", color: "" });
  const [showModal, setModalState] = useState(false);

  // check if queue is active
  useEffect(() => {
    socket.emit("isActive", queue);
    socket.on("active", (message) => {
      if (message.id === queue.id && message.isActive === true) {
        setActiveState(true);
        setButtonState({ text: "End", color: "danger" });
      } else if (message.id === queue.id && message.isActive === false) {
        setButtonState({ text: "Start", color: "primary" });
      }
    });
  }, []);

  // check if user is an occupant
  useEffect(() => {
    socket.on("isOccupant", (data) => {
      if (data.queueID === queue.id && data.username === currentUser) {
        setOccupantState(data.isOccupant);
        setButtonState({ text: "Leave", color: "danger" });
      } else if (data.queueID === queue.id && data.username !== currentUser) {
        setButtonState({ text: "Join", color: "primary" });
      }
    });
  }, []);

  // queue occupancy
  useEffect(() => {
    socket.on("count", (data) => {
      if (data.id === queue.id) {
        setCount(data.count);
      }
    });
  }, []);

  const click = () => {
    if (isActive && isHost) {
      end();
    } else if (!isActive && isHost) {
      start();
    } else if (isActive && isOccupant) {
      leave();
    } else if (isActive && !isOccupant) {
      join();
    }
  };

  // start queue
  const start = () => {
    socket.emit("start", queue.id);
  };

  // end queue
  const end = () => {
    socket.emit("end", queue);
  };

  // join queue
  const join = () => {
    socket.emit("join", { queueID: queue.id, username: currentUser });
  };

  // leave queue
  const leave = () => {
    socket.emit("leave", { queueID: queue.id, username: currentUser });
  };

  const close = () => {
    setModalState(false);
  };

  const open = () => {
    setModalState(true);
  };

  const checkin = () => {};

  const checkInButton = (
    <Button
      variant="secondary"
      size="lg"
      style={{ fontWeight: "bold" }}
      onClick={click}
      block
    >
      Chcek In User
    </Button>
  );

  return (
    <div>
      <Card
        style={{
          marginBottom: "20px",
          border: 0,
        }}
      >
        <Card.Body>
          <div onClick={open}>
            <div className="d-flex justify-content-between">
              <h4 style={{ paddingBottom: "1px", fontWeight: "500" }}>
                {name}
              </h4>
              <FiMoreHorizontal size={25} />
            </div>

            <div
              className="d-flex text-muted"
              style={{ paddingBottom: "15px" }}
            >
              <FiMapPin />
              <small style={{ marginLeft: "5px" }}>{location}</small>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div className="host-container d-flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHUzSweS0rn2IJYSRYlh07ZfaBbg8o_mx_ljxCRxF5NQhNo1j&usqp=CAU"
                alt=""
                style={{
                  verticalAlign: "middle",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              />
              <div className="align-self-center" style={{ paddingTop: "2px" }}>
                {/* <h6 className="mb-0" style={{ fontSize: "small" }}>
                Anna Bridges
              </h6> */}
                <small className="text-muted">@{username}</small>
              </div>
            </div>

            <div style={{ paddingTop: "5px" }}>
              {count}
              <OccupantIcon size={20} />
              {/* <Fragment>{isHost ? hostButton : guestButton}</Fragment> */}
              <Button
                variant={buttonState.color}
                size="sm"
                style={{ marginLeft: "10px", fontWeight: "bold" }}
                onClick={click}
              >
                {buttonState.text}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={close}>
        <Modal.Header closeButton>
          <div className="host-container d-flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHUzSweS0rn2IJYSRYlh07ZfaBbg8o_mx_ljxCRxF5NQhNo1j&usqp=CAU"
              alt=""
              style={{
                verticalAlign: "middle",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "15px",
              }}
            />
            <div className="align-self-center" style={{ paddingTop: "4px" }}>
              <h5 className="font-weight-bold">@{username}</h5>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>{name}</h2>
          <h5 className="text-muted">Location</h5>
          <p className="font-weight-bold">{location}</p>

          <h5 className="text-muted">Description</h5>
          <p className="font-weight-bold">{queue.description}</p>
          <hr />
          <Fragment>{isHost && isActive ? checkInButton : null}</Fragment>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant={buttonState.color}
            size="lg"
            style={{ fontWeight: "bold" }}
            onClick={checkin}
            block
          >
            {buttonState.text}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const OccupantIcon = styled(FiUsers)`
  margin-left: 3px;
`;

const mapStateToProps = (state) => ({
  currentUser: state.auth.user.username,
});

export default connect(mapStateToProps, null)(QueueCard);
