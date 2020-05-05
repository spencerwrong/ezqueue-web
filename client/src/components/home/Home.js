import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Card,
  Button,
  ProgressBar,
  Container,
  InputGroup,
  FormControl,
  Row,
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import ActiveCard from "../queue/ActiveCard";
// import QueueCard from "../queue/QueueCard";
import { fetchUserQueues } from "../../actions/queueActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ fetchUserQueues, isAuthenticated }) => {
  if (isAuthenticated) {
    // fetch logged in user's queues
    fetchUserQueues();
  }

  return (
    <Container fluid style={{ padding: "10px" }}>
      <PageTitle style={{ marginTop: "20px", marginBottom: "25px" }}>
        Home
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
          placeholder="Search for queues or users..."
          style={{
            backgroundColor: "#EDEEF6",
            border: 0,
            height: "calc(1.6em + 1.875rem + 2px)",
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

      <SectionTitle>Active</SectionTitle>
      <ActiveCard />
      <SectionTitle style={{ marginTop: "20px", marginBottom: "20px" }}>
        Following
      </SectionTitle>

      {/* <Queue /> */}
    </Container>
  );
};

const PageTitle = styled.h2`
  margin-top: 6;
  font-size: calc(1.2875rem + 0.45vw);
  font-weight: bold;
`;

const SectionTitle = styled.h3`
  font-size: calc(1.2875rem + 0.45vw);
  marginbottom: 25px;
  font-weight: bold;
`;

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  // user queues
});

// export default Home;

export default connect(mapStateToProps, { fetchUserQueues })(Home);
