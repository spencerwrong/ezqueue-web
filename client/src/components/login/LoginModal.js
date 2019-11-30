import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Login } from "./Login";

class LoginModal extends Component {
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
        <Button onClick={this.open}>Login</Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton />
          <Modal.Body>
            <Login />
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

export default LoginModal;
