// import React, { Component } from "react";
import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { create } from "../../actions/queueActions";
import PropTypes from "prop-types";

const CreateQueue = ({ create }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
  });

  const { name, location, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    create({ name, description, location });
  };

  return (
    <Fragment>
      <h1 className="text-center">Create Queue</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a name for your queue"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the queue's location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a description for your queue"
            name="description"
            value={description}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        {/* <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Start queue now
            </label>
          </div> */}
        <input
          className="btn btn-lg btn-block btn-primary mb-3"
          type="submit"
          value="Create"
        />
      </form>
    </Fragment>
  );
};

CreateQueue.propTypes = {
  create: PropTypes.func.isRequired,
};

export default connect(null, { create })(CreateQueue);
