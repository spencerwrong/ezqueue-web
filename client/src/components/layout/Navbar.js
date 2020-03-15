import React, { Component } from "react";
import { Tab, Nav, Col } from "react-bootstrap";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Queues from "../queue/Queues";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tab.Container id="main-nav-tabs" defaultActiveKey="home">
          {/* Nav Links */}
          <div className="fixed-bottom">
            <nav className="navbar navbar-light bg-light justify-content-center">
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey="home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="explore">Explore</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="queues">Queues</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profile">Profile</Nav.Link>
                </Nav.Item>
              </Nav>
            </nav>
          </div>

          {/* App Pages */}
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="explore">
                <h1>Explore</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="queues">
                <Queues />
              </Tab.Pane>
              <Tab.Pane eventKey="profile">
                <Profile />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Tab.Container>
      </div>
    );
  }
}

export default Navbar;
