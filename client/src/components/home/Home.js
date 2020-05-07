import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import ActiveCard from "../queue/ActiveCard";
// import QueueCard from "../queue/QueueCard";
import { getFollowed } from "../../actions/queueActions";
import { connect } from "react-redux";
import SearchBar from "../search/SearchBar";
import QueueCard from "../queue/QueueCard";
import { fetchUserQueues } from "../../actions/queueActions";

const Home = ({
  isAuthenticated,
  getFollowed,
  followedQueues,
  fetchUserQueues,
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      fetchUserQueues();
      getFollowed();
    }
  }, []);

  const followed = followedQueues.map((queue) => (
    <QueueCard
      name={queue.name}
      username={queue.username}
      title={queue.title}
      location={queue.location}
      queue={queue}
      isHost={false}
    />
  ));

  return (
    <Container fluid style={{ padding: "10px" }}>
      <PageTitle style={{ marginTop: "20px", marginBottom: "25px" }}>
        Home
      </PageTitle>
      <SearchBar />
      <SectionTitle>Active</SectionTitle>
      <ActiveCard />
      <SectionTitle style={{ marginTop: "20px" }}>Following</SectionTitle>
      <Container
        style={{
          height: "400px",
          overflowY: "scroll",
          width: "100%",
          padding: 0,
        }}
      >
        {followed}
      </Container>
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
  followedQueues: state.queue.followedQueues,
  // TODO: user active inqueues
});

// export default Home;

export default connect(mapStateToProps, { getFollowed, fetchUserQueues })(Home);
