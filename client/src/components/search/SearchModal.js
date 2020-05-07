import React from "react";
import { connect } from "react-redux";
import { Tab, Nav, Col } from "react-bootstrap";
import QueueCard from "../queue/QueueCard";
import ProfileCard from "../profile/ProfileCard";
import styled from "styled-components";

const SearchModal = ({ queues, users }) => {
  const queueCards = queues.map((queue) => (
    <QueueCard
      name={queue.name}
      username={queue.username}
      title={queue.title}
      location={queue.location}
      queue={queue}
      isHost={false}
    />
  ));

  const userCards = users.map((user) => <ProfileCard user={user} />);

  return (
    <div>
      <Tab.Container id="queue-tabs" defaultActiveKey="active">
        <SearchTabs>
          <Nav justify variant="pills">
            <Nav.Item>
              <Nav.Link
                eventKey="active"
                style={{ marginLeft: "5px", marginTop: "10px" }}
              >
                Queues
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="inactive"
                style={{ marginRight: "5px", marginTop: "10px" }}
              >
                Users
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </SearchTabs>

        <Col style={{ padding: 0 }}>
          <Tab.Content>
            <Tab.Pane
              eventKey="active"
              style={{ height: "450px", overflowY: "scroll", width: "100%" }}
            >
              {queueCards}
            </Tab.Pane>
            <Tab.Pane
              eventKey="inactive"
              style={{ height: "450px", overflowY: "scroll", width: "100%" }}
            >
              {userCards}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  );
};

const isHost = () => {};

const SearchTabs = styled.div`
  background: #edeef6;
  border-radius: 5px;
  height: calc(1.6em + 1.875rem + 2px);
`;

const mapStateToProps = (state) => ({
  queues: state.search.queues,
  users: state.search.users,
});

export default connect(mapStateToProps, null)(SearchModal);
