import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
// import socket from "../../websocket";

// main class containing socket and queue managment features

const Queue = (props) => {
  const [response, setResponse] = useState("");
  const [hostname, setHostName] = useState(props.hostname);
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [location, setLocation] = useState(props.location);

  // set state
  // mapStateToProps

  //   useEffect(() => {
  //     socket.on("FromAPI", (data) => {
  //       setResponse(data);
  //     });
  //   }, []);

  //   useEffect(() => {
  //     socket.on("message", (data) => {
  //       setResponse(data);
  //       //   console.log(data);
  //       socket.emit("another event", { james: "im great" });
  //     });
  //   }, []);

  return (
    // <p>
    //   {/* It's <time dateTime={response}>{response}</time> */}
    //   {response}
    // </p>
    <Container fluid style={{ padding: "10px" }}>
      {/* Host Header */}
      <div className="d-flex">
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
        <div className="align-self-center">
          <h6 className="mb-0">Anna Bridges</h6>
          <small className="text-muted">@annabridges</small>
        </div>
        <hr />
      </div>
    </Container>
  );
};

export default Queue;
