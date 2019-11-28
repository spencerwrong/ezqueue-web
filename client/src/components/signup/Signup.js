import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-xl-4 my-5">
              <h1 className="display-4 text-center mb-3">Sign Up</h1>
              <form onSubmit={this.handleSubmit}>
                {/* first name */}
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={this.state.firstName}
                    onChange={this.handleChange.bind(this)}
                  />
                </div>
                {/* last name */}
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                {/* email */}
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                {/* password */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <input
                  className="btn btn-lg btn-block btn-primary mb-3"
                  type="submit"
                  value="Sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
