import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/LoginModal";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <section className="container" className="bg-light">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              {/* <Route path="/profile/:id" component={Profile} /> */}
            </Switch>
          </section>
        </Fragment>
      </Router>
    );
  }
}

export default App;
