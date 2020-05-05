import React, { useState, useEffect } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import styled from "styled-components";
// import socket from "../../websocket";

const ActiveCard = (props) => {
  const [avatar, setAvatar] = useState(props.avatar);
  const [position, setPosition] = useState(props.position);
  const [occupants, setOccupants] = useState(props.occupants);

  return (
    <Card style={{ marginTop: "20px", border: 0 }}>
      <Card.Body>
        <div className="d-flex">
          {/* Avatar */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHUzSweS0rn2IJYSRYlh07ZfaBbg8o_mx_ljxCRxF5NQhNo1j&usqp=CAU"
            alt=""
            style={{
              verticalAlign: "middle",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "15px",
            }}
          />
          <div className="align-self-center w-100">
            <h6 className="mb-0" style={{ paddingBottom: "6px" }}>
              Office Hours
            </h6>
            <div className="">
              <ProgressBar now={60} label={"6 of 10"} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActiveCard;
