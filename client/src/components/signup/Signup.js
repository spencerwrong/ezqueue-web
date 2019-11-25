import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-xl-4 my-5">
              <h1 className="display-4 text-center mb-3">Sign Up</h1>
              <form>
                {/* first name */}
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your first name"
                  />
                </div>
                {/* last name */}
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your last name"
                  />
                </div>
                {/* email */}
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                {/* password */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <button class="btn btn-lg btn-block btn-primary mb-3">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
