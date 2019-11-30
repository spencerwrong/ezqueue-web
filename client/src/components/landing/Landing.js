import React, { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { QueueCard } from "../queue/QueueCard";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pinned: []
    };
  }

  render() {
    return (
      <div className="landing">
        <div className="search-bar">
          <form className="rounded shadow-sm mb-4">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text border-0 pr-1 bg-white">
                  <FiSearch />
                </span>
              </div>
              <input
                type="text"
                className="form-control border-0 px-1"
                placeholder="Find a queue..."
              />
              <div className="input-group-append">
                <span className="input-group-text border-0 py-0 pl-1 pr-3 bg-white">
                  <a className="btn btn-sm btn-primary" href="!#">
                    Search
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class="album py-3 pl-1">
          <div class="container pd-1">
            <div class="row">
              <div class="col-sm-4">
                <QueueCard />
              </div>
              <div class="col-sm-4">
                <QueueCard />
              </div>
              <div class="col-sm-4">
                <QueueCard />
              </div>
            </div>
          </div>
        </div>
        <div class="album py-3">
          <div class="container pd-1">
            <div class="row">
              <div class="col-sm-4">
                <QueueCard />
              </div>
              <div class="col-sm-4">
                <QueueCard />
              </div>
              <div class="col-sm-4">
                <QueueCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
