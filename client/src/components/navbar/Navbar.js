import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
