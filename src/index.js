import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



ReactDOM.render(
  <React.StrictMode>

      <App />

  </React.StrictMode>,
  document.getElementById("root")
);


