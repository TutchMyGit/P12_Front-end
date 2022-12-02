import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import Home from "./pages/Home";
import EmployeesList from "./pages/Employees-List";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            path="Employees-List"
            element={<EmployeesList />}
          ></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);
