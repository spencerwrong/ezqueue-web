import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./components/layout/Navbar";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// jwt authentication
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  store.dispatch(loadUser());
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
