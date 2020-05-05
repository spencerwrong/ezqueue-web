import React, { Component, Fragment } from "react";
import { Tab, Nav, Col } from "react-bootstrap";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Queues from "../queue/Queues";
import Explore from "../explore/Explore";
import Login from "../login/LoginModal";
import Signup from "../signup/SignupModal";
import { FiHome, FiMap, FiUsers, FiUser } from "react-icons/fi";
import { connect } from "react-redux";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      auth: { isAuthenticated, loading },
    } = this.props;

    const authLinks = <Queues />;

    const guestLinks = (
      <div>
        <Signup />
        <Login />
      </div>
    );

    return (
      <div>
        <Tab.Container id="main-nav-tabs" defaultActiveKey="home">
          {/* Nav Links */}
          <div className="fixed-bottom">
            <Nav
              className="navbar navbar-light justify-content-around"
              style={{ background: "white" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="home">
                  <FiHome size={25} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="explore">
                  <FiMap size={25} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="queues">
                  <FiUsers size={25} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="profile">
                  <FiUser size={25} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* App Pages */}
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <Home />
              </Tab.Pane>
              <Tab.Pane eventKey="explore">
                <Explore />
              </Tab.Pane>
              <Tab.Pane eventKey="queues">
                {!loading && (
                  <Fragment>
                    {isAuthenticated ? authLinks : guestLinks}
                  </Fragment>
                )}
                {/* <Queues /> */}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Navbar);
