import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/authActions";
import PropTypes from "prop-types";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      fullname: "",
      email: "",
      password: ""
    };

    // const isAuthenticated = this.props.isAuthenticated;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.register({
      username: this.state.username,
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password
    });
  }

  // if(this.isAuthenticated) {
  //   return <Redirect to="/" />;
  // }

  render() {
    return (
      <div>
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a unqiue username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* email */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          {/* password */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter a password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              minLength="6"
              required
            />
          </div>
          <input
            className="btn btn-lg btn-block btn-primary mb-3"
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Signup);
