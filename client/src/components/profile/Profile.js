import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";
import Login from "../login/LoginModal";
import Signup from "../signup/SignupModal";
import { Card } from "react-bootstrap";

import LoginPage from './../Login'
import AdminDashboard from './../AdminDashboard';

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';




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
        <h2 className="font-bold mt-2">Profile</h2>
        {/* <button type="button" class="btn btn-dark">
          Sign In
        </button>
        <button type="button" class="btn btn-dark">
          Sign Up
        </button> */}
        <div className=""></div>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}

        <Link to="/">Home</Link>&nbsp;
        <Link to="/admin">Dashboard</Link>&nbsp;
        <Route exact path="/" component={LoginPage} />
        <SecureRoute exact path="/admin" component={AdminDashboard} />
        <Route path="/implicit/callback" componeent={ImplicitCallback} />

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
