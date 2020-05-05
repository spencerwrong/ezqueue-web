import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

class DummyQueue extends Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
      <div>
        <h1>Dummy Text</h1>
      </div>
    );
  }
}

export default DummyQueue;
