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
  Card
} from "react-bootstrap";
import styled from "styled-components";
import { FiSearch, FiUsers } from "react-icons/fi";
import CreateQueueModal from "./CreateQueueModal";

class Queues extends Component {
  render() {
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
            borderRadius: "10px 5px 5px 10px"
          }}
        >
          <FormControl
            placeholder="Search for active or past queues..."
            style={{
              backgroundColor: "#EDEEF6",
              border: 0,
              height: "calc(1.6em + 1.875rem + 2px)",
              // color: "#A6A8AE",
              paddingLeft: "20px"
            }}
          />
          <InputGroup.Append>
            <Button
              style={{
                paddingRight: "20px",
                backgroundColor: "transparent",
                border: "0"
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

        {/* Queue Display */}
        <Tab.Container id="queue-tabs" defaultActiveKey="active">
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

            {/* <Nav justify variant="pills">
              <QueueNavItem>
                <Nav.Link eventKey="active">Active</Nav.Link>
              </QueueNavItem>
              <QueueNavItem>
                <Nav.Link eventKey="inactive">Inactive</Nav.Link>
              </QueueNavItem>
            </Nav> */}
          </QueueTabs>

          <Col style={{ padding: 0 }}>
            <Tab.Content>
              <Tab.Pane
                eventKey="active"
                style={{ height: "450px", overflowY: "scroll", width: "100%" }}
              >
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
                <TestCard />
              </Tab.Pane>
              <Tab.Pane eventKey="inactive">empty</Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </Container>
    );
  }
}

const TestCard = () => {
  return (
    <div>
      <Card style={{ marginTop: "20px", border: 0 }}>
        <Card.Body>
          <div className="d-flex">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXHUzSweS0rn2IJYSRYlh07ZfaBbg8o_mx_ljxCRxF5NQhNo1j&usqp=CAU"
              alt=""
              style={{
                verticalAlign: "middle",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "15px"
              }}
            />
            <div className="align-self-center">
              <h6 className="mb-0">Anna Bridges</h6>
              <small className="text-muted">Online</small>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
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

// const Wrapper = styled.div`
// background-color: #fff;
// `;

// const QueueCard = styled(Card)`

// `

const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default Queues;
