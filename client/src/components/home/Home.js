import React, { Fragment } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ActiveCard from "../queue/ActiveCard";
// import QueueCard from "../queue/QueueCard";
import { fetchUserQueues } from "../../actions/queueActions";
import { connect } from "react-redux";
import SearchBar from "../search/SearchBar";

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
      <SearchBar />
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
