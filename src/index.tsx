import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const initAll = async () => {
  ReactDOM.render(<App />, document.getElementById("app"));
};

initAll();
