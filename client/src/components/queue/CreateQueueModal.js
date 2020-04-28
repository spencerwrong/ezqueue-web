import React, { Component } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { FiUsers } from "react-icons/fi";
import CreateQueue from "./CreateQueue";

class CreateQueueModal extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button
          size="lg"
          block
          style={{
            background: "#EDEEF6",
            color: "black",
            marginBottom: "20px",
            border: "0",
            fontSize: ".9375rem",
            height: "calc(1.6em + 1.875rem + 2px)",
          }}
          className="d-flex justify-content-between"
          onClick={this.open}
        >
          Create Queue
          <CreateIcon />
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton />
          <Modal.Body>
            <CreateQueue />
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={this.close}>
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const CreateIcon = styled(FiUsers)`
  margin-top: 5px;
`;

export default CreateQueueModal;
