import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Signup from "./Signup";

class SignupModal extends Component {
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
        <button
          className="btn btn-link text-dark ml-auto font-weight-bold"
          onClick={this.open}
        >
          Sign Up
        </button>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton />
          <Modal.Body>
            <Signup />
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

export default SignupModal;
