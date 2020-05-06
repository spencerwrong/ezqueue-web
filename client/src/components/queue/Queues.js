import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Nav,
  Col,
  Row,
  Button,
  Container,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import CreateQueueModal from "./CreateQueueModal";
import QueueCard from "./QueueCard";

const Queues = ({ userQueues }) => {
  const queueCards = userQueues.map((queue) => (
    <QueueCard
      name={queue.name}
      username={queue.username}
      title={queue.title}
      location={queue.location}
      queue={queue}
      isHost={true}
    />
  ));

  return (
    <Container fluid style={{ padding: "10px" }}>
      <PageTitle style={{ marginTop: "20px", marginBottom: "25px" }}>
        Queues
      </PageTitle>

      {/* Search Bar */}
      <InputGroup
        style={{
          backgroundColor: "#EDEEF6",
          marginBottom: "20px",
          borderRadius: "10px 5px 5px 10px",
        }}
      >
        <FormControl
          placeholder="Search for your queues..."
          style={{
            backgroundColor: "#EDEEF6",
            border: 0,
            height: "calc(1.6em + 1.875rem + 2px)",
            // color: "#A6A8AE",
            paddingLeft: "20px",
          }}
        />
        <InputGroup.Append>
          <Button
            style={{
              paddingRight: "20px",
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            <div style={{ color: "#A6A8AE" }}>
              <FiSearch size={20} />
            </div>
          </Button>
        </InputGroup.Append>
      </InputGroup>

      {/* Create Queue Button and Modal */}
      <CreateQueueModal />
      <Container
        style={{
          height: "550px",
          overflowY: "scroll",
          width: "100%",
          padding: 0,
        }}
      >
        {queueCards}
      </Container>

      {/* Queue Display */}
      {/* <Tab.Container id="queue-tabs" defaultActiveKey="active">
          <QueueTabs>
            <Nav justify variant="pills">
              <Nav.Item>
                <Nav.Link
                  eventKey="active"
                  style={{ marginLeft: "5px", marginTop: "10px" }}
                >
                  Active
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="inactive"
                  style={{ marginRight: "5px", marginTop: "10px" }}
                >
                  Inactive
                </Nav.Link>
              </Nav.Item>
            </Nav>

            
          </QueueTabs>

          <Col style={{ padding: 0 }}>
            <Tab.Content>
              <Tab.Pane
                eventKey="active"
                style={{ height: "450px", overflowY: "scroll", width: "100%" }}
              >
                <QueueCard />
                <QueueCard />
                <QueueCard />
                <QueueCard />
                <QueueCard />
              </Tab.Pane>
              <Tab.Pane eventKey="inactive">empty</Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container> */}
    </Container>
  );
};

const PageTitle = styled.h2`
  margin-top: 6;
  font-size: calc(1.2875rem + 0.45vw);
  font-weight: bold;
`;

const QueueTabs = styled.div`
  background: #edeef6;
  border-radius: 5px;
  height: calc(1.6em + 1.875rem + 2px);
`;

const QueueNavItem = styled(Nav.Item)`
  display: block;
  padding: 0.6875rem 1rem;
  color: inherit;

  &:active {
    color: #212529;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
`;

const mapStateToProps = (state) => ({
  userQueues: state.queue.userQueues,
});

export default connect(mapStateToProps, null)(Queues);
// export default Queues;
