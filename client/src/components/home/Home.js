import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  Button,
  ProgressBar,
  Container,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            borderRadius: "10px 5px 5px 10px"
          }}
        >
          <FormControl
            placeholder="Search for queues or users..."
            style={{
              backgroundColor: "#EDEEF6",
              border: 0,
              height: "calc(1.6em + 1.875rem + 2px)",
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

        <SectionTitle>Active</SectionTitle>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Office Hours</Card.Title>
            <ProgressBar now={60} label={"6 of 10"} variant="success" />
          </Card.Body>
        </Card>
        <SectionTitle>Following</SectionTitle>
        <Card>
          <Card.Header>John Stockton</Card.Header>
          <Card.Body>
            <Card.Title>Office Hours</Card.Title>
            <Card.Text>San Jose, CA</Card.Text>
            <Button variant="dark">Join</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

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

export default Home;
