import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // axios
    //   .post("/api/users", {
    //     // username: this.state.username,
    //     first_name: this.state.firstName,
    //     last_name: this.state.lastName,
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(function(res) {
    //     console.log(res);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {/* first name */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a unqiue username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          {/* last name */}
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              name="lastName"
              value={this.state.lastName}
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

export default Signup;
