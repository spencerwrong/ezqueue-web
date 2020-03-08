import React, { Component } from "react";
import { FiClock, FiMapPin, FiUsers } from "react-icons/fi";

export class QueueCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      date: "",
      host: null,
      title: "",
      headcount: ""
    };
  }

  render() {
    return (
      <div
        className="card shadow-sm mb-6 mb-xl-0 py-3 pl-3 pr-3 border-white"
        style={{ width: "18rem" }}
      >
        <div classname="card-body">
          <div className="text-center mb-3">
            <span className="badge badge-pill badge-success">Active</span>
          </div>
          <h5 className="card-title text-center">Queue title</h5>
          <p className="text-muted text-center">@popeyes</p>
          <hr />
          <div className="d-flex">
            <div className="mr-3">
              <FiClock />
            </div>
            <p className="mt-1">8-4-19 at 5PM</p>
          </div>
          <div className="d-flex">
            <div className="mr-3">
              <FiMapPin />
            </div>
            <p className="mt-1">Alameda, CA</p>
          </div>
          <div className="d-flex">
            <div className="mr-3">
              <FiUsers />
            </div>
            <p className="mt-1">3</p>
          </div>
          <a
            href="#"
            className="btn btn-block btn-primary font-weight-bold text-light"
          >
            Join
          </a>
        </div>
      </div>
    );
  }
}

// export default QueueCard;
