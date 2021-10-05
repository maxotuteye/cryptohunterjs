import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
// Components
import { Navbar } from "./components";
// Styling
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main"></div>

      <div className="footer"></div>
    </div>
  );
};

export default App;
