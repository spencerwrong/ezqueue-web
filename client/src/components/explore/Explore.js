import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import MarkerModal from "./MarkerModal";
import DummyQueue from "./DummyQueue";
import { connect } from "react-redux";
import { getQueues } from "../../actions/queueActions";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

const mapStyles = {
  width: "80%",
  height: "80%",
  margin: "auto",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getQueues();
    this.state = {
      queues: [
        { latitude: 37.3366067, longitude: -121.8832416 },
        { latitude: 37.3369232, longitude: -121.8817353 },
        { latitude: 37.3346139, longitude: -121.8816275 },
        { latitude: 38.8977, longitude: -77.0365 },
      ],
      // queues: this.props.queues,
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    // console.log(this.state.queues);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  displayMarkers = () => {
    return this.state.queues.map((queue, key) => {
      // console.log(queue);
      // const results = await geocodeByAddress(queue.location);
      // const coordinates = await getLatLng(results[0]);
      // console.log(coordinates);
      return (
        <Marker
          key={key}
          id={key}
          position={{
            lat: queue.latitude,
            lng: queue.longitude,
          }}
          onClick={this.open}
        />
      );
    });
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "96vh" }}>
        {/* <div>
          <h1>Explore</h1> 
        </div>  */}
        <div>
          {/* <MarkerModal /> */}

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton />
            <Modal.Body>
              <h1>
                <DummyQueue />
                {/* {this.state.queue.name} */}
              </h1>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={this.close}>
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <Map
            google={this.props.google}
            zoom={16}
            // style={mapStyles}
            initialCenter={{ lat: 37.334993, lng: -121.880996 }}
            mapElement={{ height: "90%" }}
            containerElement={{ height: "100px" }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  queues: state.queue.queues,
});

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCz5fH8IDQpcm1PU7aF-GQpAb2IuXfPcu0",
// })(MapContainer);

export default connect(mapStateToProps, { getQueues })(
  GoogleApiWrapper({
    apiKey: "AIzaSyCz5fH8IDQpcm1PU7aF-GQpAb2IuXfPcu0",
  })(MapContainer)
);
