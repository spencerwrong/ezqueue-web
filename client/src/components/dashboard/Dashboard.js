import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Navbar from "../navbar/Navbar";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="header">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                  <h6 className="header-pretitle">Overview</h6>
                  <h1 className="header-title">Dashboard</h1>
                </div>
                <div className="col-auto">
                  <a href="" className="btn btn-primary lift">
                    Create Queue
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
