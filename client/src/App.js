import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

// components
import Navbar from "./components/layout/Navbar";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// jwt authentication
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/authActions";
import { fetchUserQueues, getFollowed } from "./actions/queueActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(loadUser());
  store.dispatch(fetchUserQueues());
  store.dispatch(getFollowed());
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <div style={{ background: "#f5f6fa", height: "100vh" }}>
              <Navbar />
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
