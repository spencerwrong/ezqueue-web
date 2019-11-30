import React, { Fragment, useState } from "react";
import { FormControl } from "react-bootstrap";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <h1 className="text-center">Login</h1>
      <form onSubmit={e => onSubmit(e)}>
        {/* email */}
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input
          className="btn btn-lg btn-block btn-primary mb-3"
          type="submit"
          value="Log In"
        />
      </form>
    </Fragment>
  );
};
