import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../login/LoginModal";
import Signup from "../signup/SignupModal";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numAlerts: null,
      numMessages: null,
      avatar: null
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {/* form */}
          {/* <form className="form-inline mr-4 d-none d-md-flex"> */}
          {/* input */}
          {/* <div className="input-group input-group-flush input-group-merge">
              <input
                type="search"
                className="form-control form-control-prepended dropdown-toggle search"
                placeholder="Search"
              />
            </div>
            <button className="btn btn-outline-primary mr-1" type="submit">
              Search
            </button>
          </form> */}
          <h3 class="my-0 mr-md-auto font-weight-bold">EZQ</h3>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">
              <Link to="/">Queues</Link>
            </a>
            <a class="p-2 text-dark" href="#">
              Insights
            </a>
          </nav>
          <Signup />
          <Login />
        </div>
      </nav>
    );
  }
}

export default Navbar;
