import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Switch>
              <Route path="/" exact component={Login} />
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
