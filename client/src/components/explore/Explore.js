import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import MarkerModal from "./MarkerModal";
import DummyQueue from "./DummyQueue";

import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

const mapStyles = {
  width: "80%",
  height: "80%",
  margin: "auto",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queues: [
        { latitude: 37.3366067, longitude: -121.8832416 },
        { latitude: 37.3369232, longitude: -121.8817353 },
        { latitude: 37.3346139, longitude: -121.8816275 },
        { latitude: 38.8977, longitude: -77.0365 },
      ],
      showModal: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  displayMarkers = () => {
    return this.state.queues.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          onClick={this.open}
        />
      );
    });
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "90vh" }}>
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
            style={mapStyles}
            initialCenter={{ lat: 37.334993, lng: -121.880996 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCz5fH8IDQpcm1PU7aF-GQpAb2IuXfPcu0",
})(MapContainer);
