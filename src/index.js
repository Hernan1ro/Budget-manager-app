import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./routes/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
