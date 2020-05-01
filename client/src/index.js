import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import WebFont from "webfontloader";

import { Security } from '@okta/okta-react';
import { BrowserRouter } from 'react-router-dom';

import App from "./App";


const oktaConfig = {
  issuer: 'https://sjsuezqueue.okta.com/',
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: '0oaar8ti3h7PfrYm54x6',
};

ReactDOM.render(
  <BrowserRouter>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();


WebFont.load({
  google: {
    families: ["Heebo", "sans-serif"]
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
