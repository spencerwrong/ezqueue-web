import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* form */}
          <form className="form-inline mr-4 d-none d-md-flex">
            {/* input */}
            <div className="input-group input-group-flush input-group-merge">
              <input
                type="search"
                className="form-control form-control-prepended dropdown-toggle search"
                placeholder="Search"
              />
            </div>
            <button className="btn btn-outline-primary mr-1" type="submit">
              Search
            </button>
          </form>

          <button className="btn btn-link ml-auto">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="btn btn-link" type="submit">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
