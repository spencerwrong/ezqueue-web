import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";
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
    let {
      auth: { isAuthenticated, loading },
      logout
    } = this.props;

    const guestLinks = (
      <div className="navbar-nav">
        <Signup />
        <Login />
      </div>
    );

    const authLinks = (
      <nav className="">
        <a className="p-2 text-dark font-weight-bold" href="#" onClick={logout}>
          Log Out
        </a>
        <a className="p-2 btn btn-primary text-dark font-weight-bold" href="#">
          Create Queue
        </a>
      </nav>
    );

    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          {/* <h3 className="my-0 mr-md-auto font-weight-bold">EZQ</h3> */}
          <a href="" className="navbar-brand pb-0">
            <h3 className="font-weight-bold">EZQ</h3>
          </a>
          <form className="rounded form-inline my-2 my-md-0 mr-md-auto">
            <input
              className="form-control font-weight-bold"
              type="text"
              placeholder="Search"
            />
          </form>
          <a className="p-2 text-dark font-weight-bold" href="#">
            <Link to="/">Queues</Link>
          </a>
          <a className="p-2 text-dark font-weight-bold" href="#">
            Insights
          </a>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
