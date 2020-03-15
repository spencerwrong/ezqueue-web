import React, { Component } from "react";
import { Tab, Tabs, Button } from "react-bootstrap";

class Queues extends Component {
  render() {
    return (
      <div>
        <h1>Queues</h1>
        <Button variant="dark" size="lg" block>
          Create Queue
        </Button>
        <Tabs defaultActiveKey="active" id="queues-tabs">
          <Tab eventKey="active" title="Active">
            empty
          </Tab>
          <Tab eventKey="past" title="Past">
            empty
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Queues;
