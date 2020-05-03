import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queues: [{ lat: 37.3366067, lng: -121.8832416 },
        { lat: 37.3369232, lng: -121.8817353 },
        { lat: 37.3346139, lng: -121.8816275 }]
    }
  }

  displayMarkers = () => {
    return this.state.queues.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
        onClick={() => console.log("Office")} />
    })
  }

  render() {
    return (
      <div>
        <div style={{width:'100vw', height:'10vh'}}>
          <h1>Explore</h1>
        </div> 
        <div style={{width: '100vw', height:'80vh'}}>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{ lat: 37.334993, lng:-121.880996 }}
          >
            {this.displayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCz5fH8IDQpcm1PU7aF-GQpAb2IuXfPcu0'
})(MapContainer);