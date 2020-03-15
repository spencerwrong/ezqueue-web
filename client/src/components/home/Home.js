import React, { Component } from "react";
import { Card, Button, ProgressBar } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contianer-fluid py-6">
        <h2 className="font-bold mb-6">Home</h2>
        {/* Search */}
        <form className="mb-6">
          <div className="input group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for queues or users..."
              aria-label="Search for queues or users..."
            />
            {/* <div className="input-group-append">
              <Button variant="light">Search</Button>
            </div> */}
          </div>
        </form>
        <h3 className="font-bold mb-6">Active</h3>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Office Hours</Card.Title>
            <ProgressBar now={60} label={"6 of 10"} variant="success" />
          </Card.Body>
        </Card>
        <h3 className="font-bold mb-6">Following</h3>
        <Card>
          <Card.Header>John Stockton</Card.Header>
          <Card.Body>
            <Card.Title>Office Hours</Card.Title>
            <Card.Text>San Jose, CA</Card.Text>
            <Button variant="dark">Join</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
