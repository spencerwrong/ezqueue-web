import React, { Component } from "react";
import { connect } from "react-redux";
// import { create } from "../../actions/queueActions";
import PropTypes from "prop-types";

// the form that creates a queue
class CreateQueue extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    //   location: "",
    //   description: ""
    // };
  }

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.create({
  //     name: this.state.name,
  //     location: this.state.location,
  //     description: this.state.description
  //   });
  // }

  render() {
    return (
      <div>
        <h1 className="text-center">Create Queue</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a name for your queue"
              name="name"
              // value={this.state.name}
              onChange={this.handleChange}
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
              // value={this.state.location}
              onChange={this.handleChange}
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
              // value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Start queue now
            </label>
          </div>
          <input
            className="btn btn-lg btn-block btn-dark mb-3"
            type="submit"
            value="Create"
          />
        </form>
      </div>
    );
  }
}

// CreateQueue.propTypes = {
//   create: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = state;

export default CreateQueue;
