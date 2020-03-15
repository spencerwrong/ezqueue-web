import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";
import Login from "../login/LoginModal";
import Signup from "../signup/SignupModal";

class Profile extends Component {
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
      </nav>
    );

    return (
      <div>
        <h4 class="mt-2">Profile</h4>
        {/* <button type="button" class="btn btn-dark">
          Sign In
        </button>
        <button type="button" class="btn btn-dark">
          Sign Up
        </button> */}
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    );
  }
}

Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Profile);
