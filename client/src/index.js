import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createRoot } from "react-dom/client";

import App from "./App";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
